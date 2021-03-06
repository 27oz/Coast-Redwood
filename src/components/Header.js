import React from 'react'
import Link from 'gatsby-link'

import Navigator from './Navigator'

import logo from '../assets/images/27oz_logo_text_black_xl.png'
import subLogo from '../assets/images/27oz_logo_pink_transparent.png'

const Header = props => (
  <header id="header" className="alt">
    <Navigator />

    <span className="logo">
      <img style={{ maxWidth: '6em' }} src={subLogo} alt="" />
    </span>
    <p>
      Business Continuity &bull; Infrastructure Redundancy &bull; Planning &
      Consultation
    </p>
  </header>
)

export default Header
