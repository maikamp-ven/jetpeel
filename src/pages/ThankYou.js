import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import banner from '../img/hero/banner.png';

const ThankYou = () => {
    const { t } = useTranslation();

    return (
        <section className="thank-you-container section">
            <img className="header__banner" src={banner} alt="JetPeel banner" />
            <div className='container'>
              <h1 className='title-1'>{t('thankYou.title')}</h1>
              <p className="thank-subtitle">{t('thankYou.message')}</p>
              
              <Link className='thank-link' to="/">{t('thankYou.backToHome')}</Link>
            </div>
        </section>
    );
};

export default ThankYou;
