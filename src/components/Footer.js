import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>About Us</h2>
      <p>
        Best of friends for over a decade, we always knew we could work well
        together. One day we had an idea for a business a little different that
        the rest and decided to go all it. Today, we're know as 27oz, and we're
        here to stay.
      </p>
      <ul className="actions">
        <li>
          <Link to="/About" className="button">
            Meet the Team
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Get in Touch</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>
          27oz, LLC &bull; PO Box 135 &bull; Queen Creek, AZ 85142 &bull; USA
        </dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:hello@27oz.io">hello@27oz.io</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/27ozofficial"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/27ozOfficial/"
            className="icon fa-facebook alt"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/27ozoffical/"
            className="icon fa-instagram alt"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">&copy; 27oz LLC.</p>
  </footer>
)

export default Footer
