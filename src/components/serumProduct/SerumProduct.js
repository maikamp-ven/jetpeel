import React from "react";
import "./style.css";

const SerumProduct = ({ product, images }) => {
  
  if (!product) return <p>Error: data not available</p>;
  

  return (
    <div className="serum__product-page">
      <div className="container">
        <h1 className="title-2 tac">{product.name}</h1>

        <div className="serum__product-wrapper">
          <div className="serum__product-imgWrapper">
            <img
              src={images?.imageBig || product.imageBig}
              alt={product.name}
              className="serum__product-image"
            />
            
          </div>
          
          <div className="serum__product-text">
            {product.description?.map((text, index) => (
              <p key={index} className="serum__hero-description">{text}</p>
            ))}
          </div>
        </div>

        {product.title && (
          <div className="serum__product-ingredients">
            <h3 className="serum__hero-title">{product.title}</h3>

            {Object.keys(product).map((key) => {
              if (key.startsWith("subtitle")) {
              const textKey = key.replace("subtitle", "text");
              const listKey = key.replace("subtitle", "list"); 

              return (
            <div key={key}>
            <h4 className="serum__hero-subtitle">{product[key]}</h4>

            {Array.isArray(product[listKey]) ? (
            <ul className="serum__product-list">
            {product[listKey].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            </ul>
            ) : Array.isArray(product[textKey]) ? (

              product[textKey].map((t, i) => (
            <p key={i} className="serum__product-list">{t}</p>
           ))
          ) : product[textKey] && (
            <p className="serum__product-list">{product[textKey]}</p>
          )}
      </div>
    );
  }
  return null;
})}

          </div>
        )}
      </div>
    </div>
  );
};

export default SerumProduct;
