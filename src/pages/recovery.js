import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import HeaderGeneric from '../components/HeaderGeneric'
import NavRec from '../components/NavRec'
import Form from '../components/Form'
import Card from '../components/PriceCard'
import Comparer from '../components/Comparer'

class Recovery extends React.Component {
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

        <HeaderGeneric title={'Disaster Recovery'} subText={'Need a subtext'} />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <NavRec title="Disaster Recovery" sticky={this.state.stickyNavGen} />

        <div id="main">
          <section id="content" className="main special">
            <header className="major">
              <h2>Disaster Recovery from the Experts</h2>
            </header>
          </section>
        </div>
      </div>
    )
  }
}

Recovery.propTypes = {
  route: React.PropTypes.object,
}

export default Recovery

export const pageQuery = graphql`
  query RecoveryQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
