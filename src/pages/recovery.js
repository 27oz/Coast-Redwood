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
import logo from '../assets/images/27oz_logo_pink_transparent.png'

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

        <HeaderGeneric title={'Disaster Recovery'} subText={'Make it better'} />

        <p className="logo" style={{ textAlign: 'center' }}>
          <img style={{ maxWidth: '6em' }} src={logo} alt="" />
        </p>

        <div style={{ textAlign: 'center' }}>
          <i
            className="icon fa-5x fa-code"
            style={{ color: '#e2a266', width: '10em' }}
          />
          <br />
          <span>Still under construction, come back soon!</span>
          <br />

          <br />
          <br />
          <Link to="/" className="button">
            Return Home
          </Link>
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
