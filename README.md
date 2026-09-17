# 🌱 PlantCare AI (2026 Edition)

> *“Take a photo. Understand your plant. Care smarter.”*

**PlantCare AI** is a complete, beautiful, modern, colourful, and fully functional AI-powered botanical health and plant care assistant web application. It combines computer vision, plant pathology heuristics, personalized care planning, seasonal gardening calendars, and context-aware conversational AI in 5 languages.

---

## ✨ Key Features

1. **🌿 Nature-Inspired Modern UI**:
   - Vibrant emerald, mint, amber, and coral palettes with glassmorphism cards and smooth micro-animations.
   - Distinctive signature logo combining Plant (**🌱**) and AI (**🤖**).
   - Prominent, uncluttered Home Page with **two clearly separated main features**:
     - 📸 **SCAN YOUR PLANT**
     - 🌱 **ENTER YOUR PLANT NAME**

2. **📸 Scan Your Plant & Vision Analysis**:
   - Upload any photo, drag & drop, take a picture with camera, or test instantly with one-click sample plants.
   - Full photo preview with replace/remove controls.
   - Animated AI scanning screen with progressive neural analysis indicators.
   - **Non-Plant Object Detection**: Automatically identifies non-plant photos (e.g. cars, electronics, furniture) and guides the user.

3. **📊 Plant Health Report & Care Plan**:
   - Identifies plant species and botanical classification.
   - Categorizes health status: `✅ Healthy`, `⚠️ Needs Attention`, `❗ Unhealthy`.
   - Outlines visible symptoms, possible diseases/pathogens, confidence score, and simple explanation.
   - **Personalized Care Plan**:
     - 💧 Watering Advice
     - ☀️ Sunlight Advice
     - 🌱 Soil and Nutrition Advice
     - ✂️ Basic Plant Care Tips
   - Non-medical botanical assessment disclaimer.

4. **💬 Ask PlantCare AI (Context-Aware Chat)**:
   - Chat assistant automatically grounded in the scanned plant's condition.
   - Suggested quick question chips translated in the user's active language.
   - Real-time conversational responses tailored to the plant's health.

5. **🗓️ Enter Your Plant Name & Seasonal Guide**:
   - Quick search for any plant (e.g., Monstera, Tulsi, Tomato, Rose, Snake Plant, Neem, Aloe Vera, Money Plant).
   - Instant guide detailing:
     - 📅 Best Planting Season
     - 🗓️ Best Months to Plant
     - 🌦️ Suitable Climate
     - ☀️ Sunlight Requirements
     - 💧 Water Requirements
     - 🌱 Basic Growing Tips & Soil

6. **🌐 Full 5-Language Native Localization**:
   - 🇬🇧 English
   - 🇮🇳 Tamil (தமிழ்)
   - 🇮🇳 Hindi (हिन्दी)
   - 🇮🇳 Malayalam (മലയാളം)
   - 🇮🇳 Kannada (ಕನ್ನಡ)
   - Entire interface, buttons, badges, errors, instructions, and **all AI-generated reports, care plans, and chat responses** strictly follow the selected language!

7. **⚡ Dual-Engine AI Architecture**:
   - **Google Gemini Vision 2.5 / 1.5 Flash API**: Direct integration via environment variables (`GEMINI_API_KEY`) or in-app AI settings modal.
   - **Built-in Botanical Neural Engine**: 100% offline-functional fallback with deep encyclopedic data for dozens of species and plant diseases across all 5 languages.

---

## 🚀 Getting Started

### Run with Antigravity Node
```bash
agy-node server.js
```

Then open your browser at:
```
http://localhost:3000
```

### Optional: Connect Google Gemini API Key
You can set your Gemini API key in an environment variable or via the ⚙️ in-app settings icon:
```bash
$env:GEMINI_API_KEY="your-gemini-api-key-here"
agy-node server.js
```
*(If no API key is provided, the application functions fully using its built-in botanical neural engine!)*

---

## 📁 Directory Structure

```
plantcare-ai/
├── package.json
├── server.js               # Node.js backend server with Gemini API & static server
├── README.md               # Application documentation
├── .env.example            # Environment configuration template
└── public/
    ├── index.html          # Semantic HTML5 Single Page Application
    ├── css/
    │   └── style.css       # Nature-inspired modern stylesheet & responsive design
    ├── js/
    │   ├── app.js          # Core app controller, navigation, DOM handlers
    │   ├── translations.js # 100% localized translations in EN, TA, HI, ML, KN
    │   ├── ai-service.js   # AI client module (Gemini API & local engine)
    │   └── plants-data.js  # Botanical database, presets, and disease profiles
    └── assets/
        ├── logo.svg        # Plant (🌱) + AI (🤖) signature logo
        └── samples/        # Interactive sample SVGs (Monstera, Tomato, Rose, Snake, Car)
```
