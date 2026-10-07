import test from 'node:test';
import assert from 'node:assert/strict';
import { TRANSLATIONS } from '../public/js/translations.js';

test('Multilingual Dictionary Validation Suite', async (t) => {
  const supportedLanguages = ['en', 'ta', 'hi', 'ml', 'kn'];
  const englishKeys = Object.keys(TRANSLATIONS.en);

  await t.test('All 5 mandatory languages must be defined', () => {
    supportedLanguages.forEach((lang) => {
      assert.ok(
        TRANSLATIONS[lang],
        `Language dictionary for '${lang}' should exist.`
      );
    });
  });

  await t.test('All languages must have 100% key parity with English without missing tokens', () => {
    supportedLanguages.forEach((lang) => {
      if (lang === 'en') return;
      const langKeys = Object.keys(TRANSLATIONS[lang]);
      
      englishKeys.forEach((key) => {
        assert.ok(
          key in TRANSLATIONS[lang],
          `Missing translation key '${key}' in language '${lang}'`
        );

        const val = TRANSLATIONS[lang][key];
        assert.strictEqual(
          typeof val,
          'string',
          `Translation for '${key}' in '${lang}' must be a string`
        );
        assert.ok(
          val.trim().length > 0,
          `Translation for '${key}' in '${lang}' must not be empty`
        );
      });

      // Also ensure no unexpected orphan keys
      assert.strictEqual(
        langKeys.length,
        englishKeys.length,
        `Language '${lang}' has ${langKeys.length} keys, expected ${englishKeys.length}`
      );
    });
  });

  await t.test('Critical UI strings must be localized with non-Latin characters for Indic scripts', () => {
    // Tamil
    assert.match(TRANSLATIONS.ta.scanCardTitle, /[\u0B80-\u0BFF]/, 'Tamil title should contain Tamil Unicode characters');
    // Hindi
    assert.match(TRANSLATIONS.hi.scanCardTitle, /[\u0900-\u097F]/, 'Hindi title should contain Devanagari Unicode characters');
    // Malayalam
    assert.match(TRANSLATIONS.ml.scanCardTitle, /[\u0D00-\u0D7F]/, 'Malayalam title should contain Malayalam Unicode characters');
    // Kannada
    assert.match(TRANSLATIONS.kn.scanCardTitle, /[\u0C80-\u0CFF]/, 'Kannada title should contain Kannada Unicode characters');
  });
});
