import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';
import { NavLink } from 'react-router-dom';
import SerumModal from '../serumModal/SerumModal';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import './style.css';
import { Bars3Icon } from '@heroicons/react/20/solid';

// Импорт изображений флагов
import fiFlag from '../../img/logo/fi.svg';
import enFlag from '../../img/logo/gb.svg';
import etFlag from '../../img/logo/ee.svg';

const languages = [
  { code: 'fi', label: 'Suomi', flag: fiFlag },
  { code: 'en', label: 'English', flag: enFlag },
  { code: 'et', label: 'Eesti', flag: etFlag }
];

const Navbar = ({ openNav }) => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Добавлено состояние для меню
  let timeoutId = null;

  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  const [darkMode] = useLocalStorage('darkMode', detectDarkMode());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode);
  }, [darkMode]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    setIsDropdownOpen(false); // Закрываем меню после выбора
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo__nav">
            <img style={{ content: 'var(--logo-nav)' }} alt="logo-nav" />
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                {t('nav.technology')}
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/jetPeel" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                {t('nav.devices')}
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/handpieces" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                {t('nav.handpieces')}
              </NavLink>
            </li>
            <li
              className="nav-list__item navbar__dropdown"
              onMouseEnter={() => clearTimeout(timeoutId) || setModalOpen(true)}
              onMouseLeave={() => timeoutId = setTimeout(() => setModalOpen(false), 200)}
            >
              <NavLink to="/serums" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                {t('nav.treatments')} <span className="dropdown-icon">▼</span>
              </NavLink>
              {modalOpen && <SerumModal isOpen={modalOpen} setModalOpen={setModalOpen} />}
            </li>
            <li className="nav-list__item">
              <NavLink to="/contacts" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                {t('nav.contact')}
              </NavLink>
            </li>
          </ul>

          {/* Языковое меню с флажками */}
          <div className="language-menu">
            <div className="language-dropdown">
              <button 
                className="language-button" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img src={languages.find(l => l.code === selectedLang)?.flag} alt={selectedLang} className="language-flag" />
              </button>
              {isDropdownOpen && (
                <ul className="language-list">
                  {languages.map((lang) => (
                    <li key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
                      <img src={lang.flag} alt={lang.label} className="language-flag" />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <button onClick={openNav} className="nav__icon">
            <Bars3Icon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
