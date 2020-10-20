import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Video from '../components/video'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { Button, Box, Columns } from '../components'

const FinancialAidIndex = ({ data, location, pageContext }) => {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout location={location}>
      <Helmet title={siteTitle} />
      <div className="wrapper">
        <h2 className="section-headline">Funding Your Education</h2>
        <Breadcrumb crumbs={crumbs} crumbLabel="Funding Your Education" />
        <h1>Financial Aid</h1>
        <p>
          A degree from College of America is a smart investment in your future.
          At CoA, you’ll get a world-class education for an affordable price.
          You’ll also build industry connections and gain hands-on experience
          that will give you an edge in today’s competitive job market.
        </p>
        <p>
          Navigating scholarships and aid can be tricky, but you don’t have to
          figure it out alone. Our friendly admissions staff will help you and
          your family build a financial aid and scholarship package that works.
          We’ll even help you map out the best steps to fund your education so
          you can reap the full value of your CoA degree and earn a competitive
          advantage in your career, community and life.
        </p>
        <p>
          Reading through the resources on this page is a great way to start
          making a plan to fund your education. The most important thing is to
          file your FAFSA as soon as possible.
        </p>
        <p>
          We also encourage you to check out some CoA success stories to see the
          type of outcomes our students and alumni enjoy.
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
                Admissions
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
          <h3>Affordability and Outcomes</h3>
          <Columns>
            <Box>
              <h5>
                $41 Million+ <span>in Scholarships Awarded</span>
              </h5>
            </Box>
            <Box>
              <h5>
                $55,000{' '}
                <span>Average Starting Salary of Recent CoA Graduates</span>
              </h5>
            </Box>
            <Box>
              <h5>
                #14 of 66 <span>Best Value Colleges (niche.com)</span>
              </h5>
            </Box>
          </Columns>
        </section>
        <section>
          <Columns>
            <Box>
              <h3>Federal Aid</h3>
              <p>
                The FAFSA for the 2020-2021 academic year is now available at
                studentaid.gov. We suggest filing as soon as possible to avoid
                delays and make sure you’re considered for the maximum potential
                amount of aid. Remember to include our FAFSA code, 000000, so
                that CoA receives your information—we’ll send you an email
                confirmation with next steps once we do.
              </p>
              <p>
                It’s easier than ever to file your FAFSA. The U.S. Department of
                Education redesigned its website to make it mobile-friendly and
                also introduced a new smartphone application called myStudentAid
                that allows you to complete the FAFSA on your phone.
              </p>
              <Video
                videoSrcURL="https://www.youtube.com/watch?v=Y8nfk5ApcQ4&ab_channel=fafsamadeeasy"
                videoTitle="Free Application For Federal Student Aid"
              />
              <h4>How to Fill out Your FAFSA</h4>
              <p>
                This video from the Federal Student Aid Office will walk you
                through how to complete your Free Application for Federal
                Student Aid.
              </p>
              <Button variant="outline" color="primary">
                FAFSA Tips from CoA
              </Button>
            </Box>
            <Box>
              <h3>State Aid</h3>
            </Box>
          </Columns>
        </section>
      </div>
    </Layout>
  )
}

export default FinancialAidIndex
