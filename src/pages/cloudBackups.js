import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
import Form from '../components/Form'
import pic04 from '../assets/images/pic04.jpg'

class CloudBackups extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric title={'Cloud Backups'} subText={'Powered by Acronis'} />
        <div id="main">
          <section id="content" className="main">
            <h2 style={{ textAlign: 'center' }}>
              Industry Leading Cloud Backup Solutions
            </h2>

            <Form />
          </section>
        </div>
      </div>
    )
  }
}

export default CloudBackups

export const pageQuery = graphql`
  query CloudBKQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
