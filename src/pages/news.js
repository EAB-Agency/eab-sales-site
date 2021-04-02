import React, { Fragment } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { Button } from '../components/'
import Img from 'gatsby-image'
import IWC from '../components/iwc'
import SEO from '../components/seo'
import PreFooter from '../components/preFooter'

const NewsIndex = ({ data, location, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <SEO title="Construction begins on residence hall" />

      {/*CONTENT HEADER*/}
      <header className="content-header">
        <div className="hero-image">
          <Img fluid={data.bannerImage.childImageSharp.fluid} alt="" />
        </div>
        <div className="page-title-container">
          <h2 className="page-title">News & Events</h2>
          <Breadcrumb crumbs={crumbs} crumbLabel="News &amp; Events" />
        </div>
      </header>

      {/*WHITE SECTION*/}
      <section className="white-section top-news">
        <div className="wrapper narrow">
          <h3>Construction begins on residence hall</h3>
          <p>
            <strong>
              The $42 million Premier Living-Learning Community at Bear
              University will provide housing for 500 students and flexible
              spaces to study and attend class.
            </strong>
          </p>

          <p>
            Bear University has broken ground for an innovative mixed-purpose
            residence hall, which is set to open in July 2021.
          </p>

          <p>
            “We are just so thrilled to have this project getting underway,”
            says university president Lauren Ipsum.
          </p>

          <p>
            The new building will be home to the school’s Premier Program
            Academy and includes both freshman and upperclass housing
            opportunities. The center also will contain space to house student
            businesses, a student maker space and technology-infused classrooms.
          </p>

          <p>
            <Button variant="solid" color="primary">
              Follow Our Progress
            </Button>
          </p>

          <figure className="col-50">
            <IWC
              containerHeight="500px"
              title="Ground Breaking Construction"
              institution="121317"
              dataType="inline-embed"
              location="143200"
            />
          </figure>

          {/* IWC */}

          <p>
            Built through a public-private partnership, the $42 million project
            is being funded through a combination of tax-exempt bonds and
            private donations. While the initial phases are completely funded,
            Bear University is still working diligently to secure funding to
            finalize construction.
          </p>

          <p>
            If you’re interested in making a lasting mark on campus and ensuring
            the students of tomorrow are receiving a comprehensive, competitive
            education, we encourage you to learn more about supporting the
            Campaign for Bear University today.
          </p>

          <p className="buttons">
            <Button variant="solid" color="secondary">
              Learn about the Campaign
            </Button>
            <Button variant="solid" color="tertiary">
              Make a Gift
            </Button>
          </p>
        </div>
      </section>

      {/*GREY SECTION*/}
      <section className="grey-section student-stories">
        <div className="wrapper">
          <div className="group">
            <figure>
              <Img fluid={data.imageFour.childImageSharp.fluid} alt="" />
            </figure>
            <h5>Cutting-edge upgrades coming to Bear labs</h5>
            <p>Bear’s STEM labs are getting a major upgrade this summer.</p>
          </div>
          <div className="group">
            <figure>
              <Img fluid={data.imageOne.childImageSharp.fluid} alt="" />
            </figure>
            <h5>Celebrating 2020’s All-American Scholars</h5>
            <p>
              More than a dozen student-athletes qualified for the program this
              year.
            </p>
          </div>
          <div className="group">
            <figure>
              <Img fluid={data.imageTwo.childImageSharp.fluid} alt="" />
            </figure>
            <h5>Bear professor Jon Doe’s top-ranked TED talk</h5>
            <p>Watch the acclaimed TED talk about the future of AI.</p>
          </div>
          <div className="group">
            <figure>
              <Img fluid={data.imageThree.childImageSharp.fluid} alt="" />
            </figure>
            <h5>Where are they now: Class of 2020</h5>
            <p>
              The survey is in! See how recent grads are using their Bear
              degrees.
            </p>
          </div>
        </div>
      </section>
      <Fragment>
        <PreFooter
          cta="Take a Virtual Tour"
          url="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=60231&data-image-width=100%&data-image-height=100%&"
          callout="Explore campus and see yourself at Bear University"
        />
      </Fragment>
    </Layout>
  )
}

export default NewsIndex

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 355, maxHeight: 360) {
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
    bannerImage: file(relativePath: { eq: "headers/news-header-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1840, maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
