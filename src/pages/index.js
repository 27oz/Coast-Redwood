import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'

import joe from '../assets/images/joe.jpg'
import tyler from '../assets/images/tyler.jpg'
import xavier from '../assets/images/xavier.jpg'
import kico from '../assets/images/kico.jpg'

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
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')}>
          <meta name="theme-color" content="#c44871" />
        </Helmet>

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="why" className="main special">
            <header className="major">
              <h3>Who are we?</h3>
              <h2>We are an online tech service company</h2>
              <p>
                We specialize in enterprise cloud backups and cryptocurrencies.
                Yes those are two separate fields but that’s what makes us
                special. We’re a team of millenials with passion for technology
                and how it is incorporated into our lives. Our skills and
                flexibility allow us to cater to any clients desires and
                concerns. We are driven, transparent, fair, quirky and love what
                we do.
              </p>
              <p>We are many things and we do a lot.</p>
            </header>
          </section>

          <section id="meet" className="main special">
            <header className="major">
              <h2>Meet the Team</h2>
            </header>
            <ul className="features__team">
              <li>
                <img
                  src={joe}
                  className="icon major style3 fa-life-ring user__image"
                />
                <h3>Joe Dahle</h3>
                <h4>CEO</h4>
                <p>
                  Joe has worked as an IT Professional and Web Developer for the
                  better part of his career, and even drove a school bus once
                  upon a time. He loves dogs, coding, and spending time with
                  family and friends.
                </p>
              </li>
              <li>
                <img
                  src={kico}
                  className="icon major style1 fa-fire user__image"
                />
                <h3>Kico Cortes</h3>
                <h4>CFO</h4>
                <p>
                  Kico has been involved with speculative investments for a long
                  time. From stocks and bonds to Forex and Crypto, He loves it
                  all. Kico enjoys hobbies that can combine his love for
                  technology and money together.
                </p>
              </li>
              <li>
                <img
                  src={tyler}
                  className="icon major style5 fa-compass user__image"
                />
                <h3>Tyler Despain</h3>
                <h4>CTO</h4>
                <p>
                  As an IT Professional and all around problem solver, Tyler
                  enjoys fixing anything: technology, people, and even food.
                  While he's not solving problems, he's taking a break and
                  spending time with his wife.
                </p>
              </li>
              <li>
                <img
                  src={xavier}
                  className="icon major style5 fa-compass user__image"
                />
                <h3>Xavier Acosta</h3>
                <h4>CMO</h4>
                <p>
                  Always a people person, Xavier has been able to form countless
                  relationships with those around him. His Snaps are on fleek
                  and he is always up to date on memes.
                </p>
              </li>
            </ul>
          </section>

          <section id="do" className="main special">
            <header className="major">
              <h2>What We Do</h2>
            </header>
            <div className="story">
              <div className="story__item">
                <div className="story__title story__title--1">
                  <h2>27bytes</h2>
                  <h4>Enterprise Level Cloud Backups</h4>
                </div>
                <div className="story__description story__description--1">
                  <ul>
                    <li>Restore your entire computer to dissimilar hardware</li>
                    <li>Secure your data against ransomware</li>
                    <li>Manage your data and retention from anywhere</li>
                    <li>Restore your server to the cloud</li>
                    <li>
                      Protect all your workstations, and servers seemlessly
                    </li>
                    <div>
                      <Link to="/cloudBackups#form" className="button special">
                        Sign Up
                      </Link>
                      <Link to="/cloudBackups" className="button">
                        Learn More
                      </Link>
                    </div>
                  </ul>
                </div>
                <div className="story__cover story__cover--start">&nbsp;</div>
              </div>
              <div className="story__item">
                <div className="story__cover story__cover--end">&nbsp;</div>
                <div className="story__description story__description--2">
                  <p>
                    Our team has been mining a variety of coins since 2013, and
                    ironically, we&apos;ve helped progress over&nbsp;
                    <strong>27</strong> different blockchains with our custom
                    equipment. Stay tuned to join us in our next big endeavor
                  </p>
                </div>
                <div className="story__title story__title--2">
                  <h2>Crypto Services</h2>
                  <h4>
                    <i>Coming Soon!</i>
                  </h4>
                </div>
              </div>
            </div>
          </section>

          <section id="why" className="main special">
            <header className="major">
              <h2>
                Why <strong>&lt;27oz /&gt;</strong>
              </h2>
              <p>
                At <strong>&lt;27oz /&gt;</strong> we take a unique approach at
                our services by removing the noise, fluff and the unneccessary.
                We aim for what makes sense, and for what is predictable to you
                as a client. We&apos;ve adopted a{' '}
                <a href="blog.27oz.io/zen">Rules to Live By</a>. We believe that
                simple is better than complex, that the temptation to guess is
                not tempting enough and that we are all equal.
              </p>
            </header>
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
