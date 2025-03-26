import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../card/Card';
import './style.css';

const SerumSet = ({ serum, serumImages }) => {
  const layoutClass = serum.products.length > 4 ? 'grid-layout' : 'flex-layout';

  return (
    <motion.div
      className="serum__set"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="serum__hero">
        <div className="serum__hero-wrapper">
          <img
            src={serumImages?.imgBanner}
            alt={serum.name}
            className="serum__hero-image"
          />
        </div>
        <h2 className="serum__hero-title title-1">{serum.name}</h2>
        {Array.isArray(serum.description)
          ? serum.description.map((desc, i) => (
              <p key={i} className="serum__hero-description">
                {desc}
              </p>
            ))
          : serum.description && (
              <p className="serum__hero-description">{serum.description}</p>
            )}

        {Array.isArray(serum.description1)
          ? serum.description1.map((desc, i) => (
              <p key={i} className="serum__hero-description">
                {desc}
              </p>
            ))
          : serum.description1 && (
              <p className="serum__hero-description">{serum.description1}</p>
            )}
      </div>

      {/* Карточки продуктов */}
      <div className={`serum__products ${layoutClass}`}>
        {serum.products.map((product) => {
          const productImg = serumImages?.productsImages?.[product.slug]?.image;

          return product.slug ? (
            <Link
              key={product.slug}
              to={`/serums/${encodeURIComponent(
                serum.slug
              )}/${encodeURIComponent(product.slug)}`}
              className="serum__product-link"
            >
              <Card
                img={productImg}
                title={product.name}
                label={product.label}
              />
            </Link>
          ) : null;
        })}
      </div>
    </motion.div>
  );
};

export default SerumSet;
