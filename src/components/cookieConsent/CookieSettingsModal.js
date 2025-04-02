import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

const CookieSettingsModal = ({ preferences = {}, onSave, onClose }) => {
  const { t } = useTranslation("cookies");

  const [localPrefs, setLocalPrefs] = useState({
    functionality: true,
    analytics: preferences.analytics ?? false,
    ads: preferences.ads ?? false,
    personalization: preferences.personalization ?? false
  });

  
  const [expanded, setExpanded] = useState({
    functionality: false,
    analytics: false,
    ads: false,
    personalization: false
  });

  // Синхронизация с пропсами
  useEffect(() => {
    setLocalPrefs({
      functionality: true,
      analytics: preferences.analytics ?? false,
      ads: preferences.ads ?? false,
      personalization: preferences.personalization ?? false
    });
  }, [preferences]);

  const handleChange = (key) => {
    if (key === 'functionality') return;
    setLocalPrefs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleAccordion = (key) => {
    setExpanded(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    onSave(localPrefs);
  };

  return (
    <div className="cookie-modal-overlay">
      <div className="cookie-modal">
        <h2>{t("settings_title")}</h2>
        <p className="cookie-modal-subtitle">{t("description")}</p>

        <div className="cookie-options">
          <div className="cookie-option">
            <label>
              <input type="checkbox" checked={true} disabled />
              <span>{t("functionality")}</span>
            </label>
            <p className="cookie-description">
              {t("functionality_description_short")}{" "}
              <button type="button" className="accordion-toggle" onClick={() => toggleAccordion("functionality")}>
                {expanded.functionality ? t("show_less") : t("show_more")}
              </button>
            </p>
            {expanded.functionality && (
              <div className="accordion-content">
                <p>{t("functionality_description")}</p>
              </div>
            )}
          </div>

          {/* Analytics */}
          <div className="cookie-option">
            <label>
              <input type="checkbox" checked={!!localPrefs.analytics} onChange={() => handleChange("analytics")} />
              <span>{t("analytics")}</span>
            </label>
            <p className="cookie-description">
              {t("analytics_description_short")}{" "}
              <button type="button" className="accordion-toggle" onClick={() => toggleAccordion("analytics")}>
                {expanded.analytics ? t("show_less") : t("show_more")}
              </button>
            </p>
            {expanded.analytics && (
              <div className="accordion-content">
                <p>{t("analytics_description")}</p>
              </div>
            )}
          </div>

          {/* Advertising */}
          <div className="cookie-option">
            <label>
              <input type="checkbox" checked={!!localPrefs.ads} onChange={() => handleChange("ads")} />
              <span>{t("ads")}</span>
            </label>
            <p className="cookie-description">
              {t("ads_description_short")}{" "}
              <button type="button" className="accordion-toggle" onClick={() => toggleAccordion("ads")}>
                {expanded.ads ? t("show_less") : t("show_more")}
              </button>
            </p>
            {expanded.ads && (
              <div className="accordion-content">
                <p>{t("ads_description")}</p>
              </div>
            )}
          </div>

          {/* Personalization */}
          <div className="cookie-option">
            <label>
              <input type="checkbox" checked={!!localPrefs.personalization} onChange={() => handleChange("personalization")} />
              <span>{t("personalization")}</span>
            </label>
            <p className="cookie-description">
              {t("personalization_description_short")}{" "}
              <button type="button" className="accordion-toggle" onClick={() => toggleAccordion("personalization")}>
                {expanded.personalization ? t("show_less") : t("show_more")}
              </button>
            </p>
            {expanded.personalization && (
              <div className="accordion-content">
                <p>{t("personalization_description")}</p>
              </div>
            )}
          </div>
        </div>

        <div className="cookie-modal__buttons">
          <button className="btn-cancel" onClick={onClose}>
            {t("cancel")}
          </button>
          <button className="btn-save" onClick={handleSave}>
            {t("save_settings")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsModal;
