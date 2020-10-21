import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Video from '../components/video'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { Button, Box, Columns } from '../components'
import IWC from '../components/iwc'
import SEO from '../components/seo'

const FinancialAidIndex = ({ data, location, pageContext }) => {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout location={location}>
      <SEO />
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
                videoSrcURL="https://www.youtube.com/embed/Y8nfk5ApcQ4"
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
              <p>
                In-state applicants may be eligible for special grants and
                scholarships. To qualify, you or your parent/guardian (if you
                are a dependent) must be a resident for 12 consecutive months
                prior to the first day of classes for the academic year for
                which state aid funds are being requested. Certain exceptions
                apply, so we encourage you to review CoA’s State Aid Application
                for more details.
              </p>
              <Button variant="outline" color="primary">
                CoA’s State Aid Application
              </Button>
              <h4>Explore Florida Scholarship and Grant Programs</h4>
              <p>
                Merit- and need-based opportunities are available for residents.
              </p>
              <ul>
                <li>
                  <a href="#">Bright Futures Scholarship Program</a>
                </li>
                <li>
                  <a href="#">Benacquisto Scholarship Program</a>
                </li>
                <li>
                  <a href="#">
                    EASE: Effective Access to Student Education Grant
                  </a>
                </li>
                <li>
                  <a href="#">SAG: Student Assistance Grant</a>
                </li>
              </ul>
              <Button variant="outline" color="primary">
                More Aid Opportunities
              </Button>
            </Box>
          </Columns>
        </section>
        <section>
          <Columns>
            <Box>
              <h4>Scholarships</h4>
              <p>
                Scholarships are one of the best ways to pay for your college
                education. They don’t cost you anything, you don’t have to pay
                them back and some are considered prestigious honors that you
                can reference on your resume. College of America offers both
                need- and merit-based scholarships, and our friendly staff is
                available to help you find private scholarships to supplement
                your financial aid package if needed.
              </p>
              <Button variant="solid" color="grey">
                Find a Scholarship
              </Button>

              <h4>Student Employment</h4>
              <p>
                Are you ready to get more than a paycheck while earning your
                degree? CoA provides assistance to students who are looking for
                employment opportunities they can balance with their school
                responsibilities. Students can participate in either need-based
                employment programs, such as Federal Work-Study, or
                non-need-based programs, such as the Student Employment Program
                (on campus) and the Job Location and Development Program (off
                campus).
              </p>
              <Button variant="solid" color="grey">
                Job Opportunities
              </Button>

              <h4>Tuition Calculator</h4>
              <p>
                Using your own financial information, estimate how much your
                degree from CoA could cost. It could be much less than you
                think!
              </p>
              <p>
                Before getting started, you may want to collect any information
                about your family’s income over the past year, your FAFSA
                documents and any scholarships you may have received.
              </p>
              <Button variant="solid" color="grey">
                Calculate Your Costs
              </Button>
            </Box>
            <Box>
              <h3>Student Success</h3>
              <IWC
                height="564px"
                title="Megan Bursch"
                url="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&data-loc=143203&"
              />
              <h4>
                Megan Bursch, 2nd Place Winner in NACAC’s First Video
                Scholarship Contest
              </h4>
            </Box>
          </Columns>
        </section>
        <section>
          <h3>Premier Program Scholarships</h3>
          <Columns>
            <Box>
              <h4>Full Tuition*</h4>
              <p>
                <b>Presidential Scholars</b>
                <br />
                (*Up to Full Tuition, by Invitation Only)
              </p>
            </Box>
            <Box>
              <h4>$23,000*</h4>
              <p>
                <b>American Excellence Scholarship</b>
                <br />
                (Tuition + Roomand Board)
              </p>
            </Box>
            <Box>
              <h4>$19,000</h4>
              <p>
                <b>The Teaching Academy Scholarship</b>
              </p>
            </Box>
            <Box>
              <h4>$19,000</h4>
              <p>
                <b>Business Innovation Academy Scholarship</b>
              </p>
            </Box>
          </Columns>
        </section>
      </div>
    </Layout>
  )
}

export default FinancialAidIndex
