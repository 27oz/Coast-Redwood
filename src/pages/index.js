import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Cloud Backups</h2>
                </header>
                <p>
                  It’s important to not wait until disaster comes to you. Being
                  prepared for data failure will keep your essential data safe.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/CloudBackups/" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span>
                <span className="icon major style2 fa-cloud-upload" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>IT Support</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style3 fa-life-ring" />
                <h3>Peace of Mind</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style1 fa-fire" />
                <h3>There When You Need Us</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-compass" />
                <h3>The Right Path</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/ItSupport/" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Cryptomining Services</h2>
              <p>Coming Soon</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-bitcoin" />
                <strong>27 Coins</strong> Mined
              </li>
              <li className="style2">
                <span className="icon fa-bolt" />
                <strong>1,000,000</strong> mining powers
              </li>
              <li className="style3">
                <span className="icon fa-plug" />
                <strong>2,048</strong> Watts/second
              </li>
              <li className="style4">
                <span className="icon fa-battery-full" />
                <strong>4,096</strong> Watts/next second
              </li>
              <li className="style5">
                <span className="icon fa-diamond" />
                <strong>1,024</strong> Monies/pocket
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/Crypto" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="third" className="main special">
            <header className="major">
              <h2>The 27oz Blog</h2>
              <p>It's more than 27 words.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="http://blog.27oz.io" className="button special">
                    Read Here
                  </a>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Meet the Team</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style3 fa-life-ring" />
                <h3>Joe Dahle</h3>
                <h4>CEO</h4>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style1 fa-fire" />
                <h3>Kico Cortes</h3>
                <h4>CFO</h4>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-compass" />
                <h3>Tyler Despain</h3>
                <h4>CTO</h4>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-compass" />
                <h3>Xavier Acosta</h3>
                <h4>CMO</h4>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/ItSupport/" className="button special">
                    Meet the Team
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
