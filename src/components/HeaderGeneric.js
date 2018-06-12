import React from 'react'
import Link from 'gatsby-link'
import Navigator from './Navigator'

import cup from '../assets/images/27oz_logo_pink_transparent.png'

// <img className="icon" src={cup} />
// <span className="header__home header__home--mobile">
//   <i className="fa icon fa-circle-left" />
// </span>

const HeaderGeneric = props => (
  <header id="header">
    <Navigator />
    <h1>{props.title}</h1>
    <p>{props.subText}</p>
  </header>
)

export default HeaderGeneric
