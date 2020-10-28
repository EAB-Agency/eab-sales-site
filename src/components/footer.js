import React from 'react'
import { Link } from 'gatsby'
import Container from './container'
import Navigation from './navigation'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrapper cols">
        <div className="col-70">
          <div className="logo">Bear University</div>
          <ul className="footer-nav">
            <li>Contact Us</li>
            <li>Using Our Site</li>
            <li>Privacy Policy</li>
            <li>GDPR Privary Notice</li>
            <li>ADA Policy</li>
          </ul>
          <div className="copyright">© 2020 EAB. All Rights Reserved.</div>
        </div>
        <div className="col-30">
          <ul className="social-nav">
            <li>
              <a href="" className="facebook-icon">
                Facebook
              </a>
            </li>
            <li>
              <a href="" className="twitter-icon">
                Twitter
              </a>
            </li>
            <li>
              <a href="" className="linkedin-icon">
                Linkedin
              </a>
            </li>
            <li>
              <a href="" className="youtube-icon">
                Youtube
              </a>
            </li>
          </ul>
          <address>1920 E Parham Road, Richmond, VA 23228</address>
          <div className="phone">Phone: (804) 741-8965</div>
        </div>
      </div>
    </footer>
  )
}