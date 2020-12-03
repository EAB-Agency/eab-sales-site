import React, { Fragment, useEffect } from 'react'
import Layout from '../components/layout'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { Button } from '../components'
import IWC from '../components/iwc'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import HeroVideo from '../video/sales-site-hero2.mp4'
// import Container from '../components/container'
import PreFooter from '../components/preFooter'
import { Link, graphql } from 'gatsby'

// import { Button, Stack, Box, Columns } from '../components/'

const ProgramsIndex = ({ data, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <SEO title="Dual Admission: Physician Assistant Program" />

      {/*CONTENT HEADER*/}
      <header className="content-header">
        <div className="hero-video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            id="hero-video"
            className="hero-video"
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
          <div className="hero-content">
            <h2 className="video-title">
              {'Discover Your Future at Bear University'}
            </h2>
            <Button variant="solid" color="orange">
              Find Out More
            </Button>
          </div>
        </div>
        <div className="page-title-container homepage-title"></div>
      </header>

      {/*PAGE DESCRIPTION*/}
      <section className="page-description homepage-desc">
        <div className="wrapper cols">
          <div className="col-60 desc">
            <h3>Become Your Best Self at Bear</h3>
            <p>
              At Bear University, you’ll have limitless opportunities to grow
              academically, personally and professionally.
            </p>
            <p>
              Our small classes are <strong>experience-oriented, </strong>
              meaning you’ll focus on real-world learning in a setting that
              encourages your professors to get to know you. Plus, you’ll find a
              support group of advisors, faculty and peers to cheer you on every
              step of the way.
            </p>
            <Button variant="solid" color="secondary">
              Explore Our Programs
            </Button>
          </div>
          <div className="col-40 start-career">
            <figure>
              <Img fluid={data.startCareer.childImageSharp.fluid} alt="" />
              <figcaption className="img-caption-green">
                I’VE FOUND A SECOND FAMILY AT BEAR.{' '}
                <span className="caption-by">Mia Carmichael</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/*JOIN US CTA*/}
      <section className="join-us">
        <div className="wrapper">
          <h3>Join Us In January</h3>
          <p>
            We’ve launched a range of courses with a January start date, meaning
            it’s not too late to join Bear University this academic year.
          </p>
          <Button variant="outline" color="white">
            Discover More
          </Button>
        </div>
      </section>

      {/*IWC POST*/}
      <section className="iwc-post">
        <div className="wrapper cols">
          <div className="col-40">
            <h3>Schedule a Virtual Visit Today</h3>
            <p>
              The best way to learn whether a school is right for you is to come
              visit. Since campus visits are limited right now, we’ve done our
              best to recreate the experience virtually!
            </p>
            <p>
              Your virtual visit includes a{' '}
              <strong>guided virtual tour</strong> with an admission
              counselor, a video chat with a student ambassador and a meeting
              with your dedicated financial aid advisor.
            </p>
            <Button variant="solid" color="primary">
              Schedule Your Visit
            </Button>
          </div>

          <div className="col-60">
            <IWC
              containerHeight="490px"
              title="Academic Mall"
              institution="121317"
              dataType="inline-embed"
              location="143339"
            />
          </div>
        </div>
      </section>

      {/*INVEST IN YOUR FUTURE*/}
      <section className="invest-future">
        <div className="wrapper">
          <h3>Invest In Your Future</h3>
          <div className="cols">
            <div className="col-50">
              <ul>
                <li>
                  <strong>$41 Million+</strong> in Scholarships Awarded
                </li>
                <li>
                  <strong>$55,000</strong> Average Starting Salary of Bear
                  Graduates
                </li>
                <li>
                  <strong>#14 of 66</strong> Best Value Colleges (niche.com)
                </li>
              </ul>
              <p>
                One of the first people you’ll build a relationship with at Bear
                is your financial aid advisor. They’ll be with you and your
                family from the beginning of the admission process, helping you
                to navigate state and federal aid, find scholarships and build a
                financial aid package that works.
              </p>
              <Button variant="solid" color="purple">
                Fund Your Education
              </Button>
            </div>

            <figure className="col-50">
              <Img
                fluid={data.investFuture.childImageSharp.fluid}
                alt="Invest in Your Future"
              />
              <figcaption className="img-caption-purple">
                AT BEAR MY DREAMS BECAME A REALITY
                <span className="caption-by">Anthony Cerezo</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/*IWC TOUR*/}
      <section className="page-content dark-grey-section take-virtual-tour">
        <div className="wrapper">
          <h3>
            Picture Yourself at Bear University
            <strong>Take a Virtual Tour!</strong>
          </h3>
        </div>

        <div className="virtual-tour">
          <a
            alt="Launch Experience"
            href="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=60231&data-image-width=100%&data-image-height=100%&"
          >
            Launch Experience
          </a>

          <script
            async="async"
            defer="defer"
            src="https://www.youvisit.com/tour/Embed/js3"
          ></script>
        </div>
      </section>

      {/*NEWS SECTION*/}
      <section className="grey-section news-section">
        <div className="wrapper">
          <div className="news-head">
            <h3>News and Events</h3>
          </div>
          <div className="news-wrapper">
            <div className="group news">
              <figure>
                <Img fluid={data.imageFour.childImageSharp.fluid} alt="" />
              </figure>
              <h5>Cutting-edge upgrades coming to Bear labs</h5>
              <p>Bear’s STEM labs are getting a major upgrade this summer.</p>
            </div>
            <div className="group events">
              <figure>
                <Img fluid={data.imageTwo.childImageSharp.fluid} alt="" />
                <div className="date">
                  Sep <span class="date-day">8</span>
                </div>
              </figure>
              <h5>Bear professor Jon Doe’s top-ranked TED talk</h5>
              <p>Watch the acclaimed TED talk about the future of AI.</p>
            </div>
            <div className="group news">
              <figure>
                <Img fluid={data.imageOne.childImageSharp.fluid} alt="" />
              </figure>
              <h5>Celebrating 2020’s All-American Scholars</h5>
              <p>
                More than a dozen student-athletes qualified for the program
                this year.
              </p>
            </div>
            <div className="group events">
              <figure>
                <Img fluid={data.imageThree.childImageSharp.fluid} alt="" />
                <div className="date">
                  Jun <span class="date-day">28</span>
                </div>
              </figure>
              <h5>Where are they now: Class of 2020</h5>
              <p>
                The survey is in! See how recent grads are using their Bear
                degrees.
              </p>
            </div>
          </div>
          <div className="button-container">
            <Button variant="solid" color="primary">
              More News
            </Button>
          </div>
        </div>
      </section>
      <Fragment>
        <PreFooter cta="Meet Your Counselor" />
      </Fragment>  
    </Layout>
    
  )
}

export default ProgramsIndex

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
    startCareer: file(
      relativePath: { eq: "inset-photos/start-succesful-career.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    investFuture: file(relativePath: { eq: "inset-photos/invest-future.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
