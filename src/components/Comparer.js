import React, { Component } from 'react'
import Hint from './Hint'
import data from '../assets/data/featList.json'

class Comparer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="comparer__container">
        <div className="comparer__header">
          {data.plans.map(plan => {
            return (
              <div key={plan.key}>
                <h2>{plan.name}</h2>
                <h4>{plan.price}</h4>
              </div>
            )
          })}
        </div>
        {data.features.map(feature => {
          return (
            <div key={feature.key} className="comparer__item">
              <h3 className="comparer__title">{feature.title}</h3>
              <Hint hint={feature.hint} title={feature.title} />
              <p className={`comparer__item--${feature.basic}`}>
                {feature.basic}
              </p>
              <p className={`comparer__item--${feature.plus}`}>
                {feature.plus}
              </p>
              <p className={`comparer__item--${feature.pro}`}>{feature.pro}</p>
              <p className={`comparer__item--${feature.enterprise}`}>
                {feature.enterprise}
              </p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Comparer
