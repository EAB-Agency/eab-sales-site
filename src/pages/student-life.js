import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Button, Box, Columns } from '../components/'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import IWC from '../components/iwc'
import SEO from '../components/seo'

const StudentLifeIndex = ({ data, location, pageContext }) => {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <SEO />
      <div className="wrapper">
        <h2 className="section-headline">Student Life</h2>
        <Breadcrumb crumbs={crumbs} crumbLabel="Student Life" />
        <h1>Living On Campus</h1>
        <p>
          On-campus living is a huge part of the college experience. You’ll meet
          new people from all over the world, and you’ll make lasting
          friendships that will define your life.
        </p>
        <p>
          Plus, when you live on campus, everything is convenient. Walk over to
          a friend's place to hang out. Stop by the library to get some work
          done. Attend an athletic event right outside your room. Go to
          Starbucks at midnight for a study break. Participate in a variety of
          club and organizational events in the halls.
        </p>
        <p>
          You don’t have to worry about paying utility bills or shopping for
          groceries. That’s more time you can spend in the rec center or soaking
          in the culture downtown.
        </p>
        <p>
          Keep reading to explore where you could live, eat and play as a CoA
          student. You’ll see why we call this “the good life.”
        </p>
        <aside>
          <ul>
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
            <li>
              <Button variant="outline" color="primary">
                Take a Virtual Tour
              </Button>
            </li>
          </ul>
        </aside>
        <section className="iwc-breakout">
          <h3>Residence Life</h3>
          <IWC
            height="455px"
            title="See Resident Life"
            url="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&data-loc=143200&"
          />
          <Columns>
            <Box>
              <IWC
                height="373px"
                title="Dining Hall"
                url="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&data-loc=143215&"
              />
            </Box>
            <Box>
              <IWC
                height="373px"
                title="Rec Center"
                url="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&data-loc=143216&"
              />
            </Box>
          </Columns>
        </section>
        <section>
          <Columns space="small">
            <Box>
              <h4>Top 100</h4>
              <p>Best College Campuses in America (niche.com)</p>
            </Box>
            <Box>
              <h4>120+</h4>
              <p>Clubs and Organizations</p>
            </Box>
            <Box>
              <h4>99%</h4>
              <p>Students Participate in Campus Activities</p>
            </Box>
            <Box>
              <h4>17</h4>
              <p>NCAA DII Athletic Teams</p>
            </Box>
          </Columns>
        </section>

        <section>
          <Columns space="small">
            <Box>
              <h4>Events</h4>
              <p>There’s something going on every day of the week at CoA.</p>
              <Button variant="outline" color="grey">
                See What’s Happening
              </Button>
            </Box>
            <Box>
              <h4>CoA Traditions</h4>
              <p>
                Every year, there are a handful of big events students enjoy.
              </p>
              <Button variant="outline" color="grey">
                Discover CoA Traditions
              </Button>
            </Box>
            <Box>
              <h4>Secret Handshake</h4>
              <p>Get a head start on showing your CoA pride with this move.</p>
              <Button variant="outline" color="grey">
                Learn the CoA Clap
              </Button>
            </Box>
          </Columns>
        </section>
        <section>
          <Columns>
            <Box>
              <h5>
                Get ready for your first big CoA tradition: Move-In Weekend
              </h5>
              <Columns>
                <Box>
                  After you unpack, come explore the welcome booths all over
                  campus. And in the evening, rock out at our annual welcome
                  show!
                </Box>
                <Box>
                  Current CoA students will help you move into your room and
                  answer any questions you still have about living on campus.
                </Box>
              </Columns>
            </Box>
            <Box>
              <Img fluid={data.imageFive.childImageSharp.fluid} alt="" />
            </Box>
          </Columns>
        </section>
        <section>
          <Columns>
            <Box>
              <Img fluid={data.imageSix.childImageSharp.fluid} alt="" />
            </Box>
            <Box>
              <blockquote>
                Everyone was so welcoming at CoA when I came to visit that I
                knew this would be my second home. I’ve truly found a family
                here.
              </blockquote>
              <cite>Callie Robertson</cite>
            </Box>
          </Columns>
        </section>
        <section>
          <Columns space="small">
            <Box>
              <article>
                <Img fluid={data.imageOne.childImageSharp.fluid} alt="" />
                <h3>Megan Bursch takes 2nd place in 3MT competition</h3>
                <p>
                  Senior Megan Bursch presents her findings and wins big.
                  Congrats!
                </p>
              </article>
            </Box>
            <Box>
              <article>
                <Img fluid={data.imageTwo.childImageSharp.fluid} alt="" />
                <h3>CoA students support public health with mask project</h3>
                <p>
                  See how our Future Physicians club members strengthen the
                  community.
                </p>
              </article>
            </Box>
            <Box>
              <article>
                <Img fluid={data.imageThree.childImageSharp.fluid} alt="" />
                <h3>Construction begins on residence hall</h3>
                <p>
                  A dynamic blended living and learning space is coming soon.
                </p>
              </article>
            </Box>
            <Box>
              <article>
                <Img fluid={data.imageFour.childImageSharp.fluid} alt="" />
                <h3>Looking for a practical summer reading list?</h3>
                <p>
                  Learn what our professors recommend to sharpen your skills.
                </p>
              </article>
            </Box>
          </Columns>
        </section>
      </div>
    </Layout>
  )
}

export default StudentLifeIndex

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
      relativePath: { eq: "news-thumbnails/news-conference.jpg" }
    ) {
      ...squareImage
    }
    imageTwo: file(relativePath: { eq: "news-thumbnails/news-masks.jpg" }) {
      ...squareImage
    }
    imageThree: file(
      relativePath: { eq: "news-thumbnails/news-construction.jpg" }
    ) {
      ...squareImage
    }
    imageFour: file(relativePath: { eq: "news-thumbnails/news-books.jpg" }) {
      ...squareImage
    }
    imageFive: file(
      relativePath: { eq: "inset-photos/female-testimonial.jpg" }
    ) {
      ...squareImage
    }
    imageSix: file(relativePath: { eq: "inset-photos/male-testimonial.jpg" }) {
      ...squareImage
    }
  }
`
