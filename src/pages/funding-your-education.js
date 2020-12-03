import React from 'react'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { Button } from '../components'
import Layout from '../components/layout'
import Video from '../components/video'
import SEO from '../components/seo'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import IWC from '../components/iwc'

const FinancialAidIndex = ({ data, location, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <SEO title="Funding Your Education" />

      {/*CONTENT HEADER*/}
      <header className="content-header">
        <div className="hero-image">
          <Img fluid={data.bannerImage.childImageSharp.fluid} alt="" />
        </div>
        <div className="page-title-container">
          <h2 className="page-title">Funding Your Education</h2>
          <Breadcrumb crumbs={crumbs} crumbLabel="Funding Your Education" />
        </div>
      </header>

      {/*PAGE DESCRIPTION*/}
      <section className="page-description">
      <div className="wrapper cols">
        <div className="col-70">
          <h3>Financial Aid</h3>
          <p>
            A degree from Bear University is a smart investment in your
            future. At Bear University, you’ll get a world-class education for an affordable
            price. You’ll also build industry connections and gain hands-on
            experience that will give you an edge in today’s competitive job
            market.
          </p>
          <p>
            Navigating scholarships and aid can be tricky, but you don’t have to
            figure it out alone. Our friendly admissions staff will help you and
            your family build a financial aid and scholarship package that
            works. We’ll even help you map out the best steps to fund your
            education so you can reap the full value of your Bear University degree and earn
            a competitive advantage in your career, community and life.
          </p>
          <p>
            Reading through the resources on this page is a great way to start
            making a plan to fund your education. The most important thing is to
            file your FAFSA as soon as possible.{' '}
          </p>
          <p>
            We also encourage you to check out some{' '}
            <a href="">Bear University success stories</a> to see the types of outcomes our
            students and alumni enjoy.
          </p>
        </div>
        <div className="col-30 alternate-navigation">
          {/* <AltNav /> */}

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
                Admissions
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

      {/*RED SECTION*/}
      <section className="red-section statistics affy-outcomes">
        <div className="wrapper">
          <h3>Affordability and Outcomes</h3>
          <ul className="no-list">
            <li>
              <strong>$41 Million+</strong> in Scholarships Awarded
            </li>
            <li>
              <strong>$55,000</strong> Average Starting Salary of Recent Bear University Graduates
            </li>
            <li>
              <strong>#14 of 66</strong> Best Value Colleges <br />
              (niche.com)
            </li>
          </ul>
        </div>
      </section>

      {/*PAGE CONTENT*/}
      <section className="page-content aid-options">
        <div className="wrapper cols">
          <div className="col-50">
            <div className="group">
              <h3>Federal Aid</h3>
              <p>
                The FAFSA for the 2020-2021 academic year is now available at{' '}
                <a href="">studentaid.gov</a>. We suggest filing{' '}
                <strong>as soon as possible</strong> to avoid delays and make
                sure you’re considered for the maximum potential amount of aid.
                Remember to include our FAFSA code, <strong>000000</strong>, so
                that Bear University receives your information—we’ll send you an email
                confirmation with next steps once we do.
              </p>
              <p>
                It’s easier than ever to file your FAFSA. The U.S. Department of
                Education redesigned its website to make it mobile-friendly and
                also introduced a new smartphone application called{' '}
                <strong>myStudentAid</strong> that allows you to complete the
                FAFSA on your phone.
              </p>
            </div>
            <div className="group">
              <Video
                videoSrcURL="https://www.youtube.com/embed/Y8nfk5ApcQ4"
                videoTitle="Free Application For Federal Student Aid"
              />
              <h4>How to Fill Out Your FAFSA</h4>
              <p>
                <i>
                  This video from the Federal Student Aid Office will walk you
                  through how to complete your Free Application for Federal
                  Student Aid.
                </i>
              </p>
              <p>
                <a href="" className="button wire-button">
                  FAFSA Tips from Bear University
                </a>
              </p>
            </div>
          </div>
          <div className="col-50">
            <div className="group">
              <h3>State Aid</h3>
              <p>
                In-state applicants may be eligible for special grants and
                scholarships. To qualify, you or your parent/guardian (if you
                are a dependent) must be a resident for 12 consecutive months
                prior to the first day of classes for the academic year for
                which state aid funds are being requested. Certain exceptions
                apply, so we encourage you to review Bear University’s State Aid Application
                for more details.
              </p>
              <p>
                <a href="" className="button wire-button">
                  Bear University’s State Aid Application
                </a>
              </p>
            </div>
            <div className="group">
              <h4>Explore In-State Scholarship and Grant Programs</h4>
              <p>
                Merit- and need-based opportunities are available for residents.
              </p>
              <p>
                <a href="" className="extra-link">
                  Bright Futures Scholarship Program
                </a>
                <a href="" className="extra-link">
                  Benacquisto Scholarship Program
                </a>
                <a href="" className="extra-link">
                  EASE: Effective Access to Student Education Grant
                </a>
                <a href="" className="extra-link">
                  SAG: Student Assistance Grant
                </a>
              </p>
              <p>
                <a href="" className="button wire-button">
                  More Aid Opportunities
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*LIGHT GREY SECTION*/}
      <section className="grey-section student-success">
        <div className="cols centered">
          <div className="col-60">
            <div className="wrapper">
              <div className="group">
                <h4>Scholarships</h4>
                <p>
                  Scholarships are one of the best ways to pay for your college
                  education. They don’t cost you anything, you don’t have to pay
                  them back and some are considered prestigious honors that you
                  can reference on your resume. Bear University offers both
                  need- and merit-based scholarships, and our friendly staff is
                  available to help you find private scholarships to supplement
                  your financial aid package if needed.
                </p>
                <p>
                  <a href="" className="button">
                    Find a Scholarship
                  </a>
                </p>
              </div>
              <div className="group">
                <h4>Student Employment</h4>
                <p>
                  Are you ready to get more than a paycheck while earning your
                  degree? Bear provides assistance to students who are looking
                  for employment opportunities they can balance with their
                  school responsibilities. Students can participate in either
                  need-based employment programs, such as Federal Work-Study, or
                  non-need-based programs, such as the Student Employment
                  Program (on campus) and the Job Location and Development
                  Program (off campus).
                </p>
                <p>
                  <a href="" className="button">
                    Job Opportunities
                  </a>
                </p>
              </div>
              <div className="group">
                <h4>Tuition Calculator</h4>
                <p>
                  Using your own financial information, estimate how much your
                  degree from Bear could cost. It could be much less than you
                  think!
                </p>
                <p>
                  Before getting started, you may want to collect any
                  information about your family’s income over the past year,
                  your FAFSA documents and any scholarships you may have
                  received.
                </p>
                <p>
                  <a href="" className="button">
                    Calculate Your Costs
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-40 dark-grey-section">
            <div className="wrapper">
              <h3>Student Success</h3>
              <p>Bear University is dedicated to investing in promising students. From awarding merit scholarships to funding renewable grants that allow students to pursue their passions, we make it possible for you to focus on solving the world’s biggest problems—not how you’re going to pay for your education.</p>
              <p>Explore the interactive content below to learn more about how one of our students is making the most of their scholarship.</p>
              <IWC
                containerHeight="560px"
                title="Megan Bursch"
                institution="121317"
                dataType="inline-embed"
                location="143203"
              />
              <p>
                Megan Bursch, 2nd Place <br />
                Winner in NACAC’s First Video <br />
                Scholarship Contest
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*YELLOW SECTION*/}
      <section className="yellow-section statistics">
        <div className="wrapper">
          <h3>Premier Program Scholarships</h3>
          <ul className="no-list">
            <li>
              <strong>Full Tuition*</strong> Premier Scholars{' '}
              <small>(*Up to Full Tuition, by <span className="no-break">Invitation Only)</span></small>
            </li>
            <li>
              <strong>$23,000</strong> Bear Excellence Scholarship{' '}
              <small>(Tuition + Room and Board)</small>
            </li>
            <li>
              <strong>$19,000</strong> The Teaching Academy Scholarship
            </li>
            <li>
              <strong>$19,000</strong> Business Innovation Academy Scholarship
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default FinancialAidIndex

export const query = graphql`
  query {
    bannerImage: file(relativePath: { eq: "headers/funding-header-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1840, maxHeight: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
