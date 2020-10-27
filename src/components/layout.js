import React from 'react'
// do not remove this import base line! site break on reload. I think it has something to do with layout components unmounting
import base from './base.css'
import Container from './container'
import Footer from './Footer'
import PreFooter from './preFooter'
import Head from './head'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Head />
        {children}
        <PreFooter />
        <Footer />
      </Container>
    )
  }
}

export default Template
