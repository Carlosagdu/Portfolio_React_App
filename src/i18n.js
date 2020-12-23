import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homeEN from "./locales/en/homeEN.json";
import homeES from "./locales/es/homeES.json";
import greetingEN from "./locales/en/greetingEN.json";
import greetingES from "./locales/es/greetingES.json";
import skillsEN from "./locales/en/skillsEN.json";
import skillsES from "./locales/es/skillsES.json";
import educationEn from "./locales/en/educationEN.json";
import educationES from "./locales/es/educationES.json";
import experienceEN from "./locales/en/experienceEN.json";
import experienceES from "./locales/es/experienceES.json";
import contactEN from "./locales/en/contactEN.json";
import contactES from "./locales/es/contactES.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    home: homeEN,
    greeting: greetingEN,
    skills: skillsEN,
    education: educationEn,
    experience: experienceEN,
    contact: contactEN,
  },
  es: {
    home: homeES,
    greeting: greetingES,
    skills: skillsES,
    education: educationES,
    experience: experienceES,
    contact: contactES,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    returnObjects: true,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
