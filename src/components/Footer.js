import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>About Us</h2>
      <p>
        Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
        magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
        aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
        tincidunt odio.
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
        <dd>Really need a PO box &bull; Gilbert, AZ 85297 &bull; USA</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:hello@27oz.io">hello@27oz.io</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-twitter alt">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">&copy; 27oz LLC.</p>
  </footer>
)

export default Footer
