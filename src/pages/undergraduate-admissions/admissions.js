import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Button, Box, Columns } from '../../components'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const AdmissionsIndex = ({ data, location, pageContext }) => {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout location={location}>
      <Helmet title={siteTitle} />
      <div className="wrapper">
        <h2 className="section-headline">Undergrad Admissions</h2>
        <Breadcrumb crumbs={crumbs} crumbLabel="Freshman Applicants" />

        <h1>Freshman Applicants</h1>
        <p>
          At College of America, we prepare students for lives of purpose. We
          give students the tools they need to become confident, capable and
          caring professionals who outsmart, outperform and outlast their
          competition. With this competitive advantage, our graduates go on to
          change the world.
        </p>
        <p>
          Whether you want to make the world a better place through a career in
          health care, business, public service or even the arts, CoA will help
          you plan your path—and seize your future. That’s because our community
          holds the shar
        </p>
        <p>
          Your classes and extracurriculars will prepare you for a real career,
          real contributions and real life. You may enter looking to take on the
          world, but you will emerge prepared to dominate your future.
        </p>
        <p>
          Read on to explore the unique opportunities waiting for you at CoA.
        </p>
        <aside>
          <ul>
            <li>
              <Button variant="outline" color="primary">
                APPLY NOW
              </Button>
            </li>
            <li>
              <Button variant="solid" color="primary">
                Connect with a Counselor
              </Button>
            </li>
            <li>
              <Button variant="solid" color="primary">
                Degrees &amp; Majors
              </Button>
            </li>
            <li>
              <Button variant="solid" color="primary">
                Funding Your Education
              </Button>
            </li>
            <li>
              <Button variant="solid" color="primary">
                Take a Virtual Tour
              </Button>
            </li>
          </ul>
        </aside>
        <section>
          <h4>Deadlines for 2021 Entering Class</h4>
          <Columns space="small">
            <Box>
              <h4>Nov. 1, 2020</h4>
              <p>
                <b>Early Decision</b>
                <br />
                Fall 2021 Semester
              </p>
            </Box>
            <Box>
              <h4>Feb. 1, 2021</h4>
              <p>
                <b>Dual Admission</b>
                <br />
                Fall 2021 Semester
              </p>
            </Box>
            <Box>
              <h4>Mar. 1, 2021</h4>
              <p>
                <b>Regular Decision</b>
                <br />
                Fall 2021 Semester
              </p>
            </Box>
            <Box>
              <h4>Nov. 1, 2021</h4>
              <p>
                <b>Dual Admission</b>
                <br />
                Winter 2021 Semester
              </p>
            </Box>
          </Columns>
        </section>
      </div>
    </Layout>
  )
}

export default AdmissionsIndex
