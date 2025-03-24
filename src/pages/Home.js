import { Helmet } from "react-helmet-async";
import Header from './../components/header/Header';
import Step from '../components/stepCard/StepCard';
import Button from '../components/button/Button';
import videoSrc from "../img/video/JetPeel Animation.mp4";
import gifImage1 from "../img/hero/Gif-2-infusion-2024-1.gif";
import gifImage2 from "../img/hero/Gif-3-exfoliation-2024.gif";
import { useTranslation, Trans } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["home"]);

  return (
    <>
      <Helmet>
        <title>{t('helmet.title')}</title>
        <meta name="description" content={t('helmet.description')} />
        <meta name="keywords" content={t('helmet.keywords')} />
      </Helmet>
      <Header
        title={t('header.title')}
        subtitle={t('header.subtitle')}
        text1={t('header.text1')}
        text2={t('header.text2')}
      />

      <main>
        <section className="video section">
          <div className="container">
            <h2 className="title-2">
              <span className='accent'>JetPeel - </span>
              {t('video.title')}
            </h2>
            <figure className='technology__video-container'>
              <video autoPlay loop muted playsInline className='video__file'>
                <source src={videoSrc} type="video/mp4" />
                {t('video.fallback')}
              </video>
            </figure>
          </div>
        </section>

        <section className="technology section">
          <div className="container">
            <div className="technology__info">
              <h2 className="technology__title title-2">
                {t('technology.title')}
              </h2>
              <div className="technology__content">
                <div className="technology__text-wrapper">
                  <p className="technology__text">{t('technology.text.text1')}</p>
                  <p className="technology__text">{t('technology.text.text2')}</p>
                  <p className="technology__text">
                    <Trans i18nKey="technology.text.text3">
                      <a href="/jetPeel">JetPeel™ - laite</a>
                    </Trans>
                  </p>
                  <p className="technology__text">{t('technology.text.text4')}</p>
                  <p className="technology__text">{t('technology.text.text5')}</p>
                  <div className="technology__buttons">
                    <Button 
                      link="/contact"
                      label={t('technology.buttons.contact')}
                      aria-label="Ota yhteyttä JetPeel-asiantuntijaan"
                    />
                    <Button
                      label={t('technology.buttons.readMore')}
                      link="/contact"
                      aria-label="Lue lisää JetPeel-teknologiasta"
                      rel="nofollow"
                    />
                  </div>
                </div>
                <div className="technology__gif">
                  <img 
                    src={gifImage1} 
                    alt={t('technology.gifs.gif1Alt')} 
                    className="gif-style" 
                    loading="lazy" 
                  />
                  <img 
                    src={gifImage2} 
                    alt={t('technology.gifs.gif2Alt')} 
                    className="gif-style" 
                    loading="lazy" 
                  />
                </div>
              </div>
            </div>

            <div className="technology__cards">
              <div className="technology__cards-inner">
              {t("steps", { returnObjects: true }).map((component, index) => (
                  <Step
                    key={index}
                    number={component.number}
                    title_card={component.title_card}
                    capacity_1={component.capacity_1}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="advantages section" id="benefits">
          <div className="container">
            <div className="advantages__card-wrapper">
              <div className="advantages__card">
                <h2 className="title-2 advantages__title">
                  <span className="accent">JetPeel - </span>
                  {t('advantages.title')}
                </h2>
                <p className="advantages__subtitle">{t('advantages.subtitle')}</p>
                <ul className="advantages__list">
                  {(Array.isArray(t('advantages.list', { returnObjects: true })) ? t('advantages.list', { returnObjects: true }) : []).map((item, index) => (
                  <li key={index} className="advantage__item">{item}</li>
                 ))}
                </ul>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;


// import { Helmet } from "react-helmet-async";
// import Header from './../components/header/Header';
// import Step from '../components/stepCard/StepCard'
// import {steps} from '../helpers/stepsList'
// import Button from '../components/button/Button';
// import videoSrc from "../img/video/JetPeel Animation.mp4"
// import gifImage1 from "../img/hero/Gif-2-infusion-2024-1.gif";
// import gifImage2 from "../img/hero/Gif-3-exfoliation-2024.gif";

// const Home = () => {
//   return (
//     <>
//       <Helmet>
//         <title>JetPeel – Hoitoa, jonka iho ymmärtää!</title>
//         <meta name="description" content="JetPeel by TavTech mullistaa ihonhoidon suihkupaineratkaisulla, joka on saanut inspiraationsa ilmailuteknologiasta." />
//         <meta name="keywords" content="JetPeel, ihohoito, esteettinen hoito, kauneus, ihonhoito, TavTech" />
//       </Helmet>
//       <Header  
//               title="JetPeel – Hoitoa, jonka iho ymmärtää!"
//               subtitle="Ole paras versio itsestäsi"
//               text1="Tervetuloa JetPeelin maailmaan! JetPeel™ by TavTech mullistaa ihonhoidon patentoimallaan suihkupaineratkaisulla, joka on saanut inspiraationsa ilmailuteknologiasta. Tämä ei-invasiivinen, neulaton hoito käyttää nopeita mikro-tippoja ihon puhdistamiseen, kuorintaan ja ravinteiden imeyttämiseen, tarjoten välittömiä ja kivuttomia tuloksia."

//               text2="JetPeel-laitteet sisältävät erikoiskäsikappaleet ja   ainutlaatuisen JetCare-ihonhoitosarjan, joka on kehitetty   optimaaliseen hoitotehokkuuteen ja yhteensopivuuteen."
//               />

//       <main>
//         <section className="video section">
//           <div className="container">
//             <h2 className="title-2"><span className='accent'>JetPeel - </span>teknologian taustalla</h2>
//               <figure className='technology__video-container'>
//                 <video autoPlay loop muted playsInline className='video__file' controls>
//                   <source src={videoSrc} type="video/mp4" />
//                   Selaimesi ei tue videota.
//                 </video>
//               </figure>
//             </div>
//           </section>
//           <section className='technology section'>
//             <div className="container">
//               <div className="technology__info">
//               <h2 className='technology__title title-2'>
//                   <span>Suihkuteknologia -  </span>
//                  näe tulokset
//                   </h2>
//                 <div className='technology__content'>
//                   <div className='technology__text-wrapper'>
//                   <p className='technology__text'>
//                 Vain TavTechille kehitetty JetPeel-suihkupaineenergiaan perustuva esteettinen hoitoteknologia on maailmanlaajuinen läpimurto transdermaaliseen vaikuttavien aineiden imeyttämiseen. Tämä teknologia tarjoaa innovatiivisen ratkaisun yleisiin iho-ongelmiin ja esteettisiin hoitotarpeisiin. 
//                   </p>
//                   <p className='technology__text'>Lentoteknologiasta inspiroitunut JetPeel vie ei-invasiiviset, mutta tehokkaat ihonhoitomenetelmät uudelle tasolle – yhdistäen huipputason kliiniset tulokset ja maksimaalisen asiakasmukavuuden.</p>
//                   <p className='technology__text'>
//                 <a href="/jetPeel"> JetPeel™ - laite </a>  tuottaa paineistettua ilmaa, joka kiihdytetään ja muutetaan hienojakoiseksi suihkuksi. Nämä mikrosuihkut, joiden nopeus ylittää 200 m/s, kohdistetaan iholle patentoidulla JetPeel-käsikappaleella. Tämä sauvamainen instrumentti on saatavilla eri kokoisina ja eri hoitoihin räätälöityinä versioina. Hoidon aikana käsikappaleen hienojakoiset nestevirrat tarjoavat hellävaraisen lymfahieronnan, jonka jälkeen seuraa kuorinta ja ihon pintakerroksen kevyt venytys, mahdollistaen vaikuttavien aineiden imeytymisen syvempiin ihokerroksiin.
//                   </p>
//                   <p className='technology__text'>Tämä sauvamainen instrumentti on saatavilla eri kokoisina ja eri hoitoihin räätälöityinä versioina. Hoidon aikana käsikappaleen hienojakoiset nestevirrat tarjoavat hellävaraisen lymfahieronnan, jonka jälkeen seuraa kuorinta ja ihon pintakerroksen kevyt venytys, mahdollistaen vaikuttavien aineiden imeytymisen syvempiin ihokerroksiin.</p>
//                   <p className='technology__text'>
//                 Ilman neuloja, kipua tai ihon vaurioitumista JetPeel luo mikroskooppisia kanavia, joiden kautta hoitoaineet pääsevät vaikuttamaan ihon syvemmissä kerroksissa. Yhdistettynä JetCare-erikoistuotteisiin, jotka on kehitetty erilaisiin iho-ongelmiin, JetPeel-hoito tarjoaa ravitsevia mikropisaroita, jotka imeytyvät ihon alle – tuoden näkyviä tuloksia ja pitkäkestoista vaikutusta.
//                   </p>
//                   <div className='technology__buttons'>
//                 <Button link="/contact"
//                       label="Ota yhteyttä" 
//                       aria-label="Ota yhteyttä JetPeel-asiantuntijaan"
//                       />
//                 <Button
//                     label='Lue lisää'
//                     link="/contact"
//                     aria-label="Lue lisää JetPeel-teknologiasta"
//                     rel="nofollow"
//                 />
//                   </div>
//                   </div>
//                   <div className="technology__gif">
//                   <img src={gifImage1} alt="JetPeel infuusio" className="gif-style" loading="lazy" />
//                   <img src={gifImage2} alt="JetPeel exfoliaatio" className="gif-style" loading="lazy" />  
//                 </div>
//                 </div>
//             </div>
//             <div className="technology__cards">
//               <div className="technology__cards-inner">

//                 {steps.map((step, index) => (
//                   <Step
//                         key={index} 
//                         number={step.number}
//                         title_card={step.title_card}
//                         capacity_1={step.capacity_1}
//                   />
//                 ))}

//               </div>
//             </div>
//           </div>
//         </section>
//         <section className=" advantages section" id='benefits'>
//           <div className="container">
//           <div className="advantages__card-wrapper">
//           <div className="advantages__card">
//               <h2 className="title-2 advantages__title">
//               <span className='accent'>JetPeel - </span>
//              kauneutta <br />ilman epämukavuutta
//              </h2>
//              <p className='advantages__subtitle'>Kliinisesti todistettu hoito laajaan valikoimaan kosmeettisia ja dermatologisia ongelmia:</p>
//               <ul className="advantages__list">
//                 <li className="advantage__item"><strong>Ei neuloja </strong>, ei kipua, ei invasiivisia toimenpiteitä</li>
//                 <li className="advantage__item"><strong>Nopea transdermaalinen imeytyminen</strong> ja välittömät tulokset</li>
//                 <li className="advantage__item">Ei arpia, ei toipumisaikaa</li>
//                 <li className="advantage__item">Ei potilaan toipumisaikaa</li>
//                 <li className="advantage__item">Miellyttävä ja rentouttava hoitokokemus</li>
//               </ul>
//             </div>
//           </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Home;
