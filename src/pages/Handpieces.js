import React from 'react';
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import banner from '../img/handpieces/Handpiece-banner.png';
import Button from '../components/button/Button'
import Card from '../components/card/Card'
import imgHero1 from '../img/handpieces/JetPeel Handpiece.png'
import imgHero2 from '../img/handpieces/JetPeel-Unique-Epidermal-Effects.png'
import imgHero3 from '../img/handpieces/vacum.jpg'
import imgHero4 from '../img/handpieces/PrestigeJe.jpg'
import imgHero5 from '../img/handpieces/Handpiece Boxes Non-Sterile 1.png'
import imgHero6 from '../img/handpieces/Handpieces Non-Sterile.png';
import imgHero7 from '../img/handpieces/Handpieces Sterile .png'
import imgHero8 from '../img/handpieces/Handpiece Boxes Sterile 1.png'

import SingleJetNarrov from "../img/handpieces/Single-197x197-1.png"; 
import DoubleJet from "../img/handpieces/Double-197x197-1.png"; 
import TripleJet from "../img/handpieces/Triple-197x197-1.png"; 

import BlueLed from "../img/handpieces/Blue-Led.png";
import GreenLed from "../img/handpieces/Green-LED-Tip.png";
import YellowGreenLed from "../img/handpieces/Yellow-Green-LED-Tip.png";
import AmberLed from "../img/handpieces/Amber-LED-Tip.png";
import RedLed from "../img/handpieces/RED-LED.png";

import blueJetImg from "../img/handpieces/BlueLED.png";
import greenJetImg from "../img/handpieces/Green-LED-11.png";
import yellowGreenJetImg from "../img/handpieces/Yellow-Green-LED-11.png";
import amberJetImg from "../img/handpieces/Amber-LED-1.png";
import redJetImg from "../img/handpieces/LED-environment.3-1.png";

const componentImages = {
  "SingleJet Narrow": SingleJetNarrov,
  "DoubleJet": DoubleJet,
  "TripleJet": TripleJet,
};

const ledComponentImages = {
  "Sininen LED-komponentti": BlueLed,
  "Vihreä LED-komponentti": GreenLed,
  "Kelta-vihreä LED-komponentti": YellowGreenLed,
  "Meripihkanvärinen LED-komponentti": AmberLed,
  "Punainen LED-komponentti": RedLed
};

const jetpeelLedComponentImages = {
  "Sininen valo (460-470 nm)": blueJetImg,
  "Vihreä valo (535-545 nm)": greenJetImg,
  "Kelta-vihreä valo (565-575 nm)": yellowGreenJetImg,
  "Meripihkanvärinen valo (585-595 nm)": amberJetImg,
  "Punainen valo (620-630 nm)": redJetImg
};


