import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Signup from '../components/Signup'

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
                <p>
                  Request a quote from a trained expert today and find out what
                  services are available for you. We have solutions for servers,
                  workstations, websites and much more!
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/cloudBackups/" className="button">
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
                  With 27oz, you can rest assured that any tech issue that may
                  arise will be handled promptly and professionally. With over 7
                  years of experience in hardware and software troubleshooting,
                  we can handle just about anything you throw at us.
                </p>
              </li>
              <li>
                <span className="icon major style1 fa-fire" />
                <h3>There When You Need Us</h3>
                <p>
                  We take pride in our personal and proactive approach to IT
                  Support. At the heart of 27oz, we are committed to put your
                  needs as our top priority, and make sure your business is able
                  to run without a hitch. Emergencies happen, and we will be
                  there when they do.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-compass" />
                <h3>The Right Path</h3>
                <p>
                  You can trust in us, as polite, professional and determined
                  individuals. Our mothers raised us to put others first, and to
                  work hard. Let us show you that we can be everything you've
                  been looking for in IT Support.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/itSupport/" className="button">
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
            <p className="content">
              Our team has been mining a variety of coins since 2013, and
              ironically, we've helped progress over 27 different blockchains
              with our custom equipment. Through the years we've learned what
              goes into picking the right coin, and building the perfect mining
              rig to boost efficiency and profitability. We are pleased to
              announce our plans to offer a full-service mining solution to the
              public. Stay tuned to find out more, and how you can be apart of
              the innovative future of Cryptocurrencies and Blockchain
              technology.
            </p>
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
                  Joe has worked as an IT Professional and Web Developer for the
                  better part of his career, and even drove a school bus once
                  upon a time. He loves dogs, coding, and spending time with
                  family and friends.
                </p>
              </li>
              <li>
                <span className="icon major style1 fa-fire" />
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
                <span className="icon major style5 fa-compass" />
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
                <span className="icon major style5 fa-compass" />
                <h3>Xavier Acosta</h3>
                <h4>CMO</h4>
                <p>
                  Always a people person, Xavier has been able to form countless
                  relationships with those around him. His Snaps are on fleek
                  and he is always up to date on memes.
                </p>
              </li>
            </ul>
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
