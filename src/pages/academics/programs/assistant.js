import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../../components/layout'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { Button, Box, Columns } from '../../../components'
import IWC from '../../../components/iwc'
import Img from 'gatsby-image'
import SEO from '../../../components/seo'

const ProgramsIndex = ({ data, location, pageContext }) => {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout location={location}>
      <SEO />
      <div className="wrapper">
        <h2 className="section-headline">Academic Programs</h2>
        <Breadcrumb crumbs={crumbs} crumbLabel="Physician assistant" />
        <h1>
          <span>Dual Admission:</span> Physician Assistant Program
        </h1>
        <p>
          If you’re interested in providing compassionate and personalized care
          as a P.A., College of America’s Physician Assistant Dual Admission
          program can help you reach your goals. Our P.A. program trains
          competent, caring medical professionals who are dedicated to improving
          health care quality and outcomes. Through clinical experiences and
          professional exposure, you’ll practice diagnosing illness, prescribing
          medications and developing treatment plans.
        </p>
        <p>
          Keep reading to discover the type of skills you’ll learn and possible
          career outcomes. We’ll also share admission requirements and other
          program-specific information.
        </p>
        <aside>
          <ul>
            <li>
              <Button variant="outline" color="primary">
                Apply Now
              </Button>
            </li>
            <li>
              <Button variant="solid" color="primary">
                College of Health Sciences
              </Button>
            </li>
            <li>
              <Button variant="solid" color="primary">
                Related Programs
              </Button>
            </li>
            <li>
              <Button variant="solid" color="primary">
                Contact Us
              </Button>
            </li>
          </ul>
        </aside>
        <section>
          <h3>Make your dream a reality. Explore the Virtual Anatomy Lab</h3>
          <IWC
            height="490px"
            title="Anotomy Lab"
            url="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-image-width=100%&data-image-height=100%&"
          />
        </section>
        <section>
          <Columns>
            <Box>
              <h3>What Can You Do with a Physician Assistant Degree?</h3>
              <p>
                College of America’s physician assitant program will prepare you
                to fulfill an integral role in patient care. Completing the
                program will prepare you to perform a comprehensive range of
                clinical services, from taking histories and ordering diagnostic
                tests to treating minor injuries. While a P.A. usually works
                with a supervising physician, they can function as a primary
                care physician in some more rural areas.
              </p>
              <p>
                Between a population that is living longer and the impact of a
                global pandemic, the demand continues to grow for skilled
                medical professionals that provide competent, compassionate
                care. As a P.A. you can make a real difference in the lives of
                patients of all ages and medical histories.
              </p>
            </Box>
            <Box>
              <h4>Related Careers</h4>
              <ul>
                <li>Physician assistant</li>
                <li>Clinical advisor</li>
                <li>Emergency room P.A.</li>
                <li>Infection control specialist</li>
                <li>Medical practitioner</li>
              </ul>
              <h4>Competencies</h4>
              <ul>
                <li>Diagnose and treat illnesses and minor injuries</li>
                <li>
                  Work with supervising physician and team to provide
                  outcome-oriented care
                </li>
                <li>Take patient histories and update charts </li>
              </ul>
            </Box>
          </Columns>
        </section>
        <section>
          <h3>Career Potential</h3>
          <Columns>
            <Box>
              <h4>31% Growth</h4>
              <p>Job Outlook, 2018–2028</p>
            </Box>
            <Box>
              <h4>$112,260</h4>
              <p>Median Pay, 2019</p>
            </Box>
            <Box>
              <h4>118,800</h4>
              <p>Number of Jobs as of 2018</p>
            </Box>
          </Columns>
          <cite>Source: Bureau of Labor Statistics</cite>
        </section>
        <section>
          <h3>Program Overview</h3>
          <p>
            The Dual Admission Physician Assistant program takes six years to
            complete. Students who complete the program will receive a
            bachelor's degree and a Master of Medical Science (M.M.S.) in
            Physician Assistant. Candidates will follow a prescribed 4-year
            course of study in any undergraduate major and 27 months of training
            in the P.A. program at the College of Health Care Sciences.
          </p>
        </section>
        <section>
          <Columns>
            <Box>
              <h4>Degrees Earned</h4>
              <p>
                You can earn <a href="">any bachelor’s degree</a> and your
                <em>
                  Master of Medical Science in Physician Assistant (M.M.S.) .
                </em>
              </p>
              <h4>Interview Required</h4>
              <p>
                Students applying for dual admission must interview during{' '}
                <a href="">CoA Preview Weekend</a>, an exclusive admitted
                students event.
              </p>
            </Box>
            <Box>
              <h4>Program Length</h4>
              <p>
                Earn your bachelor’s in <em>four years</em> and your master’s in
                <em>two years and three months.</em>
              </p>
              <h4>Deadline to Apply</h4>
              <p>
                <em>Fall</em> 2021 Admission: <em>Feb. 1</em>
                <br /> Winter Admission: Not Permitted
              </p>
            </Box>
          </Columns>
        </section>
        <section>
          <h3>Eligibility</h3>
          <p>
            To be considered for dual admission and fill your reserved seat in
            graduate or professional school, there are some requirements you
            must meet. <em>Undergraduate Admission Requirements</em> are for
            first-time and transfer students applying to earn a bachelor’s
            degree. <em>Graduate Admission Requirements</em> are the standards
            students need to maintain while earning their undergraduatedegree to
            remain eligible for the graduate or professional program.
          </p>
        </section>
        <section>
          <h3>Undergraduate Admission Requirements</h3>
          <Columns>
            <Box>
              <h4>GPA</h4>
              <p>3.5 Weighted GPA in High School</p>
            </Box>
            <Box>
              <h4>ACT/SAT</h4>
              <p>25 composite ACT 1220 total SAT</p>
            </Box>
            <Box>
              <h4>Years of ...</h4>
              <p>
                Math: 4<br />
                Science: 3<br />
                English: 4
              </p>
            </Box>
            <Box>
              <h4>Courses</h4>
              <p>Biology,** Chemistry and Algebra II</p>
            </Box>
          </Columns>
          <p>
            *While CoA has instituted a test-optional policy for the 2021-22
            admission cycle, Dual Admission applicants must still submit
            official SAT or ACT scores. Learn more
          </p>
          <p>
            **Anatomy and Physiology, and Living Environment may be substituted
            for Biology.
          </p>
        </section>
        <section>
          <Columns>
            <Box>
              <h4>Degree Required</h4>
              <p>
                You must complete a bachelor’s degree in any major you choose.
                Additional prerequisites may be communicated upon admission.
              </p>
              <h4>Undergraduate GPA</h4>
              <p>
                You must maintain a 3.2 cumulative and science GPA. You must
                also earn at least a C in each prerequisite course.
              </p>
            </Box>
            <Box>
              <h4>Required Test Scores</h4>
              <p>
                GRE: No less than a 150 on the verbal reasoning and quantitative
                reasoning sections, and no less than a 4.0 on analytical
                writing. *All minimum test scores must be achieved on the same
                test attempt (no superscoring).
              </p>
              <h4>Credits Required</h4>
              <p>
                You must earn at least 120 credits to enter the P.A. graduate
                program.
              </p>
            </Box>
          </Columns>
        </section>
        <section>
          <Columns>
            <Box>
              <Img fluid={data.imageOne.childImageSharp.fluid} alt="" />
            </Box>
            <Box>
              <h3>
                Start Your Journey to a Rewarding Career in Medicine Today
              </h3>
              <p>
                The first step to making a difference in patient outcomes is to
                find a college that will give you the tools and support to
                excel. You’ll find that (and more) at CoA. You can finish your
                streamlined application in just a few minutes—and if you’re not
                ready to apply yet, we hope you’ll still drop us a line and let
                us know you’re interested.
              </p>
              <Button variant="solid" color="primary">
                Apply Now
              </Button>
              <Button variant="outline" color="primary">
                Request Info
              </Button>
            </Box>
          </Columns>
        </section>
      </div>
    </Layout>
  )
}

export default ProgramsIndex

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
      relativePath: { eq: "inset-photos/female-testimonial.jpg" }
    ) {
      ...squareImage
    }
  }
`
