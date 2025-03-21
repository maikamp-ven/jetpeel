import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import getSerumsData from "../helpers/serumsData";
import SerumProduct from '../components/serumProduct/SerumProduct';

const SerumProductPage = () => {
  const { setSlug, productSlug } = useParams();
  const serumsData = getSerumsData();
  
  const { t: tCommon } = useTranslation('common');

  // Находим нужный набор сывороток
  const serumSet = serumsData.find((set) => set.slug === setSlug);
  if (!serumSet) return <p>Component not found</p>;

  // Находим нужный продукт
  const product = serumSet.products.find((p) => p.slug === productSlug);
  if (!product) return <p>Component not found</p>;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.imageBig,
    description: product.description.join(' '),
    brand: {
      '@type': 'Brand',
      name: 'JetCare',
    },
    sku: product.slug,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      price: '0.00', // Можно заменить на реальную цену, если будет
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
        <meta name="description" content={product.description[0]} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <SerumProduct product={product} />

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
