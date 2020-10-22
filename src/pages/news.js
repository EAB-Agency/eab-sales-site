import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { Button } from '../components/'
import Img from 'gatsby-image'
import IWC from '../components/iwc'
import SEO from '../components/seo'

const NewsIndex = ({ data, location, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <SEO />

      {/*CONTENT HEADER*/}
      <header className="content-header">
        <div className="hero-image">
          <img src="news-events-hero.jpg" />
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
              The $42 million Premier Living-Learning Community at College of
              Amerida will provide housing for 500 students and flexible spaces
              to study and attend class.
            </strong>
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

          <p>
            <Button variant="solid" color="primary">
              Follow Our Progress
            </Button>
          </p>

          <figure className="col-50">
            <IWC
              height="500px"
              title="Ground Breaking Construction"
              url="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&data-loc=143200&"
            />
          </figure>

          {/* IWC */}

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
            <h5>Cutting-edge upgrades coming to CoA labs</h5>
            <p>CoA’s STEM labs are getting a major upgrade this summer.</p>
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
            <h5>CoA professor Jon Doe’s top-ranked TED talk</h5>
            <p>Watch the acclaimed TED talk about the future of AI.</p>
          </div>
          <div className="group">
            <figure>
              <Img fluid={data.imageThree.childImageSharp.fluid} alt="" />
            </figure>
            <h5>Where are they now: Class of 2020</h5>
            <p>
              The survey is in! See how recent grads are using their CoA
              degrees.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NewsIndex

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
