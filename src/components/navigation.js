import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Button } from '../components'

export default class Navigation extends Component {
  state = {
    toggle: false,
  }
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }
  render() {
    return (
      <div className={this.state.toggle ? 'navBar show-nav' : 'navBar'}>
        <button className="nav-toggle" onClick={this.Toggle}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
        <nav role="navigation">
          <ul className="no-list">
            <li>
              <Link to="/">Academics</Link>
            </li>
            <li>
              <Link to="/funding-your-education/">Funding</Link>
            </li>
            <li>
              <Link to="/admissions/">Admissions</Link>
            </li>
            <li>
              <Link to="/student-life/">Student Life</Link>
            </li>
            <li>
              <Link to="/news/">News</Link>
            </li>
            <li>
              <Button variant="solid" color="primary">
                Apply Now
              </Button>
            </li>
            <li>
              <Button variant="solid" color="primary">
                Request Info
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
