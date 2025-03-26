import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем переводы
import homeFI from './locales/fi/home.json';
import devicesFI from './locales/fi/devices.json';
import handpiecesFI from './locales/fi/handpieces.json';
import commonFI from './locales/fi/common.json';
import serumsFI from './locales/fi/serums.json';
import antiAgingFI from './locales/fi/serums/antiAging.json';
import ayurvedaFI from './locales/fi/serums/ayurveda.json';
import boostFI from './locales/fi/serums/boost.json';
import greenSetFI from './locales/fi/serums/greenSet.json';
import hydroFI from './locales/fi/serums/hydro.json';
import renewalFI from './locales/fi/serums/renewal.json';
import selectiveCareFI from './locales/fi/serums/selectiveCare.json';
import youthFI from './locales/fi/serums/youth.json';
import cookiesFI from './locales/fi/cookies.json';

import homeEN from './locales/en/home.json';
import devicesEN from './locales/en/devices.json';
import handpiecesEN from './locales/en/handpieces.json';
import commonEN from './locales/en/common.json';
import serumsEN from './locales/en/serums.json';
import antiAgingEN from './locales/en/serums/antiAging.json';
import ayurvedaEN from './locales/en/serums/ayurveda.json';
import boostEN from './locales/en/serums/boost.json';
import greenSetEN from './locales/en/serums/greenSet.json';
import hydroEN from './locales/en/serums/hydro.json';
import renewalEN from './locales/en/serums/renewal.json';
import selectiveCareEN from './locales/en/serums/selectiveCare.json';
import youthEN from './locales/en/serums/youth.json';
import cookiesEN from './locales/en/cookies.json';

import homeET from './locales/et/home.json';
import devicesET from './locales/et/devices.json';
import handpiecesET from './locales/et/handpieces.json';
import commonET from './locales/et/common.json';
import serumsET from './locales/et/serums.json';
import antiAgingET from './locales/et/serums/antiAging.json';
import ayurvedaET from './locales/et/serums/ayurveda.json';
import boostET from './locales/et/serums/boost.json';
import greenSetET from './locales/et/serums/greenSet.json';
import hydroET from './locales/et/serums/hydro.json';
import renewalET from './locales/et/serums/renewal.json';
import selectiveCareET from './locales/et/serums/selectiveCare.json';
import youthET from './locales/et/serums/youth.json';
import cookiesET from './locales/et/cookies.json';

const resources = {
  fi: {
    home: homeFI,
    devices: devicesFI,
    handpieces: handpiecesFI,
    common: commonFI,
    serums: serumsFI,
    cookies: cookiesFI,
    serumsData: {
      antiAging: antiAgingFI,
      ayurveda: ayurvedaFI,
      boost: boostFI,
      greenSet: greenSetFI,
      hydro: hydroFI,
      renewal: renewalFI,
      selectiveCare: selectiveCareFI,
      youth: youthFI,
    },
  },
  en: {
    home: homeEN,
    devices: devicesEN,
    handpieces: handpiecesEN,
    common: commonEN,
    serums: serumsEN,
    cookies: cookiesEN,
    serumsData: {
      antiAging: antiAgingEN,
      ayurveda: ayurvedaEN,
      boost: boostEN,
      greenSet: greenSetEN,
      hydro: hydroEN,
      renewal: renewalEN,
      selectiveCare: selectiveCareEN,
      youth: youthEN,
    },
  },
  et: {
    home: homeET,
    devices: devicesET,
    handpieces: handpiecesET,
    common: commonET,
    serums: serumsET,
    cookies: cookiesET,
    serumsData: {
      antiAging: antiAgingET,
      ayurveda: ayurvedaET,
      boost: boostET,
      greenSet: greenSetET,
      hydro: hydroET,
      renewal: renewalET,
      selectiveCare: selectiveCareET,
      youth: youthET,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fi', // Основной язык
  fallbackLng: 'fi',
  ns: ['home', 'devices', 'handpieces', 'common', 'serums', 'serumsData', 'cookies'],
  defaultNS: 'home',
  interpolation: { escapeValue: false },
});

export default i18n;
