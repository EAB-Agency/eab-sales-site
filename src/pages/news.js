import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Button, Box, Columns } from '../components/'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import IWC from '../components/iwc'

const NewsIndex = ({ data, location, pageContext }) => {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <Helmet title={siteTitle} />
      <div className="wrapper">
        <h2 className="section-headline">News &amp; Events</h2>
        <Breadcrumb crumbs={crumbs} crumbLabel="News &amp; Events" />
        <article>
          <h1>Construction begins on residence hall</h1>
          <p>
            The $42 million Premier Living-Learning Community at College of
            Amerida will provide housing for 500 students and flexible spaces to
            study and attend class.
          </p>
          <p>
            College of Amerida has broken ground for an innovative mixed-purpose
            residence hall, which is set to open in July 2021.
          </p>
          <p>
            “We are just so thrilled to have this project getting underway,”
            says University President Lauren Ipsum.
          </p>
          <p>
            The new building will be home to the school’s Premier Program
            Academy and including both freshman and upperclass housing
            opportunities. The center also will contain space to house student
            businesses, a student maker space and technology-infused classrooms.
          </p>
          <Button variant="solid" color="primary">
            Follow Our Progress
          </Button>
          <IWC
            height="500px"
            title="Ground Breaking Construction"
            url="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&data-loc=143200&"
          />

          <p>
            Built through a public-private partnership, the $42 million project
            is being funded through a combination of tax-exempt bonds and
            private donations. While the initial phases are completely funded,
            CoA is still working diligently to secure funding to finalize
            construction.
          </p>
          <p>
            If you’re interested in making a lasting mark on campus and ensuring
            the students of tomorrow are receiving a comprehensive, competitive
            education, we encourage you to learn more about supporting the
            Campaign for CoA today.
          </p>
        </article>
        <Button variant="solid" color="secondary">
          Learn about the Campaign
        </Button>
        <Button variant="solid" color="tertiary">
          Make a Gift
        </Button>
        <section>
          <Columns space="small">
            <Box>
              <article>
                <Img fluid={data.imageFour.childImageSharp.fluid} alt="" />
                <h3>Cutting-edge upgrades coming to CoA labs</h3>
                <p>CoA’s STEM labs are getting a major upgrade this summer.</p>
              </article>
            </Box>
            <Box>
              <article>
                <Img fluid={data.imageOne.childImageSharp.fluid} alt="" />
                <h3>Celebrating 2020’s All-American Scholars</h3>
                <p>
                  More than a dozen student-athletes qualified for the program
                  this year.
                </p>
              </article>
            </Box>
            <Box>
              <article>
                <Img fluid={data.imageTwo.childImageSharp.fluid} alt="" />
                <h3>CoA professor Jon Doe’s top-ranked TED talk</h3>
                <p>Watch the acclaimed TED talk about the future of AI.</p>
              </article>
            </Box>
            <Box>
              <article>
                <Img fluid={data.imageThree.childImageSharp.fluid} alt="" />
                <h3>Where are they now: Class of 2020</h3>
                <p>
                  The survey is in! See how recent grads are using their CoA
                  degrees.
                </p>
              </article>
            </Box>
          </Columns>
        </section>
      </div>
    </Layout>
  )
}

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 255, maxHeight: 260) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    imageOne: file(
      relativePath: { eq: "news-thumbnails/news-male-portrait.jpg" }
    ) {
      ...squareImage
    }
    imageTwo: file(
      relativePath: { eq: "news-thumbnails/news-man-woman-machine.jpg" }
    ) {
      ...squareImage
    }
    imageThree: file(
      relativePath: { eq: "news-thumbnails/news-graduation.jpg" }
    ) {
      ...squareImage
    }
    imageFour: file(
      relativePath: { eq: "news-thumbnails/news-microchip.jpg" }
    ) {
      ...squareImage
    }
  }
`

export default NewsIndex
