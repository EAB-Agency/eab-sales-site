import React from 'react'

const Footer = () => {
  return (
    <footer>
      <h5>College of America</h5>
      <ul className="footer_nav">
        <li>
          <a href="">Contact Us</a>
        </li>
        <li>
          <a href="">Using Our Site</a>
        </li>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="">GDPR Privacy Notice</a>
        </li>
        <li>
          <a href="">ADA Policy</a>
        </li>
      </ul>
      <p>© 2020 EAB. All Rights Reserved.</p>
      <ul className="social">
        <li>Facebook</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
        <li>YouTube</li>
      </ul>
      <address>
        1920 E Parham Road, Richmond, VA 23228
        <br />
        Phone: (804) 741-8965
      </address>
    </footer>
  )
}

export default Footer
