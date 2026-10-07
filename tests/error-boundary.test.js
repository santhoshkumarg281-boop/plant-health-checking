import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { createAppServer } from '../server.js';

let testServer;
let TEST_PORT;
let TEST_BASE_URL;

test.before(async () => {
  testServer = createAppServer();
  await new Promise((resolve) => {
    testServer.listen(0, '127.0.0.1', () => {
      TEST_PORT = testServer.address().port;
      TEST_BASE_URL = `http://127.0.0.1:${TEST_PORT}`;
      resolve();
    });
  });
});

test.after(async () => {
  if (testServer) {
    await new Promise((resolve) => testServer.close(resolve));
  }
});

function sendRawRequest(method, path, rawPayload, headers = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, TEST_BASE_URL);
    
    const req = http.request(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(rawPayload),
        ...headers
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({ status: res.statusCode, headers: res.headers, data: json, raw: data });
        } catch {
          resolve({ status: res.statusCode, headers: res.headers, data: null, raw: data });
        }
      });
    });

    req.on('error', reject);
    req.write(rawPayload);
    req.end();
  });
}

test('Error Boundaries & Fault Tolerance Test Suite', async (t) => {

  await t.test('Server handles malformed non-JSON payload without crashing', async () => {
    const res = await sendRawRequest('POST', '/api/plant-info', '{invalid_json, missing_quotes:}');
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.success, true);
    assert.ok(res.data.data.plantName);
  });

  await t.test('Unknown language code falls back to English seamlessly', async () => {
    const res = await sendRawRequest('POST', '/api/plant-info', JSON.stringify({
      plantName: 'Tomato',
      lang: 'non_existent_lang_xyz'
    }));
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.success, true);
    assert.ok(res.data.data.plantName.includes('Tomato'));
  });

  await t.test('Empty plant query returns graceful dynamic information without exceptions', async () => {
    const res = await sendRawRequest('POST', '/api/plant-info', JSON.stringify({
      plantName: '',
      lang: 'en'
    }));
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.success, true);
  });

  await t.test('Empty chat message returns a helpful guidance response', async () => {
    const res = await sendRawRequest('POST', '/api/chat', JSON.stringify({
      message: '',
      context: null,
      lang: 'en'
    }));
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.success, true);
    assert.ok(res.data.data.reply);
  });

  await t.test('SPA fallback routes non-existing paths back to index.html without 500 error', async () => {
    const res = await new Promise((resolve, reject) => {
      http.get(`${TEST_BASE_URL}/unknown-route-for-spa`, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve({ status: res.statusCode, data }));
      }).on('error', reject);
    });

    assert.strictEqual(res.status, 200);
    assert.ok(res.data.includes('<!DOCTYPE html>'));
    assert.ok(res.data.includes('PlantCare'));
  });
});
