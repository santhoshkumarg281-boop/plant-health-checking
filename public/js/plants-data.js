/**
 * PlantCare AI - Comprehensive Botanical Database & Disease Encyclopaedia
 * Pre-seeded with 5-language native content for 30+ popular plants & 25+ diseases
 */

export const SAMPLE_PRESETS = [
  {
    id: "monstera-healthy",
    name: "Monstera Deliciosa",
    type: "plant",
    image: "assets/samples/monstera-healthy.svg",
    plantKey: "monstera",
    status: "healthy",
    confidence: 97,
  },
  {
    id: "tomato-blight",
    name: "Tomato (Early Blight)",
    type: "plant",
    image: "assets/samples/tomato-blight.svg",
    plantKey: "tomato",
    status: "unhealthy",
    diseaseKey: "early_blight",
    confidence: 94,
  },
  {
    id: "rose-blackspot",
    name: "Rose (Black Spot)",
    type: "plant",
    image: "assets/samples/rose-blackspot.svg",
    plantKey: "rose",
    status: "needs_attention",
    diseaseKey: "black_spot",
    confidence: 92,
  },
  {
    id: "snake-overwater",
    name: "Snake Plant (Overwatering)",
    type: "plant",
    image: "assets/samples/snake-overwater.svg",
    plantKey: "snake_plant",
    status: "needs_attention",
    diseaseKey: "root_rot",
    confidence: 89,
  },
  {
    id: "car-nonplant",
    name: "Automobile (Non-Plant)",
    type: "non-plant",
    image: "assets/samples/car-nonplant.svg",
    isPlant: false,
  }
];

