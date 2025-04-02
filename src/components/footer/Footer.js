import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';
import { Helmet } from 'react-helmet-async';
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Modal from '../modal/Modal';
import GoogleMap from '../map/GoogleMap';

const Footer = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [darkMode] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode);
  }, [darkMode]);

  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPB Finland",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kauppiaankatu 2",
      "addressLocality": "Helsinki",
      "addressCountry": "FI"
    },
    "telephone": "+358 45 229 1929",
    "url": "https://ipb.fi/ylellinen-kosmetiikka-verkkokauppa/",
    "sameAs": [
      "https://www.instagram.com/jetpeel_finland/",
      "https://t.me/ipbfi",
      "https://www.facebook.com/profile.php?id=61572906757644",
      "https://wa.me/+358452291929"
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__logo">
              <a href="https://ipb.fi/" target="_blank" rel="noopener noreferrer"><img style={{ content: 'var(--logo)' }} alt="IPB Finland Logo" className="footer__logo-img" /></a>
              <div className="footer__logo-title">
                <p>{t('footer.description')}</p>
              </div>
            </div>

            <address className="footer__nav">
              <h3 className="footer__title">{t('footer.contact_title')}</h3>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="tel:+358452291929" className="footer__list-link">{t('footer.phone')}: +358 45 229 1929</a>
                </li>
                <li className="footer__list-item">{t('footer.company_id')}: 2787520-2</li>
                <li className="footer__list-item">{t('footer.address')}: Kauppiaankatu 2, HELSINKI</li>
              </ul>
            </address>

            <div className="footer__nav">
              <GoogleMap />
            </div>
          </div>

          <div className="footer__wrapper-social">
            <ul className="social" aria-label={t('footer.social_media')}>
              <li className="social__item">
                <a href="https://www.instagram.com/jetpeel_finland/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} aria-label="Instagram" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://t.me/ipbfi" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTelegram} aria-label="Telegram" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.facebook.com/profile.php?id=61572906757644" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} aria-label="Facebook" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://wa.me/+358452291929" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} aria-label="WhatsApp" />
                </a>
              </li>
            </ul>

            <div className="copyright">
              <button className="footer__copyright" onClick={openModal}>
                {t('footer.privacy_policy')} © 2025 IPB
              </button>
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </footer>
    </>
  );
};

export default Footer;
