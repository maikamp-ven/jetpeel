import React from "react";
import { Link } from "react-router-dom";
import getSerumsData from "../../helpers/serumsData";
import Card from "../card/Card";
import "./style.css";

const SerumModal = ({ isOpen, setModalOpen }) => {
  const serumsData = getSerumsData();
  const handleCardClick = () => {
    setModalOpen(false); // Закрываем модальное окно при клике
  };

  return (
    <div className={`serum-modal ${isOpen ? "open" : ""}`}>
      <div className="serum-modal__grid">
        {serumsData.map((serum) => (
          <Link
            key={serum.slug}
            to={`/serums#${serum.slug}`}
            className="serum-modal__link"
            onClick={handleCardClick} // Закрытие при клике
          >
            <Card 
                img={serum.imgModal} 
                title={serum.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SerumModal;
