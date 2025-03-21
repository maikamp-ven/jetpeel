import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './style.css';

const MobileNav = ({ navOpen, closeNav }) => {
  const { t } = useTranslation();

  return (
    <div className={`mobile__nav ${navOpen ? 'open' : ''}`}>
      <button onClick={closeNav} className="close-btn">
        ✕
      </button>
      <ul className="mobile__nav-links">
        <li>
          <NavLink to="/" onClick={closeNav}>
            {t('mobileNav.technology')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/jetPeel" onClick={closeNav}>
            {t('mobileNav.devices')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/handpieces" onClick={closeNav}>
            {t('mobileNav.handpieces')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/serums" onClick={closeNav}>
            {t('mobileNav.serums')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" onClick={closeNav}>
            {t('mobileNav.contacts')}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