export const BOTANICAL_DATABASE = {
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
        growingTips: "Provide a moss pole or trellis for aerial roots to climb. Wipe broad leaves regularly with a damp cloth to remove dust and maintain high photosynthetic efficiency."
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
          symptoms: "Lush deep emerald coloration, well-formed fenestrations (natural leaf perforations), firm upright petioles.",
          disease: "None (Peak Health)",
          explanation: "The plant demonstrates robust photosynthesis, excellent cellular turgidity, and proper hydration with zero visible fungal or bacterial lesions.",
          wateringAdvice: "Maintain a steady routine: water thoroughly only when topsoil dries out. Ensure drainage holes are free flowing.",
          sunlightAdvice: "Keep in bright indirect light near an east or north-facing window.",
          soilAdvice: "Use airy chunky mix containing coco coir, perlite, and orchid bark. Feed with diluted balanced liquid fertilizer once a month.",
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
    },
    care: {
      early_blight: {
        en: {
          symptoms: "Concentric target-board rings on lower leaves, yellow chlorotic margins around brown necrotic patches, premature leaf dropping.",
          disease: "Early Blight (Alternaria solani fungal infection)",
          explanation: "Early blight is a prevalent fungal pathogen that thrives in warm, humid conditions when water splashes soil spores onto lower foliage.",
          wateringAdvice: "Water strictly at the soil base using drip irrigation or a watering can nozzle. Keep foliage bone-dry.",
          sunlightAdvice: "Ensure 6+ hours of full morning sun to rapidly dry morning dew and hinder fungal spore germination.",
          soilAdvice: "Mulch soil with organic straw or wood chips to create a physical barrier preventing fungal spores from splashing up.",
          careTips: "Prune and dispose of all infected lower leaves immediately (do not compost). Apply organic copper fungicide or neem oil spray every 7-10 days."
        },
        ta: {
          symptoms: "கீழ் இலைகளில் வளைய வடிவிலான கரும்பழுப்பு புள்ளிகள், மஞ்சள் நிற விளிம்புகள், இலைகள் உதிர்தல்.",
          disease: "இலை கருகல் நோய் (Early Blight - ஆல்டர்னேரியா பூஞ்சை)",
          explanation: "மண்ணில் உள்ள பூஞ்சை வித்துக்கள் தண்ணீர் தெளிக்கும் போது இலைகளில் படுவதால் இந்த இலைக்கருகல் நோய் ஏற்படுகிறது.",
          wateringAdvice: "வேர்ப்பகுதியில் மட்டும் கவனமாக நீர் பாய்ச்சவும். இலைகளில் தண்ணீர் படவே கூடாது.",
          sunlightAdvice: "தினமும் குறைந்தது 6 மணி நேரம் நல்ல வெயில் படும் இடத்தில் வைக்கவும்.",
          soilAdvice: "மண்ணின் மேல் வைக்கோல் அல்லது காய்ந்த இலைகளை மூடாக்காக இடவும்.",
          careTips: "பாதிக்கப்பட்ட இலைகளை உடனே வெட்டி அப்புறப்படுத்துங்கள். 10 நாட்களுக்கு ஒருமுறை வேப்ப எண்ணெய் கரைசல் அல்லது செம்பு பூஞ்சாணக் கொல்லி தெளிக்கவும்."
        },
        hi: {
          symptoms: "निचली पत्तियों पर गोल छल्लेदार भूरे धब्बे, किनारों का पीला पड़ना, पत्तियों का झड़ना।",
          disease: "अगेती झुलसा रोग (अर्ली ब्लाइट - फफूंद जनित)",
          explanation: "यह फफूंद जनित रोग है जो अधिक नमी और पत्तियों पर पानी रुकने से तेजी से फैलता है।",
          wateringAdvice: "पौधे की जड़ों में ही पानी दें, पत्तियों पर पानी न पड़ने दें।",
          sunlightAdvice: "पौधे को 6-8 घंटे की सीधी धूप में रखें ताकि नमी जल्दी सूखे।",
          soilAdvice: "मिट्टी पर पुआल की मल्चिंग करें ताकि मिट्टी के फफूंद पत्तियों तक न उछलें।",
          careTips: "संक्रमित पत्तियों को तुरंत काटकर नष्ट करें। नीम के तेल या कॉपर फंगीसाइड का छिड़काव करें।"
        },
        ml: {
          symptoms: "താഴത്തെ ഇലകളിൽ കറുപ്പും തവിട്ടുമായ പുള്ളികൾ, ഇലകൾ മഞ്ഞനിറമായി കൊഴിയുന്നു.",
          disease: "ഇല കരിച്ചിൽ രോഗം (Early Blight ഫംഗസ് ബാധ)",
          explanation: "ഈർപ്പമുള്ള കാലാവസ്ഥയിൽ മണ്ണിൽ നിന്നുള്ള ഫംഗസ് ഇലകളിൽ പടരുമ്പോഴാണ് ഈ രോഗം ഉണ്ടാകുന്നത്.",
          wateringAdvice: "ചുവട്ടിൽ മാത്രം വെള്ളമൊഴിക്കുക. ഇല നനയരുത്.",
          sunlightAdvice: "നല്ല സൂര്യപ്രകാശം ലഭിക്കുന്ന സ്ഥലത്ത് വെയ്ക്കുക.",
          soilAdvice: "ചുവട്ടിൽ ഉണങ്ങിയ പുല്ല് കൊണ്ടോ കരിയില കൊണ്ടോ പുതയിടുക.",
          careTips: "രോഗം ബാധിച്ച ഇലകൾ വെട്ടിമാറ്റി നശിപ്പിക്കുക. വേപ്പെണ്ണ മിശ്രിതം തളിക്കുക."
        },
        kn: {
          symptoms: "ಕೆಳಗಿನ ಎಲೆಗಳ ಮೇಲೆ ಕಂದು ಬಣ್ಣದ ವೃತ್ತಾಕಾರದ ಕಲೆಗಳು, ಎಲೆ ಹಳದಿಯಾಗಿ ಉದುರುವುದು.",
          disease: "ಮುಂಜಾನೆ ರೋಗ / ಎಲೆ ಕರಕಲು (Early Blight)",
          explanation: "ಇದು ಶಿಲೀಂಧ್ರ ರೋಗವಾಗಿದ್ದು, ಎಲೆಗಳ ಮೇಲೆ ನೀರು ನಿಲ್ಲುವುದರಿಂದ ಹರಡುತ್ತದೆ.",
          wateringAdvice: "ಬುಡಕ್ಕೆ ಮಾತ್ರ ನೀರುಣಿಸಿ, ಎಲೆಗಳ ಮೇಲೆ ನೀರು ಹಾಕಬೇಡಿ.",
          sunlightAdvice: "ದಿನಕ್ಕೆ 6 ಗಂಟೆಗಳ ಕಾಲ ಉತ್ತಮ ಬಿಸಿಲಿನಲ್ಲಿ ಇರಿಸಿ.",
          soilAdvice: "ಮಣ್ಣಿನ ತೇವಾಂಶ ನಿಯಂತ್ರಿಸಲು ಒಣ ಹುಲ್ಲಿನ ಹೊದಿಕೆ (Mulch) ಹಾಕಿ.",
          careTips: "ರೋಗಪೀಡಿತ ಎಲೆಗಳನ್ನು ತಕ್ಷಣ ಕತ್ತರಿಸಿ ತೆಗೆಯಿರಿ. ಬೇವಿನ ಎಣ್ಣೆ ಸಿಂಪಡಿಸಿ."
        }
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
        growingTips: "Prune dead canes and spent blooms (deadheading) at a 45-degree angle above an outward-facing bud eye to encourage vigorous new flowering shoots."
      },
      ta: {
        season: "இலையுதிர் காலம் முதல் வசந்த காலம் வரை",
        months: "அக்டோபர் முதல் மார்ச் வரை",
        climate: "குளிர்ந்த மற்றும் மிதமான காலநிலை, 15°C முதல் 28°C வரை",
        sunlight: "முழு சூரிய ஒளி (தினமும் 6 மணி நேரம்)",
        water: "வாரத்திற்கு 2-3 முறை வேர்ப்பகுதியில் ஆழமாக நீர் பாய்ச்சவும்.",
        growingTips: "காய்ந்த பூக்கள் மற்றும் உடைந்த கிளைகளை 45 டிகிரி கோணத்தில் கவாத்து (Prune) செய்யவும். இது புதிய பூக்கள் பூக்க உதவும்."
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
        growingTips: "വാടിയ പൂക്കൾ മുറിച്ചു മാറ്റുക, പുതിയ ശാഖകൾ ഉണ്ടാകാൻ ഇത് സഹായിക്കും."
      },
      kn: {
        season: "ಅಕ್ಟೋಬರ್ ನಿಂದ ಮಾರ್ಚ್",
        months: "ಅಕ್ಟೋಬರ್ - ಮಾರ್ಚ್",
        climate: "15°C ನಿಂದ 28°C ತಾಪಮಾನ",
        sunlight: "ದಿನಕ್ಕೆ ಕನಿಷ್ಠ 6 ಗಂಟೆಗಳ ಬಿಸಿಲು",
        water: "ವಾರಕ್ಕೆ 2-3 ಬಾರಿ ಆಳವಾಗಿ ನೀರುಣಿಸಿ.",
        growingTips: "ಒಣಗಿದ ಹೂವುಗಳನ್ನು ಕತ್ತರಿಸಿ ತೆಗೆಯಿರಿ."
      }
    },
    care: {
      black_spot: {
        en: {
          symptoms: "Circular black fungal spots with fringed margins on upper leaf surfaces, surrounded by yellow chlorotic tissue, leaf drop.",
          disease: "Rose Black Spot (Diplocarpon rosae)",
          explanation: "A common fungal disease triggered by prolonged leaf moisture, high humidity, and restricted airflow around the bush.",
          wateringAdvice: "Water at ground level early in the morning so any accidental splashes evaporate quickly.",
          sunlightAdvice: "Place in maximum open sunlight with excellent multi-directional air circulation.",
          soilAdvice: "Ensure soil is rich in organic compost with a slightly acidic pH (6.0 - 6.5). Feed with potassium-rich rose food.",
          careTips: "Rake up all fallen infected leaves. Prune crowded inner branches to improve airflow. Spray with bio-fungicide or baking soda-horticultural soap solution."
        },
        ta: {
          symptoms: "இலையின் மேல் பகுதியில் விளிம்புகளுடன் கூடிய கருப்புப் புள்ளிகள், மஞ்சள் நிறமாக மாறும் இலைகள், இலை உதிர்தல்.",
          disease: "ரோஜா கருப்பு புள்ளி நோய் (Rose Black Spot)",
          explanation: "காற்றோட்டம் குறைவாக இருப்பதாலும், இலைகளில் நீண்ட நேரம் ஈரம் தங்குவதாலும் இந்த பூஞ்சை நோய் பரவுகிறது.",
          wateringAdvice: "காலையில் செடியின் அடிப்பகுதியில் மட்டும் நீர் ஊற்றவும்.",
          sunlightAdvice: "நல்ல காற்று மற்றும் முழு சூரிய வெளிச்சம் உள்ள இடத்தில் வைக்கவும்.",
          soilAdvice: "மண்புழு உரம் மற்றும் பொட்டாசியம் சத்து நிறைந்த உரங்களை இடவும்.",
          careTips: "உதிர்ந்த இலைகளைச் சேகரித்து எரிக்கவும். காற்றோட்டத்திற்காக நடுவில் உள்ள அடர்ந்த கிளைகளை கவாத்து செய்யவும்."
        },
        hi: {
          symptoms: "पत्तियों के ऊपरी भाग पर काले गोल धब्बे, पत्तियां पीली होकर गिरना।",
          disease: "गुलाब का ब्लैक स्पॉट (फफूंद रोग)",
          explanation: "हवा की कमी और पत्तियों पर लगातार नमी रहने से यह रोग फैलता है।",
          wateringAdvice: "सुबह के समय केवल जड़ों में पानी दें।",
          sunlightAdvice: "खुली धूप और अच्छी हवादार जगह पर रखें।",
          soilAdvice: "वर्मीकम्पोस्ट और पोटाश युक्त खाद का उपयोग करें।",
          careTips: "गिरे हुए रोगग्रस्त पत्तों को हटा दें। आंतरिक शाखाओं की छंटाई करें और फंगीसाइड का छिड़काव करें।"
        },
        ml: {
          symptoms: "ഇലകളിൽ കറുത്ത പാടുകൾ, ഇല മഞ്ഞനിറമായി കൊഴിയുന്നു.",
          disease: "റോസ് ബ്ലാക്ക് സ്പോട്ട് (Rose Black Spot)",
          explanation: "ഇലകളിൽ ഈർപ്പം തങ്ങിനിൽക്കുന്നതും കാറ്റോട്ടക്കുറവുമാണ് ഇതിന് കാരണം.",
          wateringAdvice: "രാവിലെ ചുവട്ടിൽ മാത്രം വെള്ളമൊഴിക്കുക.",
          sunlightAdvice: "നല്ല വെയിലും കാറ്റും ഉള്ള സ്ഥലത്ത് വെയ്ക്കുക.",
          soilAdvice: "ജൈവവളവും പൊട്ടാഷും അടങ്ങിയ വളം നൽകുക.",
          careTips: "കൊഴിഞ്ഞ ഇലകൾ മാറ്റി നശിപ്പിക്കുക. ആവശ്യമില്ലാത്ത ചില്ലകൾ കോതി കൊടുക്കുക."
        },
        kn: {
          symptoms: "ಎಲೆಗಳ ಮೇಲೆ ಕಪ್ಪು ಚುಕ್ಕೆಗಳು, ಎಲೆ ಹಳದಿಯಾಗಿ ಉದುರುವುದು.",
          disease: "ಗುಲಾಬಿ ಕಪ್ಪು ಚುಕ್ಕೆ ರೋಗ (Black Spot)",
          explanation: "ಹೆಚ್ಚು ತೇವಾಂಶ ಮತ್ತು ಗಾಳಿಯ ಕೊರತೆಯಿಂದ ಈ ಶಿಲೀಂಧ್ರ ರೋಗ ಬರುತ್ತದೆ.",
          wateringAdvice: "ಮುಂಜಾನೆ ಬುಡಕ್ಕೆ ಮಾತ್ರ ನೀರುಣಿಸಿ.",
          sunlightAdvice: "ಉತ್ತಮ ಗಾಳಿ ಮತ್ತು ಪೂರ್ಣ ಬಿಸಿಲಿರುವ ಸ್ಥಳದಲ್ಲಿ ಇರಿಸಿ.",
          soilAdvice: "ಎರೆಹುಳು ಗೊಬ್ಬರ ನೀಡಿ.",
          careTips: "ಉದುರಿದ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ಕವಲುಗಳನ್ನು ಕತ್ತರಿಸಿ."
        }
      }
    }
  },

  snake_plant: {
    botanicalName: "Dracaena trifasciata (Sansevieria)",
    names: {
      en: "Snake Plant (Mother-in-Law's Tongue)",
      ta: "பாம்பு செடி (சான்செவீரியா)",
      hi: "स्नेक प्लांट (मदर-इन-लॉज़ टंग)",
      ml: "സ്നേക്ക് പ്ലാന്റ് (സാൻസെവീരിയ)",
      kn: "ಸ್ನೇಕ್ ಪ್ಲಾಂಟ್ (ಸ್ಯಾನ್ಸೆವೇರಿಯಾ)"
    },
    season: {
      en: {
        season: "All Year (Spring to Autumn for Active Growth)",
        months: "Year-round (Best propagation March to August)",
        climate: "Tolerates 15°C to 35°C (59°F - 95°F), hardy indoor plant",
        sunlight: "Adapts to low light, medium indirect light, or bright filtered light",
        water: "Extremely drought-tolerant. Water only once every 2-4 weeks; allow soil to dry completely.",
        growingTips: "Plant in a heavy terracotta pot with multiple drainage holes to prevent accidental overwatering."
      },
      ta: {
        season: "வருடம் முழுவதும் (வளர்ச்சிக்கு வசந்த காலம் சிறந்தது)",
        months: "ஆண்டு முழுவதும் (மார்ச் - ஆகஸ்ட் சிறந்த காலம்)",
        climate: "15°C முதல் 35°C வரை தாங்கக்கூடிய மிக உறுதியான உள்ளரங்கு செடி",
        sunlight: "குறைந்த வெளிச்சம் முதல் பிரகாசமான வெளிச்சம் வரை அனைத்திலும் வளரும்",
        water: "வறட்சியைத் தாங்கும். 2-4 வாரங்களுக்கு ஒருமுறை மண் முழுமையாக காய்ந்த பின் மட்டும் நீர் ஊற்றவும்.",
        growingTips: "வடிகால் துளைகள் கொண்ட சுடுமண் தொட்டியைப் பயன்படுத்துங்கள். அதிக தண்ணீர் ஊற்றுவதைத் தவிர்க்கவும்."
      },
      hi: {
        season: "साल भर (मार्च से अगस्त सबसे अच्छा)",
        months: "पूरे वर्ष",
        climate: "15°C से 35°C तापमान, बेहद मजबूत इनडोर पौधा",
        sunlight: "कम रोशनी से लेकर तेज अप्रत्यक्ष रोशनी तक",
        water: "2-4 सप्ताह में केवल एक बार; मिट्टी पूरी तरह सूखने पर ही पानी दें।",
        growingTips: "मिट्टी के गमले का प्रयोग करें जिसमें जल निकासी की अच्छी व्यवस्था हो।"
      },
      ml: {
        season: "വർഷം മുഴുവൻ വളർത്താം",
        months: "വർഷം മുഴുവൻ",
        climate: "15°C മുതൽ 35°C വരെ",
        sunlight: "കുറഞ്ഞ വെളിച്ചത്തിലും നന്നായി വളരും",
        water: "2-4 ആഴ്ചയിൽ ഒരിക്കൽ മാത്രം നനയ്ക്കുക; മണ്ണ് പൂർണ്ണമായും ഉണങ്ങിയ ശേഷം മാത്രം.",
        growingTips: "നീർവാർച്ചയുള്ള ചട്ടിയിൽ നടുക. അമിതമായി വെള്ളമൊഴിക്കരുത്."
      },
      kn: {
        season: "ವರ್ಷವಿಡೀ ಬೆಳೆಯಬಹುದು",
        months: "ವರ್ಷವಿಡೀ",
        climate: "15°C ನಿಂದ 35°C ವರೆಗೆ",
        sunlight: "ಕಡಿಮೆ ಬೆಳಕಿನಲ್ಲೂ ಸುಲಭವಾಗಿ ಬೆಳೆಯುತ್ತದೆ",
        water: "2-4 ವಾರಗಳಿಗೊಮ್ಮೆ ಮಾತ್ರ ನೀರುಣಿಸಿ.",
        growingTips: "ಉತ್ತಮ ನೀರು ಬಸಿದುಹೋಗುವ ಕುಂಡವನ್ನು ಬಳಸಿ."
      }
    },
    care: {
      root_rot: {
        en: {
          symptoms: "Mushy soft base near rhizome, drooping wrinkled yellow leaves, foul damp soil odor.",
          disease: "Basal Stem & Root Rot (Overwatering / Pythium)",
          explanation: "Snake plants store water in their succulent leaves; persistent saturated soil deprives roots of oxygen, leading to fungal rot.",
          wateringAdvice: "Stop watering immediately! Let the potting mix dry out 100% over the next 2-3 weeks.",
          sunlightAdvice: "Move to a warm, bright indirect light spot to stimulate transpiration and dry the soil.",
          soilAdvice: "Repot in coarse succulent/cactus mix (50% perlite/pumice, 50% potting soil).",
          careTips: "Unpot the plant, inspect roots, and cleanly snip away any blackened mushy roots with sterilized shears before repotting in fresh dry soil."
        },
        ta: {
          symptoms: "செடியின் அடிப்பகுதி அழுகி மென்மையாதல், இலைகள் சாய்ந்து மஞ்சளாதல், மண்ணில் துர்நாற்றம்.",
          disease: "வேரழுகல் நோய் (அதிக நீர் ஊற்றுவதால் ஏற்படும் பாதிப்பு)",
          explanation: "பாம்பு செடி தன் இலைகளில் நீரைச் சேமிக்கும். அதிகப்படியான நீரினால் வேர்களுக்குக் காற்று கிடைக்காமல் அழுகல் ஏற்படுகிறது.",
          wateringAdvice: "உடனடியாக தண்ணீர் ஊற்றுவதை நிறுத்துங்கள்! அடுத்த 2-3 வாரங்களுக்கு மண் முற்றிலும் காயட்டும்.",
          sunlightAdvice: "நல்ல காற்றோட்டமும் வெளிச்சமும் உள்ள இடத்திற்கு மாற்றவும்.",
          soilAdvice: "கற்றாழைக்குரிய மணல் மற்றும் பெர்லைட் கலந்த உலர்ந்த மண்ணில் மறுநடவு செய்யவும்.",
          careTips: "செடியைத் தொட்டியிலிருந்து எடுத்து அழுகிய வேர்களை நறுக்கிவிட்டு புதிய உலர்ந்த மண்ணில் நடவும்."
        },
        hi: {
          symptoms: "जड़ के पास पत्तियों का गलना, पीलापन, पत्तियों का लटकना।",
          disease: "रूट रॉट (जड़ गलन - अत्यधिक पानी के कारण)",
          explanation: "स्नेक प्लांट को बहुत कम पानी चाहिए। लगातार गीली मिट्टी रहने से जड़ें सड़ने लगती हैं।",
          wateringAdvice: "तुरंत पानी देना बंद करें और मिट्टी को 2-3 हफ़्तों तक पूरी तरह सूखने दें।",
          sunlightAdvice: "उज्ज्वल एवं गर्म स्थान पर रखें ताकि नमी जल्दी वाष्पित हो।",
          soilAdvice: "कैक्टस वाली सूखी रेतीली मिट्टी में दोबारा लगाएं।",
          careTips: "पौधे को निकालें, सड़ी हुई काली जड़ों को काटें और ताजी सूखी मिट्टी में लगाएं।"
        },
        ml: {
          symptoms: "ഇലയുടെ ചുവട് അഴുകി മൃദുവാകുന്നു, ഇലകൾ മഞ്ഞനിറമാകുന്നു.",
          disease: "വേരുചീയൽ (കൂടുതൽ വെള്ളം ഒഴിച്ചതുകൊണ്ട് ഉണ്ടാകുന്നത്)",
          explanation: "കൂടുതൽ വെള്ളം കെട്ടിക്കിടക്കുമ്പോൾ വേരുകളിലേക്ക് വായു സഞ്ചാരം നിലയ്ക്കുകയും ചീയൽ ഉണ്ടാവുകയും ചെയ്യുന്നു.",
          wateringAdvice: "നനയ്ക്കുന്നത് ഉടൻ നിർത്തുക. മണ്ണ് നന്നായി ഉണങ്ങാൻ അനുവദിക്കുക.",
          sunlightAdvice: "നല്ല വെളിച്ചവും വായുസഞ്ചാരവുമുള്ളിടത്തേക്ക് മാറ്റുക.",
          soilAdvice: "നീർവാർച്ചയുള്ള മണൽ കലർന്ന മണ്ണിലേക്ക് മാറ്റി നടുക.",
          careTips: "ചീഞ്ഞ വേരുകൾ മുറിച്ചുമാറ്റി പുതിയ മണ്ണിൽ നടുക."
        },
        kn: {
          symptoms: "ಬುಡ ಮೆತ್ತಗಾಗಿ ಕೊಳೆಯುವುದು, ಎಲೆಗಳು ಹಳದಿಯಾಗುವುದು.",
          disease: "ಬೇರು ಕೊಳೆತ ರೋಗ (ಅತಿಯಾದ ನೀರುಣಿಸುವಿಕೆಯಿಂದ)",
          explanation: "ಸತತವಾಗಿ ನೀರು ನಿಲ್ಲುವುದರಿಂದ ಬೇರುಗಳು ಕೊಳೆಯಲು ಪ್ರಾರಂಭಿಸುತ್ತವೆ.",
          wateringAdvice: "ತಕ್ಷಣ ನೀರುಣಿಸುವುದನ್ನು ನಿಲ್ಲಿಸಿ.",
          sunlightAdvice: "ಉತ್ತಮ ಬೆಳಕಿರುವ ಸ್ಥಳಕ್ಕೆ ಸ್ಥಳಾಂತರಿಸಿ.",
          soilAdvice: "ಮರಳು ಮಿಶ್ರಿತ ಒಣ ಮಣ್ಣಿನಲ್ಲಿ ಮರುನಾಟಿ ಮಾಡಿ.",
          careTips: "ಕೊಳತ ಬೇರುಗಳನ್ನು ಕತ್ತರಿಸಿ ತೆಗೆಯಿರಿ."
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
    },
    care: {
      healthy: {
        en: {
          symptoms: "Aromatic vibrant green leaves, vigorous branching, healthy purple-green stems.",
          disease: "None (Excellent Vitality)",
          explanation: "The Tulsi plant has optimal chlorophyll levels and strong vitality.",
          wateringAdvice: "Water once daily during summer, every 2-3 days in winter.",
          sunlightAdvice: "Place on a sunny balcony or courtyard facing South/East.",
          soilAdvice: "Loamy garden soil enriched with vermicompost and cow dung compost.",
          careTips: "Prune apical buds regularly to stimulate lateral growth."
        },
        ta: {
          symptoms: "நறுமணமிக்க அடர் பச்சை இலைகள், ஆரோக்கியமான கிளைகள்.",
          disease: "எதுவுமில்லை (சிறந்த ஆரோக்கியம்)",
          explanation: "துளசி செடி நல்ல ஆரோக்கியத்துடன் செழித்து வளர்கிறது.",
          wateringAdvice: "கோடையில் தினமும் ஒருமுறையும், குளிர்காலத்தில் 2 நாட்களுக்கு ஒருமுறையும் நீர் ஊற்றவும்.",
          sunlightAdvice: "தெற்கு அல்லது கிழக்கு நோக்கிய பால்கனியில் நல்ல வெயிலில் வைக்கவும்.",
          soilAdvice: "மண்புழு உரம் கலந்த செம்மண் சிறந்தது.",
          careTips: "செடி அடர்த்தியாக வளர நுனிக் குருத்துகளைக் கிள்ளி விடவும்."
        },
        hi: {
          symptoms: "सुगंधित हरी पत्तियां, मजबूत तना।",
          disease: "कोई नहीं (उत्कृष्ट स्वास्थ्य)",
          explanation: "तुलसी का पौधा पूरी तरह स्वस्थ और हरा-भरा है।",
          wateringAdvice: "गर्मी में रोज, सर्दी में 2-3 दिन में पानी दें।",
          sunlightAdvice: "धूप वाली बालकनी या आंगन में रखें।",
          soilAdvice: "वर्मीकम्पोस्ट युक्त दोमट मिट्टी।",
          careTips: "मंजरी हटाते रहें और शीर्ष शाखाओं की कटाई करें।"
        },
        ml: {
          symptoms: "നല്ല സുഗന്ധമുള്ള പച്ചിലകൾ, നല്ല വളർച്ച.",
          disease: "രോഗങ്ങളില്ല (മികച്ച ആരോഗ്യം)",
          explanation: "തുളസി നല്ല ആരോഗ്യത്തോടെ തഴച്ചു വളരുന്നു.",
          wateringAdvice: "വേനൽക്കാലത്ത് ദിവസവും നനയ്ക്കുക.",
          sunlightAdvice: "നല്ല വെയിൽ കിട്ടുന്ന സ്ഥലത്ത് വെയ്ക്കുക.",
          soilAdvice: "ജൈവവളം ചേർത്ത വളക്കൂറുള്ള മണ്ണ്.",
          careTips: "തലപ്പുകൾ നുള്ളിക്കൊടുക്കുക."
        },
        kn: {
          symptoms: "ಸುವಾಸನೆಯುಕ್ತ ಹಸಿರು ಎಲೆಗಳು, ಸಮೃದ್ಧ ಬೆಳವಣಿಗೆ.",
          disease: "ಯಾವುದೇ ರೋಗವಿಲ್ಲ (ಉತ್ತಮ ಆರೋಗ್ಯ)",
          explanation: "ತುಳಸಿ ಗಿಡವು ಅತ್ಯಂತ ಆರೋಗ್ಯಕರವಾಗಿದೆ.",
          wateringAdvice: "ದಿನಕ್ಕೊಮ್ಮೆ ಹಿತವಾಗಿ ನೀರುಣಿಸಿ.",
          sunlightAdvice: "ಉತ್ತಮ ಬಿಸಿಲಿರುವ ಸ್ಥಳದಲ್ಲಿ ಇರಿಸಿ.",
          soilAdvice: "ಸಾವಯವ ಗೊಬ್ಬರ ಮಿಶ್ರಿತ ಮಣ್ಣು.",
          careTips: "ತುದಿಯನ್ನು ಆಗಾಗ ಚಿವುಟಿ."
        }
      }
    }
  },

  aloe_vera: {
    botanicalName: "Aloe barbadensis miller",
    names: {
      en: "Aloe Vera",
      ta: "சோற்றுக்கற்றாழை",
      hi: "एलोवेरा (घृतकुमारी)",
      ml: "കറ്റാർവാഴ",
      kn: "ಲೋಳೆಸರ (ಅಲೋವೆರಾ)"
    },
    season: {
      en: {
        season: "Spring to Early Autumn",
        months: "March to October",
        climate: "Arid to semi-tropical, 20°C to 38°C (68°F - 100°F)",
        sunlight: "Bright direct or filtered sunlight (4-6 hours)",
        water: "Water thoroughly every 2-3 weeks; let soil dry out completely between waterings.",
        growingTips: "Use a shallow terracotta pot with sandy succulent soil. Harvest outer mature leaves when needed."
      },
      ta: {
        season: "வசந்த காலம் முதல் இலையுதிர் காலம் வரை",
        months: "மார்ச் முதல் அக்டோபர் வரை",
        climate: "வறண்ட மற்றும் மிதவெப்ப மண்டலம், 20°C முதல் 38°C வரை",
        sunlight: "பிரகாசமான சூரிய ஒளி (4-6 மணி நேரம்)",
        water: "2-3 வாரங்களுக்கு ஒருமுறை மண் முற்றிலும் காய்ந்த பின் நீர் ஊற்றவும்.",
        growingTips: "மணல் கலந்த சுடுமண் தொட்டியில் நடவும். முதிர்ந்த வெளிப்புற இலைகளைப் பயன்படுத்தலாம்."
      },
      hi: {
        season: "वसंत से शरद ऋतु",
        months: "मार्च से अक्टूबर",
        climate: "शुष्क और गर्म जलवायु, 20°C से 38°C",
        sunlight: "उज्ज्वल सीधी या छनी हुई धूप (4-6 घंटे)",
        water: "2-3 सप्ताह में एक बार; मिट्टी सूखने पर ही पानी दें।",
        growingTips: "रेतीली मिट्टी और अच्छे जल निकासी वाले गमले का उपयोग करें।"
      },
      ml: {
        season: "മാർച്ച് മുതൽ ഒക്ടോബർ വരെ",
        months: "മാർച്ച് - ഒക്ടോബർ",
        climate: "20°C മുതൽ 38°C വരെ",
        sunlight: "നല്ല വെയിൽ (4-6 മണിക്കൂർ)",
        water: "2-3 ആഴ്ചയിൽ ഒരിക്കൽ മാത്രം നനയ്ക്കുക.",
        growingTips: "മണൽ ചേർത്ത മണ്ണിൽ നടുക."
      },
      kn: {
        season: "ಮಾರ್ಚ್ ನಿಂದ ಅಕ್ಟೋಬರ್",
        months: "ಮಾರ್ಚ್ - ಅಕ್ಟೋಬರ್",
        climate: "20°C ನಿಂದ 38°C ತಾಪಮಾನ",
        sunlight: "ಉತ್ತಮ ಬಿಸಿಲು (4-6 ಗಂಟೆ)",
        water: "2-3 ವಾರಗಳಿಗೊಮ್ಮೆ ಮಾತ್ರ ನೀರುಣಿಸಿ.",
        growingTips: "ಮರಳು ಮಿಶ್ರಿತ ಮಣ್ಣನ್ನು ಬಳಸಿ."
      }
    }
  },

  money_plant: {
    botanicalName: "Epipremnum aureum (Pothos)",
    names: {
      en: "Money Plant (Devil's Ivy / Golden Pothos)",
      ta: "மணி பிளான்ட் (போத்தோஸ்)",
      hi: "मनी प्लांट (पोथोस)",
      ml: "മണി പ്ലാന്റ് (പോത്തോസ്)",
      kn: "ಮನಿ ಪ್ಲಾಂಟ್ (ಪೋಥೋಸ್)"
    },
    season: {
      en: {
        season: "Year-Round (Active in Spring & Summer)",
        months: "All Year",
        climate: "15°C to 30°C (59°F - 86°F), Adaptable indoor vine",
        sunlight: "Medium to bright indirect light; survives low light",
        water: "Water once a week or when top 2 inches feel dry. Can also grow in water jars.",
        growingTips: "Prune long runners to maintain bushy shape. Replace water weekly if grown hydroponically in glass containers."
      },
      ta: {
        season: "ஆண்டு முழுவதும் (வசந்த காலம் மற்றும் கோடையில் வேகமான வளர்ச்சி)",
        months: "வருடம் முழுவதும்",
        climate: "15°C முதல் 30°C வரை, சிறந்த உள்ளரங்கு கொடி",
        sunlight: "மறைமுக சூரிய ஒளி அல்லது குறைந்த வெளிச்சம்",
        water: "வாரத்திற்கு ஒருமுறை நீர் ஊற்றவும். கண்ணாடி பாட்டிலில் தண்ணீரிலும் வளர்க்கலாம்.",
        growingTips: "நீரில் வளர்த்தால் வாரமொருமுறை தண்ணீரை மாற்றவும். அடர்த்தியாக வளர நுனிகளை வெட்டவும்."
      },
      hi: {
        season: "साल भर (वसंत और गर्मी में तेज विकास)",
        months: "पूरे साल",
        climate: "15°C से 30°C, इनडोर बेल",
        sunlight: "अप्रत्यक्ष मध्यम से उज्ज्वल प्रकाश",
        water: "सप्ताह में एक बार या मिट्टी सूखने पर। पानी की बोतल में भी उगा सकते हैं।",
        growingTips: "पानी में उगा रहे हैं तो हर हफ्ते पानी बदलें। बेल को घना बनाने के लिए प्रूनिंग करें।"
      },
      ml: {
        season: "വർഷം മുഴുവൻ",
        months: "എല്ലാ മാസങ്ങളിലും",
        climate: "15°C മുതൽ 30°C വരെ",
        sunlight: "നേരിട്ടല്ലാത്ത വെളിച്ചം",
        water: "ആഴ്ചയിലൊരിക്കൽ നനയ്ക്കുക. വെള്ളത്തിലും വളർത്താം.",
        growingTips: "വെള്ളത്തിലാണ് വളർത്തുന്നതെങ്കിൽ ആഴ്ചയിൽ ഒരിക്കൽ വെള്ളം മാറ്റുക."
      },
      kn: {
        season: "ವರ್ಷಪೂರ್ತಿ",
        months: "ವರ್ಷವಿಡೀ",
        climate: "15°C ನಿಂದ 30°C",
        sunlight: "ಪರೋಕ್ಷ ಬೆಳಕು",
        water: "ವಾರಕ್ಕೊಮ್ಮೆ ನೀರುಣಿಸಿ ಅಥವಾ ನೀರಿನ ಬಾಟಲಿಯಲ್ಲಿ ಬೆಳೆಸಿ.",
        growingTips: "ವಾರಕ್ಕೊಮ್ಮೆ ನೀರನ್ನು ಬದಲಾಯಿಸಿ."
      }
    }
  },

  neem: {
    botanicalName: "Azadirachta indica",
    names: {
      en: "Neem Tree",
      ta: "வேப்ப மரம்",
      hi: "नीम का पेड़",
      ml: "വേപ്പ്",
      kn: "ಬೇವಿನ ಮರ"
    },
    season: {
      en: {
        season: "Spring to Early Monsoon",
        months: "May to August",
        climate: "Hot arid to semi-tropical, 22°C to 45°C",
        sunlight: "Full direct sun",
        water: "Low water requirements once established; highly drought-resistant.",
        growingTips: "Plant in well-drained soil. Excellent natural pest deterrent for garden plants."
      },
      ta: {
        season: "வசந்த காலம் முதல் ஆடிப் பட்டம் வரை",
        months: "மே முதல் ஆகஸ்ட் வரை",
        climate: "வெப்ப மண்டலம், 22°C முதல் 45°C வரை",
        sunlight: "முழு நேரடி வெயில்",
        water: "குறைந்த தண்ணீர் தேவை, வறட்சியைத் தாங்கும்.",
        growingTips: "இயற்கையான பூச்சி விரட்டியாகச் செயல்படும்."
      },
      hi: {
        season: "वसंत से वर्षा ऋतु",
        months: "मई से अगस्त",
        climate: "गर्म एवं शुष्क, 22°C से 45°C",
        sunlight: "पूरी धूप",
        water: "कम पानी, सूखा सहन करने में सक्षम।",
        growingTips: "उद्यान के लिए प्राकृतिक कीटनाशक का काम करता है।"
      },
      ml: {
        season: "മെയ് മുതൽ ആഗസ്റ്റ് വരെ",
        months: "മെയ് - ആഗസ്റ്റ്",
        climate: "22°C മുതൽ 45°C വരെ",
        sunlight: "നല്ല വെയിൽ",
        water: "കുറഞ്ഞ ജലാംശം മതിയാകും.",
        growingTips: "പ്രകൃതിദത്ത കീടനാശിനിയാണ്."
      },
      kn: {
        season: "ಮೇ ನಿಂದ ಆಗಸ್ಟ್",
        months: "ಮೇ - ಆಗಸ್ಟ್",
        climate: "22°C ನಿಂದ 45°C",
        sunlight: "ಪೂರ್ಣ ಸೂರ್ಯನ ಬೆಳಕು",
        water: "ಕಡಿಮೆ ನೀರಿನ ಅಗತ್ಯತೆ.",
        growingTips: "ನೈಸರ್ಗಿಕ ಕೀಟನಾಶಕ ಗುಣ ಹೊಂದಿದೆ."
      }
    }
  }
};
