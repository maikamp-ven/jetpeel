import React from "react";
import { Link } from "react-router-dom";
import getSerumsData from "../../helpers/serumsData";
import Card from "../card/Card";
import "./style.css";

import { serumsImages } from "../../helpers/serumsImages"; 

const SerumModal = ({ isOpen, setModalOpen }) => {
  const serumsData = getSerumsData();
  const handleCardClick = () => {
    setModalOpen(false);
  };

  return (
    <div className={`serum-modal ${isOpen ? "open" : ""}`}>
      <div className="serum-modal__grid">
        {serumsData.map((serum) => {
          const imageSet = serumsImages[serum.slug];
          const img = imageSet?.imgModal;

          return (
            <Link
              key={serum.slug}
              to={`/serums#${serum.slug}`}
              className="serum-modal__link"
              onClick={handleCardClick}
            >
              <Card img={img} title={serum.name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SerumModal;
