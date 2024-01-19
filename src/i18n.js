import i18n from "i18next";
import { /*useTranslation,*/ initReactI18next } from "react-i18next";

import enJSON from "./locale/en.json";
import deJSON from "./locale/de.json";
import urJSON from "./locale/ur.json";


i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    de: { ...deJSON },
    ur: {...urJSON},
  }, // Where we're gonna put translations' files
  lng: "en", // Set the initial language of the App
});
