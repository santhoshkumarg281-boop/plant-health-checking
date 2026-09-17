/**
 * PlantCare AI - Main Application Controller
 * Handles routing, view switching, multilingual state, image uploads,
 * camera capture, AI analysis, health report rendering, care plans, and contextual AI chat.
 */

import { TRANSLATIONS } from './translations.js';
import { aiService } from './ai-service.js';
import { SAMPLE_PRESETS } from './plants-data.js';

class PlantCareApp {
  constructor() {
    this.currentLang = localStorage.getItem('plantcare_lang') || 'en';
    this.currentView = 'home';
    this.selectedImageData = null;
    this.selectedSampleId = null;
    this.analysisResult = null;
    this.plantInfoResult = null;
    this.chatHistory = [];

    this.init();
  }

  init() {
    this.cacheDOM();
    this.bindEvents();
    this.setLanguage(this.currentLang);
    this.switchView('home');
    this.initSamplePlants();
  }

  cacheDOM() {
    // Top Navigation & Header
    this.langSelect = document.getElementById('langSelect');
    this.navHomeBtn = document.getElementById('navHomeBtn');
    this.settingsBtn = document.getElementById('settingsBtn');
    this.settingsModal = document.getElementById('settingsModal');
    this.closeSettingsBtn = document.getElementById('closeSettingsBtn');
    this.apiKeyInput = document.getElementById('apiKeyInput');
    this.saveApiKeyBtn = document.getElementById('saveApiKeyBtn');
    this.clearApiKeyBtn = document.getElementById('clearApiKeyBtn');

    // Views
    this.views = {
      home: document.getElementById('view-home'),
      scan: document.getElementById('view-scan'),
      analyzing: document.getElementById('view-analyzing'),
      report: document.getElementById('view-report'),
      plantNameSearch: document.getElementById('view-plant-name-search'),
      plantNameResult: document.getElementById('view-plant-name-result'),
      nonPlantError: document.getElementById('view-non-plant-error')
    };

    // Home Actions
    this.homeScanCard = document.getElementById('homeScanCard');
    this.homeNameCard = document.getElementById('homeNameCard');

    // Scan View Elements
    this.dropZone = document.getElementById('dropZone');
    this.fileInput = document.getElementById('fileInput');
    this.cameraInput = document.getElementById('cameraInput');
    this.browseBtn = document.getElementById('browseBtn');
    this.cameraBtn = document.getElementById('cameraBtn');
    this.sampleGrid = document.getElementById('sampleGrid');
    this.previewContainer = document.getElementById('previewContainer');
    this.previewImg = document.getElementById('previewImg');
    this.changePhotoBtn = document.getElementById('changePhotoBtn');
    this.removePhotoBtn = document.getElementById('removePhotoBtn');
    this.startAnalyzeBtn = document.getElementById('startAnalyzeBtn');

    // Analyzing View Elements
    this.scanStepText = document.getElementById('scanStepText');
    this.scanProgressBar = document.getElementById('scanProgressBar');

    // Plant Health Report Elements
    this.reportPlantImg = document.getElementById('reportPlantImg');
    this.reportPlantName = document.getElementById('reportPlantName');
    this.reportBotanicalName = document.getElementById('reportBotanicalName');
    this.reportHealthBadge = document.getElementById('reportHealthBadge');
    this.reportConfidenceBadge = document.getElementById('reportConfidenceBadge');
    this.reportSymptoms = document.getElementById('reportSymptoms');
    this.reportDisease = document.getElementById('reportDisease');
    this.reportExplanation = document.getElementById('reportExplanation');
    this.reportDisclaimer = document.getElementById('reportDisclaimer');

    // Care Plan Elements
    this.careWatering = document.getElementById('careWatering');
    this.careSunlight = document.getElementById('careSunlight');
    this.careSoil = document.getElementById('careSoil');
    this.careTips = document.getElementById('careTips');
    this.reportScanAnotherBtn = document.getElementById('reportScanAnotherBtn');
    this.reportBackHomeBtn = document.getElementById('reportBackHomeBtn');

    // AI Chat Elements
    this.chatMessages = document.getElementById('chatMessages');
    this.chatInput = document.getElementById('chatInput');
    this.chatSendBtn = document.getElementById('chatSendBtn');
    this.suggestedQuestionsContainer = document.getElementById('suggestedQuestionsContainer');
    this.chatContextBadge = document.getElementById('chatContextBadge');

    // Plant Name Search Elements
    this.plantNameInput = document.getElementById('plantNameInput');
    this.searchPlantSubmitBtn = document.getElementById('searchPlantSubmitBtn');
    this.popularChipsContainer = document.getElementById('popularChipsContainer');
    this.plantNameBackHomeBtn = document.getElementById('plantNameBackHomeBtn');

    // Plant Name Result Elements
    this.resPlantName = document.getElementById('resPlantName');
    this.resBotanicalName = document.getElementById('resBotanicalName');
    this.resSeason = document.getElementById('resSeason');
    this.resMonths = document.getElementById('resMonths');
    this.resClimate = document.getElementById('resClimate');
    this.resSunlight = document.getElementById('resSunlight');
    this.resWater = document.getElementById('resWater');
    this.resGrowingTips = document.getElementById('resGrowingTips');
    this.resAskAIBtn = document.getElementById('resAskAIBtn');
    this.resSearchAnotherBtn = document.getElementById('resSearchAnotherBtn');

    // Non Plant Error View Elements
    this.nonPlantTryAgainBtn = document.getElementById('nonPlantTryAgainBtn');
    this.nonPlantHomeBtn = document.getElementById('nonPlantHomeBtn');
    this.nonPlantMsg = document.getElementById('nonPlantMsg');

    // Toast Container
    this.toastContainer = document.getElementById('toastContainer');
  }

