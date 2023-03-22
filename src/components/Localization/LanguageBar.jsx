import React from "react";
import "./LanguageBar.scss";
import ROFlag from "../../utils/flag-ro.png";
import UKFlag from "../../utils/flag-uk.png";
import strings from "../../config/strings";

const { general: generalStrings } = strings;

const LanguageBar = () => {
  const handleROFlagClick = () => {
    console.log("Change language to romanian");
  };

  const handleUKFlagClick = () => {
    console.log("Change language to english");
  };

  return (
    <div className="languageHeader">
      <button className="btn" onClick={handleROFlagClick}>
        <img src={ROFlag} className="language-flag" alt="Romanian flag" />
        {generalStrings.romanianLanguageButton}
      </button>
      <button className="btn" onClick={handleUKFlagClick}>
        <img src={UKFlag} className="language-flag" alt="UK flag" />
        {generalStrings.englishLanguageButton}
      </button>
    </div>
  );
};

export default LanguageBar;
