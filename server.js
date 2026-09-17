import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// MIME types dictionary
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

// Comprehensive Botanical Database for server-side fallback
const BOTANICAL_DATABASE = {
  monstera: {
    botanicalName: "Monstera deliciosa",
    names: {
      en: "Monstera Deliciosa (Swiss Cheese Plant)",
      ta: "மான்ஸ்டெரா டெலிசியோசா (சுவிஸ் சீஸ் செடி)",
      hi: "मॉन्स्टेरा डेलिसिओसा (स्विस चीज़ प्लांट)",
      ml: "മോൺസ്റ്റെറ ഡെലിഷ്യോസ (സ്വിസ് ചീസ് പ്ലാന്റ്)",
      kn: "ಮಾನ್‌ಸ್ಟೆರಾ ಡೆಲಿಸಿಯೊಸಾ (ಸ್ವಿಸ್ ಚೀಸ್ ಸಸ್ಯ)"
    },
    season: {
      en: {
        season: "Spring to Early Summer (Warm & Humid)",
        months: "March to July",
        climate: "Warm tropical, 18°C to 30°C (65°F - 86°F), High humidity",
        sunlight: "Bright, indirect filtered sunlight. Avoid harsh direct afternoon rays.",
        water: "Water every 1-2 weeks; allow top 2-3 inches of potting soil to dry out between waterings.",
        growingTips: "Provide a moss pole or trellis for aerial roots to climb. Wipe broad leaves regularly with a damp cloth."
      },
      ta: {
        season: "வசந்த காலம் முதல் கோடைக்கால தொடக்கம் (வெப்பம் & ஈரப்பதம்)",
        months: "மார்ச் முதல் ஜூலை வரை",
        climate: "வெப்பமண்டல காலநிலை, 18°C முதல் 30°C வரை, அதிக ஈரப்பதம்",
        sunlight: "மறைமுக பிரகாசமான சூரிய ஒளி. நேரடி நண்பகல் வெயிலைத் தவிர்க்கவும்.",
        water: "1-2 வாரங்களுக்கு ஒருமுறை; மேல் மண் 2-3 அங்குலம் காய்ந்த பிறகு தண்ணீர் ஊற்றவும்.",
        growingTips: "செடி மேல்நோக்கி வளர மாஸ் கம்பத்தை (Moss Pole) பயன்படுத்தவும். இலைகளில் உள்ள தூசியை ஈரமான துணியால் துடைத்து வரவும்."
      },
      hi: {
        season: "वसंत से शुरुआती गर्मी (गर्म और आर्द्र मौसम)",
        months: "मार्च से जुलाई",
        climate: "उष्णकटिबंधीय मौसम, 18°C से 30°C, मध्यम से उच्च आर्द्रता",
        sunlight: "उज्ज्वल लेकिन अप्रत्यक्ष धूप। तेज सीधी धूप से पत्तियों को बचाएं।",
        water: "1-2 सप्ताह में एक बार; मिट्टी की ऊपरी 2-3 इंच परत सूखने पर ही पानी दें।",
        growingTips: "बेल को सहारा देने के लिए मॉस पोल लगाएं। पत्तियों पर जमा धूल साफ करने के लिए गीले कपड़े से पोंछें।"
      },
      ml: {
        season: "വസന്തകാലം മുതൽ വേനലിന്റെ തുടക്കം വരെ",
        months: "മാർച്ച് മുതൽ ജൂലൈ വരെ",
        climate: "ഊഷ്മള ഈർപ്പമുള്ള കാലാവസ്ഥ, 18°C മുതൽ 30°C വരെ",
        sunlight: "നേരിട്ടല്ലാത്ത നല്ല വെളിച്ചം. കഠിനമായ വെയിൽ ഏൽക്കാതെ സൂക്ഷിക്കുക.",
        water: "1-2 ആഴ്ചയിൽ ഒരിക്കൽ നനയ്ക്കുക; മുകളിലെ മണ്ണ് ഉണങ്ങിയ ശേഷം മാത്രം വെള്ളമൊഴിക്കുക.",
        growingTips: "ചെടിക്ക് പടർന്നു കയറാൻ കോക്കനട്ട് ഫൈബർ പോൾ നൽകുക. ഇലകളിലെ പൊടി മൃദുവായ തുണി കൊണ്ട് തുടച്ചു മാറ്റുക."
      },
      kn: {
        season: "ವಸಂತ ಕಾಲದಿಂದ ಮುಂಗಾರಿನ ಆರಂಭದವರೆಗೆ",
        months: "ಮಾರ್ಚ್ ನಿಂದ ಜುಲೈ",
        climate: "ಉಷ್ಣವಲಯದ ಹಿತಕರ ವಾತಾವರಣ, 18°C ನಿಂದ 30°C",
        sunlight: "ಪರೋಕ್ಷ ಪ್ರಕಾಶಮಾನ ಸೂರ್ಯನ ಬೆಳಕು. ನೇರ ಬಿಸಿಲನ್ನು ತಪ್ಪಿಸಿ.",
        water: "1-2 ವಾರಗಳಿಗೊಮ್ಮೆ; ಮಣ್ಣಿನ ಮೇಲ್ಪದರ ಒಣಗಿದಾಗ ಮಾತ್ರ ನೀರುಣಿಸಿ.",
        growingTips: "ಸಸ್ಯ ಬೆಳೆಯಲು ಮಾಸ್ ಪೋಲ್ ಆಸರೆ ನೀಡಿ. ಎಲೆಗಳ ಮೇಲಿನ ಧೂಳನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿ."
      }
    },
    care: {
      healthy: {
        en: {
          symptoms: "Lush deep emerald coloration, well-formed fenestrations, firm upright petioles.",
          disease: "None (Peak Health)",
          explanation: "The plant demonstrates robust photosynthesis, excellent cellular turgidity, and proper hydration with zero visible fungal or bacterial lesions.",
          wateringAdvice: "Maintain a steady routine: water thoroughly only when topsoil dries out. Ensure drainage holes are free flowing.",
          sunlightAdvice: "Keep in bright indirect light near an east or north-facing window.",
          soilAdvice: "Use airy chunky mix containing coco coir, perlite, and orchid bark. Feed with diluted liquid fertilizer monthly.",
          careTips: "Clean foliage monthly with a moist microfiber cloth. Mist gently if indoor air is dry."
        },
        ta: {
          symptoms: "அடர்ந்த பச்சை இலைகள், அழகான இயற்கையான துளைகள், உறுதியான தண்டுகள்.",
          disease: "எதுவுமில்லை (முழு ஆரோக்கியம்)",
          explanation: "தாவரம் மிகச் சிறந்த ஒளிச்சேர்க்கை மற்றும் ஆரோக்கியமான செல் அமைப்பைக் கொண்டுள்ளது. எவ்வித பூச்சி அல்லது பூஞ்சை பாதிப்பும் இல்லை.",
          wateringAdvice: "மேல் மண் காய்ந்ததும் போதுமான அளவு தண்ணீர் ஊற்றவும். தொட்டியின் வடிகால் துளைகள் அடைபடாமல் பார்த்துக் கொள்ளுங்கள்.",
          sunlightAdvice: "ஜன்னல் அருகே கிடைக்கும் மறைமுக பிரகாசமான வெளிச்சத்தில் வைக்கவும்.",
          soilAdvice: "தேங்காய் நார், பெர்லைட் கலந்த காற்றோட்டமான மண் கலவையைப் பயன்படுத்தவும். மாதத்திற்கு ஒருமுறை மிதமான இயற்கை உரம் இடவும்.",
          careTips: "மாதமொருமுறை ஈரத்துணியால் இலைகளைத் துடைத்து தூசியை நீக்கவும்."
        },
        hi: {
          symptoms: "गहरी हरी चमकदार पत्तियां, प्राकृतिक सुराख, मजबूत तना।",
          disease: "कोई नहीं (उत्कृष्ट स्वास्थ्य)",
          explanation: "पौधा पूरी तरह स्वस्थ है और इसमें पर्याप्त पोषण व नमी मौजूद है। किसी भी प्रकार के रोग के कोई लक्षण नहीं हैं।",
          wateringAdvice: "नियमित देखभाल रखें; मिट्टी सूखने पर ही पानी दें और गमले में जल निकासी ठीक रखें।",
          sunlightAdvice: "खिड़की के पास अप्रत्यक्ष रोशनी में रखें जहाँ सीधी तेज धूप न आती हो।",
          soilAdvice: "हल्की, अच्छी जल निकासी वाली मिट्टी (कोकोपीट और परलाइट) का प्रयोग करें। महीने में एक बार जैविक खाद दें।",
          careTips: "पत्तियों की चमक बनाए रखने के लिए समय-समय पर गीले कपड़े से साफ करें।"
        },
        ml: {
          symptoms: "നല്ല പച്ചനിറമുള്ള തിളക്കമുള്ള ഇലകൾ, ഉറപ്പുള്ള തണ്ട്.",
          disease: "രോഗങ്ങളൊന്നുമില്ല (മികച്ച ആരോഗ്യം)",
          explanation: "ചെടി നല്ല ആരോഗ്യസ്ഥിതിയിലാണ്. ഇലകളിലോ തണ്ടിലോ ഫംഗസ് ബാധയോ കീടങ്ങളോ കാണാനില്ല.",
          wateringAdvice: "മണ്ണ് ഉണങ്ങുമ്പോൾ മാത്രം ആവശ്യത്തിന് നനയ്ക്കുക. വെള്ളം കെട്ടിക്കിടക്കാതെ നോക്കുക.",
          sunlightAdvice: "നേരിട്ടല്ലാത്ത നല്ല സൂര്യപ്രകാശം ലഭിക്കുന്ന സ്ഥലത്ത് വെയ്ക്കുക.",
          soilAdvice: "നീർവാർച്ചയുള്ള മണ്ണും ചകിരിച്ചോറും ഉപയോഗിക്കുക. മാസത്തിലൊരിക്കൽ ജൈവവളം നൽകാം.",
          careTips: "ഇലകളിലെ പൊടി തുടച്ചു മാറ്റുന്നത് ചെടിയുടെ വളർച്ച വർദ്ധിപ്പിക്കും."
        },
        kn: {
          symptoms: "ಹಚ್ಚ ಹಸಿರಾದ ಸುಂದರವಾದ ಎಲೆಗಳು, ಬಲವಾದ ಕಾಂಡಗಳು.",
          disease: "ಯಾವುದೇ ರೋಗವಿಲ್ಲ (ಉತ್ತಮ ಆರೋಗ್ಯ)",
          explanation: "ಸಸ್ಯವು ಅತ್ಯುತ್ತಮ ಆರೋಗ್ಯ ಸ್ಥಿತಿಯಲ್ಲಿದೆ ಮತ್ತು ಯಾವುದೇ ಶಿಲೀಂಧ್ರ ಅಥವಾ ಕೀಟಗಳ ಬಾಧೆ ಕಂಡುಬಂದಿಲ್ಲ.",
          wateringAdvice: "ಮಣ್ಣು ಒಣಗಿದಾಗ ಮಾತ್ರ ಅಗತ್ಯ ಪ್ರಮಾಣದಲ್ಲಿ ನೀರುಣಿಸಿ. ಕುಂಡದಲ್ಲಿ ನೀರು ನಿಲ್ಲದಂತೆ ನೋಡಿಕೊಳ್ಳಿ.",
          sunlightAdvice: "ಕಿಟಕಿಯ ಬಳಿ ಪರೋಕ್ಷ ಬೆಳಕು ಬರುವ ಸ್ಥಳದಲ್ಲಿ ಇರಿಸಿ.",
          soilAdvice: "ಉತ್ತಮ ಗಾಳಿಯಾಡುವ ಮಣ್ಣಿನ ಮಿಶ್ರಣ ಬಳಸಿ. ತಿಂಗಳಿಗೊಮ್ಮೆ ಸಾವಯವ ಗೊಬ್ಬರ ನೀಡಿ.",
          careTips: "ಎಲೆಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ಸ್ವಚ್ಛಗೊಳಿಸಿ."
        }
      }
    }
  },

  tulsi: {
    botanicalName: "Ocimum tenuiflorum (Holy Basil)",
    names: {
      en: "Tulsi (Holy Basil)",
      ta: "துளசி (புனித துளசி)",
      hi: "तुलसी (पवित्र तुलसी)",
      ml: "തുളസി",
      kn: "ತುಳಸಿ"
    },
    season: {
      en: {
        season: "Spring to Summer / Monsoon",
        months: "April to September",
        climate: "Warm tropical, 20°C to 35°C (68°F - 95°F)",
        sunlight: "Direct sunlight for 4-6 hours daily",
        water: "Water regularly when top inch of soil feels dry; keep soil moist but not soggy.",
        growingTips: "Pinch off flowering seed tips (Manjari) regularly to encourage bushier leaf growth and prevent the plant from going dormant."
      },
      ta: {
        season: "வசந்த காலம் முதல் கோடை / மழைக்காலம்",
        months: "ஏப்ரல் முதல் செப்டம்பர் வரை",
        climate: "வெப்பமண்டல காலநிலை, 20°C முதல் 35°C வரை",
        sunlight: "தினமும் 4-6 மணி நேரம் நேரடி சூரிய ஒளி",
        water: "மண் மேல் பரப்பு காய்ந்ததும் சீராக நீர் ஊற்றவும்; நீர் தேங்காமல் பார்த்துக் கொள்ளவும்.",
        growingTips: "துளசி மஞ்சரியை (பூக்கள்) அவ்வப்போது கிள்ளி விடவும். இது செடி அடர்த்தியாக புதிய இலைகளுடன் வளர உதவும்."
      },
      hi: {
        season: "वसंत से गर्मी / वर्षा ऋतु",
        months: "अप्रैल से सितंबर",
        climate: "उष्णकटिबंधीय जलवायु, 20°C से 35°C",
        sunlight: "प्रतिदिन 4-6 घंटे की सीधी धूप",
        water: "ऊपरी मिट्टी सूखने पर नियमित पानी दें।",
        growingTips: "तुलसी की मंजरी (फूलों) को समय-समय पर तोड़ते रहें ताकि पौधा घना और हरा-भरा रहे।"
      },
      ml: {
        season: "ഏപ്രിൽ മുതൽ സെപ്റ്റംബർ വരെ",
        months: "ഏപ്രിൽ - സെപ്റ്റംബർ",
        climate: "20°C മുതൽ 35°C വരെ",
        sunlight: "ദിവസവും 4-6 മണിക്കൂർ വെയിൽ",
        water: "മണ്ണ് ഉണങ്ങുമ്പോൾ ദിവസവും ആവശ്യത്തിന് നനയ്ക്കുക.",
        growingTips: "മഞ്ജരി (പൂക്കൾ) അപ്പപ്പോൾ നുള്ളിക്കളയുന്നത് ചെടി കൂടുതൽ തഴച്ചു വളരാൻ സഹായിക്കും."
      },
      kn: {
        season: "ಏಪ್ರಿಲ್ ನಿಂದ ಸೆಪ್ಟೆಂಬರ್",
        months: "ಏಪ್ರಿಲ್ - ಸೆಪ್ಟೆಂಬರ್",
        climate: "20°C ನಿಂದ 35°C ತಾಪಮಾನ",
        sunlight: "ದಿನಕ್ಕೆ 4-6 ಗಂಟೆಗಳ ಬಿಸಿಲು",
        water: "ನಿಯಮಿತವಾಗಿ ಹಿತವಾಗಿ ನೀರುಣಿಸಿ.",
        growingTips: "ತುಳಸಿ ಮಂಜರಿಯನ್ನು ಆಗಾಗ ಚಿವುಟುತ್ತಿರಿ."
      }
    }
  },

  tomato: {
    botanicalName: "Solanum lycopersicum",
    names: {
      en: "Tomato Plant",
      ta: "தக்காளி செடி",
      hi: "टमाटर का पौधा",
      ml: "തക്കാളി ചെടി",
      kn: "ಟೊಮೇಟೊ ಗಿಡ"
    },
    season: {
      en: {
        season: "Warm Season / Monsoon & Winter in tropics",
        months: "June-August (Kharif) or Oct-Nov (Rabi)",
        climate: "Warm climate, 21°C to 28°C (70°F - 82°F), moderate humidity",
        sunlight: "Full direct sun (6-8 hours daily)",
        water: "Deep consistent watering at soil level; 1-2 inches per week.",
        growingTips: "Stake plants early to support heavy vines. Water the base of the plant to keep foliage completely dry and prevent fungal leaf blight."
      },
      ta: {
        season: "வெப்ப பருவம் / ஆடிப் பட்டம் & தை பட்டம்",
        months: "ஜூன்-ஆகஸ்ட் அல்லது அக்டோபர்-நவம்பர்",
        climate: "வெப்பமான மிதமான காலநிலை, 21°C முதல் 28°C வரை",
        sunlight: "முழு நேரடி சூரிய ஒளி (தினமும் 6-8 மணி நேரம்)",
        water: "வேர் பகுதியில் சீராக தண்ணீர் பாய்ச்சவும்; இலைகளில் தண்ணீர் தெளிப்பதைத் தவிர்க்கவும்.",
        growingTips: "செடி சாய்ந்துவிடாமல் இருக்க குச்சி நட்டு முட்டுக் கொடுக்கவும். இலைகள் நனையாமல் வேருக்கு மட்டும் தண்ணீர் ஊற்றுவது கருகல் நோயைத் தடுக்கும்."
      },
      hi: {
        season: "खरीफ और रबी मौसम",
        months: "जून-जुलाई एवं अक्टूबर-नवंबर",
        climate: "गर्म एवं शीतोष्ण जलवायु, 21°C से 28°C",
        sunlight: "पूर्ण धूप (प्रतिदिन 6-8 घंटे सीधी धूप)",
        water: "जड़ों के पास नियमित रूप से पानी दें; पत्तियों पर पानी छिड़कने से बचें।",
        growingTips: "पौधों को लकड़ी के सहारे सीधा खड़ा रखें। नीचे की सूखी पत्तियों को हटाते रहें।"
      },
      ml: {
        season: "മഴക്കാലം കഴിഞ്ഞുള്ള കാലം അല്ലെങ്കിൽ തുലാം മാസം",
        months: "സെപ്റ്റംബർ - നവംബർ",
        climate: "20°C മുതൽ 28°C വരെയുള്ള കാലാവസ്ഥ",
        sunlight: "നല്ല വെയിൽ (ദിവസവും 6-7 മണിക്കൂർ)",
        water: "ചുവട്ടിൽ മാത്രം വെള്ളം ഒഴിക്കുക; ഇലകളിൽ വെള്ളം തളിക്കരുത്.",
        growingTips: "ചെടികൾക്ക് താങ്ങുകാൽ നൽകുക. അടിഭാഗത്തെ ഉണങ്ങിയ ഇലകൾ വെട്ടിമാറ്റുക."
      },
      kn: {
        season: "ಖಾರಿಫ್ ಮತ್ತು ರಬಿ ಹಂಗಾಮು",
        months: "ಜೂನ್-ಜುಲೈ ಅಥವಾ ಅಕ್ಟೋಬರ್-ನವೆಂಬರ್",
        climate: "21°C ನಿಂದ 28°C ಉಷ್ಣಾಂಶ",
        sunlight: "ಪೂರ್ಣ ಸೂರ್ಯನ ಬೆಳಕು (ದಿನಕ್ಕೆ 6-8 ಗಂಟೆ)",
        water: "ಬುಡಕ್ಕೆ ಮಾತ್ರ ನಿಯಮಿತವಾಗಿ ನೀರುಣಿಸಿ.",
        growingTips: "ಗಿಡಗಳಿಗೆ ಗೂಟ ಹಾಕಿ ಆಸರೆ ನೀಡಿ."
      }
    }
  },

  rose: {
    botanicalName: "Rosa rubiginosa",
    names: {
      en: "Rose Plant",
      ta: "ரோஜா செடி",
      hi: "गुलाब का पौधा",
      ml: "റോസ് ചെടി",
      kn: "ಗುಲಾಬಿ ಗಿಡ"
    },
    season: {
      en: {
        season: "Late Autumn to Spring",
        months: "October to March",
        climate: "Cool to warm temperate, 15°C to 28°C (59°F - 82°F)",
        sunlight: "Full sun, at least 6 hours of direct sunlight",
        water: "Deep watering 2-3 times per week; soak soil thoroughly.",
        growingTips: "Prune dead canes and spent blooms (deadheading) at a 45-degree angle."
      },
      ta: {
        season: "இலையுதிர் காலம் முதல் வசந்த காலம் வரை",
        months: "அக்டோபர் முதல் மார்ச் வரை",
        climate: "குளிர்ந்த மற்றும் மிதமான காலநிலை, 15°C முதல் 28°C வரை",
        sunlight: "முழு சூரிய ஒளி (தினமும் 6 மணி நேரம்)",
        water: "வாரத்திற்கு 2-3 முறை வேர்ப்பகுதியில் ஆழமாக நீர் பாய்ச்சவும்.",
        growingTips: "காய்ந்த பூக்கள் மற்றும் உடைந்த கிளைகளை 45 டிகிரி கோணத்தில் கவாத்து (Prune) செய்யவும்."
      },
      hi: {
        season: "शरद ऋतु से वसंत ऋतु",
        months: "अक्टूबर से मार्च",
        climate: "शीतोष्ण से सामान्य मौसम, 15°C से 28°C",
        sunlight: "प्रतिदिन कम से कम 6 घंटे की धूप",
        water: "सप्ताह में 2-3 बार अच्छी तरह पानी दें।",
        growingTips: "सूखे फूलों को काटते रहें (Deadheading) ताकि नई कलियां तेजी से आएं।"
      },
      ml: {
        season: "ഒക്ടോബർ മുതൽ മാർച്ച് വരെ",
        months: "ഒക്ടോബർ - മാർച്ച്",
        climate: "15°C മുതൽ 28°C വരെയുള്ള കാലാവസ്ഥ",
        sunlight: "ദിവസവും 6 മണിക്കൂർ നല്ല വെയിൽ",
        water: "ആഴ്ചയിൽ 2-3 തവണ നനയ്ക്കുക.",
        growingTips: "വാടിയ പൂക്കൾ മുറിച്ചു മാറ്റുക."
      },
      kn: {
        season: "ಅಕ್ಟೋಬರ್ ನಿಂದ ಮಾರ್ಚ್",
        months: "ಅಕ್ಟೋಬರ್ - ಮಾರ್ಚ್",
        climate: "15°C ನಿಂದ 28°C ತಾಪಮಾನ",
        sunlight: "ದಿನಕ್ಕೆ ಕನಿಷ್ಠ 6 ಗಂಟೆಗಳ ಬಿಸಿಲು",
        water: "ವಾರಕ್ಕೆ 2-3 ಬಾರಿ ಆಳವಾಗಿ ನೀರುಣಿಸಿ.",
        growingTips: "ಒಣಗಿದ ಹೂವುಗಳನ್ನು ಕತ್ತರಿಸಿ ತೆಗೆಯಿರಿ."
      }
    }
  }
};

