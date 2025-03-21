import React from 'react'
import './style.css'

const Card = ({img, label, title}) => {
  return (
    <div className='card__item'>
      <div className='card__item-img'>
        <img src={img} alt={title} />
      </div>
      <h3 className='card-title'>
        {title}
      </h3>
      {label && <p className='card__text'>{label}</p>}
    </div>
  )
}

export default Card;