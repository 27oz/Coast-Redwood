import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['intro', 'meet', 'do', 'why']}
      currentClassName="is-active1"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="meet">
          <a href="#meet">Meet the Team</a>
        </Scroll>
      </li>
      <li>
        <a href="/cloudBackups">Cloud Backups</a>
      </li>
      <li>
        <a href="/crypto">Crypto Services</a>
      </li>
      <li>
        <a href="https://blog.27oz.io">Blog</a>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
