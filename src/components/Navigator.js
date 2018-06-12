import React, { Component } from 'react'
import Link from 'gatsby-link'

class Navigator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navIsOpen: false,
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e) {
    this.setState({
      navIsOpen: !this.state.navIsOpen,
    })
  }

  render() {
    return (
      <div className="navigation" onClick={this.handleOnClick}>
        <div
          className={
            this.state.navIsOpen
              ? 'navigation__button navigation__button--open'
              : 'navigation__button'
          }
        >
          <span className="navigation__icon" />
        </div>
        <div className="navigation__background">&nbsp;</div>
        <nav
          className={
            this.state.navIsOpen
              ? 'navigation__nav'
              : 'navigation__nav navigation__nav--closed'
          }
        >
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to="/" className="navigation__link">
                Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/cloudBackups" className="navigation__link">
                Cloud Backups
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="crypto" className="navigation__link">
                Crypto Services
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
    )
  }
}

export default Navigator
