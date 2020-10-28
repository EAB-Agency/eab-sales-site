import React from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Button, Box, Columns } from '../components/'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import IWC from '../components/iwc'
import SEO from '../components/seo'


const StudentLifeIndex = ({ data, pageContext }) => {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <SEO title="Living On Campus" />
      {/*CONTENT HEADER*/}
      <header className="content-header">
        <div className="hero-image">
          <Img fluid={data.bannerImage.childImageSharp.fluid} alt="" />
        </div>
        <div className="page-title-container">
          <h2 className="page-title">Student Life</h2>
          <Breadcrumb crumbs={crumbs} crumbLabel="Student Life" />
        </div>
      </header>

      {/*PAGE DESCRIPTION*/}
      <section className="page-description wrapper cols">
        <div className="col-70">
          <h3>Living On Campus</h3>
          <p>
            On-campus living is a huge part of the college experience. You’ll
            meet new people from all over the world, and you’ll make lasting
            friendships that will define your life.{' '}
          </p>
          <p>
            Plus, when you live on campus, everything is convenient. Walk over
            to a friend's place to hang out. Stop by the library to get some
            work done. Attend an athletic event right outside your room. Go to
            Starbucks at midnight for a study break. Participate in a variety of
            club and organizational events in the halls.{' '}
          </p>
          <p>
            You don’t have to worry about paying utility bills or shopping for
            groceries. That’s more time you can spend in the rec center or
            soaking in the culture downtown.
          </p>
          <p>
            Keep reading to explore where you could live, eat and play as a CoA
            student. You’ll see why we call this “the good life.”
          </p>
        </div>
        <div className="col-30 alternate-navigation">
          {/* <AltNav /> */}

          <ul className="no-list">
            <li>
              <Button variant="outline" color="primary">
                Take a Virtual Tour
              </Button>
            </li>
            <li>
              <Button variant="solid" color="primary">
                Campus Housing
              </Button>
            </li>
            <li>
              <Button variant="solid" color="primary">
                Clubs &amp; Associations
              </Button>
            </li>
            <li>
              <Button variant="solid" color="primary">
                Athletics
              </Button>
            </li>
          </ul>
        </div>
      </section>

      {/*IWC*/}
      <section className="iwc residence-life">
        <div className="wrapper">
          <header className="dark-grey-section">
            <h3>Residence Life</h3>
          </header>

          <div className="iwc-container cols">
            <div className="iwc-iframe col-70">

              <IWC
                containerHeight="351px"
                title="See Resident Life"
                institution="121317"
                dataType="inline-embed"
                location="143201"
              />
            </div>
            <div className="iwc-copy col-30">
              <h4>Freshman Housing</h4>
              <p>Many freshmen choose to live in The Commons. This coed, state-of-the-art, living learning community includes more than 500 student beds, various classrooms and meeting spaces, 16 community living rooms, 16 study rooms and plenty of indoor and outdoor common space.</p>
              <Button variant="solid" color="primary">
                Live On Campus
               </Button>
            </div>
          </div>

          <div className="iwc-container grey-section cols">
            <div className="iwc-iframe col-70">

              <IWC
                containerHeight="351px"
                title="Dining Hall"
                institution="121317"
                dataType="inline-embed"
                location="143215"
              />
            </div>
            <div className="iwc-copy col-30">
              <h4>On Campus Dining</h4>
              <p>All students who live on campus are required to enroll in a meal plan. You can use your funds at any CoA Dining location, which includes dining halls as well as popular restaurants like Subway, Einstein Brothers, Sushi Maki and more.
              Vegetarian or vegan? We ensure all our facilities have delicious options for you!</p>
              <Button variant="solid" color="primary">
                Eat On Campus
               </Button>
            </div>
          </div>
          <div className="iwc-container cols">
            <div className="iwc-iframe col-70">

              <IWC
                containerHeight="373px"
                title="Rec Center"
                institution="121317"
                dataType="inline-embed"
                location="143216"
              />
            </div>
            <div className="iwc-copy col-30">
              <h4>The RecPlex</h4>
              <p>Whether you’re interested in group fitness classes, hitting the weight racks, running laps or starting a game of pickup basketball, the RecPlex is a perfect place to stay active. There’s even a world-class rock climbing room with certified instructors so you can practice your skills before hitting the local climbing spots.</p>
              <Button variant="solid" color="primary">
                Play On Campus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/*DARK GREY SECTION*/}
      <setion className="explore-more dark-grey-section centered">
        <div className="wrapper">
          <h4>Explore More Places Where You’ll Live and Learn at CoA</h4>
          <Button variant="solid" color="primary">
            Take a Virtual Tour
              </Button>
        </div>
      </setion>

      {/*PURPLE SECTION*/}
      <section className="purple-section statistics">
        <div className="wrapper">
          <ul className="no-list">
            <li>
              <strong>Top 100</strong> Best University Campuses in America
              (niche.com)
            </li>
            <li>
              <strong>120+</strong> Clubs and Organizations
            </li>
            <li>
              <strong>99%</strong> Students Participate in Campus Activities
            </li>
            <li>
              <strong>17</strong> NCAA DII Athletic Teams
            </li>
          </ul>
        </div>
      </section>

      {/*LIGHT GREY SECTION*/}
      <section className="grey-section student-links">
        <div className="wrapper">
          <ul className="no-list">
            <li>
              <strong>Events</strong> There’s something going on every day of
              the week at CoA.
              <a href="" className="button wire-button">
                See What’s Happening
              </a>
            </li>
            <li>
              <strong>CoA Traditions</strong> Every year, there are a handful of
              big events students enjoy.
              <a href="" className="button wire-button">
                Discover CoA Traditions
              </a>
            </li>
            <li>
              <strong>Secret Handshake</strong> Get a head start on showing your
              CoA pride with this move.
              <a href="" className="button wire-button">
                Learn the CoA Clap
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/*WHITE SECTION*/}
      <section className="white-section moving-section">
        <div className="wrapper cols">
          <div className="col-50">
            <h3>Get ready for your first big CoA tradition: Move-In Weekend</h3>
            <div className="cols">
              <div className="group col-50 box-icon">
                <p>
                  After you unpack, come explore the welcome booths all over
                  campus. And in the evening, rock out at our annual welcome
                  show!
                </p>
              </div>
              <div className="group col-50 truck-icon">
                <p>
                  Current CoA students will help you move into your room and
                  answer any questions you still have about living on campus.
                </p>
              </div>
            </div>
          </div>
          <figure className="col-50">
            <Img fluid={data.imageFive.childImageSharp.fluid} alt="" />
          </figure>
        </div>
      </section>

      {/*BLUE SECTION*/}
      <section className="blue-section testimonial">
        <div className="wrapper cols">
          <figure className="col-50">
            <Img fluid={data.imageSix.childImageSharp.fluid} alt="" />
          </figure>
          <p className="col-50">
            <q>
              Everyone was so welcoming at CoA when I came to visit that I knew
              this would be my second home. I’ve truly found a family here.
            </q>
            <small>Michael Robertson</small>
          </p>
        </div>
      </section>

      {/*WHITE SECTION*/}
      <section className="white-section student-stories">
        <div className="wrapper">
          <div className="group news-article">
            <figure>
              <Img fluid={data.imageOne.childImageSharp.fluid} alt="" />
            </figure>
            <h5>Megan Bursch takes 2nd place in 3MT competition</h5>
            <p>
              Senior Megan Bursch presents her findings and wins big. Congrats!
            </p>
          </div>
          <div className="group news-article">
            <figure>
              <Img fluid={data.imageTwo.childImageSharp.fluid} alt="" />
            </figure>
            <h5>CoA students support public health with mask project</h5>
            <p>
              See how our Future Physicians club members strengthen the
              community.
            </p>
          </div>
          <div className="group news-article">
            <Link to="/news/">
              <figure>
                <Img fluid={data.imageThree.childImageSharp.fluid} alt="" />
              </figure>
              <h5>Construction begins on residence hall</h5>
              <p>A dynamic blended living and learning space is coming soon.</p>
            </Link>
          </div>
          <div className="group news-article">
            <figure>
              <Img fluid={data.imageFour.childImageSharp.fluid} alt="" />
            </figure>
            <h5>Looking for a practical summer reading list?</h5>
            <p>Learn what our professors recommend to sharpen your skills.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StudentLifeIndex

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
      relativePath: {eq: "news-thumbnails/news-conference.jpg" }
    ) {
      ...squareImage
    }
    imageTwo: file(relativePath: {eq: "news-thumbnails/news-masks.jpg" }) {
      ...squareImage
    }
    imageThree: file(
      relativePath: {eq: "news-thumbnails/news-construction.jpg" }
    ) {
      ...squareImage
    }
    imageFour: file(relativePath: {eq: "news-thumbnails/news-books.jpg" }) {
      ...squareImage
    }
    imageFive: file(relativePath: {eq: "inset-photos/community-hands.jpg" }) {
      childImageSharp {
      fluid(maxWidth: 600, maxHeight: 450) {
      ...GatsbyImageSharpFluid
    }
      }
    }
    imageSix: file(relativePath: {eq: "inset-photos/male-testimonial.jpg" }) {
      childImageSharp {
      fluid(maxWidth: 600, maxHeight: 450) {
      ...GatsbyImageSharpFluid
    }
      }
    }
    bannerImage: file(relativePath: {eq: "headers/student-life-header.jpg" }) {
      childImageSharp {
      fluid(maxWidth: 1440, maxHeight: 350) {
      ...GatsbyImageSharpFluid
    }
      }
    }
  }
`
