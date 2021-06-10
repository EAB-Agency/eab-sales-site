import React, { Fragment } from 'react'
import Layout from '../components/layout'
import { Button } from '../components'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import SEO from '../components/seo'
import IWC from '../components/iwc'
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, graphql } from 'gatsby'
import Accordion from '../components/accordion'
import PreFooter from '../components/preFooter'

const AdmissionsIndex = ({ data, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <SEO title="Freshman Applicants" />
      {/*CONTENT HEADER*/}
      <header className="content-header">
        <div className="hero-image">
          <GatsbyImage image={data.bannerImage.childImageSharp.gatsbyImageData} alt="" />
        </div>
        <div className="page-title-container">
          <h2 className="page-title">Undergrad Admissions</h2>
          <Breadcrumb
            crumbs={crumbs}
            crumbLabel="Undergraduate Admissions / Freshman Applicants"
          />
        </div>
      </header>

      {/*PAGE DESCRIPTION*/}
      <section className="page-description">
        <div className="wrapper cols">
          <div className="col-70">
            <h3>Freshman Applicants</h3>
            <p>
              At Bear University, we prepare students for lives of purpose. We
              give students the tools they need to become confident, capable and
              caring professionals who outsmart, outperform and outlast their
              competition. With this competitive advantage, our graduates go on
              to change the world.
            </p>
            <p>
              Whether you want to make the world a better place through a career
              in health care, business, public service or even the arts, Bear
              University will help you plan your path—and seize your future.
            </p>
            <p>
              Your classes and extracurriculars will prepare you for a real
              career, real contributions and real life. You may enter looking to
              take on the world, but you will emerge prepared to dominate your
              future.
            </p>
          </div>
          <div className="col-30 alternate-navigation">
            {/* <AltN av /> */}

            <ul className="no-list">
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
          </div>
        </div>
      </section>

      {/*GREEN SECTION*/}
      <section className="green-section statistics">
        <div className="wrapper">
          <h3>Deadlines for 2021 Entering Class</h3>
          <ul className="no-list">
            <li>
              <strong>Nov. 1, 2020</strong> Early Decision Fall 2021 Semester
            </li>
            <li>
              <strong>Feb. 1, 2021</strong> Dual Admission Fall 2021 Semester
            </li>
            <li>
              <strong>Mar. 1, 2021</strong> Regular Decision Fall 2021 Semester
            </li>
            <li>
              <strong>Nov. 1, 2021</strong> Dual Admission Winter 2021 Semester
            </li>
          </ul>
        </div>
      </section>

      {/*PAGE CONTENT*/}
      <section className="page-content admissions-process">
        <div className="wrapper intro">
          <h3>Admission Process</h3>
          <p>Follow this step-by-step guide to apply to Bear University.</p>
        </div>
        <div className="wrapper cols admissions-steps">
          <aside className="col-30">
            <p>
              Applying to Bear University is quick and easy, whether you choose
              to apply with our <a href="">Big Blue Application</a> or the{' '}
              <a href="">Common App.</a>
            </p>
            <p>
              Either way, the <strong>essay is optional.</strong> You can choose
              one of the five Common App prompts or provide an original writing
              sample of your choice if you’re using the Big Blue Application.{' '}
            </p>
            <p>
              Please note that a nonrefundable <strong>$50</strong> fee is
              required for either application.
            </p>
            <p>
              If you’re interested in pursuing a <strong>nursing</strong>{' '}
              degree, <a href="">visit the nursing admissions page</a> for
              additional requirements.
            </p>
            <a href="" className="button wire-button">
              Questions? Browse FAQs
            </a>
            <br />
            <a href="" className="extra-link">
              Information for Parents and Families
            </a>
            <a href="" className="extra-link">
              Information for Guidance Counselors
            </a>
          </aside>
          <div className="col-70">
            <Accordion
              title="Submit Application for Admission"
              content="<p>Freshman applicants may apply using our streamlined</p>
                <p><a href=''>Big Blue Application</a> or the</p>
                <p><a href=''>Common App.</a></p>"
            />
            <Accordion
              title="Submit Letter(s) of Recommendation"
              content="
                    <p>One letter of recommendation from a teacher is required, but you
                    may submit up to a total of three letters. The letters can be
                    completed online through the Common App Teacher Evaluation form,
                    or you can submit the letter(s) in the supplemental items area
                    of the Big Blue Application.</p>
                    <p>Paper letters of recommendation may be emailed to your admission
                    counselor or mailed to:
                  </p>
                  <p>
                    Office of Undergraduate Admissions
                    <br />
                    Bear University
                    <br />
                    1234 College Avenue
                    <br />
                    Anywhere, U.S. 12345
                  </p>"
            />
            <Accordion
              title="Request Submission of Official Transcripts"
              content="
                  <p>
                  Your guidance counselor will need to submit your transcripts and
                  recommendation. They can do so electronically through Naviance,
                  SENDedu or the Common App, or by mail using the address above.
                  If you’re applying with the <a href=''>Common App</a>, your
                  counselor should also complete the School Report and submit it
                  with your transcripts and school profile.
                </p>
                <p>
                  For more detailed instructions, see the
                  <a href=''>Resources for Guidance Counselors page</a>.
                </p>
                <p>
                  If you’re curious about how AP and IB credits transfer, visit
                  <a href=''>
                    Transfer Evaluation Services for Undergraduate Students
                  </a>
                  .
                </p>
                <p>
                  Send Verification of Compliance and Completion of Home Education
                  Program. It should include a copy of a teacher’s evaluation or
                  district confirmation, or verification of a passing score on the
                  state student assessment test, administered by a certified
                  teacher.
                </p>"
            />

            <Accordion
              title="Submit Test Scores (Optional)"
              content="
                  <p>
                Due to testing challenges related to COVID-19, undergraduate
                applicants for the 2021-22 admission cycle may choose to have
                their application reviewed for admission
                <strong>with or without</strong> the submission of SAT or ACT
                scores.
              </p>
              <p>
                <a href='' className='extra-link'>
                  Test-Optional FAQs
                </a>
              </p>
              <p>
                Applicants who choose to have their application reviewed with
                test scores can self-report SAT and/or ACT score(s) on the
                application for admission. Upon enrollment to Bear University,
                official test scores must be submitted directly from the testing
                agency using the following information:
              </p>
              <p>
                ISAT Code: 0000
                <br />
                ACT Code: 0000
              </p>
              <p>
                Bear University superscores both the SAT and ACT, so if you take
                the exam more than once, you must submit all of your test scores
                to ensure we have your best and highest composite scores on
                record. Bear currently considers only the critical reading and
                math scores for the SAT. For the ACT, Bear does not utilize the
                optional writing section.
              </p>"
            />
          </div>
        </div>
      </section>

      {/*IWC*/}
      <section className="iwc dark-grey-section ambassadors">
        <div className="wrapper">
          <h3>Meet Our Student Admission Ambassadors</h3>
          <IWC
            containerHeight="560px"
            title="Admissions Ambassadors"
            institution="121317"
            dataType="inline-embed"
            location="143204"
          />
        </div>
      </section>

      {/*BLUE SECTION*/}
      <section className="blue-section statistics">
        <div className="wrapper">
          <h3>Freshman Class Profile</h3>
          <ul className="no-list">
            <li>
              <strong>A-/B+</strong> Average Weighted High School GPA
            </li>
            <li>
              <strong>1070–1280</strong> Average SAT Superscore (Combined)
            </li>
            <li>
              <strong>21–30</strong> Average ACT Superscore (Composite)
            </li>
            <li>
              <strong>14,000</strong> Number of Applicants
            </li>
          </ul>
        </div>
      </section>

      {/*GREEN SECTION*/}
      <section className="green-section statistics">
        <div className="wrapper">
          <ul className="no-list">
            <li>
              <strong>60%</strong> In State
            </li>
            <li>
              <strong>35%</strong> Out of State
            </li>
            <li>
              <strong>5%</strong> International
            </li>
            <li>
              <strong>1,500</strong> Number Enrolled
            </li>
          </ul>
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
  );
}

export default AdmissionsIndex

export const query = graphql`{
  bannerImage: file(relativePath: {eq: "headers/admissions-header-2.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`
