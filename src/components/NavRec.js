import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import Link from 'gatsby-link'

const NavRec = props => (
  <navRec id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy items={[]} currentClassName="is-active" offset={-300}>
      <li>
        <Link to="/">Go Home</Link>
      </li>
      <li>
        <Scroll type="id" element="chart">
          <a href="#">Blank</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="content">
          <a href="#">Blank</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="form">
          <a href="#">Blank</a>
        </Scroll>
      </li>
    </Scrollspy>
  </navRec>
)

export default NavRec
