import { useTranslation } from "react-i18next";
import './style.css';
import Product from '../product/Product';

import jetProImage  from "../../img/jetPeel-products/ipb-JetPeel-Pro.webp";
import jetProDuoImage from "../../img/jetPeel-products/ipb-JetProDuo.png"
import jetProToGoImage from "../../img/jetPeel-products/ipb-JetPro-ToGo.png"


const productImages = {
  jetPro: jetProImage,
  jetProDuo: jetProDuoImage,
  jetProToGo: jetProToGoImage
};

const ProductList = ({ category, products }) => {
  const { t } = useTranslation(["devices", "common"]); 

  return (
    <main className="productList__section section">
      <div className="container">
        <div className="group__wrapper">
          <h2 className="title__group title-1">{t("title")}</h2>
          <p className='product__description'>{t("description")}</p>
        </div>
        
        <div className="products">
        {products?.length > 0 ? products.map((product) => ( 
          <Product
            key={product.slug}
            slug={product.slug} 
            title={t(`products.${product.slug}.title`)} 
            text={t(`products.${product.slug}.text`)}
            img={productImages[product.slug]} 
            link={`/${category}/${product.slug}`} 
          />
        )) : <p>{"no_products"}</p>}
        </div>
      </div>
    </main>
  );
};

export default ProductList;