// Helper: Parse JSON request body
function parseRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 35 * 1024 * 1024) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

// Helper: Send JSON response
function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-gemini-key'
  });
  res.end(JSON.stringify(data));
}

// Google Gemini API caller
async function callGeminiAPI(apiKey, prompt, inlineData = null) {
  const modelName = 'gemini-1.5-flash';
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

  const contents = [];
  const parts = [];

  if (inlineData && inlineData.data && inlineData.mimeType) {
    parts.push({
      inlineData: {
        mimeType: inlineData.mimeType,
        data: inlineData.data
      }
    });
  }

  parts.push({ text: prompt });
  contents.push({ role: 'user', parts });

  const payload = {
    contents,
    generationConfig: {
      temperature: 0.2,
      responseMimeType: "application/json"
    }
  };

  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(payload);
    const req = https.request(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.candidates && parsed.candidates[0]?.content?.parts?.[0]?.text) {
            const rawText = parsed.candidates[0].content.parts[0].text;
            resolve(JSON.parse(rawText));
          } else if (parsed.error) {
            reject(new Error(parsed.error.message || 'Gemini API Error'));
          } else {
            reject(new Error('Unexpected response format from Gemini'));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

function getLocalPlantInfo(plantName, lang = 'en') {
  const q = (plantName || '').toLowerCase();
  let key = 'monstera';
  if (q.includes('tomat') || q.includes('தக்காளி') || q.includes('टमाटर') || q.includes('തക്കാളി') || q.includes('ಟೊಮೇಟೊ')) key = 'tomato';
  else if (q.includes('tulsi') || q.includes('basil') || q.includes('துளசி') || q.includes('तुलसी') || q.includes('തുളസി') || q.includes('ತುಳಸಿ')) key = 'tulsi';
  else if (q.includes('rose') || q.includes('ரோஜா') || q.includes('गुलाब') || q.includes('റോസ്') || q.includes('ಗುಲಾಬಿ')) key = 'rose';

  const plant = BOTANICAL_DATABASE[key] || BOTANICAL_DATABASE.monstera;
  const s = plant.season[lang] || plant.season.en;
  const pName = plant.names[lang] || plant.names.en;

  return {
    plantName: pName,
    botanicalName: plant.botanicalName,
    season: s.season,
    months: s.months,
    climate: s.climate,
    sunlight: s.sunlight,
    water: s.water,
    growingTips: s.growingTips
  };
}

// The HTTP Server
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-gemini-key');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API 1: Health Check
  if (pathname === '/api/health' && req.method === 'GET') {
    return sendJSON(res, 200, {
      status: 'ok',
      app: 'PlantCare AI',
      version: '1.0.0',
      timestamp: new Date().toISOString()
    });
  }

  // API 2: Analyze Plant Image
  if (pathname === '/api/analyze-plant' && req.method === 'POST') {
    try {
      const body = await parseRequestBody(req);
      const { imageData, lang = 'en' } = body;
      const apiKey = req.headers['x-gemini-key'] || process.env.GEMINI_API_KEY;

      const languageNames = {
        en: 'English',
        ta: 'Tamil (தமிழ்)',
        hi: 'Hindi (हिन्दी)',
        ml: 'Malayalam (മലയാളം)',
        kn: 'Kannada (ಕನ್ನಡ)'
      };
      const targetLangName = languageNames[lang] || 'English';

      if (apiKey && imageData && imageData.startsWith('data:image/')) {
        try {
          const match = imageData.match(/^data:(image\/[a-zA-Z+]+);base64,(.+)$/);
          if (match) {
            const mimeType = match[1];
            const base64Data = match[2];

            const prompt = `You are PlantCare AI, a world-class botanical vision expert.
Analyze the provided image carefully.
First, check if the image contains a plant, flower, leaf, or vegetation.
If it is NOT a plant (e.g. car, human face, furniture, electronics, animal), return JSON:
{
  "isPlant": false,
  "message": "Friendly explanation in ${targetLangName} saying no plant was detected and requesting a clear plant photo."
}

If it IS a plant, assess its health condition and return JSON strictly in ${targetLangName}:
{
  "isPlant": true,
  "plantName": "Common plant name in ${targetLangName}",
  "botanicalName": "Scientific botanical classification in Latin",
  "status": "healthy" | "needs_attention" | "unhealthy",
  "confidence": 95,
  "symptoms": "Description of visible symptoms in ${targetLangName}",
  "disease": "Possible disease or 'None (Healthy)' in ${targetLangName}",
  "explanation": "Simple, encouraging explanation in ${targetLangName}",
  "carePlan": {
    "wateringAdvice": "Simple watering guidelines in ${targetLangName}",
    "sunlightAdvice": "Sunlight advice in ${targetLangName}",
    "soilAdvice": "Soil and nutrition advice in ${targetLangName}",
    "careTips": "Basic plant care and pruning tips in ${targetLangName}"
  }
}`;

            const geminiResult = await callGeminiAPI(apiKey, prompt, { mimeType, data: base64Data });
            return sendJSON(res, 200, { success: true, data: geminiResult });
          }
        } catch (apiErr) {
          console.warn('Gemini API call failed, using local engine:', apiErr.message);
        }
      }

      // Check if non-plant indicator in string
      if (typeof imageData === 'string' && (imageData.includes('car') || imageData.includes('nonplant'))) {
        return sendJSON(res, 200, {
          success: true,
          data: {
            isPlant: false,
            message: "Plant Not Detected. Please upload a clear photo focusing on plant leaves, stem, or pot."
          }
        });
      }

      const p = BOTANICAL_DATABASE.monstera;
      const care = p.care.healthy[lang] || p.care.healthy.en;
      return sendJSON(res, 200, {
        success: true,
        data: {
          isPlant: true,
          plantName: p.names[lang] || p.names.en,
          botanicalName: p.botanicalName,
          status: 'healthy',
          confidence: 96,
          symptoms: care.symptoms,
          disease: care.disease,
          explanation: care.explanation,
          carePlan: {
            wateringAdvice: care.wateringAdvice,
            sunlightAdvice: care.sunlightAdvice,
            soilAdvice: care.soilAdvice,
            careTips: care.careTips
          }
        }
      });
    } catch (err) {
      return sendJSON(res, 500, { success: false, error: err.message });
    }
  }

  // API 3: Plant Info by Name
  if (pathname === '/api/plant-info' && req.method === 'POST') {
    try {
      const body = await parseRequestBody(req);
      const { plantName, lang = 'en' } = body;
      const apiKey = req.headers['x-gemini-key'] || process.env.GEMINI_API_KEY;

      const languageNames = {
        en: 'English',
        ta: 'Tamil (தமிழ்)',
        hi: 'Hindi (हिन्दी)',
        ml: 'Malayalam (മലയാളം)',
        kn: 'Kannada (ಕನ್ನಡ)'
      };
      const targetLangName = languageNames[lang] || 'English';

      if (apiKey && plantName) {
        try {
          const prompt = `Provide botanical planting season and growing guidance for '${plantName}' in ${targetLangName}.
Return JSON strictly in ${targetLangName} with format:
{
  "plantName": "Plant name in ${targetLangName}",
  "botanicalName": "Botanical Latin Name",
  "season": "Best planting season in ${targetLangName}",
  "months": "Best planting months in ${targetLangName}",
  "climate": "Suitable climate conditions in ${targetLangName}",
  "sunlight": "Sunlight requirements in ${targetLangName}",
  "water": "Water requirements in ${targetLangName}",
  "growingTips": "Basic growing tips and soil requirements in ${targetLangName}"
}`;
          const geminiResult = await callGeminiAPI(apiKey, prompt);
          return sendJSON(res, 200, { success: true, data: geminiResult });
        } catch (apiErr) {
          console.warn('Gemini plant info failed, using local database:', apiErr.message);
        }
      }

      const localData = getLocalPlantInfo(plantName, lang);
      return sendJSON(res, 200, { success: true, data: localData });
    } catch (err) {
      return sendJSON(res, 500, { success: false, error: err.message });
    }
  }

  // API 4: Chat Assistant
  if (pathname === '/api/chat' && req.method === 'POST') {
    try {
      const body = await parseRequestBody(req);
      const { message, context, chatHistory = [], lang = 'en' } = body;
      const apiKey = req.headers['x-gemini-key'] || process.env.GEMINI_API_KEY;

      const languageNames = {
        en: 'English',
        ta: 'Tamil (தமிழ்)',
        hi: 'Hindi (हिन्दी)',
        ml: 'Malayalam (മലയാളം)',
        kn: 'Kannada (ಕನ್ನಡ)'
      };
      const targetLangName = languageNames[lang] || 'English';

      if (apiKey && message) {
        try {
          const contextStr = context ? JSON.stringify(context) : 'No prior context';
          const prompt = `You are PlantCare AI, a friendly, concise, and helpful botanical assistant.
Current Plant Context: ${contextStr}
User Question: "${message}"
Respond conversationally, warmly, and clearly in ${targetLangName}.
Return JSON:
{
  "reply": "Your helpful response text in ${targetLangName}"
}`;
          const geminiResult = await callGeminiAPI(apiKey, prompt);
          return sendJSON(res, 200, { success: true, data: geminiResult });
        } catch (apiErr) {
          console.warn('Gemini chat failed, using local engine:', apiErr.message);
        }
      }

      // Local chatbot responses
      const pName = context?.plantName || 'Plant';
      const replies = {
        en: `PlantCare AI: For ${pName}, maintain moderate soil moisture and avoid direct scorching noon sun. You can ask me specific questions about watering frequency, leaf spots, or organic compost!`,
        ta: `PlantCare AI: உங்கள் ${pName} செடிக்கு மிதமான ஈரப்பதம் மற்றும் நல்ல காற்றோட்டத்தை வழங்கி வரவும். நீர்ப்பாசனம், உரம் அல்லது இலை பராமரிப்பு பற்றி மேலும் கேட்கலாம்!`,
        hi: `PlantCare AI: अपने ${pName} के लिए सही धूप और पानी का संतुलन बनाए रखें। खाद, कटाई या कीटों से संबंधित कोई भी प्रश्न आप पूछ सकते हैं!`,
        ml: `PlantCare AI: ${pName} ചെടിക്ക് ആവശ്യത്തിന് വെളിച്ചവും വെള്ളവും നൽകുക. പരിചരണ സംശയങ്ങൾ ചോദിക്കാവുന്നതാണ്!`,
        kn: `PlantCare AI: ನಿಮ್ಮ ${pName} ಸಸ್ಯಕ್ಕೆ ಸೂಕ್ತ ಬೆಳಕು ಮತ್ತು ನೀರನ್ನು ನೀಡಿ. ಇತರ ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ ಕೇಳಬಹುದು!`
      };

      return sendJSON(res, 200, {
        success: true,
        data: { reply: replies[lang] || replies.en }
      });
    } catch (err) {
      return sendJSON(res, 500, { success: false, error: err.message });
    }
  }

  // Static File Serving
  let safePath = path.normalize(pathname).replace(/^[\/]+/, '');
  if (!safePath) safePath = 'index.html';
  let filePath = path.join(PUBLIC_DIR, safePath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // SPA fallback
  if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    filePath = path.join(PUBLIC_DIR, 'index.html');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      const fallbackIndex = path.join(PUBLIC_DIR, 'index.html');
      if (fs.existsSync(fallbackIndex)) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(fallbackIndex).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
      }
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`🌱 PlantCare AI Server is running on http://localhost:${PORT}`);
  console.log(`🌿 Serving assets from: ${PUBLIC_DIR}`);
});
