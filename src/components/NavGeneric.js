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
        <Scroll type="id" element="main">
          <a href="#">
            Cloud Backups <i className="icon fa-chevron-up" />
          </a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="form">
          <a href="#">
            Sign up <i className="icon fa-chevron-down" />
          </a>
        </Scroll>
      </li>
    </Scrollspy>
  </navGeneric>
)

export default NavGeneric
