import React, { useState, useEffect} from 'react';
import ReactGA from "react-ga4";
import './style/main.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next"; // ✅ Добавляем useTranslation
import './i18n';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Handpieces from './pages/Handpieces';
import SerumsPage from './pages/SerumsPage';
import SerumProductPage from './pages/SerumProductPage';
import Contacts from './pages/Contacts';
import ProductList from './components/productList/ProductList';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './utils/scrollToTop';
import MobileNav from './components/mobileNav/MobileNav';
import ThankYou from "./pages/ThankYou";
import NotFound from './pages/NotFound';

import devices from "./locales/fi/devices.json"; 
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

function AnimatedRoutes() {
  const location = useLocation();
  const { t } = useTranslation(["devices", "common"]);

  const productList = Object.values(devices.products);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route
            path="/jetPeel"
            element={
              <ProductList
                title={t("devices.title")}
                description={t("devices.description")}
                products={productList}
                category="jetPeel"
              />
            }
          />
          <Route path="/jetPeel/:slug" element={<ProductPage products={devices.products} />} />
          <Route path="/handpieces" element={<Handpieces />} />
          <Route path="/serums" element={<SerumsPage />} />
          <Route path="/serums/:setSlug/:productSlug" element={<SerumProductPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/thank" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const openNav = () => setNavOpen(true);
  const closeNav = () => setNavOpen(false);

   // Google Analytics INIT
   useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.initialize("G-XXXXXXXXXX"); // ← замени на свой реальный ID
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }
  }, [location]);

  return (
    <HelmetProvider>
      <div className="App">
        <ScrollToTop />
        <Navbar openNav={openNav} />
        <MobileNav navOpen={navOpen} closeNav={closeNav} />
        <Breadcrumbs />
        <AnimatedRoutes />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
