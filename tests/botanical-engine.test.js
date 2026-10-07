import test from 'node:test';
import assert from 'node:assert/strict';
import { BOTANICAL_DATABASE, SAMPLE_PRESETS } from '../public/js/plants-data.js';
import { aiService } from '../public/js/ai-service.js';

test('Botanical Database & Client AI Engine Test Suite', async (t) => {
  const supportedLangs = ['en', 'ta', 'hi', 'ml', 'kn'];

  await t.test('Sample presets must contain valid properties and point to existing assets', () => {
    assert.ok(Array.isArray(SAMPLE_PRESETS), 'SAMPLE_PRESETS should be an array');
    assert.ok(SAMPLE_PRESETS.length >= 5, 'Should have at least 5 presets');

    SAMPLE_PRESETS.forEach((preset) => {
      assert.ok(preset.id, 'Preset must have an ID');
      assert.ok(preset.name, 'Preset must have a name');
      assert.ok(preset.image, 'Preset must have an image path');
      assert.ok(preset.type === 'plant' || preset.type === 'non-plant', 'Preset type must be plant or non-plant');
      if (preset.type === 'plant') {
        assert.ok(['healthy', 'needs_attention', 'unhealthy'].includes(preset.status), 'Valid health status');
        assert.ok(preset.confidence >= 50 && preset.confidence <= 100, 'Confidence between 50 and 100');
      } else {
        assert.strictEqual(preset.isPlant, false, 'Non-plant preset must flag isPlant as false');
      }
    });
  });

  await t.test('Botanical Database entries must have full multilingual season & care coverage', () => {
    const speciesKeys = Object.keys(BOTANICAL_DATABASE);
    assert.ok(speciesKeys.length >= 4, 'Database should contain core botanical entries');

    speciesKeys.forEach((key) => {
      const entry = BOTANICAL_DATABASE[key];
      assert.ok(entry.botanicalName, `Species ${key} must have a scientific botanical name`);
      
      supportedLangs.forEach((lang) => {
        assert.ok(entry.names[lang], `Species ${key} must have name in ${lang}`);
        assert.ok(entry.season[lang], `Species ${key} must have seasonal info in ${lang}`);
        assert.ok(entry.season[lang].season, `Season string in ${lang}`);
        assert.ok(entry.season[lang].months, `Months string in ${lang}`);
        assert.ok(entry.season[lang].climate, `Climate string in ${lang}`);
        assert.ok(entry.season[lang].sunlight, `Sunlight string in ${lang}`);
        assert.ok(entry.season[lang].water, `Water string in ${lang}`);
        assert.ok(entry.season[lang].growingTips, `Growing tips string in ${lang}`);
      });
    });
  });

  await t.test('AI Service local analysis matches samples correctly', async () => {
    const result = await aiService.analyzePlantImage({
      imageData: 'assets/samples/monstera-healthy.svg',
      sampleId: 'monstera-healthy',
      lang: 'en'
    });

    assert.strictEqual(result.isPlant, true);
    assert.strictEqual(result.status, 'healthy');
    assert.ok(result.plantName.includes('Monstera'));
    assert.ok(result.carePlan.wateringAdvice);
    assert.ok(result.carePlan.sunlightAdvice);
  });

  await t.test('AI Service rejects non-plant sample properly', async () => {
    const result = await aiService.analyzePlantImage({
      imageData: 'assets/samples/car-nonplant.svg',
      sampleId: 'car-nonplant',
      lang: 'en'
    });

    assert.strictEqual(result.isPlant, false);
    assert.ok(result.message.includes('Plant Not Detected'));
  });

  await t.test('AI Service plant lookup generates dynamic info for novel plants', async () => {
    const result = await aiService.getPlantInfoByName('Lavender', 'ta');
    assert.strictEqual(result.plantName, 'Lavender');
    assert.ok(result.season);
    assert.ok(result.climate);
  });

  await t.test('AI Service chat assistant contextual responses respond in target language', async () => {
    const resultTa = await aiService.askChatAssistant({
      message: 'இலைகள் ஏன் மஞ்சளாக மாறுகின்றன?',
      context: { plantName: 'ரோஜா', status: 'needs_attention' },
      lang: 'ta'
    });

    assert.ok(resultTa.length > 10, 'Chat response should not be empty');
    assert.match(resultTa, /[\u0B80-\u0BFF]/, 'Response should contain Tamil text');
  });
});
