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

function makeRequest(method, path, body = null, headers = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, TEST_BASE_URL);
    const postData = body ? JSON.stringify(body) : null;
    
    const req = http.request(url, {
      method,
      headers: {
        ...(postData ? {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        } : {}),
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
    if (postData) req.write(postData);
    req.end();
  });
}

test('HTTP API Endpoints Integration Test Suite', async (t) => {

  await t.test('GET /api/health returns 200 OK with application metadata', async () => {
    const res = await makeRequest('GET', '/api/health');
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.status, 'ok');
    assert.strictEqual(res.data.app, 'PlantCare AI');
    assert.ok(res.data.version);
    assert.ok(res.data.timestamp);
  });

  await t.test('POST /api/plant-info returns localized botanical guidelines for English & Indic languages', async () => {
    const languages = [
      { code: 'en', expectedName: 'Tulsi' },
      { code: 'ta', expectedName: 'துளசி' },
      { code: 'hi', expectedName: 'तुलसी' },
      { code: 'ml', expectedName: 'തുളസി' },
      { code: 'kn', expectedName: 'ತುಳಸಿ' }
    ];

    for (const item of languages) {
      const res = await makeRequest('POST', '/api/plant-info', {
        plantName: 'Tulsi',
        lang: item.code
      });

      assert.strictEqual(res.status, 200, `Status for ${item.code} should be 200`);
      assert.strictEqual(res.data.success, true);
      assert.ok(res.data.data.plantName.includes(item.expectedName));
      assert.ok(res.data.data.season);
      assert.ok(res.data.data.climate);
      assert.ok(res.data.data.sunlight);
      assert.ok(res.data.data.water);
      assert.ok(res.data.data.growingTips);
    }
  });

  await t.test('POST /api/chat provides grounded follow-up conversation', async () => {
    const res = await makeRequest('POST', '/api/chat', {
      message: 'How often to water?',
      context: { plantName: 'Monstera Deliciosa', status: 'healthy' },
      lang: 'en'
    });

    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.success, true);
    assert.ok(res.data.data.reply);
    assert.ok(res.data.data.reply.includes('Monstera Deliciosa') || res.data.data.reply.includes('water'));
  });

  await t.test('POST /api/analyze-plant handles plant and non-plant inputs', async () => {
    // Non-plant image string
    const resNonPlant = await makeRequest('POST', '/api/analyze-plant', {
      imageData: 'data:image/svg+xml;base64,car_nonplant_test_data',
      lang: 'en'
    });
    assert.strictEqual(resNonPlant.status, 200);
    assert.strictEqual(resNonPlant.data.success, true);
    assert.strictEqual(resNonPlant.data.data.isPlant, false);
    assert.ok(resNonPlant.data.data.message);

    // Standard plant analysis fallback
    const resPlant = await makeRequest('POST', '/api/analyze-plant', {
      imageData: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
      lang: 'ta'
    });
    assert.strictEqual(resPlant.status, 200);
    assert.strictEqual(resPlant.data.success, true);
    assert.strictEqual(resPlant.data.data.isPlant, true);
    assert.ok(resPlant.data.data.carePlan);
  });

  await t.test('Static file serving delivers HTML with UTF-8 encoding', async () => {
    const res = await makeRequest('GET', '/');
    assert.strictEqual(res.status, 200);
    assert.ok(res.raw.includes('<!DOCTYPE html>'));
    assert.ok(res.raw.includes('PlantCare'));
    assert.strictEqual(res.headers['content-type'], 'text/html; charset=utf-8');
  });

  await t.test('CORS headers are properly attached to responses', async () => {
    const res = await makeRequest('OPTIONS', '/api/health');
    assert.strictEqual(res.status, 204);
    assert.strictEqual(res.headers['access-control-allow-origin'], '*');
    assert.ok(res.headers['access-control-allow-methods'].includes('POST'));
  });
});
