import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CookieSettingsModal from './CookieSettingsModal';
import './style.css';

const GA_ID = 'G-YJM02HFSKC';

const loadGAScript = () => {
  if (document.getElementById('ga-script')) return;
  const script = document.createElement('script');
  script.id = 'ga-script';
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;
  // Инициализация с дефолтными значениями: обязательные куки всегда granted
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    personalization_storage: 'denied',
    functionality_storage: 'granted', 
    wait_for_update: 500
  });
};

const CookieConsent = () => {
  const { t } = useTranslation('cookies');

  // По умолчанию essential (functionality) всегда true
  const [preferences, setPreferences] = useState({
    functionality: true,
    analytics: false,
    ads: false,
    personalization: false,
  });
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('cookie_consent');
    if (!stored) {
      setShowBanner(true);
    } else {
      try {
        const { prefs } = JSON.parse(stored);
        // Обязательно устанавливаем functionality в true
        const updatedPrefs = { ...prefs, functionality: true };
        setPreferences(updatedPrefs);
        if (updatedPrefs.analytics) {
          loadGAScript();
        }
        window.gtag?.('consent', 'update', {
          analytics_storage: updatedPrefs.analytics ? 'granted' : 'denied',
          ad_storage: updatedPrefs.ads ? 'granted' : 'denied',
          personalization_storage: updatedPrefs.personalization ? 'granted' : 'denied',
          functionality_storage: 'granted'
        });
      } catch (err) {
        console.warn('Invalid cookie_consent data:', err);
        setShowBanner(true);
      }
    }
    setInitialized(true);
  }, []);

  const updateConsent = (prefs) => {
    const consentData = { prefs };
    sessionStorage.setItem('cookie_consent', JSON.stringify(consentData));
    if (prefs.analytics) {
      loadGAScript();
    }
    // Обновление настроек Consent Mode с использованием стандартных ключей
    window.gtag?.('consent', 'update', {
      analytics_storage: prefs.analytics ? 'granted' : 'denied',
      ad_storage: prefs.ads ? 'granted' : 'denied',
      personalization_storage: prefs.personalization ? 'granted' : 'denied',
      functionality_storage: 'granted' // обязательные куки
    });
    window.gtag?.('event', 'cookie_consent_update', {
      functionality: true, // всегда true
      analytics: prefs.analytics,
      ads: prefs.ads,
      personalization: prefs.personalization
    });
  };

  const acceptAll = () => {
    const granted = { functionality: true, analytics: true, ads: true, personalization: true };
    updateConsent(granted);
    setPreferences(granted);
    setShowBanner(false);
    window.gtag?.('event', 'cookie_consent', { action: 'accept_all' });
  };

  const rejectAll = () => {
    const denied = { functionality: true, analytics: false, ads: false, personalization: false };
    updateConsent(denied);
    setPreferences(denied);
    setShowBanner(false);
    window.gtag?.('event', 'cookie_consent', { action: 'reject_all' });
  };

  // Сброс согласия и повторный показ баннера
  const withdrawConsent = () => {
    sessionStorage.removeItem('cookie_consent');
    const defaultPrefs = { functionality: true, analytics: false, ads: false, personalization: false };
    setPreferences(defaultPrefs);
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        personalization_storage: 'denied',
        functionality_storage: 'granted'
      });
      window.gtag('event', 'cookie_consent', { action: 'withdraw' });
    }
    setShowBanner(true);
  };

  const savePreferences = (newPrefs) => {
    const finalPrefs = {
      functionality: true, // всегда обязательны
      analytics: newPrefs.analytics || false,
      ads: newPrefs.ads || false,
      personalization: newPrefs.personalization || false
    };
    updateConsent(finalPrefs);
    setPreferences(finalPrefs);
    setShowModal(false);
    setShowBanner(false);
  };

  if (!initialized) return null;

  return (
    <>
      {showBanner && (
        <div className="cookie-banner">
          <div className="cookie-banner__content">
            <p>{t("message")}</p>
            <div className="cookie-banner__buttons">
              <button onClick={acceptAll}>{t("accept_all")}</button>
              <button onClick={rejectAll}>{t("reject_all")}</button>
              <button onClick={() => setShowModal(true)}>{t("settings_title")}</button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <CookieSettingsModal
          preferences={preferences}
          onSave={savePreferences}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Фиксированная кнопка для изменения настроек куки */}
      {!showBanner && !showModal && (
        <div className="cookie-reset-button" onClick={withdrawConsent} data-tooltip={t("change_cookie_preferences")}>
          {t("change_cookie_preferences")}
        </div>
      )}
    </>
  );
};

export default CookieConsent;
