import React from 'react'
import Link from 'gatsby-link'

const HeaderGeneric = props => (
  <header id="header">
    <h1>{props.title}</h1>
    <p>{props.subText}</p>
  </header>
)

export default HeaderGeneric
