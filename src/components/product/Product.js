import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.css';

const Product = ({slug, img, link}) => {
  const { t: tDevices } = useTranslation("devices"); 
  const { t: tCommon } = useTranslation("common"); 

  return (
    <div className="product">
      <Link to={link} className="product__hero">
        <div className="product__info">
          <h2 className="product__title title-2">{tDevices(`products.${slug}.title`)}</h2>
          <p className='product__text'>{tDevices(`products.${slug}.text`)}</p>
          <div className="product__cta">
            <div className="btn">
              {tCommon("buttons.read_more")}
            </div>
          </div> 
        </div>
        <div className="product__img-wrapper">
        <img src={img} alt={tDevices(`products.${slug}.title`)} className="product__img" />
        </div>
      </Link>
    </div>
  );
};

export default Product;

