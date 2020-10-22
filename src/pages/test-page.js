import React from 'react'
import Container from '../components/container'
import IWC from '../components/iwc'
import Layout from '../components/layout'

const TestIndex = ({ data, location, pageContext }) => {
  return (
    <Container>
      <section>
        <h2>width: 200px, height: 200px</h2>
        <IWC
          height="200px"
          width="200px"
          title="Ground Breaking Construction"
          url="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&data-loc=143200&"
        />
      </section>
      <section>
        <h2>width: 100%, height: 100px</h2>
        <IWC
          height="100px"
          width="100%"
          title="Ground Breaking Construction"
          url="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&data-loc=143200&"
        />
      </section>
    </Container>
  )
}

export default TestIndex
