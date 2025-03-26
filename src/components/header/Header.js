import { useState } from "react";
import ProductCard from '../productCard/ProductCard';
import { useTranslation } from "react-i18next";
import "./style.css";
import bigProduct1 from "../../img/thumbnail/bigProduct1.png"; 
import { articles } from "../../helpers/articlesList"; 
import Button from '../button/Button';

const Header = ({ title, subtitle, text1, text2}) => {
  const [bigProductImg, setBigProductImg] = useState(bigProduct1);
  const { t } = useTranslation();

  return (
    <header className="header flow">
      <div className="container">
        <div className="header__wrapper">
            <div className="header__content">
            <p className="header__subtitle">{subtitle}</p>
            <h1 className="header__title">{title}</h1>
            <div className="header__text">
              <p>{text1}</p>
              <p>{text2}</p>
            </div>
            <Button link="/contacts"
                    label={t('header.contact')} />
            </div>
        
          <div className="header__image-container">
           <img src={bigProductImg} alt="product collection" className="big__product-img" />

          <div className="header__thumbnails">
          {articles.map((image, index) => (
            <div key={index}>
              <ProductCard
                imgURL={image}
                changeBigProductImage={(product) => setBigProductImg(product)}
                bigProductImg={bigProductImg}
              />
            </div>
          ))}
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
