import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['intro', 'first', 'second', 'third', 'cta']}
      currentClassName="is-active1"
      offset={-300}
    >
      <li>
        <a href="/about">Meet the Team</a>
      </li>
      <li>
        <a href="/cloudBackups">Cloud Backups</a>
      </li>
      <li>
        <a href="/crypto">Cryptomining</a>
      </li>
      <li>
        <a href="https://blog.27oz.io">Blog</a>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
