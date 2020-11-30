import React from 'react'
import Container from '../components/container'
import TextBlockCalloutComponent from '../components/TextBlockCalloutComponent'
import { ThemeProvider } from 'styled-components'
import theme from '../components/stylesheet'

const TestIndex = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <section>
          <TextBlockCalloutComponent
            mainCopy="This is the best!"
            author="A very long author title"
          />
          <TextBlockCalloutComponent />
        </section>
      </Container>
    </ThemeProvider>
  )
}

export default TestIndex
