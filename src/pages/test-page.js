import React from 'react'
import Container from '../components/container'
import IWC from '../components/iwc'

const TestIndex = ({ data, location, pageContext }) => {
  return (
    <Container>
      <section>
        <IWC
          containerHeight="200px"
          containerWidth="200px"
          dataType="inline-embed"
          title="IWC Testing"
          institution="121104"
          location="143233"
        />
        <p>width: 200px, height: 200px; inline-embed</p>

        <IWC
          containerHeight="200px"
          containerWidth="200px"
          title="IWC Testing"
          institution="121104"
          location="143233"
          />
          <p>width: 200px, height: 200px; hover</p>

        <IWC
          containerHeight="350px"
          containerWidth="700px"
          dataType="inline-embed"
          title="IWC Testing"
          institution="121104"
          location="143233"
          />
          <p>width: 700px, height: 350px; inline-embed</p>
        <IWC
          containerHeight="350px"
          containerWidth="700px"
          title="IWC Testing"
          institution="121104"
          location="143233"
          />
          <p>width: 700px, height: 350px; hover</p>

        <IWC
          containerHeight="500px"
          containerWidth="300px"
          dataType="inline-embed"
          title="IWC Testing"
          institution="121104"
          location="143233"
          />
          <p>width: 300px, height: 500px; inline-embed</p>
        <IWC
          containerHeight="500px"
          containerWidth="300px"
          title="IWC Testing"
          institution="121104"
          location="143233"
          />
          <p>width: 300px, height: 500px; hover</p>

        <IWC
          containerHeight="400px"
          containerWidth="100%"
          dataType="inline-embed"
          title="IWC Testing"
          institution="121104"
          location="143233"
          />
          <p>width: 100%, height: 400px; inline-embed</p>
        <IWC
          containerHeight="400px"
          containerWidth="100%"
          title="IWC Testing"
          institution="121104"
          location="143233"
          />
          <p>width: 100%, height: 400px; hover</p>
      </section>
    </Container>
  )
}

export default TestIndex
