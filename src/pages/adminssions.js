import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import AltNav from '../components/alternate-navigation'

class AdmissionsIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        {/*CONTENT HEADER*/}
        <header className="content-header">
          <div className="hero-image">
            <img src="news-events-hero.jpg" />
          </div>
          <div className="page-title-container">
            <h2 className="page-title">Undergrad Admissions</h2>
            <div className="breadcrumb">
              <p>
                Univertisy Home / Undergraduate Admission / Freshman Applicants
              </p>
            </div>
          </div>
        </header>

        {/*PAGE DESCRIPTION*/}
        <section className="page-description wrapper cols">
          <div className="col-70">
            <h3>Freshman Applicants</h3>
            <p>
              At College of America, we prepare students for lives of purpose.
              We give students the tools they need to become confident, capable
              and caring professionals who outsmart, outperform and outlast
              their competition. With this competitive advantage, our graduates
              go on to change the world.
            </p>
            <p>
              Whether you want to make the world a better place through a career
              in health care, business, public service or even the arts, CoA
              will help you plan your path—and seize your future. That’s because
              our community holds the shar
            </p>
            <p>
              Your classes and extracurriculars will prepare you for a real
              career, real contributions and real life. You may enter looking to
              take on the world, but you will emerge prepared to dominate your
              future.
            </p>
            <p>
              Read on to explore the unique opportunities waiting for you at
              CoA.
            </p>
          </div>
          <div className="col-30 alternate-navigation">
            <AltNav />
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
                <strong>Mar. 1, 2021</strong> Regular Decision Fall 2021
                Semester
              </li>
              <li>
                <strong>Nov. 1, 2021</strong> Dual Admission Winter 2021
                Semester
              </li>
            </ul>
          </div>
        </section>

        {/*PAGE CONTENT*/}
        <section className="page-content admissions-process">
          <div className="wrapper intro">
            <h3>Admissions Process</h3>
            <p>
              Follow this step-by-step guide to apply to College of America.
            </p>
          </div>
          <div className="wrapper cols admissions-steps">
            <aside className="col-30">
              <p>
                Applying to College of America is quick and easy whether you
                choose to apply with our{' '}
                <a href="">CoA Choice Application or the Common App.</a>
              </p>
              <p>
                Either way, the <strong>essay is optional.</strong> You can
                choose one of the five Common App prompts or provide an original
                writing sample of your choice if you’re using the CoA Choice
                Application.{' '}
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
              <div className="group step">
                <h4>Submit Application for Admission</h4>
                <p>
                  Freshman applicants may apply using our streamlined CoA Choice
                  Application or the Common App.
                </p>
              </div>
              <div className="group step">
                <h4>Submit Letter(s) of Recommendation</h4>
                <p>
                  One letter of recommendation from a teacher is required, but
                  you may submit up to a total of three letters. The letter can
                  be completed online through the Common App Teacher Evaluation
                  form, or you can submit the letter(s) in the supplemental
                  items area of the CoA Choice Application.
                </p>
                <p>
                  Paper letters of recommendation may be emailed to your
                  admissions counselor or mailed to:
                </p>
                <p>
                  College of America
                  <br />
                  Office of Undergraduate Admissions
                  <br />
                  1234 College Avenue
                  <br />
                  Anywhere, U.S. 12345
                </p>
              </div>
              <div className="group step">
                <h4>Request Submission of Official Transcripts</h4>
                <p>
                  Your guidance counselor will need to submit your transcripts
                  and recommendation. They can do so electronically through
                  Naviance, SENDedu or the Common App, or by mail using the
                  address above. If you’re applying with the{' '}
                  <a href="">Common App</a>, your counselor should also complete
                  the School Report and submit it with your transcripts and
                  school profile.
                </p>
                <p>
                  For more detailed instructions, see the{' '}
                  <a href="">Resources for Guidance Counselors page.</a>
                </p>
                <p>
                  If you’re curious about how AP and IB credits transfer, visit{' '}
                  <a href="">
                    Transfer Evaluation Services for Undergraduate Students.
                  </a>
                </p>
                <p>
                  Send Verification of Compliance and Completion of Home
                  Education Program. It should include a copy of a teacher’s
                  evaluation or district confirmation, or verification of a
                  passing score on the state student assessment test,
                  administered by a certified teacher.
                </p>
              </div>
              <div className="group step">
                <h4>Submit Test Scores (Optional)</h4>
                <p>
                  Due to testing challenges related to COVID-19, undergraduate
                  applicants for the 2021-22 admission cycle may choose to have
                  their application reviewed for admission{' '}
                  <strong>with or without</strong> the submission of SAT or ACT
                  scores.
                </p>
                <p>
                  <a href="" className="extra-link">
                    Information for Guidance Counselors
                  </a>
                </p>
                <p>
                  Applicants who choose to have their application reviewed with
                  test scores can self-report SAT and/or ACT score(s) on the
                  application for admission. Upon enrollment to CoA, official
                  test scores must be submitted directly from the testing agency
                  using the following information:
                </p>
                <p>
                  ISAT Code: 5514
                  <br />
                  ACT Code: 6706
                </p>
                <p>
                  CoA superscores both the SAT and ACT, so if you take the exam
                  more than once, you must submit all of your test scores to
                  ensure we have your best and highest composite scores on
                  record. CoA currently considers only the critical reading and
                  math scores for the SAT. For the ACT, CoA does not utilize the
                  optional writing section.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*IWC*/}
        <section className="iwc dark-grey-section">
          <div className="wrapper">
            <h3>We are with you from the very beginning.</h3>
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
                <strong>60%</strong> In-State
              </li>
              <li>
                <strong>35%</strong> Out-of-State
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

        {/*DARK GREY SECTION*/}
        <section className="dark-grey-section">
          <div className="wrapper narrow centered">
            <h3>Why College of America?</h3>
            <center>
              Here, you’ll have access to all the resources of a large public
              research university—and the personalized attention that makes you
              feel like part of a tight-knit community. This combination is why
              we’re nationally recognized for excellence and why our alumni
              outcomes can’t be beat.
            </center>
            <p>Explore campus and see yourself at CoA:</p>
            <a href="" className="button grey-button">
              Take a Virtual Tour
            </a>
          </div>
        </section>
      </Layout>
    )
  }
}

export default AdmissionsIndex
