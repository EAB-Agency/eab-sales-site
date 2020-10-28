import React from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'

export default function Head({ children }) {
  return (
    <header className="site-header" role="banner">
      <Link to="/">
        <div className="logo">Bear University</div>
      </Link>
      <Navigation />
      {children}
    </header>
  )
}