  bindEvents() {
    // Language Switcher
    if (this.langSelect) {
      this.langSelect.value = this.currentLang;
      this.langSelect.addEventListener('change', (e) => {
        this.setLanguage(e.target.value);
      });
    }

    // Home Nav
    if (this.navHomeBtn) {
      this.navHomeBtn.addEventListener('click', () => this.switchView('home'));
    }

    // Settings Modal
    if (this.settingsBtn && this.settingsModal) {
      this.settingsBtn.addEventListener('click', () => {
        this.apiKeyInput.value = aiService.getApiKey();
        this.settingsModal.classList.remove('hidden');
      });
    }

    if (this.closeSettingsBtn && this.settingsModal) {
      this.closeSettingsBtn.addEventListener('click', () => {
        this.settingsModal.classList.add('hidden');
      });
    }

    if (this.saveApiKeyBtn) {
      this.saveApiKeyBtn.addEventListener('click', () => {
        aiService.setApiKey(this.apiKeyInput.value);
        this.showToast(this.t('copiedToClipboard') || 'Settings saved!');
        this.settingsModal.classList.add('hidden');
      });
    }

    if (this.clearApiKeyBtn) {
      this.clearApiKeyBtn.addEventListener('click', () => {
        this.apiKeyInput.value = '';
        aiService.setApiKey('');
        this.showToast('API Key cleared. Using built-in botanical AI engine.');
      });
    }

    // Home Cards
    if (this.homeScanCard) {
      this.homeScanCard.addEventListener('click', () => this.switchView('scan'));
    }
    if (this.homeNameCard) {
      this.homeNameCard.addEventListener('click', () => this.switchView('plantNameSearch'));
    }

    // File Upload & Drag-Drop
    if (this.browseBtn && this.fileInput) {
      this.browseBtn.addEventListener('click', () => this.fileInput.click());
      this.fileInput.addEventListener('change', (e) => this.handleFileSelect(e.target.files));
    }

    if (this.cameraBtn && this.cameraInput) {
      this.cameraBtn.addEventListener('click', () => this.cameraInput.click());
      this.cameraInput.addEventListener('change', (e) => this.handleFileSelect(e.target.files));
    }

    if (this.dropZone) {
      ['dragenter', 'dragover'].forEach(eventName => {
        this.dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          this.dropZone.classList.add('drag-over');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        this.dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          this.dropZone.classList.remove('drag-over');
        });
      });

