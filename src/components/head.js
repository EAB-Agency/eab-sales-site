import React from 'react'
import { Link } from 'gatsby'
import Container from './container'
import Navigation from './navigation'

export default function Layout({ children }) {
    return (
        <header className="site-header" role="banner">
            <div className="logo">College of America</div>
            <Navigation />
            {children}
        </header>
    )
}