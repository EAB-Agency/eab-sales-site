import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import IWC from '../components/iwc'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle}>
        </Helmet>

        <div className="wrapper">
          <h2 className="section-headline">Home</h2>

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

          <h3>Construction Site</h3>
          <div style={{ height: '500px' }}>
            <a
              alt="Launch Experience"
              href="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&data-loc=143200&"
            >
              Launch Experience
            </a>
          </div>

          <h3>Residence Hall</h3>
          <div style={{ height: '500px' }}>
            <a
              alt="Launch Experience"
              href="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&data-loc=143201&"
            >
              Launch Experience
            </a>
          </div>

          <h3>VR Anatomy Lab</h3>
          <IWC
            height="490px"
            title="Anotomy Lab"
            url="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&"
          />

          <h3>Megan Bursch</h3>
          <IWC
            height="564px"
            title="Megan Bursch"
            url="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&data-loc=143203&"
          />

          <h3>Admissions Ambassadors</h3>
          <IWC
            title="Admissions Ambassadors"
            url="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&data-loc=143204&"
          />

          <h3>Dining Hall</h3>
          <div style={{ height: '500px' }}>
            <a
              alt="Launch Experience"
              href="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&data-loc=143215&"
            >
              Launch Experience
            </a>
          </div>

          <h3>Rec Center</h3>
          <div style={{ height: '500px' }}>
            <a
              alt="Launch Experience"
              href="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&data-loc=143216&"
            >
              Launch Experience
            </a>
          </div>
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
