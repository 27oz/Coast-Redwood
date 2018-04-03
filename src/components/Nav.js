import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['intro', 'first', 'second', 'third', 'cta']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="intro">
          <a href="#">Cloud Backups</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="first">
          <a href="#">IT Support</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="second">
          <a href="#">Cryptomining</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="third">
          <a href="#">Blog</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="cta">
          <a href="#">Meet the Team</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
