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
          <section id="intro" className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Who's behind 27oz</h2>
                </header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pharetra ex dolor, in vulputate magna vulputate ac. Sed
                  ultrices augue convallis, hendrerit ligula placerat, interdum
                  nunc. Sed orci lacus, ultricies aliquam leo bibendum, mollis
                  auctor diam. Etiam eu risus porta, laoreet augue ac, luctus
                  eros. Etiam sem eros, suscipit
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pharetra ex dolor, in vulputate magna vulputate ac. Sed
                  ultrices augue convallis, hendrerit ligula placerat, interdum
                  nunc. Sed orci lacus, ultricies aliquam leo bibendum, mollis
                  auctor diam. Etiam eu risus porta, laoreet augue ac, luctus
                  eros. Etiam sem eros, suscipit
                </p>
              </div>
            </div>
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
                  <p>
                    nec feugiat vel, varius eu elit. Suspendisse sed lacinia
                    diam. Quisque id arcu elit. Quisque diam sapien, suscipit
                    bibendum nulla id, dictum ultricies ipsum. Ut lacinia ex
                    iaculis, ornare mi semper, laoreet enim. Praesent placerat
                    elit diam, aliquet pretium ex tincidunt et. Nulla finibus
                    pellentesque fermentum. Mauris eleifend est justo, et tempor
                    sapien pellentesque sed. Mauris non ipsum egestas, congue
                    quam id, mattis nibh.
                  </p>
                </div>
                <div className="story__cover story__cover--start">&nbsp;</div>
              </div>
              <div className="story__item">
                <div className="story__cover story__cover--end">&nbsp;</div>
                <div className="story__description story__description--2">
                  <p>
                    nec feugiat vel, varius eu elit. Suspendisse sed lacinia
                    diam. Quisque id arcu elit. Quisque diam sapien, suscipit
                    bibendum nulla id, dictum ultricies ipsum. Ut lacinia ex
                    iaculis, ornare mi semper, laoreet enim. Praesent placerat
                    elit diam, aliquet pretium ex tincidunt et. Nulla finibus
                    pellentesque fermentum. Mauris eleifend est justo, et tempor
                    sapien pellentesque sed. Mauris non ipsum egestas, congue
                    quam id, mattis nibh.
                  </p>
                </div>
                <div className="story__title story__title--2">
                  <h2>Crypto Services</h2>
                  <h4>Expert Consultations in Blockchain Technology</h4>
                </div>
              </div>
            </div>
          </section>

          <section id="third" className="main special">
            <header className="major">
              <h2>Why US</h2>
              <p>
                nec feugiat vel, varius eu elit. Suspendisse sed lacinia diam.
                Quisque id arcu elit. Quisque diam sapien, suscipit bibendum
                nulla id, dictum ultricies ipsum. Ut lacinia ex iaculis, ornare
                mi semper, laoreet enim. Praesent placerat elit diam, aliquet
                pretium ex tincidunt et. Nulla finibus pellentesque fermentum.
                Mauris eleifend est justo, et tempor sapien pellentesque sed.
                Mauris non ipsum egestas, congue quam id, mattis nibh.
              </p>
            </header>
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
