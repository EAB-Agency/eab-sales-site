import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
// import { Button, Stack, Box, Columns } from '../components/'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet />
          <div className="wrapper">
            <h2 className="section-headline">Home</h2>
          </div>

          {/* <Button
            variant="solid"
            color="primary"
            size="small"
            enableElevation
            // disabled
          >
            Small Outline Elevated Button
          </Button>
          <Box padding="small" paddingTop="medium" paddingBottom="medium">
            Simple Box Component
          </Box>
          <Stack space="small">
            <Box marginTop="medium"> Item 1</Box>
            <Box> Item 2</Box>
            <Box> Item 3</Box>
          </Stack>
          <Columns space="small">
            <Box> Item 1</Box>
            <Box> Item 2</Box>
            <Box> Item 3</Box>
          </Columns> */}
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
