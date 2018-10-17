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
                We currently specialize in enterprise cloud backups and
                cryptocurrencies, but we are working hard at building a new
                cloud platform that will change the way we work.
              </p>
              <p>
                We believe every great business sits on the foundation of hard
                work, humble beginnings, and determination. 27oz is no
                exception. One day we had an idea, a little different than the
                rest, and we decided to jump out of the rat race and take a
                chance on ourselves. We’re a team of millenials who have been
                best friends for over a decade (a match made in heaven). We
                share a passion for technology and the way it’s incorporated
                into our daily lives.
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
                  Joe is the founder and fair, fearless leader of 27oz. He is
                  constantly pushing the team to new heights and successfully
                  carving out a name for himself in the industry along the way.
                  He’s spent the better part of his career as a web developer,
                  coder, and IT professional. Joe values family and friends and
                  always manages to make time for both.
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
                  Kico is a calculated risk-taker with a wealth of financial
                  knowledge that never runs dry and the passion to prove it.
                  He’s been involved with speculative investments too long to
                  recount. From stocks and bonds to Forex and Crypto, he’s your
                  guy.
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
                  The man behind the scenes, our Acronis Certified Engineer, and
                  IT professional. He’s likely already putting out fires you
                  don’t know exist yet. Tyler keeps solutions simple and
                  efficient, he’s the driving force for all technological
                  advances within the company, and is even a self-taught web
                  developer. When he’s not working the business he can be found
                  traveling the country with his beautiful wife.
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
                  The suave and handsome face of the company whom you’ve likely
                  already had a run in with. More importantly, our very own
                  marketing guru. Xavier is a people person, plain and simple.
                  He makes a lasting impression and builds countless
                  relationships with everyone he meets. Growing up in an
                  entrepreneurial family, he is no stranger to the business, and
                  has always strived to pave his own path and make his own mark
                  on the world.
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
                  <h2>Disaster Recovery</h2>
                  <h4>Tools To Keep You Running</h4>
                </div>
              </div>
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
                <a href="https://blog.27oz.io/zen">Rules to Live By</a>. We
                believe that simple is better than complex, that the temptation
                to guess is not tempting enough and that we are all equal.
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
