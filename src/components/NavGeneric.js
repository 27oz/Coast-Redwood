import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import Link from 'gatsby-link'

const NavGeneric = props => (
  <navGeneric id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy items={[]} currentClassName="is-active" offset={-300}>
      <li>
        <Link to="/">Go Home</Link>
      </li>
      <li>
        <Scroll type="id" element="chart">
          <a href="#">Plans</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="content">
          <a href="#">Why Backup</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="form">
          <a href="#">Free Trial</a>
        </Scroll>
      </li>
    </Scrollspy>
  </navGeneric>
)

export default NavGeneric
