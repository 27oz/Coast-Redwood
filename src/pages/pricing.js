import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import HeaderGeneric from '../components/HeaderGeneric'
import NavGeneric from '../components/NavGeneric'
import Form from '../components/Form'
import Card from '../components/PriceCard'

class Prices extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNavGen: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNavGen: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNavGen: true }))
  }

  render() {
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')}>
          <meta name="theme-color" content="#c44871" />
        </Helmet>

        <HeaderGeneric title={'Pricing'} />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <NavGeneric title="Pricing" sticky={this.state.stickyNavGen} />

        <div id="main">
          <section id="pricing" className="main special">
            <header className="major">
              <h2>27bytes Cloud Backup Solutions</h2>
            </header>
            <div className="row">
              <div className="col-1-of-2">
                <Card price="$0.20/GB" title="Desktop & Server" />
              </div>
              <div className="col-1-of-2">
                <Card price="$7/month" title="Website" />
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

Prices.propTypes = {
  route: React.PropTypes.object,
}

export default Prices

export const pageQuery = graphql`
  query PricingQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
