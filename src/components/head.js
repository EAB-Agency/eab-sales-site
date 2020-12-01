import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'

export default function Head({ children }) {

  const [pos, setPos] = useState('top')

  useEffect (()=>{
    document.addEventListener("scroll", e => {
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 300) {
          setPos('sticky')
        } else {
          setPos('top')
        }
    })
  })
  
  return (
    <div className={pos ==="sticky" ? "site-header sticked":"site-header"} role="banner">
      <div className="wrapper">
          <Link to="/">
            <div className="logo">College of America</div>
          </Link>
          <Navigation />
          {children}
      </div>
    </div>
  )
}