      this.dropZone.addEventListener('drop', (e) => {
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          this.handleFileSelect(e.dataTransfer.files);
        }
      });
    }

    // Photo Preview Actions
    if (this.changePhotoBtn) {
      this.changePhotoBtn.addEventListener('click', () => this.fileInput.click());
    }
    if (this.removePhotoBtn) {
      this.removePhotoBtn.addEventListener('click', () => this.clearSelectedPhoto());
    }
    if (this.startAnalyzeBtn) {
      this.startAnalyzeBtn.addEventListener('click', () => this.startAnalysis());
    }

    // Report Actions
    if (this.reportScanAnotherBtn) {
      this.reportScanAnotherBtn.addEventListener('click', () => {
        this.clearSelectedPhoto();
        this.switchView('scan');
      });
    }
    if (this.reportBackHomeBtn) {
      this.reportBackHomeBtn.addEventListener('click', () => this.switchView('home'));
    }

    // Chat Actions
    if (this.chatSendBtn) {
      this.chatSendBtn.addEventListener('click', () => this.sendChatMessage());
    }
    if (this.chatInput) {
      this.chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.sendChatMessage();
        }
      });
    }

    // Plant Name Search Actions
    if (this.searchPlantSubmitBtn) {
      this.searchPlantSubmitBtn.addEventListener('click', () => this.searchPlantByName());
    }
    if (this.plantNameInput) {
      this.plantNameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.searchPlantByName();
        }
      });
    }
    if (this.plantNameBackHomeBtn) {
      this.plantNameBackHomeBtn.addEventListener('click', () => this.switchView('home'));
    }

    // Plant Name Result Actions
    if (this.resSearchAnotherBtn) {
      this.resSearchAnotherBtn.addEventListener('click', () => {
        this.plantNameInput.value = '';
        this.switchView('plantNameSearch');
      });
    }
    if (this.resAskAIBtn) {
      this.resAskAIBtn.addEventListener('click', () => {
        if (this.plantInfoResult) {
          this.analysisResult = {
            isPlant: true,
            plantName: this.plantInfoResult.plantName,
            status: 'healthy',
            symptoms: 'N/A (General botanical inquiry)',
            disease: 'N/A',
            carePlan: {
              wateringAdvice: this.plantInfoResult.water,
              sunlightAdvice: this.plantInfoResult.sunlight,
              soilAdvice: this.plantInfoResult.growingTips,
              careTips: this.plantInfoResult.climate
            }
          };
          this.renderHealthReport(this.analysisResult);
          this.switchView('report');
          // Smooth scroll to chat section
          const chatEl = document.getElementById('chat-section');
          if (chatEl) {
            chatEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }

    // Non-Plant Actions
    if (this.nonPlantTryAgainBtn) {
      this.nonPlantTryAgainBtn.addEventListener('click', () => {
        this.clearSelectedPhoto();
        this.switchView('scan');
      });
    }
    if (this.nonPlantHomeBtn) {
      this.nonPlantHomeBtn.addEventListener('click', () => this.switchView('home'));
    }
  }

  // ==========================================
  // VIEW MANAGEMENT
  // ==========================================

  switchView(viewName) {
    this.currentView = viewName;

    Object.keys(this.views).forEach(key => {
      if (this.views[key]) {
        this.views[key].classList.add('hidden');
      }
    });

    if (this.views[viewName]) {
      this.views[viewName].classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update active nav styling
    if (this.navHomeBtn) {
      if (viewName === 'home') {
        this.navHomeBtn.classList.add('active');
      } else {
        this.navHomeBtn.classList.remove('active');
      }
    }
  }

  // ==========================================
  // MULTILINGUAL TRANSLATION SYSTEM
  // ==========================================

  setLanguage(langCode) {
    if (!TRANSLATIONS[langCode]) {
      langCode = 'en';
    }
    this.currentLang = langCode;
    localStorage.setItem('plantcare_lang', langCode);

    if (this.langSelect) {
      this.langSelect.value = langCode;
    }

    // Apply translations to all DOM elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[langCode][key]) {
        el.textContent = TRANSLATIONS[langCode][key];
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (TRANSLATIONS[langCode][key]) {
        el.setAttribute('placeholder', TRANSLATIONS[langCode][key]);
      }
    });

    // Re-render dynamic active components
    this.renderSuggestedQuestions();
    this.renderPopularPlantChips();

    // If report or plant info is currently rendered, refresh localized content
    if (this.analysisResult && this.currentView === 'report') {
      this.renderHealthReport(this.analysisResult);
    }
    if (this.plantInfoResult && this.currentView === 'plantNameResult') {
      this.renderPlantInfo(this.plantInfoResult);
    }
  }

  t(key) {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || key;
  }

  // ==========================================
  // SAMPLE PRESETS & PLANT CHIPS
  // ==========================================

  initSamplePlants() {
    if (!this.sampleGrid) return;
    this.sampleGrid.innerHTML = '';

    SAMPLE_PRESETS.forEach(sample => {
      const card = document.createElement('div');
      card.className = 'sample-card';
      card.innerHTML = `
        <div class="sample-thumb">
          <img src="${sample.image}" alt="${sample.name}" />
        </div>
        <div class="sample-info">
          <span class="sample-name">${sample.name}</span>
          <span class="sample-badge ${sample.type === 'non-plant' ? 'badge-gray' : (sample.status === 'healthy' ? 'badge-green' : 'badge-amber')}">
            ${sample.type === 'non-plant' ? '🚫 Test' : (sample.status === 'healthy' ? '✅' : '⚠️')}
          </span>
        </div>
      `;

      card.addEventListener('click', () => {
        this.selectSample(sample);
      });

      this.sampleGrid.appendChild(card);
    });
  }

  selectSample(sample) {
    this.selectedSampleId = sample.id;
    this.selectedImageData = sample.image;
    this.showImagePreview(sample.image);
    this.showToast(`Selected ${sample.name}`);
  }

  renderPopularPlantChips() {
    if (!this.popularChipsContainer) return;
    this.popularChipsContainer.innerHTML = '';

    const popular = [
      { name: 'Monstera', label: { en: '🌿 Monstera', ta: '🌿 மான்ஸ்டெரா', hi: '🌿 मॉन्स्टेरा', ml: '🌿 മോൺസ്റ്റെറ', kn: '🌿 ಮಾನ್‌ಸ್ಟೆರಾ' } },
      { name: 'Tulsi', label: { en: '🌱 Tulsi (Holy Basil)', ta: '🌱 துளசி', hi: '🌱 तुलसी', ml: '🌱 തുളസി', kn: '🌱 ತುಳಸಿ' } },
      { name: 'Tomato', label: { en: '🍅 Tomato', ta: '🍅 தக்காளி', hi: '🍅 टमाटर', ml: '🍅 തക്കാളി', kn: '🍅 ಟೊಮೇಟೊ' } },
      { name: 'Rose', label: { en: '🌹 Rose', ta: '🌹 ரோஜா', hi: '🌹 गुलाब', ml: '🌹 റോസ്', kn: '🌹 ಗುಲಾಬಿ' } },
      { name: 'Snake Plant', label: { en: '🪴 Snake Plant', ta: '🪴 பாம்பு செடி', hi: '🪴 स्नेक प्लांट', ml: '🪴 സ്നേക്ക് പ്ലാന്റ്', kn: '🪴 ಸ್ಯಾನ್ಸೆವೇರಿಯಾ' } },
      { name: 'Aloe Vera', label: { en: '🌵 Aloe Vera', ta: '🌵 கற்றாழை', hi: '🌵 एलोवेरा', ml: '🌵 കറ്റാർവാഴ', kn: '🌵 ಲೋಳೆಸರ' } },
      { name: 'Money Plant', label: { en: '🍃 Money Plant', ta: '🍃 மணி பிளான்ட்', hi: '🍃 मनी प्लांट', ml: '🍃 മണി പ്ലാന്റ്', kn: '🍃 ಮನಿ ಪ್ಲಾಂಟ್' } },
      { name: 'Neem', label: { en: '🌳 Neem', ta: '🌳 வேப்ப மரம்', hi: '🌳 नीम', ml: '🌳 വേപ്പ്', kn: '🌳 ಬೇವಿನ ಮರ' } },
    ];

    popular.forEach(p => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'plant-chip';
      chip.textContent = p.label[this.currentLang] || p.label.en;
      chip.addEventListener('click', () => {
        this.plantNameInput.value = p.name;
        this.searchPlantByName(p.name);
      });
      this.popularChipsContainer.appendChild(chip);
    });
  }

  // ==========================================
  // IMAGE SELECTION & PREVIEW
  // ==========================================

  handleFileSelect(files) {
    if (!files || files.length === 0) return;

    const file = files[0];
    if (!file.type.startsWith('image/')) {
      this.showToast(this.t('errNoImage') || 'Please select an image file', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedImageData = e.target.result;
      this.selectedSampleId = null;
      this.showImagePreview(this.selectedImageData);
    };
    reader.readAsDataURL(file);
  }

  showImagePreview(src) {
    if (this.previewImg && this.previewContainer) {
      this.previewImg.src = src;
      this.previewContainer.classList.remove('hidden');
      if (this.dropZone) {
        this.dropZone.classList.add('hidden');
      }
      this.previewContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  clearSelectedPhoto() {
    this.selectedImageData = null;
    this.selectedSampleId = null;
    if (this.fileInput) this.fileInput.value = '';
    if (this.cameraInput) this.cameraInput.value = '';
    if (this.previewImg) this.previewImg.src = '';
    if (this.previewContainer) this.previewContainer.classList.add('hidden');
    if (this.dropZone) this.dropZone.classList.remove('hidden');
  }

  // ==========================================
  // SCAN & AI ANALYSIS
  // ==========================================

  async startAnalysis() {
    if (!this.selectedImageData) {
      this.showToast(this.t('errNoImage'), 'error');
      return;
    }

    this.switchView('analyzing');
    this.animateScanProgress();

    try {
      const result = await aiService.analyzePlantImage({
        imageData: this.selectedImageData,
        sampleId: this.selectedSampleId,
        lang: this.currentLang
      });

      // Artificial short delay to allow beautiful scan animations to complete
      setTimeout(() => {
        if (!result || result.isPlant === false) {
          // Non-plant detected
          if (this.nonPlantMsg) {
            this.nonPlantMsg.textContent = result?.message || this.t('nonPlantMsg');
          }
          this.switchView('nonPlantError');
        } else {
          this.analysisResult = result;
          this.renderHealthReport(result);
          this.switchView('report');
        }
      }, 2200);

    } catch (err) {
      console.error("AI Analysis Error:", err);
      setTimeout(() => {
        this.showToast(this.t('errAnalysisFailed'), 'error');
        this.switchView('scan');
      }, 1000);
    }
  }

  animateScanProgress() {
    if (!this.scanProgressBar || !this.scanStepText) return;

    this.scanProgressBar.style.width = '0%';
    this.scanStepText.textContent = this.t('step1');

    setTimeout(() => {
      this.scanProgressBar.style.width = '45%';
      this.scanStepText.textContent = this.t('step2');
    }, 800);

    setTimeout(() => {
      this.scanProgressBar.style.width = '85%';
      this.scanStepText.textContent = this.t('step3');
    }, 1600);

    setTimeout(() => {
      this.scanProgressBar.style.width = '100%';
    }, 2100);
  }

  // ==========================================
  // RENDER HEALTH REPORT & CARE PLAN
  // ==========================================

  renderHealthReport(data) {
    if (!data) return;

    // Image
    if (this.reportPlantImg && this.selectedImageData) {
      this.reportPlantImg.src = this.selectedImageData;
    }

    // Name & Botanical Classification
    if (this.reportPlantName) {
      this.reportPlantName.textContent = data.plantName || 'Unknown Plant';
    }
    if (this.reportBotanicalName) {
      this.reportBotanicalName.textContent = data.botanicalName ? `(${data.botanicalName})` : '';
    }

    // Health Status Badge
    if (this.reportHealthBadge) {
      this.reportHealthBadge.className = 'status-pill';
      if (data.status === 'healthy') {
        this.reportHealthBadge.classList.add('status-healthy');
        this.reportHealthBadge.innerHTML = `✅ ${this.t('statusHealthy')}`;
      } else if (data.status === 'needs_attention') {
        this.reportHealthBadge.classList.add('status-attention');
        this.reportHealthBadge.innerHTML = `⚠️ ${this.t('statusNeedsAttention')}`;
      } else {
        this.reportHealthBadge.classList.add('status-unhealthy');
        this.reportHealthBadge.innerHTML = `❗ ${this.t('statusUnhealthy')}`;
      }
    }

    // Confidence Score
    if (this.reportConfidenceBadge) {
      const score = data.confidence || 92;
      this.reportConfidenceBadge.innerHTML = `📊 ${this.t('confidenceLabel')}: <strong>${score}%</strong>`;
    }

    // Symptoms, Disease, Explanation
    if (this.reportSymptoms) {
      this.reportSymptoms.textContent = data.symptoms || 'None observed.';
    }
    if (this.reportDisease) {
      this.reportDisease.textContent = data.disease || 'None (Healthy)';
    }
    if (this.reportExplanation) {
      this.reportExplanation.textContent = data.explanation || '';
    }
    if (this.reportDisclaimer) {
      this.reportDisclaimer.textContent = this.t('disclaimer');
    }

    // Personalized Care Plan
    const care = data.carePlan || {};
    if (this.careWatering) this.careWatering.textContent = care.wateringAdvice || 'Water when topsoil dries.';
    if (this.careSunlight) this.careSunlight.textContent = care.sunlightAdvice || 'Bright indirect light.';
    if (this.careSoil) this.careSoil.textContent = care.soilAdvice || 'Well-draining rich potting soil.';
    if (this.careTips) this.careTips.textContent = care.careTips || 'Prune dead leaves regularly.';

    // Setup Chat Context
    this.setupChatSession(data);
  }

  // ==========================================
  // ASK PLANTCARE AI (CONTEXTUAL CHAT)
  // ==========================================

  setupChatSession(reportData) {
    this.chatHistory = [];
    if (this.chatMessages) {
      this.chatMessages.innerHTML = '';
      // Welcome assistant message
      const welcomeMsg = this.generateWelcomeChatMessage(reportData);
      this.appendChatMessage('assistant', welcomeMsg);
    }

    if (this.chatContextBadge) {
      this.chatContextBadge.textContent = `${this.t('chatContextPill')}: ${reportData.plantName} (${reportData.status})`;
    }

    this.renderSuggestedQuestions();
  }

  generateWelcomeChatMessage(data) {
    const pName = data.plantName || 'Plant';
    const welcomes = {
      en: `Hello! I'm PlantCare AI. I have analyzed your **${pName}**. How can I help you care for it today? Feel free to ask about watering schedules, remedies, or lighting!`,
      ta: `வணக்கம்! நான் PlantCare AI. உங்கள் **${pName}** செடியின் ஆரோக்கிய அறிக்கையை ஆய்வு செய்துள்ளேன். இதன் பராமரிப்பு அல்லது நோய் தீர்வு பற்றி ஏதேனும் கேட்க விரும்புகிறீர்களா?`,
      hi: `नमस्ते! मैं PlantCare AI हूँ। मैंने आपके **${pName}** का विश्लेषण कर लिया है। आप पानी, धूप, खाद या उपचार से जुड़ा कोई भी सवाल पूछ सकते हैं!`,
      ml: `നമസ്കാരം! ഞാൻ PlantCare AI. നിങ്ങളുടെ **${pName}** ചെടിയെക്കുറിച്ചുള്ള വിശകലനം പൂർത്തിയായി. പരിചരണത്തെക്കുറിച്ച് എന്ത് സംശയങ്ങളും എന്നോട് ചോദിക്കാം.`,
      kn: `ನಮಸ್ಕಾರ! ನಾನು PlantCare AI. ನಿಮ್ಮ **${pName}** ಸಸ್ಯದ ವಿಶ್ಲೇಷಣೆ ಸಿದ್ಧವಾಗಿದೆ. ನೀರು, ಗೊಬ್ಬರ ಅಥವಾ ರೋಗ ಪರಿಹಾರಗಳ ಬಗ್ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ.`
    };
    return welcomes[this.currentLang] || welcomes.en;
  }

  renderSuggestedQuestions() {
    if (!this.suggestedQuestionsContainer) return;
    this.suggestedQuestionsContainer.innerHTML = '';

    const questions = [
      this.t('sq1'),
      this.t('sq2'),
      this.t('sq3'),
      this.t('sq4'),
    ];

    questions.forEach(q => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sq-chip';
      btn.textContent = q;
      btn.addEventListener('click', () => {
        if (this.chatInput) {
          this.chatInput.value = q;
          this.sendChatMessage();
        }
      });
      this.suggestedQuestionsContainer.appendChild(btn);
    });
  }

  async sendChatMessage() {
    if (!this.chatInput) return;
    const text = (this.chatInput.value || '').trim();
    if (!text) {
      this.showToast(this.t('errEmptyChat'), 'error');
      return;
    }

    // Append user message
    this.appendChatMessage('user', text);
    this.chatInput.value = '';

    // Show typing indicator
    const typingId = this.showTypingIndicator();

    try {
      const reply = await aiService.askChatAssistant({
        message: text,
        context: this.analysisResult,
        chatHistory: this.chatHistory,
        lang: this.currentLang
      });

      this.removeTypingIndicator(typingId);
      this.appendChatMessage('assistant', reply);

    } catch (err) {
      this.removeTypingIndicator(typingId);
      this.appendChatMessage('assistant', this.t('errNetwork'));
    }
  }

  appendChatMessage(role, content) {
    if (!this.chatMessages) return;

    this.chatHistory.push({ role, content });

    const msgEl = document.createElement('div');
    msgEl.className = `chat-bubble ${role === 'user' ? 'bubble-user' : 'bubble-assistant'}`;

    const icon = role === 'user' ? '👤' : '🌱🤖';
    msgEl.innerHTML = `
      <div class="bubble-header">
        <span class="bubble-avatar">${icon}</span>
        <span class="bubble-author">${role === 'user' ? 'You' : 'PlantCare AI'}</span>
      </div>
      <div class="bubble-content">${this.formatChatMarkdown(content)}</div>
    `;

    this.chatMessages.appendChild(msgEl);
    this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
  }

  showTypingIndicator() {
    if (!this.chatMessages) return null;
    const id = 'typing-' + Date.now();
    const typingEl = document.createElement('div');
    typingEl.id = id;
    typingEl.className = 'chat-bubble bubble-assistant bubble-typing';
    typingEl.innerHTML = `
      <div class="typing-dots">
        <span></span><span></span><span></span>
      </div>
      <span class="typing-text">${this.t('chatThinking')}</span>
    `;
    this.chatMessages.appendChild(typingEl);
    this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    return id;
  }

  removeTypingIndicator(id) {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  formatChatMarkdown(text) {
    if (!text) return '';
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>');
  }

  // ==========================================
  // ENTER YOUR PLANT NAME & SEASONAL GUIDE
  // ==========================================

  async searchPlantByName(overrideName) {
    const name = overrideName || (this.plantNameInput ? this.plantNameInput.value.trim() : '');
    if (!name) {
      this.showToast(this.t('errEmptyName'), 'error');
      return;
    }

    try {
      const data = await aiService.getPlantInfoByName(name, this.currentLang);
      this.plantInfoResult = data;
      this.renderPlantInfo(data);
      this.switchView('plantNameResult');
    } catch (err) {
      console.error("Plant search error:", err);
      this.showToast(this.t('errAnalysisFailed'), 'error');
    }
  }

  renderPlantInfo(data) {
    if (!data) return;

    if (this.resPlantName) this.resPlantName.textContent = data.plantName || 'Plant';
    if (this.resBotanicalName) this.resBotanicalName.textContent = data.botanicalName ? `(${data.botanicalName})` : '';
    if (this.resSeason) this.resSeason.textContent = data.season || 'Spring / Monsoon';
    if (this.resMonths) this.resMonths.textContent = data.months || 'March - August';
    if (this.resClimate) this.resClimate.textContent = data.climate || 'Tropical, 20°C - 32°C';
    if (this.resSunlight) this.resSunlight.textContent = data.sunlight || 'Bright indirect light';
    if (this.resWater) this.resWater.textContent = data.water || 'Water when topsoil dries';
    if (this.resGrowingTips) this.resGrowingTips.textContent = data.growingTips || 'Fertilize monthly.';
  }

  // ==========================================
  // TOAST NOTIFICATIONS
  // ==========================================

  showToast(message, type = 'info') {
    if (!this.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    this.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('toast-show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('toast-show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

// Instantiate app on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.plantCareApp = new PlantCareApp();
});
