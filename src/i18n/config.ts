import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import he from "./he/translations.json";
import en from "./en/translations.json";
import { useAppSelector } from "../hooks/hooks";

i18n.use(initReactI18next).init({
  lng: "he",

  fallbackLng: "he",
  resources: {
    he: {
      translation: he,
    },
    en: {
      translation: en,
    },
  },
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

i18n.languages = ["he", "en"];
export default i18n;
