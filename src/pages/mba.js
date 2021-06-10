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
      <SEO title="Master of Business Administration (MBA)" />
      {/*CONTENT HEADER*/}
      <header className="content-header">
        <div className="hero-image">
          <GatsbyImage image={data.bannerImage.childImageSharp.gatsbyImageData} alt="" />
        </div>
        <div className="page-title-container">
          <h2 className="page-title mba">Graduate Programs</h2>
          <Breadcrumb
            crumbs={crumbs}
            crumbLabel="ACADEMICS / GRAD PROGRAMS / Business Administration"
          />
        </div>
      </header>

      {/*PAGE DESCRIPTION*/}
      <section className="page-description">
        <div className="wrapper cols">
          <div className="col-70">
            <h3>Master of Business Administration (MBA)</h3>
            <h4>Flexible online learning for your life.</h4>
            <p>
              Earning your Master of Business Administration from Bear
              University's College of Business is about more than a degree—it’s
              a step that opens doors for your career. Created with flexibility
              to suit your busy schedule, this online degree program will help
              you improve your problem solving and communication skills while
              giving you the confidence you need to be an effective and
              strategic business leader.
            </p>
            <p>
              With multiple learning options available, you can earn your MBA on
              your own schedule by completing courses online, on campus or a
              combination of both. Best of all, the 33-credit MBA program from
              Bear can be completed in just over two years, putting you on the
              fast-track to career advancement.
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
                  College of Business
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
        </div>
      </section>

      {/*BLUE SECTION*/}
      <section className="blue-section testimonial mba">
        <div className="wrapper cols">
          <div className="col-50">
            <IWC
              containerHeight="560px"
              title="MBA"
              institution="121317"
              dataType="inline-embed"
              location="143502"
            />
          </div>
          <p className="col-50">
            <q>
              Even in an online environment, the faculty and staff in the MBA
              program keep class sizes small and build personal connections with
              students. They care for students as individuals and focus on
              helping them achieve positive outcomes in their studies and
              careers.
            </q>
            <small>Jake Johnson '18</small>
            <Button variant="solid" color="terciary">
              EXPLORE THE COLLEGE OF BUSINESS{' '}
            </Button>
          </p>
        </div>
      </section>

      <section className="page-content wrapper cols">
        <div className="col-60">
          <h3>Grow Your Career Potential</h3>
          <p>
            An education from Bear is recognized by employers and peers because
            of the high value placed on critical thinking, moral and ethical
            decision-making, and the development of well-rounded leadership
            skills. That recognition and respect translates to greater earning
            potential for you as a professional, meaning the return on
            investment from your degree can be well worth your time. Bear
            University MBA graduates within the past 15 years report an average
            annual salary that is 20% higher than the median annual salary for
            MBA graduates across the nation.
          </p>
          <h4>Join a Network of Successful Alumni</h4>
          <p>
            By earning your MBA through the College of Business, you’ll become
            part of a highly respected alumni network. You’ll connect with other
            MBA grads who have gone on to pursue careers in a variety of
            organizations and Fortune 500 companies, including Union Pacific,
            ConAgra, Mutual of Omaha, TD Ameritrade and more. These connections
            with national and local businesses can open doors for your career.
          </p>
        </div>
        <aside className="col-40">
          <div className="group">
            <h4>What Jobs Can You Do With an MBA?</h4>
            <ul>
              <li>Marketing manager</li>
              <li>Financial manager</li>
              <li>Database administrator</li>
              <li>Sales director</li>
              <li>Portfolio manager</li>
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
              <strong>6% Growth</strong> Job Outlook, 2019-2029
            </li>
            <li>
              <strong>$96,940 </strong> Median Pay, 2019{' '}
              <small>Source: Bureau of Labor Statistics</small>
            </li>
            <li>
              <strong>325,900</strong> Number of Jobs as of 2019
            </li>
          </ul>
        </div>
      </section>

      {/*LIGHT GREY SECTION*/}
      <section className="grey-section">
        <div className="wrapper narrow centered">
          <h3>Program Overview</h3>
          <p>
            The Bear MBA program is a flexible, online{' '}
            <strong>two-year program</strong> designed to provide a general
            management education that focuses on developing values-based
            leaders. Our respected faculty strives to help students in the
            Master of Business Administration program strengthen their skills,
            expand their knowledge and work to achieve their goals.
          </p>
        </div>
      </section>

      <section className="white-section">
        <div className="wrapper cols">
          <div className="col-50">
            <h3>Program Concentrations</h3>
            <ul>
              <li>Finance</li>
              <li>Leadership</li>
              <li>Busines Intelligence and Analytics</li>
              <li>Accounting</li>
              <li>Financial Psychology and Behavioral Finance</li>
              <li>Personal Financial Planning</li>
            </ul>
            <div className="group buttons">
              <a href="#" className="button">
                VIEW COURSEWORK REQUIREMENTS
              </a>
            </div>
          </div>
          <figure className="col-50">
            <GatsbyImage image={data.imageFour.childImageSharp.gatsbyImageData} alt="" />
          </figure>
        </div>
      </section>

      {/*BLUE SECTION*/}
      <section className="blue-section statistics">
        <div className="wrapper narrow">
          <h3>Graduate Admission Requirements</h3>
          <ul className="no-list">
            <li>
              <strong>GPA</strong> 3.0 or higher
            </li>
            <li>
              <strong>GMAT</strong> 400 or higher
            </li>
            <li>
              <strong>RESUME</strong> A relevant resume or curriculum vitae
            </li>
            <li>
              <strong>Courses</strong>Completed undergraduate course in
              Statistics
            </li>
          </ul>
        </div>
      </section>

      {/*WHITE SECTION*/}
      <section className="white-section">
        <div className="wrapper cols">
          <div className="col-50">
            <div className="group checkmarked">
              <h4>Letters of Recommendation</h4>
              <p>
                We require two letters of recommendation from persons other than
                friends or family members.
              </p>
            </div>
            <div className="group checkmarked">
              <h4>Official Transcripts</h4>
              <p>
                You must submit official transcripts form all educational
                institutions attended.
              </p>
            </div>
          </div>
          <div className="col-50">
            <div className="group checkmarked">
              <h4>Personal Statement</h4>
              <p>
                You are required to submit a personal essay as part of your
                application. In 300-500 words, explain why you're interested in
                this program and what you plan to do with your degree.
              </p>
            </div>
            <div className="group checkmarked">
              <h4>Application Fee</h4>
              <p>
                Once you complete your application, there is a one-time $50
                application fee.
              </p>
              <small>
                International applicants may be asked to complete additional
                requirements as part of the application process.
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-grey-section">
        <div className="wrapper centered">
          <h3>Ready to take the next step?</h3>
          <p>
            We'd love to hear form you and answer any questions you may have.
            Feel free to schedule a call with one of our dedicated admission
            team members, or get started on your application right now!
          </p>
          <p>
            Our fall semester application deadline is <strong>May 1,</strong>{' '}
            and our spring semester application deadline is{' '}
            <strong>October 1.</strong>
          </p>
          <div className="group buttons centered">
            <a href="#" className="button wire-button">
              Schedule a Call
            </a>
            <a href="#" className="button wire-button">
              Request Info
            </a>
            <a href="#" className="button wire-button">
              Financial Aid Office
            </a>
            <a href="#" className="button">
              APPLY NOW
            </a>
          </div>
        </div>
      </section>

      {/*PAGE CONTENT*/}
      <section className="page-content admissions-process">
        <div className="wrapper narrow centered">
          <h3>Frequently Asked Questions</h3>
          <div className="admissions-steps faq">
            <Accordion
              title="What is an MBA?"
              content="<p>An MBA is a general business administration degree offered at the graduate level. Core coursework within an MBA emphasizes foundational business knowledge and skills in management, accounting, and marketing. Individuals with an undergraduate degree in a field other than business may pursue an MBA to build essential business competencies.</p>"
            />
            <Accordion title="How much does it cost to attend Bear University?" />
            <Accordion title="What skills will I learn as an MBA?" />
            <Accordion title="How many credits are required to complete the MBA program?" />
            <Accordion title="Are there any dual degree options with an MBA?" />
          </div>
        </div>
      </section>

      <Fragment>
        <PreFooter
          type="mba-prefooter"
          cta="VIEW STUDENT STORIES"
          callout="See what our recent grads are up to — and imagine what you could do with an MBA from Bear!"
        />
      </Fragment>
    </Layout>
  );
}

export default AdmissionsIndex

export const query = graphql`{
  imageFour: file(relativePath: {eq: "inset-photos/writing-school.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  bannerImage: file(relativePath: {eq: "headers/mba-header.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`
