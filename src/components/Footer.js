import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Our Blog</h2>
      <p>
        That&apos;s right, we have a blog. Check it out for updates on our
        company, technology, and how to secure your company from disaster.
      </p>
      <ul className="actions">
        <li>
          <Link to="/#meet" className="button">
            Meet the Team
          </Link>
        </li>
        <li>
          <a href="https://blog.27oz.io" className="button">
            Read our blog
          </a>
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
          <a href="mailto:info@27oz.io">info@27oz.io</a>
        </dd>
      </dl>
    </section>
    <p className="copyright">&copy; 27oz LLC.</p>
  </footer>
)

export default Footer