const Handpieces = () => {

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "JetPeel Käsikappaleet",
    "image": "https://jetpeel.fi/path-to-image.jpg",
    "description": "JetPeel™-käsikappale tarjoaa turvallisen ja tehokkaan hydroporaatiohoidon.",
    "brand": {
    "@type": "Brand",
    "name": "JetPeel"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  };
  
  const { t: tHandpieces } = useTranslation("handpieces");
  const { t: tCommon } = useTranslation("common");

  return (
      <main>
          <div className="header__banner-wrapper">
          <Helmet>
            <title>{tHandpieces("meta.title")}</title>
            <meta name="description" content={tHandpieces("meta.description")} />
            <meta name="keywords" content={tHandpieces("meta.keywords")}/>
            <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
          </Helmet>

            <img
              className="header__banner"
              src={banner}
              alt="handpieces-banner"
            />
          </div>

        <section className="hero__section section">
          <div className="container">
            <div className="hero__content-header">
              <h2 className="title-1">{tHandpieces("hero.title")}</h2>
            </div>
            <div className="hero__row">
              <div className="hero__content">
                <div className="hero__content-text">
                  <p dangerouslySetInnerHTML={{ __html: tHandpieces("hero.text1") }}></p>
                </div> 
                <div className="hero__content-button">
                <Button link="/contacts" label={tCommon("buttons.contact_us")} />
                </div>
              </div>
            <div className="hero__img">
                  <img src={imgHero1} alt="JetPeel-Handpiece"/>
                </div>
            </div>
             
            <div className="hero__row hero__row-reverse">
                <div className="hero__content">
                  <div className="hero__content-text">
                  <p dangerouslySetInnerHTML={{ __html: tHandpieces("hero.text2") }}></p>
              
                </div>
                <div className="hero__content-button">
                <Button link="/contacts" label={tCommon("buttons.contact_us")} />
                </div>
                
              </div>
              <div className="hero__img">
                  <img src={imgHero2} alt="JetPeel Epidermal Effects"/>
                </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="title-2">
            {tHandpieces("general_components")}
            </h2>
          <div className="cards__inner">
          {tHandpieces("components", { returnObjects: true }).map((component, index) => (
              <Card
                key={index}
                img={componentImages[component.title]}  
                title={component.title}
                label={component.label}
              />
            ))}
          </div>
          <h3 className="title-2">
          {tHandpieces("led_components")}
            </h3>
            <div className="cards__inner led-komponentit">
            {tHandpieces("ledComponents_card", { returnObjects: true }).map((component, index) => (
              <Card
                key={index}
                img={ledComponentImages[component.slug]}  
                title={component.title}
                label={component.label}
              />
                ))}
          </div>
          </div>
        </section>

        <section className="hero__section section">
          <div className="container">
            <div className="hero__content-header">
              <h2 className="title-2">{tHandpieces("special_handpieces")}</h2>
            </div>
            <div className="hero__row">
              <div className="hero__content">
                <div className="hero__content-text">
                <h3 className="specialty__title">{tHandpieces("specialty.title1")}</h3>
                    <ul className="hero__list">
                    {tHandpieces("specialty.points1", { returnObjects: true }).map((point, index) => (
                       <li key={index}>{point}</li>
                    ))}
                    </ul>
                </div> 
              </div>
            <div className="hero__img">
                  <img src={imgHero3} alt="JetPeel-Handpiece"/>
                </div>
            </div>
             
            <div className="hero__row hero__row-reverse">
                <div className="hero__content">
                  <div className="hero__content-text">
                    <h3 className="specialty__title">{tHandpieces("specialty.title2")}</h3>
                    <ul className="hero__list">
                    {tHandpieces("specialty.points2", { returnObjects: true }).map((point, index) => (
                       <li key={index}>{point}</li>
                    ))}
                    </ul>
                </div>
              </div>
              <div className="hero__img">
                  <img src={imgHero4} alt="Epidermal-Effects"/>
                </div>
            </div>
          </div>
        </section>

        <section className="hero__section section">
          <div className="container">
            <div className="hero__row">
              <div className="hero__content">
                <div className="hero__content-text">
                    <ul className="hero__list-cover">
                      <li>{tHandpieces("non_sterile.title")}</li>
                      <li>{tHandpieces("non_sterile.points")}</li>
                    </ul>
                    <div className='img__cover-wrapper'>
                      <img src={imgHero5} alt={tHandpieces("non_sterile.title")}/>
                    </div>

                </div> 
              </div>
            <div className="hero__img">
                  <img src={imgHero6} alt="JetPeel-Handpiece"/>
                </div>
            </div>
             
            <div className="hero__row hero__row-reverse">
                <div className="hero__content">
                <div className="hero__content-text">
                    <ul className="hero__list-cover">
                      <li>{tHandpieces("sterile.title")}</li>
                      <li>{tHandpieces("sterile.points")}</li>
                    </ul>
                    <div className='img__cover-wrapper'>
                      <img src={imgHero8} alt={tHandpieces("sterile.title")}/>
                    </div>

                </div>
              </div>
              <div className="hero__img">
                  <img src={imgHero7} alt="Epidermal-Effects"/>
                </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="title-2">
            {tHandpieces("jet_led_components")}
            </h2>
          <div className="cards__inner">
          {tHandpieces("jetpeelLedComponents", { returnObjects: true }).map((component, index) => (
              <Card
                key={index}
                img={jetpeelLedComponentImages[component.slug]}  
                title={component.title}
                label={component.label}
              />
                ))}
          </div>
          </div>
        </section>
      </main>
  );
};

export default Handpieces;
