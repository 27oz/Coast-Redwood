import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/27oz_logo_text_black_xl.png'
import subLogo from '../assets/images/27oz_logo_pink_transparent.png'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img style={{ maxWidth: '6em' }} src={subLogo} alt="" />
    </span>
    <p>
      Cryptomining Services, Enterprise Cloud Backups, IT Support
      <br />
      We do a lot
    </p>
  </header>
)

export default Header
