/**
 * PlantCare AI - Multilingual Localization Dictionary
 * Supported Languages:
 * - English (en)
 * - Tamil / தமிழ் (ta)
 * - Hindi / हिन्दी (hi)
 * - Malayalam / മലയാളം (ml)
 * - Kannada / ಕನ್ನಡ (kn)
 */

export const TRANSLATIONS = {
  en: {
    // App Meta & Header
    appName: "PlantCare AI",
    tagline: "Take a photo. Understand your plant. Care smarter.",
    homeBtn: "Home",
    settingsTitle: "AI Settings",
    apiKeyPlaceholder: "Enter Google Gemini API Key (Optional)",
    saveApiKey: "Save Key",
    clearApiKey: "Clear",
    apiKeyNotice: "Optional: Leave blank to use our built-in botanical AI engine with zero setup.",

    // Home Page
    scanCardTitle: "SCAN YOUR PLANT",
    scanCardDesc: "Take or upload a photo of any plant or leaf for instant health assessment & care advice.",
    scanCardBtn: "Start Plant Scan 📸",

    nameCardTitle: "ENTER YOUR PLANT NAME",
    nameCardDesc: "Type any plant name to discover best planting seasons, climate needs, and growing advice.",
    nameCardBtn: "Explore Plant Care 🌱",

    // Scan View
    scanTitle: "Scan & Diagnose Your Plant",
    scanSubtitle: "Upload a clear photo of your plant or leaf for real-time AI botanical analysis.",
    uploadBoxText: "Drag & drop your plant photo here, or click to browse",
    uploadFormats: "Supports JPG, PNG, WEBP • Max 15MB",
    takePhotoBtn: "📸 Take / Upload Photo",
    orTrySample: "Or test with instant sample plants:",
    sampleHealthyMonstera: "Monstera (Healthy)",
    sampleTomatoBlight: "Tomato (Early Blight)",
    sampleRoseSpot: "Rose (Black Spot)",
    sampleSnakeOverwater: "Snake Plant (Overwater)",
    sampleNonPlant: "Car (Non-Plant Test)",
    previewTitle: "Selected Photo Preview",
    changePhotoBtn: "🔄 Change Photo",
    removePhotoBtn: "🗑️ Remove",
    analyzeBtn: "✨ Analyze Plant Health",

    // Analyzing Screen
    analyzingTitle: "PlantCare AI is Examining...",
    analyzingSub: "Analyzing leaf pigment, cellular patterns, and identifying botanical condition",
    step1: "Detecting plant morphology...",
    step2: "Checking for leaf blemishes & pest indicators...",
    step3: "Synthesizing personalized care plan...",

    // Plant Health Report
    reportTitle: "🌿 Plant Health Report",
    reportSubtitle: "AI botanical analysis based on visual inspection",
    plantNameLabel: "Identified Plant",
    scientificNameLabel: "Botanical Classification",
    healthStatusLabel: "Overall Health Status",
    confidenceLabel: "AI Confidence Score",
    symptomsLabel: "🔍 Visible Symptoms",
    diseaseLabel: "🦠 Possible Condition / Issue",
    explanationLabel: "📝 AI Analysis Summary",
    statusHealthy: "Healthy",
    statusNeedsAttention: "Needs Attention",
    statusUnhealthy: "Unhealthy",
    disclaimer: "⚠️ Assessment Disclaimer: This is an AI-assisted evaluation based on visible imagery and should not replace certified agricultural or botanical laboratory diagnosis.",

    // Personalized Care Plan
    carePlanTitle: "💡 Personalized Care Plan",
    carePlanSubtitle: "Tailored daily & weekly recommendations to help your plant thrive",
    wateringAdviceLabel: "💧 Watering Advice",
    sunlightAdviceLabel: "☀️ Sunlight Advice",
    soilAdviceLabel: "🌱 Soil & Nutrition Advice",
    careTipsLabel: "✂️ Basic Plant Care Tips",
    scanAnotherBtn: "📸 Scan Another Plant",

    // Ask PlantCare AI (Chat)
    chatSectionTitle: "💬 Ask PlantCare AI",
    chatSectionSubtitle: "Chat with your AI assistant about this plant's recovery, fertilizer, or growth.",
    chatPlaceholder: "Ask anything about this plant (e.g. watering schedule, pest remedy)...",
    chatSendBtn: "Send",
    suggestedQuestionsTitle: "Suggested Questions:",
    sq1: "Why are my leaves turning yellow?",
    sq2: "How often should I water this plant?",
    sq3: "How can I improve its health?",
    sq4: "What should I do about these spots?",
    chatContextPill: "Chatting about",
    chatThinking: "PlantCare AI is typing...",

    // Enter Your Plant Name View
    plantNameViewTitle: "Plant Encyclopedia & Seasonal Guide",
    plantNamePrompt: "What plant do you have?",
    plantNamePlaceholder: "e.g. Monstera, Tulsi, Tomato, Rose, Snake Plant, Neem...",
    popularPlantsLabel: "Quick search popular plants:",
    searchPlantBtn: "Get Growing Guide ✨",
    
    // Plant Name Result
    seasonTitle: "📅 Best Planting Season",
    monthsTitle: "🗓️ Best Months to Plant",
    climateTitle: "🌦️ Suitable Climate",
    sunlightTitle: "☀️ Sunlight Requirements",
    waterTitle: "💧 Water Requirements",
    growingTipsTitle: "🌱 Basic Growing Tips & Soil",
    askAboutThisPlantBtn: "💬 Ask AI Questions About This Plant",
    searchAnotherBtn: "🔍 Search Another Plant",

    // Non-Plant & Errors
    nonPlantTitle: "🌱 Plant Not Detected",
    nonPlantMsg: "Our AI vision system could not detect a recognizable plant or leaf in this image. Please upload a clear photo focusing on the plant leaves, stem, or pot.",
    tryAgainBtn: "Try With A Plant Photo",
    errNoImage: "Please select or upload a photo first.",
    errEmptyName: "Please enter a plant name to search.",
    errEmptyChat: "Please type a question to ask PlantCare AI.",
    errAnalysisFailed: "Plant analysis could not be completed. Please try again or check your network.",
    errNetwork: "Unable to connect to AI service. Please check your connection.",
    backToHome: "Back to Home",
    shareReport: "Share Report",
    copiedToClipboard: "Copied to clipboard!",
  },

  ta: {
    // App Meta & Header
    appName: "PlantCare AI",
    tagline: "புகைப்படம் எடுங்கள். செடியைப் புரிந்து கொள்ளுங்கள். அறிவார்ந்து பராமரியுங்கள்.",
    homeBtn: "முகப்பு",
    settingsTitle: "AI அமைப்புகள்",
    apiKeyPlaceholder: "Google Gemini API திறவுகோலை உள்ளிடவும் (விருப்பத்தேர்வு)",
    saveApiKey: "சேமிக்கவும்",
    clearApiKey: "நீக்குக",
    apiKeyNotice: "விருப்பத்தேர்வு: எந்தவொரு அமைப்பும் இன்றி எங்கள் உள்ளமைக்கப்பட்ட தாவர AI இன்ஜினைப் பயன்படுத்தலாம்.",

    // Home Page
    scanCardTitle: "உங்கள் செடியை ஸ்கேன் செய்யுங்கள்",
    scanCardDesc: "உடனடி தாவர ஆரோக்கிய பரிசோதனை மற்றும் பராமரிப்பு வழிகாட்டலுக்கு ஏதேனும் செடி அல்லது இலையின் புகைப்படத்தைப் பதிவேற்றுங்கள்.",
    scanCardBtn: "செடி ஸ்கேனைத் தொடங்குங்கள் 📸",

    nameCardTitle: "உங்கள் செடியின் பெயரை உள்ளிடவும்",
    nameCardDesc: "சிறந்த நடவு காலம், தட்பவெப்ப நிலை மற்றும் வளர்ப்பு ஆலோசனைகளைக் கண்டறிய செடியின் பெயரைத் தட்டச்சு செய்யவும்.",
    nameCardBtn: "செடி பராமரிப்பை அறியுங்கள் 🌱",

    // Scan View
    scanTitle: "செடியை ஸ்கேன் செய்து நோயைக் கண்டறியவும்",
    scanSubtitle: "நிகழ்நேர AI தாவரவியல் பகுப்பாய்விற்கு உங்கள் செடி அல்லது இலையின் தெளிவான புகைப்படத்தைப் பதிவேற்றவும்.",
    uploadBoxText: "செடியின் புகைப்படத்தை இங்கே இழுத்து விடவும், அல்லது தேர்ந்தெடுக்க கிளிக் செய்யவும்",
    uploadFormats: "JPG, PNG, WEBP வடிவங்களை ஆதரிக்கிறது • அதிகபட்சம் 15MB",
    takePhotoBtn: "📸 புகைப்படம் எடுங்கள் / பதிவேற்றுங்கள்",
    orTrySample: "அல்லது மாதிரி செடிகளை உடனடியாக சோதிக்கவும்:",
    sampleHealthyMonstera: "மான்ஸ்டெரா (ஆரோக்கியமானது)",
    sampleTomatoBlight: "தக்காளி (இலை கருகல் நோய்)",
    sampleRoseSpot: "ரோஜா (கருப்பு புள்ளி நோய்)",
    sampleSnakeOverwater: "பாம்பு செடி (அதிக நீர் பாதிப்பு)",
    sampleNonPlant: "கார் (தாவரமற்ற சோதனை)",
    previewTitle: "தேர்ந்தெடுக்கப்பட்ட புகைப்பட முன்னோட்டம்",
    changePhotoBtn: "🔄 புகைப்படத்தை மாற்று",
    removePhotoBtn: "🗑️ நீக்கு",
    analyzeBtn: "✨ செடி ஆரோக்கியத்தை ஆராயுங்கள்",

    // Analyzing Screen
    analyzingTitle: "PlantCare AI ஆராய்கிறது...",
    analyzingSub: "இலை நிறமி, செல் வடிவங்கள் மற்றும் தாவர நிலையை AI பகுப்பாய்வு செய்கிறது",
    step1: "தாவர அமைப்பைக் கண்டறிகிறது...",
    step2: "இலை புள்ளிகள் மற்றும் பூச்சி தாக்குதலைச் சரிபார்க்கிறது...",
    step3: "தனிப்பயனாக்கப்பட்ட பராமரிப்புத் திட்டத்தை உருவாக்குகிறது...",

    // Plant Health Report
    reportTitle: "🌿 தாவர ஆரோக்கிய அறிக்கை",
    reportSubtitle: "காட்சி ஆய்வின் அடிப்படையிலான AI தாவரவியல் பகுப்பாய்வு",
    plantNameLabel: "கண்டறியப்பட்ட செடி",
    scientificNameLabel: "தாவரவியல் வகைப்பாடு",
    healthStatusLabel: "ஒட்டுமொத்த ஆரோக்கிய நிலை",
    confidenceLabel: "AI துல்லிய அளவு",
    symptomsLabel: "🔍 புலப்படும் அறிகுறிகள்",
    diseaseLabel: "🦠 சாத்தியமான நோய் / பிரச்சனை",
    explanationLabel: "📝 AI பகுப்பாய்வு சுருக்கம்",
    statusHealthy: "ஆரோக்கியமானது",
    statusNeedsAttention: "கவனம் தேவை",
    statusUnhealthy: "ஆரோக்கியமற்றது",
    disclaimer: "⚠️ மதிப்பீட்டு மறுப்பு: இது படக்காட்சியின் அடிப்படையிலான ஒரு AI மதிப்பீடு மட்டுமே. இது சான்றளிக்கப்பட்ட விவசாய அல்லது தாவரவியல் ஆய்வக நோயறிதலுக்கு மாற்றாகாது.",

    // Personalized Care Plan
    carePlanTitle: "💡 தனிப்பயனாக்கப்பட்ட பராமரிப்புத் திட்டம்",
    carePlanSubtitle: "உங்கள் செடி செழித்து வளர தினசரி மற்றும் வாராந்திர வழிகாட்டுதல்",
    wateringAdviceLabel: "💧 நீர்ப்பாசன ஆலோசனை",
    sunlightAdviceLabel: "☀️ சூரிய ஒளி ஆலோசனை",
    soilAdviceLabel: "🌱 மண் மற்றும் ஊட்டச்சத்து ஆலோசனை",
    careTipsLabel: "✂️ அடிப்படை செடி பராமரிப்பு குறிப்புகள்",
    scanAnotherBtn: "📸 மற்றொரு செடியை ஸ்கேன் செய்",

    // Ask PlantCare AI (Chat)
    chatSectionTitle: "💬 PlantCare AI இடம் கேளுங்கள்",
    chatSectionSubtitle: "இந்த செடியின் மீட்சி, உரம் அல்லது வளர்ச்சி பற்றி AI உதவியாளரிடம் உரையாடுங்கள்.",
    chatPlaceholder: "இந்த செடியைப் பற்றி ஏதேனும் கேளுங்கள் (எ.கா. தண்ணீர் அட்டவணை, பூச்சி மருந்து)...",
    chatSendBtn: "அனுப்பு",
    suggestedQuestionsTitle: "பரிந்துரைக்கப்பட்ட கேள்விகள்:",
    sq1: "இலைகள் ஏன் மஞ்சளாக மாறுகின்றன?",
    sq2: "இந்த செடிக்கு எத்தனை நாட்களுக்கு ஒருமுறை தண்ணீர் ஊற்ற வேண்டும்?",
    sq3: "இதன் ஆரோக்கியத்தை நான் எவ்வாறு மேம்படுத்துவது?",
    sq4: "இந்த புள்ளிகளுக்கு நான் என்ன செய்ய வேண்டும்?",
    chatContextPill: "உரையாடல் சூழல்",
    chatThinking: "PlantCare AI பதிலளிக்கிறது...",

    // Enter Your Plant Name View
    plantNameViewTitle: "தாவர தகவல் களஞ்சியம் & பருவ கால வழிகாட்டி",
    plantNamePrompt: "உங்களிடம் என்ன செடி உள்ளது?",
    plantNamePlaceholder: "எ.கா. மான்ஸ்டெரா, துளசி, தக்காளி, ரோஜா, வேம்பு, கற்றாழை...",
    popularPlantsLabel: "பிரபலமான செடிகள்:",
    searchPlantBtn: "வளர்ப்பு வழிகாட்டியைப் பெறுங்கள் ✨",
    
    // Plant Name Result
    seasonTitle: "📅 சிறந்த நடவு பருவம்",
    monthsTitle: "🗓️ நடுவதற்கு ஏற்ற மாதங்கள்",
    climateTitle: "🌦️ ஏற்ற காலநிலை",
    sunlightTitle: "☀️ சூரிய ஒளி தேவைகள்",
    waterTitle: "💧 தண்ணீர் தேவைகள்",
    growingTipsTitle: "🌱 அடிப்படை வளர்ப்பு மற்றும் மண் குறிப்புகள்",
    askAboutThisPlantBtn: "💬 இந்த செடியைப் பற்றி AI-யிடம் கேளுங்கள்",
    searchAnotherBtn: "🔍 மற்றொரு செடியைத் தேடுங்கள்",

    // Non-Plant & Errors
    nonPlantTitle: "🌱 தாவரம் கண்டறியப்படவில்லை",
    nonPlantMsg: "இந்த படத்தில் எந்த செடியும் அல்லது இலையும் கண்டறியப்படவில்லை. தயவுசெய்து செடியின் இலை, தண்டு அல்லது தொட்டியை மையப்படுத்தி தெளிவான புகைப்படத்தைப் பதிவேற்றவும்.",
    tryAgainBtn: "செடி புகைப்படத்துடன் மீண்டும் முயற்சிக்கவும்",
    errNoImage: "முதலில் ஒரு புகைப்படத்தைத் தேர்ந்தெடுக்கவும் அல்லது பதிவேற்றவும்.",
    errEmptyName: "தேட செடியின் பெயரை உள்ளிடவும்.",
    errEmptyChat: "PlantCare AI இடம் கேட்க ஏதேனும் கேள்வியைத் தட்டச்சு செய்யவும்.",
    errAnalysisFailed: "தாவர பகுப்பாய்வு தோல்வியடைந்தது. மீண்டும் முயற்சிக்கவும்.",
    errNetwork: "AI சேவையுடன் இணைக்க முடியவில்லை. இணைய இணைப்பைச் சரிபார்க்கவும்.",
    backToHome: "முகப்பிற்குத் திரும்பு",
    shareReport: "அறிக்கையைப் பகிர்",
    copiedToClipboard: "நகலெடுக்கப்பட்டது!",
  },

  hi: {
    // App Meta & Header
    appName: "PlantCare AI",
    tagline: "फोटो लें। अपने पौधे को समझें। स्मार्ट देखभाल करें।",
    homeBtn: "होम",
    settingsTitle: "AI सेटिंग्स",
    apiKeyPlaceholder: "Google Gemini API कुंजी दर्ज करें (वैकल्पिक)",
    saveApiKey: "सहेजें",
    clearApiKey: "हटाएं",
    apiKeyNotice: "वैकल्पिक: बिना किसी सेटअप के हमारे इन-बिल्ट बॉटनिकल AI इंजन का उपयोग करें।",

    // Home Page
    scanCardTitle: "अपने पौधे को स्कैन करें",
    scanCardDesc: "तुरंत स्वास्थ्य परीक्षण और देखभाल सलाह के लिए किसी भी पौधे या पत्ती की फोटो अपलोड करें।",
    scanCardBtn: "पौधा स्कैन शुरू करें 📸",

    nameCardTitle: "पौधे का नाम दर्ज करें",
    nameCardDesc: "रोपण का सही मौसम, जलवायु आवश्यकताएं और देखभाल टिप्स जानने के लिए पौधे का नाम लिखें।",
    nameCardBtn: "देखभाल गाइड देखें 🌱",

    // Scan View
    scanTitle: "पौधा स्कैन करें और रोग पहचानें",
    scanSubtitle: "सटीक AI वानस्पतिक विश्लेषण के लिए अपने पौधे या पत्ती की स्पष्ट फोटो अपलोड करें।",
    uploadBoxText: "पौधे की फोटो यहाँ ड्रैग करें, या ब्राउज़ करने के लिए क्लिक करें",
    uploadFormats: "JPG, PNG, WEBP समर्थित • अधिकतम 15MB",
    takePhotoBtn: "📸 फोटो लें / अपलोड करें",
    orTrySample: "या तुरंत इन नमूना पौधों से परीक्षण करें:",
    sampleHealthyMonstera: "मॉन्स्टेरा (स्वस्थ)",
    sampleTomatoBlight: "टमाटर (अगेती झुलसा रोग)",
    sampleRoseSpot: "गुलाब (काला धब्बा रोग)",
    sampleSnakeOverwater: "स्नेक प्लांट (अत्यधिक पानी)",
    sampleNonPlant: "कार (गैर-पौधा परीक्षण)",
    previewTitle: "चुनी गई फोटो का पूर्वावलोकन",
    changePhotoBtn: "🔄 फोटो बदलें",
    removePhotoBtn: "🗑️ हटाएं",
    analyzeBtn: "✨ पौधे के स्वास्थ्य का विश्लेषण करें",

    // Analyzing Screen
    analyzingTitle: "PlantCare AI जांच कर रहा है...",
    analyzingSub: "पत्ती के रंग, बनावट और स्वास्थ्य स्थिति का AI विश्लेषण हो रहा है",
    step1: "पौधे की संरचना पहचानी जा रही है...",
    step2: "रोग के लक्षण और कीटों की जांच जारी है...",
    step3: "व्यक्तिगत देखभाल योजना तैयार की जा रही है...",

    // Plant Health Report
    reportTitle: "🌿 पौधा स्वास्थ्य रिपोर्ट",
    reportSubtitle: "तस्वीर के आधार पर AI वानस्पतिक विश्लेषण",
    plantNameLabel: "पहचाना गया पौधा",
    scientificNameLabel: "वानस्पतिक नाम",
    healthStatusLabel: "समग्र स्वास्थ्य स्थिति",
    confidenceLabel: "AI सटीकता स्कोर",
    symptomsLabel: "🔍 दिखाई देने वाले लक्षण",
    diseaseLabel: "🦠 संभावित समस्या / रोग",
    explanationLabel: "📝 AI विश्लेषण सारांश",
    statusHealthy: "स्वस्थ",
    statusNeedsAttention: "ध्यान देने की आवश्यकता है",
    statusUnhealthy: "अस्वस्थ",
    disclaimer: "⚠️ मूल्यांकन अस्वीकरण: यह दृश्य छवि पर आधारित एक AI सहायता प्राप्त मूल्यांकन है और इसे प्रयोगशाला निदान के रूप में नहीं माना जाना चाहिए।",

    // Personalized Care Plan
    carePlanTitle: "💡 व्यक्तिगत देखभाल योजना",
    carePlanSubtitle: "पौधे के बेहतर विकास के लिए दैनिक और साप्ताहिक सुझाव",
    wateringAdviceLabel: "💧 पानी देने की सलाह",
    sunlightAdviceLabel: "☀️ धूप की आवश्यकता",
    soilAdviceLabel: "🌱 मिट्टी और पोषण सलाह",
    careTipsLabel: "✂️ बुनियादी देखभाल के टिप्स",
    scanAnotherBtn: "📸 दूसरा पौधा स्कैन करें",

    // Ask PlantCare AI (Chat)
    chatSectionTitle: "💬 PlantCare AI से पूछें",
    chatSectionSubtitle: "पौधे की रिकवरी, खाद या देखभाल के बारे में AI सहायक से प्रश्न पूछें।",
    chatPlaceholder: "इस पौधे के बारे में कुछ भी पूछें (जैसे पानी का समय, कीट निवारण)...",
    chatSendBtn: "भेजें",
    suggestedQuestionsTitle: "सुझाए गए प्रश्न:",
    sq1: "पत्तियां पीली क्यों पड़ रही हैं?",
    sq2: "इस पौधे को कितने दिनों में पानी देना चाहिए?",
    sq3: "मैं इसके स्वास्थ्य में सुधार कैसे कर सकता हूँ?",
    sq4: "इन धब्बों के लिए मुझे क्या करना चाहिए?",
    chatContextPill: "बातचीत का संदर्भ",
    chatThinking: "PlantCare AI उत्तर लिख रहा है...",

    // Enter Your Plant Name View
    plantNameViewTitle: "पौधा विश्वकोश और मौसमी गाइड",
    plantNamePrompt: "आपके पास कौन सा पौधा है?",
    plantNamePlaceholder: "उदा. मॉन्स्टेरा, तुलसी, टमाटर, गुलाब, नीम, एलोवेरा...",
    popularPlantsLabel: "लोकप्रिय पौधे:",
    searchPlantBtn: "उगाने की गाइड प्राप्त करें ✨",
    
    // Plant Name Result
    seasonTitle: "📅 लगाने का सबसे अच्छा मौसम",
    monthsTitle: "🗓️ रोपण के लिए सर्वोत्तम महीने",
    climateTitle: "🌦️ उपयुक्त जलवायु",
    sunlightTitle: "☀️ धूप की आवश्यकता",
    waterTitle: "💧 पानी की आवश्यकता",
    growingTipsTitle: "🌱 उगाने के टिप्स और मिट्टी",
    askAboutThisPlantBtn: "💬 इस पौधे के बारे में AI से पूछें",
    searchAnotherBtn: "🔍 दूसरा पौधा खोजें",

    // Non-Plant & Errors
    nonPlantTitle: "🌱 पौधा नहीं मिला",
    nonPlantMsg: "इस तस्वीर में कोई पौधा या पत्ती नहीं पहचानी जा सकी। कृपया पौधे की पत्ती, तने या गमले की स्पष्ट फोटो अपलोड करें।",
    tryAgainBtn: "पौधे की फोटो के साथ पुनः प्रयास करें",
    errNoImage: "कृपया पहले एक फोटो चुनें या अपलोड करें।",
    errEmptyName: "कृपया खोजने के लिए पौधे का नाम दर्ज करें।",
    errEmptyChat: "कृपया PlantCare AI से पूछने के लिए एक प्रश्न लिखें।",
    errAnalysisFailed: "विश्लेषण पूरा नहीं हो सका। कृपया पुनः प्रयास करें।",
    errNetwork: "AI सेवा से कनेक्ट करने में असमर्थ। कृपया इंटरनेट कनेक्शन जांचें।",
    backToHome: "होम पर वापस जाएं",
    shareReport: "रिपोर्ट साझा करें",
    copiedToClipboard: "क्लिपबोर्ड पर कॉपी किया गया!",
  },

  ml: {
    // App Meta & Header
    appName: "PlantCare AI",
    tagline: "ഫോട്ടോ എടുക്കൂ. ചെടിയെ മനസ്സിലാക്കൂ. മികച്ച പരിചരണം നൽകൂ.",
    homeBtn: "ഹോം",
    settingsTitle: "AI ക്രമീകരണങ്ങൾ",
    apiKeyPlaceholder: "Google Gemini API കീ നൽകുക (ഓപ്ഷണൽ)",
    saveApiKey: "സേവ് ചെയ്യുക",
    clearApiKey: "നീക്കം ചെയ്യുക",
    apiKeyNotice: "ഓപ്ഷണൽ: ക്രമീകരണങ്ങളൊന്നുമില്ലാതെ ഞങ്ങളുടെ ബൊട്ടാണിക്കൽ AI എഞ്ചിൻ ഉപയോഗിക്കാം.",

    // Home Page
    scanCardTitle: "ചെടി സ്കാൻ ചെയ്യുക",
    scanCardDesc: "തൽക്ഷണ ആരോഗ്യ പരിശോധനയ്ക്കും പരിചരണ നിർദ്ദേശങ്ങൾക്കുമായി ചെടിയുടെയോ ഇലയുടെയോ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.",
    scanCardBtn: "സ്കാൻ ആരംഭിക്കുക 📸",

    nameCardTitle: "ചെടിയുടെ പേര് നൽകുക",
    nameCardDesc: "നടീൽ കാലം, അനുയോജ്യമായ കാലാവസ്ഥ, വളർത്തൽ രീതികൾ എന്നിവ അറിയാൻ ചെടിയുടെ പേര് നൽകുക.",
    nameCardBtn: "പരിചരണ ഗൈഡ് കാണുക 🌱",

    // Scan View
    scanTitle: "ചെടി സ്കാൻ ചെയ്തു രോഗം കണ്ടെത്തുക",
    scanSubtitle: "കൃത്യമായ AI സസ്യശാസ്ത്ര വിശകലനത്തിനായി ചെടിയുടെ വ്യക്തമായ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.",
    uploadBoxText: "ഫോട്ടോ ഇവിടെ ഡ്രാഗ് ചെയ്യുക, അല്ലെങ്കിൽ തിരഞ്ഞെടുക്കാൻ ക്ലിക്ക് ചെയ്യുക",
    uploadFormats: "JPG, PNG, WEBP ഫോർമാറ്റുകൾ • പരമാവധി 15MB",
    takePhotoBtn: "📸 ഫോട്ടോ എടുക്കുക / അപ്‌ലോഡ് ചെയ്യുക",
    orTrySample: "അല്ലെങ്കിൽ മാതൃകാ ചെടികൾ ഉപയോഗിച്ച് പരിശോധിക്കുക:",
    sampleHealthyMonstera: "മോൺസ്റ്റെറ (ആരോഗ്യമുള്ളത്)",
    sampleTomatoBlight: "തക്കാളി (ഇല കരിച്ചിൽ രോഗം)",
    sampleRoseSpot: "റോസ് (കറുത്ത പുള്ളി രോഗം)",
    sampleSnakeOverwater: "സ്നേക്ക് പ്ലാന്റ് (കൂടുതൽ വെള്ളം)",
    sampleNonPlant: "കാർ (സസ്യേതര പരിശോധന)",
    previewTitle: "തിരഞ്ഞെടുത്ത ഫോട്ടോ പ്രിവ്യൂ",
    changePhotoBtn: "🔄 ഫോട്ടോ മാറ്റുക",
    removePhotoBtn: "🗑️ നീക്കം ചെയ്യുക",
    analyzeBtn: "✨ ചെടിയുടെ ആരോഗ്യം പരിശോധിക്കുക",

    // Analyzing Screen
    analyzingTitle: "PlantCare AI പരിശോധിക്കുന്നു...",
    analyzingSub: "ഇലയുടെ ഘടനയും ആരോഗ്യസ്ഥിതിയും AI വിശകലനം ചെയ്യുന്നു",
    step1: "സസ്യഘടന തിരിച്ചറിയുന്നു...",
    step2: "രോഗലക്ഷണങ്ങളും കീടബാധയും പരിശോധിക്കുന്നു...",
    step3: "പ്രത്യേക പരിചരണ പദ്ധതി തയ്യാറാക്കുന്നു...",

    // Plant Health Report
    reportTitle: "🌿 സസ്യ ആരോഗ്യ റിപ്പോർട്ട്",
    reportSubtitle: "ചിത്രം അടിസ്ഥാനമാക്കിയുള്ള AI സസ്യശാസ്ത്ര വിശകലനം",
    plantNameLabel: "കണ്ടെത്തിയ ചെടി",
    scientificNameLabel: "ശാസ്ത്രീയ നാമം",
    healthStatusLabel: "ആകെ ആരോഗ്യനില",
    confidenceLabel: "AI കൃത്യതാ സ്കോർ",
    symptomsLabel: "🔍 കാണുന്ന ലക്ഷണങ്ങൾ",
    diseaseLabel: "🦠 സാധ്യതയുള്ള രോഗം / പ്രശ്നം",
    explanationLabel: "📝 AI വിശകലന സംഗ്രഹം",
    statusHealthy: "ആരോഗ്യമുള്ളത്",
    statusNeedsAttention: "ശ്രദ്ധ നൽകേണ്ടതുണ്ട്",
    statusUnhealthy: "രോഗബാധിതം",
    disclaimer: "⚠️ നിരാകരണം: ഇത് ചിത്രത്തെ അടിസ്ഥാനമാക്കിയുള്ള ഒരു AI വിലയിരുത്തലാണ്. വിദഗ്ദ്ധ ലബോറട്ടറി പരിശോധനയ്ക്ക് പകരമല്ല.",

    // Personalized Care Plan
    carePlanTitle: "💡 വ്യക്തിഗത പരിചരണ പദ്ധതി",
    carePlanSubtitle: "ചെടിയുടെ മികച്ച വളർച്ചയ്ക്കുള്ള നിർദ്ദേശങ്ങൾ",
    wateringAdviceLabel: "💧 നനയ്ക്കൽ നിർദ്ദേശം",
    sunlightAdviceLabel: "☀️ സൂര്യപ്രകാശ ലഭ്യത",
    soilAdviceLabel: "🌱 മണ്ണും വളവും",
    careTipsLabel: "✂️ അടിസ്ഥാന പരിചരണ നുറുങ്ങുകൾ",
    scanAnotherBtn: "📸 മറ്റൊരു ചെടി സ്കാൻ ചെയ്യുക",

    // Ask PlantCare AI (Chat)
    chatSectionTitle: "💬 PlantCare AI-യോട് ചോദിക്കാം",
    chatSectionSubtitle: "ചെടിയുടെ രോഗശമനം, വളപ്രയോഗം എന്നിവയെക്കുറിച്ച് AI-യോട് ചോദിക്കുക.",
    chatPlaceholder: "ഈ ചെടിയെക്കുറിച്ച് എന്തും ചോദിക്കാം (ഉദാ: നനയ്ക്കൽ സമയം, കീടനിയന്ത്രണം)...",
    chatSendBtn: "അയക്കുക",
    suggestedQuestionsTitle: "നിർദ്ദേശിച്ച ചോദ്യങ്ങൾ:",
    sq1: "ഇലകൾ മഞ്ഞനിറമാകുന്നത് എന്തുകൊണ്ട്?",
    sq2: "എത്ര ദിവസം കൂടുമ്പോഴാണ് നനയ്ക്കേണ്ടത്?",
    sq3: "ചെടിയുടെ ആരോഗ്യം എങ്ങനെ മെച്ചപ്പെടുത്താം?",
    sq4: "ഈ പാടുകൾ മാറാൻ എന്താണ് ചെയ്യേണ്ടത്?",
    chatContextPill: "ചർച്ചാ വിഷയം",
    chatThinking: "PlantCare AI മറുപടി തയ്യാറാക്കുന്നു...",

    // Enter Your Plant Name View
    plantNameViewTitle: "സസ്യ വിവര വിജ്ഞാനകോശം & സീസൺ ഗൈഡ്",
    plantNamePrompt: "നിങ്ങളുടെ പക്കലുള്ള ചെടി ഏതാണ്?",
    plantNamePlaceholder: "ഉദാ: തുളസി, തക്കാളി, റോസ്, കറ്റാർവാഴ, വേപ്പ്...",
    popularPlantsLabel: "ജനപ്രിയ സസ്യങ്ങൾ:",
    searchPlantBtn: "വളർത്തൽ വിവരങ്ങൾ കാണുക ✨",
    
    // Plant Name Result
    seasonTitle: "📅 അനുയോജ്യമായ നടീൽ സീസൺ",
    monthsTitle: "🗓️ നടാൻ പറ്റിയ മാസങ്ങൾ",
    climateTitle: "🌦️ അനുയോജ്യമായ കാലാവസ്ഥ",
    sunlightTitle: "☀️ സൂര്യപ്രകാശ ആവശ്യം",
    waterTitle: "💧 ജല ആവശ്യം",
    growingTipsTitle: "🌱 നടീൽ രീതികളും മണ്ണും",
    askAboutThisPlantBtn: "💬 ഈ ചെടിയെക്കുറിച്ച് AI-യോട് ചോദിക്കുക",
    searchAnotherBtn: "🔍 മറ്റൊരു ചെടി തിരയുക",

    // Non-Plant & Errors
    nonPlantTitle: "🌱 സസ്യം കണ്ടെത്താനായില്ല",
    nonPlantMsg: "ഈ ചിത്രത്തിൽ ചെടിയോ ഇലയോ തിരിച്ചറിയാൻ കഴിഞ്ഞില്ല. ദയവായി ചെടിയുടെ വ്യക്തമായ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക.",
    tryAgainBtn: "വീണ്ടും ശ്രമിക്കുക",
    errNoImage: "ദയവായി ആദ്യം ഒരു ഫോട്ടോ തിരഞ്ഞെടുക്കുക.",
    errEmptyName: "ദയവായി ചെടിയുടെ പേര് നൽകുക.",
    errEmptyChat: "ദയവായി ഒരു ചോദ്യം ടൈപ്പ് ചെയ്യുക.",
    errAnalysisFailed: "വിശകലനം പൂർത്തിയാക്കാൻ കഴിഞ്ഞില്ല. വീണ്ടും ശ്രമിക്കുക.",
    errNetwork: "നെറ്റ്‌വർക്ക് കണക്റ്റുചെയ്യാൻ കഴിഞ്ഞില്ല.",
    backToHome: "ഹോമിലേക്ക് മടങ്ങുക",
    shareReport: "റിപ്പോർട്ട് പങ്കിടുക",
    copiedToClipboard: "പകർത്തി!",
  },

  kn: {
    // App Meta & Header
    appName: "PlantCare AI",
    tagline: "ಫೋಟೋ ತೆಗೆಯಿರಿ. ಸಸ್ಯವನ್ನು ತಿಳಿಯಿರಿ. ಸ್ಮಾರ್ಟ್ ಆಗಿ ಪೋಷಿಸಿ.",
    homeBtn: "ಮುಖಪುಟ",
    settingsTitle: "AI ಸೆಟ್ಟಿಂಗ್ಸ್",
    apiKeyPlaceholder: "Google Gemini API ಕೀ ನಮೂದಿಸಿ (ಐಚ್ಛಿಕ)",
    saveApiKey: "ಉಳಿಸಿ",
    clearApiKey: "ಅಳಿಸಿ",
    apiKeyNotice: "ಐಚ್ಛಿಕ: ಯಾವುದೇ ಸೆಟಪ್ ಇಲ್ಲದೆ ನಮ್ಮ ಇನ್-ಬಿಲ್ಟ್ ಬೊಟಾನಿಕಲ್ AI ಇಂಜಿನ್ ಬಳಸಬಹುದು.",

    // Home Page
    scanCardTitle: "ನಿಮ್ಮ ಸಸ್ಯವನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
    scanCardDesc: "ತ್ವರಿತ ಆರೋಗ್ಯ ಪರೀಕ್ಷೆ ಮತ್ತು ಪೋಷಣೆ ಸಲಹೆಗಳಿಗಾಗಿ ಯಾವುದೇ ಸಸ್ಯ ಅಥವಾ ಎಲೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
    scanCardBtn: "ಸಸ್ಯ ಸ್ಕ್ಯಾನ್ ಪ್ರಾರಂಭಿಸಿ 📸",

    nameCardTitle: "ಸಸ್ಯದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
    nameCardDesc: "ಉತ್ತಮ ನಾಟಿ ಕಾಲ, ಹವಾಮಾನ ಅಗತ್ಯತೆಗಳು ಮತ್ತು ಬೆಳವಣಿಗೆಯ ಸಲಹೆಗಳನ್ನು ತಿಳಿಯಲು ಸಸ್ಯದ ಹೆಸರು ಬರೆಯಿರಿ.",
    nameCardBtn: "ಸಸ್ಯ ಮಾಹಿತಿ ನೋಡಿ 🌱",

    // Scan View
    scanTitle: "ಸಸ್ಯವನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಮತ್ತು ರೋಗ ಪತ್ತೆಹಚ್ಚಿ",
    scanSubtitle: "ನಿಖರವಾದ AI ಸಸ್ಯಶಾಸ್ತ್ರೀಯ ವಿಶ್ಲೇಷಣೆಗಾಗಿ ಸಸ್ಯ ಅಥವಾ ಎಲೆಯ ಸ್ಪಷ್ಟ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
    uploadBoxText: "ಸಸ್ಯದ ಫೋಟೋವನ್ನು ಇಲ್ಲಿಗೆ ಎಳೆಯಿರಿ ಅಥವಾ ಆಯ್ಕೆ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
    uploadFormats: "JPG, PNG, WEBP ಬೆಂಬಲಿತವಾಗಿದೆ • ಗರಿಷ್ಠ 15MB",
    takePhotoBtn: "📸 ಫೋಟೋ ತೆಗೆಯಿರಿ / ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    orTrySample: "ಅಥವಾ ತಕ್ಷಣದ ಮಾದರಿ ಸಸ್ಯಗಳೊಂದಿಗೆ ಪರೀಕ್ಷಿಸಿ:",
    sampleHealthyMonstera: "ಮಾನ್‌ಸ್ಟೆರಾ (ಆರೋಗ್ಯಕರ)",
    sampleTomatoBlight: "ಟೊಮೇಟೊ (ಮುಂಜಾನೆ ರೋಗ/ಬ್ಲೈಟ್)",
    sampleRoseSpot: "ಗುಲಾಬಿ (ಕಪ್ಪು ಚುಕ್ಕೆ ರೋಗ)",
    sampleSnakeOverwater: "ಸ್ನೇಕ್ ಪ್ಲಾಂಟ್ (ಹೆಚ್ಚು ನೀರು)",
    sampleNonPlant: "ಕಾರು (ಸಸ್ಯೇತರ ಪರೀಕ್ಷೆ)",
    previewTitle: "ಆಯ್ಕೆಮಾಡಿದ ಫೋಟೋ ಮುನ್ನೋಟ",
    changePhotoBtn: "🔄 ಫೋಟೋ ಬದಲಾಯಿಸಿ",
    removePhotoBtn: "🗑️ ಅಳಿಸಿ",
    analyzeBtn: "✨ ಸಸ್ಯ ಆರೋಗ್ಯ ವಿಶ್ಲೇಷಿಸಿ",

    // Analyzing Screen
    analyzingTitle: "PlantCare AI ಪರಿಶೀಲಿಸುತ್ತಿದೆ...",
    analyzingSub: "ಎಲೆಯ ಬಣ್ಣ, ಜೀವಕೋಶದ ಮಾದರಿಗಳು ಮತ್ತು ಆರೋಗ್ಯ ಸ್ಥಿತಿಯನ್ನು AI ವಿಶ್ಲೇಷಿಸುತ್ತಿದೆ",
    step1: "ಸಸ್ಯದ ರಚನೆಯನ್ನು ಗುರುತಿಸಲಾಗುತ್ತಿದೆ...",
    step2: "ಎಲೆಗಳ ಕಲೆಗಳು ಮತ್ತು ಕೀಟಗಳ ಲಕ್ಷಣಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...",
    step3: "ವೈಯಕ್ತಿಕ ಆರೈಕೆ ಯೋಜನೆಯನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...",

    // Plant Health Report
    reportTitle: "🌿 ಸಸ್ಯ ಆರೋಗ್ಯ ವರದಿ",
    reportSubtitle: "ಚಿತ್ರದ ಆಧಾರದ ಮೇಲೆ AI ಸಸ್ಯಶಾಸ್ತ್ರೀಯ ವಿಶ್ಲೇಷಣೆ",
    plantNameLabel: "ಗುರುತಿಸಲಾದ ಸಸ್ಯ",
    scientificNameLabel: "ಸಸ್ಯಶಾಸ್ತ್ರೀಯ ಹೆಸರು",
    healthStatusLabel: "ಒಟ್ಟಾರೆ ಆರೋಗ್ಯ ಸ್ಥಿತಿ",
    confidenceLabel: "AI ನಿಖರತೆ ಸ್ಕೋರ್",
    symptomsLabel: "🔍 ಗೋಚರಿಸುವ ಲಕ್ಷಣಗಳು",
    diseaseLabel: "🦠 ಸಂಭವನೀಯ ರೋಗ / ಸಮಸ್ಯೆ",
    explanationLabel: "📝 AI ವಿಶ್ಲೇಷಣೆ ಸಾರಾಂಶ",
    statusHealthy: "ಆರೋಗ್ಯಕರ",
    statusNeedsAttention: "ಗಮನ ಹರಿಸಬೇಕಾಗಿದೆ",
    statusUnhealthy: "ಅನಾರೋಗ್ಯಕರ",
    disclaimer: "⚠️ ಹಕ್ಕುತ್ಯಾಗ: ಇದು ಚಿತ್ರ ಆಧಾರಿತ AI ಮೌಲ್ಯಮಾಪನವಾಗಿದ್ದು, ಪ್ರಯೋಗಾಲಯದ ವೈಜ್ಞಾನಿಕ ಪರೀಕ್ಷೆಗೆ ಪರ್ಯಾಯವಲ್ಲ.",

    // Personalized Care Plan
    carePlanTitle: "💡 ವೈಯಕ್ತಿಕ ಆರೈಕೆ ಯೋಜನೆ",
    carePlanSubtitle: "ಸಸ್ಯದ ಉತ್ತಮ ಬೆಳವಣಿಗೆಗೆ ದೈನಂದಿನ ಮತ್ತು ಸಾಪ್ತಾಹಿಕ ಸಲಹೆಗಳು",
    wateringAdviceLabel: "💧 ನೀರುಣಿಸುವ ಸಲಹೆ",
    sunlightAdviceLabel: "☀️ ಸೂರ್ಯನ ಬೆಳಕಿನ ಅಗತ್ಯತೆ",
    soilAdviceLabel: "🌱 ಮಣ್ಣು ಮತ್ತು ಪೋಷಕಾಂಶ ಸಲಹೆ",
    careTipsLabel: "✂️ ಮೂಲ ಆರೈಕೆ ಸಲಹೆಗಳು",
    scanAnotherBtn: "📸 ಇನ್ನೊಂದು ಸಸ್ಯ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",

    // Ask PlantCare AI (Chat)
    chatSectionTitle: "💬 PlantCare AI ಗೆ ಕೇಳಿ",
    chatSectionSubtitle: "ಸಸ್ಯದ ಚೇತರಿಕೆ, ಗೊಬ್ಬರ ಮತ್ತು ಬೆಳವಣಿಗೆಯ ಬಗ್ಗೆ AI ಸಹಾಯಕನೊಂದಿಗೆ ಸಂಭಾಷಿಸಿ.",
    chatPlaceholder: "ಈ ಸಸ್ಯದ ಬಗ್ಗೆ ಏನನ್ನಾದರೂ ಕೇಳಿ (ಉದಾ. ನೀರುಣಿಸುವ ಸಮಯ, ಕೀಟ ನಿಯಂತ್ರಣ)...",
    chatSendBtn: "ಕಳುಹಿಸಿ",
    suggestedQuestionsTitle: "ಸೂಚಿಸಲಾದ ಪ್ರಶ್ನೆಗಳು:",
    sq1: "ಎಲೆಗಳು ಏಕೆ ಹಳದಿಯಾಗುತ್ತಿವೆ?",
    sq2: "ಈ ಸಸ್ಯಕ್ಕೆ ಎಷ್ಟು ದಿನಗಳಿಗೊಮ್ಮೆ ನೀರು ಹಾಕಬೇಕು?",
    sq3: "ಇದರ ಆರೋಗ್ಯವನ್ನು ನಾನು ಹೇಗೆ ಸುಧಾರಿಸಬಹುದು?",
    sq4: "ಈ ಕಲೆಗಳಿಗೆ ನಾನು ಏನು ಮಾಡಬೇಕು?",
    chatContextPill: "ಸಂಭಾಷಣೆಯ ವಿಷಯ",
    chatThinking: "PlantCare AI ಉತ್ತರಿಸುತ್ತಿದೆ...",

    // Enter Your Plant Name View
    plantNameViewTitle: "ಸಸ್ಯ ಜ್ಞಾನಕೋಶ ಮತ್ತು ಋತುಮಾನ ಮಾರ್ಗದರ್ಶಿ",
    plantNamePrompt: "ನಿಮ್ಮ ಬಳಿ ಯಾವ ಸಸ್ಯವಿದೆ?",
    plantNamePlaceholder: "ಉದಾ: ತುಳಸಿ, ಟೊಮೇಟೊ, ಗುಲಾಬಿ, ಅಲೋವೆರಾ, ಬೇವಿನ ಮರ...",
    popularPlantsLabel: "ಜನಪ್ರಿಯ ಸಸ್ಯಗಳು:",
    searchPlantBtn: "ಬೆಳೆ ಮಾರ್ಗದರ್ಶಿ ಪಡೆಯಿರಿ ✨",
    
    // Plant Name Result
    seasonTitle: "📅 ಉತ್ತಮ ನಾಟಿ ಋತು",
    monthsTitle: "🗓️ ನೆಡಲು ಸೂಕ್ತ ತಿಂಗಳುಗಳು",
    climateTitle: "🌦️ ಸೂಕ್ತ ಹವಾಮಾನ",
    sunlightTitle: "☀️ ಸೂರ್ಯನ ಬೆಳಕಿನ ಅಗತ್ಯತೆ",
    waterTitle: "💧 ನೀರಿನ ಅಗತ್ಯತೆ",
    growingTipsTitle: "🌱 ಬೆಳವಣಿಗೆಯ ಸಲಹೆಗಳು ಮತ್ತು ಮಣ್ಣು",
    askAboutThisPlantBtn: "💬 ಈ ಸಸ್ಯದ ಬಗ್ಗೆ AI ಗೆ ಕೇಳಿ",
    searchAnotherBtn: "🔍 ಇನ್ನೊಂದು ಸಸ್ಯ ಹುಡುಕಿ",

    // Non-Plant & Errors
    nonPlantTitle: "🌱 ಸಸ್ಯ ಪತ್ತೆಯಾಗಿಲ್ಲ",
    nonPlantMsg: "ಈ ಚಿತ್ರದಲ್ಲಿ ಯಾವುದೇ ಸಸ್ಯ ಅಥವಾ ಎಲೆ ಪತ್ತೆಯಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು ಸಸ್ಯದ ಎಲೆ ಅಥವಾ ಕುಂಡದ ಸ್ಪಷ್ಟ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
    tryAgainBtn: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
    errNoImage: "ದಯವಿಟ್ಟು ಮೊದಲು ಫೋಟೋವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    errEmptyName: "ದಯವಿಟ್ಟು ಸಸ್ಯದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.",
    errEmptyChat: "ದಯವಿಟ್ಟು ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ.",
    errAnalysisFailed: "ವಿಶ್ಲೇಷಣೆ ಪೂರ್ಣಗೊಳಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    errNetwork: "AI ಸೇವೆಗೆ ಸಂಪರ್ಕಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ.",
    backToHome: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    shareReport: "ವರದಿ ಹಂಚಿಕೊಳ್ಳಿ",
    copiedToClipboard: "ನಕಲಿಸಲಾಗಿದೆ!",
  }
};
