import React from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'
class Header extends React.Component{
  render(){
    const isBrowser = typeof window !== `undefined`
    function getScrollPosition({element, useWindow}){
      if(!isBrowser) return {x: 0, y: 0}
      const target = element ? element.current : document.body

      console.log("kaboom");
    }
    return (
      <div className="site-header" role="banner">
        <div className="wrapper">
            <Link to="/">
              <div className="logo">College of America</div>
            </Link>
            <Navigation />
        </div>
      </div>
    )
  }
}

export default Header;
