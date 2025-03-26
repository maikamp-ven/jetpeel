import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import jetProImage from '../img/jetPeel-products/ipb-JetPeel-Pro.webp';
import jetProHeader from '../img/jetPeel-products/JetPro-header.jpg';
import jetProDuoImage from '../img/jetPeel-products/ipb-JetProDuo.png';
import jetProDuoHeader from '../img/jetPeel-products/JetPro-duo-header.jpg';
import jetProToGoImage from '../img/jetPeel-products/ipb-JetPro-ToGo.png';
import jetProToGoHeader from '../img/jetPeel-products/JetPro-togo-header.png';

// Sections images
import imgSection1 from '../img/jetPeel-products/JetCare Green Brochure and Treatment Guidelines .png';
import imgSection2 from '../img/jetPeel-products/Triplejet-sterile-side.png';
import imgSection3 from '../img/jetPeel-products/Jet-LED-Infusion-5-LED.webp';
import imgSection4 from '../img/jetPeel-products/Jet-LED-Infusion-5-LED-colors.png';
import imgSection5 from '../img/jetPeel-products/jetProToGo_cover.png';
import imgSection6 from '../img/jetPeel-products/jetPeel-ToGo.png';
import imgSection7 from '../img/jetPeel-products/5-LED-Colors-Tips.png';

// Сопоставление изображений с продуктами
const productImages = {
  jetPro: { img: jetProImage, headerImg: jetProHeader },
  jetProDuo: { img: jetProDuoImage, headerImg: jetProDuoHeader },
  jetProToGo: { img: jetProToGoImage, headerImg: jetProToGoHeader },
};

// Сопоставление изображений секций
const sectionImages = {
  jetPro: [imgSection1, imgSection2],
  jetProDuo: [imgSection3, imgSection4],
  jetProToGo: [imgSection5, imgSection7, imgSection6],
};

const ProductPage = ({ products }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t: tDevices } = useTranslation('devices');
  const { t: tCommon } = useTranslation('common');

  const product = products[slug];

  const productWithImages = useMemo(() => {
    if (!product) return null;

    return {
      ...product,
      img: productImages[slug]?.img || '',
      headerImg: productImages[slug]?.headerImg || '',
      sections: product.sections?.map((section, index) => ({
        ...section,
        imgSection: sectionImages[slug]?.[index] || '',
      })),
    };
  }, [slug, product]);

  if (!productWithImages) {
    return <h1>{tCommon('errors.not_found')}</h1>;
  }

  const schemaData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: tDevices(`products.${slug}.title`),
    "image": `https://jetpeel.fi/images/bigProduct1.png`,

    description: tDevices(`products.${slug}.text`).substring(0, 200),
    brand: {
      '@type': 'Brand',
      name: 'JetPeel',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <main className="productPage__section section">
      <Helmet>
        <title>{tDevices(`products.${slug}.title`)} | JetPeel</title>
        <meta
          name="description"
          content={tDevices(`products.${slug}.text`).substring(0, 160)}
        />
        <meta
          name="keywords"
          content="JetPeel, skincare, beauty, LED therapy"
        />
        <meta
          property="og:title"
          content={tDevices(`products.${slug}.title`)}
        />
        <meta
          property="og:description"
          content={tDevices(`products.${slug}.text`).substring(0, 160)}
        />
        <meta property="og:image" content={productWithImages.img} />
        <meta property="og:url" content={`https://jetpeel.fi/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <img
        src={productWithImages.headerImg}
        alt={tDevices(`products.${slug}.title`)}
        className="product__img-header"
      />

      <div className="container">
        <h2 className="page__title title-1">
          {tDevices(`products.${slug}.title`)}
        </h2>

        <div className="product__hero">
          <div className="product__info">
            <h2 className="product__title title-2">
              {tDevices(`products.${slug}.heroTitle`)}
            </h2>
            <p className="product__text">
              {tDevices(`products.${slug}.heroText`)}
            </p>
          </div>
          <div className="product__img-wrapper">
            <img
              src={productWithImages.img}
              alt={tDevices(`products.${slug}.title`)}
              className="product__img"
            />
          </div>
        </div>

        {productWithImages.sections?.map((section, index) => (
          <div
            key={index}
            className={
              section.imgSection
                ? 'product__section product__section--with-image'
                : 'product__section'
            }
          >
            <h2 className="title-2">
              {tDevices(`products.${slug}.sections.${index}.title`)}
            </h2>

            {section.imgSection ? (
              <div className="product__section-content">
                <div className="section__text-block">
                  {section.list && (
                    <ul className="product__section-list">
                      {section.list.map((item, i) => (
                        <li className="product__section-item checkbox" key={i}>
                          {tDevices(
                            `products.${slug}.sections.${index}.list.${i}`
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="section__img-wrapper">
                  <img
                    src={section.imgSection}
                    alt={tDevices(`products.${slug}.sections.${index}.title`)}
                    className="section-image"
                  />
                </div>
              </div>
            ) : (
              section.list && (
                <ul className="section-list">
                  {section.list.map((item, i) => (
                    <li className="product__section-item" key={i}>
                      {tDevices(`products.${slug}.sections.${index}.list.${i}`)}
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>
        ))}

        {/* Кнопки навигации */}
        <div className="btn__wrapper">
          <button onClick={() => navigate(-1)} className="back-button btn">
            {tCommon('buttons.back')}
          </button>
          <a href={product.link} className="btn">
            {tCommon('buttons.ask_more')}
          </a>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
