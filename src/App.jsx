import { useState } from "react";
import { useTranslation } from "react-i18next";
function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const handleChangeLanguage = (value) => {
    setCurrentLanguage(value);
    changeLanguage(value);
  };
  return (
    <div className="App">
      <h1>{t("headerTitle", { appName: "App for Translations" })}</h1>
      <h3>Current Language: {currentLanguage}</h3>
      <button type="button" onClick={() => handleChangeLanguage("ur")}>
        Urdu Language
      </button>
      <button type="button" onClick={() => handleChangeLanguage("en")}>
        US Language
      </button>
      <button type="button" onClick={() => handleChangeLanguage("de")}>
        German Language
      </button>
    </div>
  );
}
export default App;
