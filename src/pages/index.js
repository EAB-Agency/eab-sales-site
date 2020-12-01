import React, { useEffect } from 'react'
import Layout from '../components/layout'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { Button } from '../components'
import IWC from '../components/iwc'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import HeroVideo from '../video/sales-site-hero.mp4'
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
          <video autoPlay loop muted id="hero-video" className="hero-video">
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
              At Bear University, you’ll have limitless opportunites to grow
              academically, personally and professionally.
            </p>
            <p>
              Our small classes are experience-oriented, meaning you’ll focus on
              real-world learning in a setting that encourages your professors
              to get to know you. Plus, you’ll find a support group of advisors,
              faculty and peers to cheer you on every step of the way.
            </p>
            <Button variant="solid" color="secondary">
              Get to Know Bear
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
              Your virtual visit includes a personalized virtual tour with an
              admission counselor, a video chat with a student ambassador and a
              meeting with your dedicated financial aid advisor.
            </p>
            <Button variant="solid" color="primary">
              Schedule Your Visit
            </Button>
          </div>

          <div className="col-60">
            <IWC
              containerHeight="490px"
              title="Anotomy Lab"
              institution="121317"
              dataType="inline-embed"
              location="143202"
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
                  <strong>#14 of 66</strong>Best Value Colleges (niche.com)
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
          Picture Yourself at Bear University:
          <strong>Take a Virtual Tour!</strong>
          </h3>
        </div>
        <IWC
              containerHeight="550px"
              title="Anotomy Lab"
              institution="121317"
              dataType="inline-embed"
              location="143202"
            />
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
        <div className="wrapper narrow centered">
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
                <a href="">Bear Preview Weekend</a>, an exclusive admitted
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
        <div className="wrapper narrow centered">
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
        <div className="wrapper narrow">
          <h3>Undergraduate Admission Requirements</h3>
          <ul className="no-list">
            <li>
              <strong>GPA</strong> 3.5 Weighted GPA in High School
            </li>
            <li>
              <strong>ACT/SAT</strong> 25 Composite ACT 1220 Total SAT
            </li>
            <li>
              <strong>Years of ...</strong> Math: 4<br />
              Science: 3<br />
              English: 4<br />
            </li>
            <li>
              <strong>Courses</strong>Biology,** Chemistry and Algebra II
            </li>
          </ul>
          <p>
            *While Bear has instituted a test-optional policy for the 2021-22
            admission cycle, Dual Admission applicants must still submit
            official SAT or ACT scores. <a href="">Learn more</a>
          </p>
          <small>
            **Anatomy and Physiology, and Living Environment may be substituted
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
                major you choose. Additional prerequisites may be communicated
                upon admission.
              </p>
            </div>
            <div className="group checkmarked">
              <h4>Undergraduate GPA</h4>
              <p>
                {' '}
                You must maintain a <strong> 3.2</strong> cumulative and science
                GPA. You must also earn at least a C in each prerequisite
                course.
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
                  All minimum test scores must be achieved on the same test
                  attempt(no superscoring).
                </small>
              </p>
            </div>
            <div className="group checkmarked">
              <h4>Credits Required</h4>
              <p>
                {' '}
                You must earn at least <strong> 120</strong> credits to enter
                the P.A. graduate program.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper cols">
          <figure className="col-50">
            {/* <Img fluid={data.startJourney.childImageSharp.fluid} alt="" /> */}
          </figure>
          <div className="col-50">
            <h3>Start Your Journey to a Rewarding Career in Medicine Today</h3>
            <p>
              The first step to making a difference in patient outcomes is to
              find a college that will give you the tools and support to excel.
              You’ll find that (and more) at Bear. You can finish your
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
      fluid(maxWidth: 355, maxHeight: 360) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
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
