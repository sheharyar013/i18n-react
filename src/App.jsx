import { useState } from "react";
import { useTranslation } from "react-i18next";
function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "de" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  return (
    <div className="App">
      <h1>{t("headerTitle", { appName: "App for Translations" })}</h1>
      <h3>Current Language: {currentLanguage}</h3>
      <button type="button" onClick={handleChangeLanguage}>
        Change Language
      </button>
    </div>
  );
}
export default App;
