import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/27oz_logo_text_black_xl.png'
import subLogo from '../assets/images/27oz_logo_pink_transparent.png'

const Header = props => (
  <header id="header" className="alt">
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              {' '}
              Home{' '}
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/cloudBackups" className="navigation__link">
              {' '}
              Cloud Backups
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="itSupport" className="navigation__link">
              {' '}
              IT Support
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="crypto" className="navigation__link">
              Cryptomining
            </Link>
          </li>
          <li className="navigation__item">
            <a href="https://blog.27oz.io" className="navigation__link">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <span className="logo">
      <img style={{ maxWidth: '6em' }} src={subLogo} alt="" />
    </span>
    <p>Cryptomining Services & IT Support & Enterprise Cloud Backups</p>
    <p>We do a lot</p>
  </header>
)

export default Header
