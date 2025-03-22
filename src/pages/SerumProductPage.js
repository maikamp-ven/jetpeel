import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import getSerumsData from "../helpers/serumsData";
import SerumProduct from '../components/serumProduct/SerumProduct';

import { serumsImages } from "../helpers/serumsImages";

const SerumProductPage = () => {
  const { setSlug, productSlug } = useParams();
  const serumsData = getSerumsData();
  
  const { t: tCommon } = useTranslation('common');

  const serumSet = serumsData.find((set) => set.slug === setSlug);
  if (!serumSet) return <p>Component not found</p>;

  const product = serumSet.products.find((p) => p.slug === productSlug);
  if (!product) return <p>Component not found</p>;


  const serumSetImages = serumsImages?.[serumSet.slug];
  const productImages = serumSetImages?.productsImages?.[product.slug];

  if (!productImages?.imageBig) {
    console.warn(`Component not found"${product.slug}" in "${serumSet.slug}"`);
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.imageBig,
    description: Array.isArray(product.description) ? product.description.join(' ') : '',
    brand: {
      '@type': 'Brand',
      name: 'JetCare',
    },
    sku: product.slug,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      price: '0.00',
      seller: {
        '@type': 'Organization',
        name: 'JetCare Official',
      },
    },
  };
  

  return (
    <>
      <Helmet>
        <title>{product.name} | JetCare</title>
        <meta name="description" content={product.description?.[0] || product.name} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <SerumProduct product={product}
                    images={productImages} />

      <div className="container">
        <div className="btn__wrapper">
          <button
            onClick={() => window.history.back()}
            className="back-button btn"
          >
            {tCommon('buttons.back')}
          </button>
          <button href="/contacts" className="btn">
            {tCommon('buttons.ask_more')}
          </button>
        </div>
      </div>
    </>
  );
};

export default SerumProductPage;
