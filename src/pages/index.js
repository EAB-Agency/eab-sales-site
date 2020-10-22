import React from 'react'
import Layout from '../components/layout'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { Button } from '../components'
import '../styles/sass/styles.scss'
import IWC from '../components/iwc'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'

// import { Button, Stack, Box, Columns } from '../components/'

const ProgramsIndex = ({ data, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <SEO title="Dual Admission: Physician Assistan Program" />

      {/*CONTENT HEADER*/}
      <header className="content-header">
        <div className="hero-image">
          <Img fluid={data.bannerImage.childImageSharp.fluid} alt="" />
        </div>
        <div className="page-title-container">
          <h2 className="page-title">Academic Programs</h2>
          <Breadcrumb
            crumbs={crumbs}
            crumbLabel="Academics / Programs / Physician Assistant"
          />
        </div>
      </header>

      {/*PAGE DESCRIPTION*/}
      <section className="page-description wrapper cols">
        <div className="col-70">
          <h3>
            <span>Dual Admission:</span> Physician Assistan Program
          </h3>
          <p>
            If you’re interested in providing compassionate and personalized
            care as a P.A., College of America’s Physician Assistant Dual
            Admission program can help you reach your goals. Our P.A. program
            trains competent, caring medical professionals who are dedicated to
            improving health care quality and outcomes. Through clinical
            experiences and professional exposure, you’ll practice diagnosing
            illness, prescribing medications and developing treatment plans.
          </p>
          <p>
            Keep reading to discover the type of skills you’ll learn and
            possible career outcomes. We’ll also share admission requirements
            and other program-specific information.
          </p>
        </div>
        <div className="col-30 alternate-navigation">
          {/* <AltNav /> */}
          <ul className="no-list">
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
        </div>
      </section>

      {/*IWC*/}
      <section className="iwc dark-grey-section">
        <div className="wrapper">
          <h3>Make your dream a reality. Explore the Virtual Anatomy Lab</h3>
          <IWC
            height="490px"
            title="Anotomy Lab"
            url="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=121317&data-hover-height=70%&data-hover-width=90%&data-image-height=100%&data-image-width=100%&data-ims-hide-panels=1&"
          />
        </div>
      </section>

      {/*PAGE CONTENT*/}
      <section className="page-content wrapper cols">
        <div className="col-60">
          <h3>What Can You Do with a Physician Assistant Degree?</h3>
          <p>
            College of America’s physician assitant program will prepare you to
            fulfill an integral role in patient care. Completing the program
            will prepare you to perform a comprehensive range of clinical
            services, from taking histories and ordering diagnostic tests to
            treating minor injuries. While a P.A. usually works with a
            supervising physician, they can function as a primary care physician
            in some more rural areas.
          </p>
          <p>
            Between a population that is living longer and the impact of a
            global pandemic, the demand continues to grow for skilled medical
            professionals that provide competent, compassionate care. As a P.A.
            you can make a real difference in the lives of patients of all ages
            and medical histories.
          </p>
        </div>
        <aside className="col-40">
          <div className="group">
            <h4>Related Careers</h4>
            <ul>
              <li>Physician assitant</li>
              <li>Clinical advisor</li>
              <li>Emergency room P.A.</li>
              <li>Infection control specialist</li>
              <li>Medical practitioner</li>
            </ul>
          </div>
          <div className="group">
            <h4>Competencies</h4>
            <ul>
              <li>Diagnose and treat illnesses and minor injuries</li>
              <li>
                Work with supervising physician and team to provide
                outcome-oriented care
              </li>
              <li>Take patient histories and update charts</li>
            </ul>
          </div>
        </aside>
      </section>

      {/*NUMBERS SECTION*/}
      <section className="purple-section statistics">
        <div className="wrapper">
          <h3>Career Potential</h3>
          <ul className="no-list">
            <li>
              <strong>31% Growth</strong> Job Outlook, 2018-2028
            </li>
            <li>
              <strong>$112,260</strong> Median Pay, 2019{' '}
              <small>Source: Bureau of Labor Statistics</small>
            </li>
            <li>
              <strong>118,800</strong> Number of Jobs as of 2018
            </li>
          </ul>
        </div>
      </section>

      {/*LIGHT GREY SECTION*/}
      <section className="grey-section">
        <div className="wrapper">
          <h3>Program Overview</h3>
          <p>
            The Dual Admission Physician Assistant program takes{' '}
            <strong>six years</strong> to complete. Students who complete the
            program will receive a bachelor's degree and a Master of Medical
            Science (M.M.S.) in Physician Assistant. Candidates will follow a
            prescribed 4-year course of study in any undergraduate major and 27
            months of training in the P.A. program at the College of Health Care
            Sciences.
          </p>
        </div>
      </section>

      {/*WHITE SECTION*/}
      <section className="white-section">
        <div className="wrapper cols">
          <div className="col-50">
            <div className="group checkmarked">
              <h4>Degrees Earned</h4>
              <p>
                You can earn <a href="">any bachelor’s degree</a> and your{' '}
                <strong>
                  Master of Medical Science in Physician Assistant (M.M.S.).
                </strong>
              </p>
            </div>
            <div className="group checkmarked">
              <h4>Interview Required</h4>
              <p>
                Students applying for dual admission must interview during{' '}
                <a href="">CoA Preview Weekend</a>, an exclusive admitted
                students event.
              </p>
            </div>
          </div>
          <div className="col-50">
            <div className="group checkmarked">
              <h4>Program Length</h4>
              <p>
                Earn your bachelor’s in <strong>four years</strong> and your
                master’s in <strong>two years and three months.</strong>
              </p>
            </div>
            <div className="group checkmarked">
              <h4>Deadline to Apply</h4>
              <p>
                <strong>Fall</strong> 2021 Admission: <strong>Feb. 1</strong>{' '}
                Winter Admission: Not Permitted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*LIGHT GREY SECTION*/}
      <section className="grey-section">
        <div className="wrapper">
          <h3>Eligibility</h3>
          <p>
            To be considered for dual admission and fill your reserved seat in
            graduate or professional school, there are some requirements you
            must meet. <strong>Undergraduate Admission Requirements</strong> are
            for first-time and transfer students applying to earn a bachelor’s
            degree. <strong>Graduate Admission Requirements</strong> are the
            standards students need to maintain while earning their
            undergraduate degree to remain eligible for the graduate or
            professional program.
          </p>
        </div>
      </section>

      {/*BLUE SECTION*/}
      <section className="blue-section statistics">
        <div className="wrapper">
          <h3>Undergraduate Admission Requirements</h3>
          <ul className="no-list">
            <li>
              <strong>31% Growth</strong> Job Outlook, 2018-2028
            </li>
            <li>
              <strong>$112,260</strong> Median Pay, 2019{' '}
              <small>Source: Bureau of Labor Statistics</small>
            </li>
            <li>
              <strong>118,800</strong> Number of Jobs as of 2018
            </li>
          </ul>
          <center>
            *While CoA has instituted a test-optional policy for the 2021-22
            admission cycle, Dual Admission applicants must still submit
            official SAT or ACT scores. <a href="">Learn more</a>
          </center>
          <small>
            ** Anatomy and Physiology, and Living Environment may be substituted
            for Biology.
          </small>
        </div>
      </section>

      {/*WHITE SECTION*/}
      <section className="white-section">
        <div className="wrapper cols">
          <div className="col-50">
            <div className="group checkmarked">
              <h4>Degree Required</h4>
              <p>
                {' '}
                You must complete a <strong>bachelor’s degree</strong> in any
                major you choose.Additional prerequisites may be communicated
                upon admission.
              </p>
            </div>
            <div className="group checkmarked">
              <h4>Undergraduate GPA</h4>
              <p>
                {' '}
                You must maintain a <strong> 3.2</strong> cumulative and science
                GPA.You must also earn at least a C in each prerequisite course.
              </p>
            </div>
          </div>
          <div className="col-50">
            <div className="group checkmarked">
              <h4>Required Test Scores</h4>
              <p>
                <strong>GRE:</strong> No less than a <strong> 150</strong> on
                the verbal reasoning and quantitative reasoning sections, and no
                less than a <strong> 4.0</strong> on analytical writing.{' '}
                <small>
                  * All minimum test scores must be achieved on the same test
                  attempt(no superscoring).
                </small>
              </p>
            </div>
            <div className="group checkmarked">
              <h4>Credits Required</h4>
              <p>
                {' '}
                You must earn at least <strong> 120</strong> credits to enter
                the P.A.graduate program.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper cols">
          <figure className="col-50">
            <Img fluid={data.imageOne.childImageSharp.fluid} alt="" />
          </figure>
          <div className="col-50">
            <h3>Start Your Journey to a Rewarding Career in Medicine Today</h3>
            <p>
              The first step to making a difference in patient outcomes is to
              find a college that will give you the tools and support to excel.
              You’ll find that (and more) at CoA. You can finish your
              streamlined application in just a few minutes—and if you’re not
              ready to apply yet, we hope you’ll still drop us a line and let us
              know you’re interested.
            </p>
            <div className="group buttons">
              <a href="#" className="button">
                Apply Now
              </a>
              <a href="#" className="button wire-button">
                Request Info
              </a>
            </div>
          </div>
        </div>
      </section>
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
    bannerImage: file(relativePath: { eq: "headers/program-header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
