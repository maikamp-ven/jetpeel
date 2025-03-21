import React, { useEffect } from "react";
import { useLocation} from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import Button from "../components/button/Button";
import SerumSet from "../components/serumSet/SerumSet";

import getSerumsData from "../helpers/serumsData";

import banner from "../img/jetCare-serums/JetCare_banner_all_products.png";
import imgHero1 from "../img/jetCare-serums/JetCare_all_product.png";
import imgHero2 from "../img/jetCare-serums/Indications.png";
import imgHero3 from "../img/jetCare-serums/Treatment sequence.png";

const SerumsPage = () => {
  const location = useLocation();
  const { t } = useTranslation("serums");
  const serumsData = getSerumsData(); 

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        requestAnimationFrame(() => {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }, [location]);

  return (
    <main className="jetCare">
      <Helmet>
        <title>{t("title")} | JetPeel</title>
        <meta name="description" content={t("meta.description")} />
        <meta name="keywords" content={t("meta.keywords")} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${t("title")} | JetPeel`} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:url" content="https://jetpeel.fi/serums" />
        <meta property="og:image" content="https://jetpeel.fi/img/serums-banner.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProductCollection",
            "name": t("title"),
            "description": t("meta.description"),
            "url": "https://jetpeel.fi/serums",
            "image": "https://jetpeel.fi/img/serums-banner.jpg",
          })}
        </script>
      </Helmet>

      {/* Баннер */}
      <section className="header__banner-wrapper">
        <img className="header__banner" src={banner} alt={t("banner_alt")} />
      </section>

      {/* Описание серумов */}
      <section className="hero__section section">
        <div className="container">
          <header className="hero__content-header">
            <h1 className="title-1">{t("header.title")}</h1>
            <p className="hero__content-subtitle">{t("header.subtitle")}</p>
          </header>

          <div className="hero__row">
            <div className="hero__content">
              <div className="hero__content-text">
                <p dangerouslySetInnerHTML={{ __html: t("hero.description") }} />
              </div>
              <div className="hero__content-button">
                <Button link="/contacts" label={t("contact_button")} />
              </div>
            </div>
            <figure className="hero__img">
              <img src={imgHero1} alt={t("hero.image_alt")} loading="lazy" />
            </figure>
          </div>

          {/* Список показаний */}
          <div className="hero__row hero__row-reverse">
            <div className="hero__content">
              <div className="hero__content-text">
                <h2 className="specialty__title">{t("indications.title")}</h2>
                <ul className="services__slide-list">
                  {t("indications.list", { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="hero__content-button">
                <Button link="/contacts" label={t("contact_button")} />
              </div>
            </div>
            <figure className="hero__img">
              <img src={imgHero2} alt={t("indications.image_alt")} />
            </figure>
          </div>

          <figure className="hero__sequence-img">
            <img src={imgHero3} alt={t("sequence.image_alt")} />
          </figure>
        </div>
      </section>

      {/* Серумы */}
      <section className="serums__section section">
        <div className="container">
          <header className="hero__content-header">
            <h2 className="title-1">{t("sequence.title")}</h2>
            <p className="hero__content-subtitle">{t("sequence.subtitle")}</p>
          </header>

          {serumsData.map((serum) => (
            <section key={serum.slug} id={serum.slug} className="serum__set-section">
              <SerumSet serum={serum} />
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SerumsPage;
