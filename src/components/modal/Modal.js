import React from 'react'
import './style.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="overlay">
      <div className="modal" id="copyright">
        <div className="modal__close" onClick={onClose}>✕</div>
        <div className="modal__subtitle">TIETOSUOJASELOSTE</div>
        <div className="modal__description">Päivitetty viimeksi: 01.03.2025</div>
        <p><span>Rekisterin tiedot:</span>  <br/>
        Rekisteri: Infinite pro beauty Oy <br/>
        Rekisterinpitäjä: Alina Vesterinen <br/>
        Y-tunnus: 2787520-2 <br/>
        Postiosoite: Kauppiaankatu 2, Helsinki, 00160 <br/>
        Verkkosivut: www.jetpeel.fi <br/>
        
        Rekisterin yhteyshenkilö <br/>
        Nimi: Alina Vesterinen <br/>
        Postiosoite: Kauppiaankatu 2, Helsinki, 00160 <br/>
        Rekisterinpitäjän tietosuojavastaava <br/>
        Nimi: Alina Vesterinen <br/>
        Puhelinnumero: +358 452291929 <br/>
        Sähköpostiosoite: infinite@ipb.fi <br/>
        Henkilötietojen käsittelyn tarkoitukset ja käsittelyn lainmukainenperuste. 
        Palvelun tai tuotteen toimittaminen ja laskuttaminen, yhteydenpito asiakkaisiin, asiakassuhteen ylläpito, markkinointi. Tietoja ei käytetä automatisoituun päätöksentekoon tai profilointiin. <br/>

        <span>Rekisterin tietosisältö:</span>  <br/>
        Yrityksen tai henkilön nimi, osoite / osoitteet, 
        puhelinnumero, sähköpostiosoite, 
        toimitetut tuotteet ja palvelut, 
        www-sivustojen osoitteet, verkkoyhteyden IP-osoite. 
        Verkkosivuston vierailijoiden IP-osoitteita 
        ja palvelun toiminnoille välttämättömiä evästeitä 
        käsitellään oikeutetun edun perusteella mm. 
        tietoturvasta huolehtimiseksi ja sivuston 
        vierailijoiden tilastotietojen keruuta varten 
        niissä tapauksissa, kun niiden voidaan katsoa 
        olevan henkilötietoja. Kolmansien osapuolten 
        evästeille pyydetään tarvittaessa suostumus erikseen. <br/>

        <span>Mistä henkilötiedot saadaan?</span> <br/>
        Tiedot saadaan rekisteröidyltä itseltään, tai tilaajalta, joka on pyytänyt luvan rekisteröidyn tietojen tallentamiseen. <br/>


        <span>Henkilötietojen säilytysaika ja säilytysajan määrittämisen kriteerit:</span> <br/>   
        Henkilötietojen säilytysaika ja säilytysajan määrittämisen kriteerit Kirjanpitolain mukaisesti. <br/>

        <span>Henkilötietojen vastaanottajat:</span> <br/>
        Henkilötietoja ei luovuteta. <br/>

        <span>Tietojen siirto EU:n tai ETA:n ulkopuolelle:</span> <br/>
        Tietoja ei siirretä EU:n tai ETA:n ulkopuolelle. <br/>

        <span>Rekisterin suojauksen periaatteet:</span> <br/>
        Rekisterin käsittelyssä noudatetaan huolellisuutta ja tietojärjestelmien avulla käsiteltävät tiedot suojataan asianmukaisesti. Kun rekisteritietoja säilytetään Internet-palvelimilla, niiden laitteiston fyysisestä ja digitaalisesta tietoturvasta huolehditaan asiaankuuluvasti. Rekisterinpitäjä huolehtii siitä, että tallennettuja tietoja sekä palvelimien käyttöoikeuksia ja muita henkilötietojen turvallisuuden kannalta kriittisiä tietoja käsitellään luottamuksellisesti ja vain niiden työntekijöiden toimesta, joiden työnkuvaan se kuuluu. <br/>

        <span>Rekisteröidyn oikeudet:</span>  <br/>
        A. Oikeus saada pääsy tietoihin (EU 2016/679:n 15. artikla)
        Asiakas saa kirjallisesti pyydettyään nähdä itseään koskevat rekisterissä olevat tiedot.<br/>
        B. Oikeus tehdä valitus valvontaviranoimaiselle (EU 2016/679:n 77. artikla)
        Asiakkaalla on oikeus tehdä valitus valvontaviranoimaiselle. <br/>
        C. Oikeus vaatia tiedon korjaamista (EU 2016/679:n 16. artikla)
        Asiakkaalla on oikeus vaatia itseään koskevan virheellisen tiedon korjaamista rekisteristä. Tieto korjataan kirjallisesta pyynnöstä viipymättä. <br/>
        D. Oikeus poistaa tiedot (EU 2016/679:n 17. artikla)
        Asiakkaalla on oikeus pyytää itseään koskevan tiedon poistamista rekisteristä, mikäli laista ei johdu esim. säilytysvelvollisuutta, joka estää tiedon poistamisen. Tieto poistetaan kirjallisesta pyynnöstä viipymättä. <br/>
        E. Oikeus siirtää tiedot järjestelmästä toiseen (EU 2016/679:n 20. artikla)
        Asiakkaalla on oikeus saada itseään koskevat tiedot siirrettäväksi esim. toisen palveluntarjoajan järjestelmään. Pyyntö tulee tehdä kirjallisena ja se toteutetaan viipymättä.</p>
      </div>
    </div>
  )
}

export default Modal;