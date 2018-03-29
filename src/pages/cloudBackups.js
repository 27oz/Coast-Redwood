import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import HeaderGeneric from '../components/HeaderGeneric'
import NavGeneric from '../components/NavGeneric'
import Form from '../components/Form'

class CloudBackups extends React.Component {
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
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric title={'Cloud Backups'} subText={'Powered by Acronis'} />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <NavGeneric title="Cloud Backups" sticky={this.state.stickyNavGen} />

        <div id="main">
          <section id="content" className="main special">
            <header className="major">
              <h2>27bytes Cloud Backup Solutions</h2>
            </header>
            <p>
              At 27oz we are determined to provide more than just a crypto
              mining solution. We ultimately aim to provide a cloud based
              infrastructure for a variety of services. We are proud to offer a
              managed backup solution utilizing Acronis Backup Cloud
              technologies as one our first alternative cloud solutions.
            </p>
            <header className="major">
              <h2>Disasters Do Happen</h2>
            </header>
            <p>
              There are many ways disaster can destroy years worth of business
              essential data; hardware failure, bad weather, power failure,
              theft, etc.. Don’t let disaster set you back.
            </p>

            <header className="major">
              <h2>Recovery Preparation is Essential</h2>
            </header>
            <p>
              Being prepared for recovery is essential to keep yourself safe
              from disaster. Think of a backup solution as a really good car
              insurance plan. We pay car insurance because it makes sense. Car
              accidents are common and even small events can cost you thousands
              of dollars. Our backup solution protects your data, even in the
              small things. Have you ever accidentally had an essential file
              deleted? Having a good backup solution can easily recover that
              lost file, saving you hours of work.
            </p>
            <p>
              Having a recovery plan in the event of a catastrophic failure is
              even more important. When your data is destroyed, that can put
              your business out for several days. With us, your data is safely
              kept off site. We can turn a catastrophic failure that would
              normally result into a loss of days of work and income into only a
              few hours.
            </p>
            <p>
              It’s important to not wait until disaster comes to you. Being
              prepared for data failure will keep your essential data safe.
            </p>
            <header className="major">
              <h2>What is Acronis?</h2>
            </header>
            <p>
              Acronis Backup Cloud is a service provider level backup solution.
              It’s robust, reliable, and easily managed. We handle all the
              backend setup to make the process easy to manage for the end user.
              The Acronis software provides a suite of backup tools and options
              that allow us, as the service provider, to customize the backups
              to work best for you.
            </p>
            <header className="major">
              <h2>Get Started Today!</h2>
            </header>
            <p>
              Get started with a free 30 day trial! During this 30 days you can
              see how Acronis works and get a feel for the program. By the end
              of the 30 days you’ll have no problem signing up for the service!
              Prices start at $0.20/gb backed up to the cloud. After your 30 day
              trial we’ll have a good idea of how much data you’ll be backing up
              and how much storage you’ll need each month to keep yourself
              protected from disaster!
            </p>
            <br />
            <section id="form" className="main special">
              <header className="major">
                <h2>Request a Quote Today</h2>
              </header>
              <Form />
            </section>
          </section>
        </div>
      </div>
    )
  }
}

CloudBackups.propTypes = {
  route: React.PropTypes.object,
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
