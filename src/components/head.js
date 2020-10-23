import React from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'

export default function Layout({ children }) {
  return (
    <header className="site-header" role="banner">
      <Link to="/">
        <div className="logo">College of America</div>
      </Link>
      <Navigation />
      {children}
    </header>
  )
}
