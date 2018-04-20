import React from 'react'

const Card = props => (
  <div className="card">
    <div className="card__side card__side--front">
      <h2 className="card__price--title">{props.title}</h2>
      <div className="card__details">
        <p className="card__price--price">{props.price}</p>
        <p className="card__price--details">{props.details}</p>
      </div>
    </div>
    <div className="card__side card__side--back">
      <div className="card__cta">
        <ul>
          <li>{props.interest1}</li>
          <li>{props.interest2}</li>
          <li>{props.interest3}</li>
        </ul>

        <a href="#form" className="card__link">
          Request a free trial &crarr;
        </a>
      </div>
    </div>
  </div>
)

export default Card
