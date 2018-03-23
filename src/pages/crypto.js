import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import logo from '../assets/images/27oz_logo_pink_transparent.png'

import HeaderGeneric from '../components/HeaderGeneric'

class Crypto extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric title={'Crypto'} subText={'From the Millenials'} />

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
          <Link to="/" className="button">
            Return Home
          </Link>
        </div>
      </div>
    )
  }
}

export default Crypto

export const pageQuery = graphql`
  query CryptoQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
