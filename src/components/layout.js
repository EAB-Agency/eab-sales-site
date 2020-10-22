import React from 'react'
import Container from './container'
import Head from '../components/head'
import Footer from '../components/footer'

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
        <Footer />
      </Container>
    )
  }
}

export default Template
