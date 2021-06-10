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
            crumbLabel="ACADEMICS / GRAD PROGRAMS / Nursing"
          />
        </div>
      </header>

      {/*PAGE DESCRIPTION*/}
      <section className="page-description">
        <div className="wrapper cols">
          <div className="col-70">
            <h3>Master of Science in Nursing (MSN)</h3>
            <h4>Earning an MSN from Bear sets you apart.</h4>
            <p>
              Are you ready to take a more active role in delivering quality
              healthcare, shaping health policy or educating the next generation
              of nursing professionals? The Master of Science in Nursing (MSN)
              program at Bear’s College of Nursing will give you the advanced
              knowledge and skills you need to be a leader in today’s
              challenging health care environment.
            </p>
            <p>
              There is high demand for nurses who possess a comprehensive set of
              skills and can ensure the best outcomes for patients. Bear
              University offers MSN programs in Nursing Education and Nursing
              Administration and Leadership that are recognized for developing
              highly skilled, compassionate nurses who are ready to lead the
              nursing industry.
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

      <section className="white-section">
        <div className="wrapper cols">
          <div className="col-50">
            <IWC
              containerHeight="560px"
              title="MBA"
              institution="121317"
              dataType="inline-embed"
              location="143503"
            />
          </div>
          <div className="col-50">
            <h3>Targeted Hands-On Learning:</h3>
            <h4>The perfect blend of in-person and online learning.</h4>
            <p>
              For nearly 60 years, the College of Nursing has been preparing
              students by giving them the theoretical knowledge and clinical
              skills to thrive in a nursing profession. Our graduates have the
              critical thinking skills to assess, plan, implement and manage
              patient care, as well as the values to truly impact the lives of
              those they touch.
            </p>
            <p>
              We offer preceptorships at the nation’s largest hospitals and in
              rural and specialty hospitals, and students gain hands-on
              experience through outreach and service in underserved areas.
            </p>
            <div className="group buttons">
              <a href="#" className="button">
                EXPLORE THE COLLEGE OF NURSING
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="white-section">
        <div className="wrapper cols">
          <div className="col-50">
            <h3>Innovative Research Opportunities</h3>
            <p>
              Here we foster an academic enrivonment where students are
              encouraged to ask big questions and pursue the answers with the
              support of expert faculty members.
            </p>
            <p>
              Bear University has forged over 500 partnerships that fund and
              solve local and global health issues. These partnerships also
              enable our students and faculty conduct cutting-edge research in
              facilities equpped with the most current medical technology.
            </p>
            <div className="group buttons">
              <a href="#" className="button">
                MEET THE FACULTY
              </a>
              <a href="#" className="button">
                VIEW CORPORATE PARTNERSHIPS
              </a>
            </div>
          </div>
          <div className="col-50">
            <IWC
              containerHeight="560px"
              title="MBA"
              institution="121317"
              dataType="inline-embed"
              location="143504"
            />
          </div>
        </div>
      </section>

      <section className="white-section page-content wrapper cols">
        <div className="col-60">
          <h3>Expand Your Career Options</h3>
          <p>
            Do you want to make a difference in the world? Would you like a
            fulfilling career that allows you to spend every day serving others?
          </p>
          <p>
            Nursing is one of the fastest growing professions in the nation, and
            the need for registered nurses is expected to grow 7 percent by
            2029. Through the MSN program, you’ll gain the advanced knowledge
            and skills you’ll need to be a leader in today’s challenging health
            care environment. One hundred percent of Bear University nursing
            graduates are employed within six months of graduation.
          </p>
          <p>
            To help you achieve your goals, our MSN program offers
            specializations in{' '}
            <strong>Nursing Administration and Leadership</strong> and{' '}
            <strong>Nursing Education.</strong>
          </p>
          <h4>Connections That Never End</h4>
          <p>
            The Bear University alumni network is more than 60,000 strong—and
            growing! You become a part of it when you graduate, and it means
            having valuable connections that last a lifetime.
          </p>
        </div>
        <aside className="col-40">
          <div className="group">
            <h4>Program Outcomes:</h4>
            <h5>What skills will you gain?</h5>
            <ul>
              <li>
                Learn to design and implement services for clients in a variety
                of settings
              </li>
              <li>
                Use critical thinking to address relevant health care issues
              </li>
              <li>Become a knowledgeable leader in health care</li>
              <li>Demonstrate competency in an advanced nursing role</li>
            </ul>
          </div>
        </aside>
      </section>

      {/*NUMBERS SECTION*/}
      <section className="purple-section statistics">
        <div className="wrapper">
          <h3>Career Outlook</h3>
          <ul className="no-list">
            <li>
              <strong>7% Growth</strong> Job Outlook, 2019-2029
            </li>
            <li>
              <strong>$73,300 </strong> Median Pay, 2019{' '}
              <small>Source: Bureau of Labor Statistics</small>
            </li>
            <li>
              <strong>3,096,700</strong> Number of Jobs as of 2019
            </li>
          </ul>
        </div>
      </section>

      {/*LIGHT GREY SECTION*/}
      <section className="grey-section">
        <div className="wrapper narrow centered">
          <h3>Program Overview</h3>
          <p>
            Bear’s MSN programs in Nursing Education and Nursing Administration
            and Leadership are flexible, online programs designed to fit into
            your busy schedule. You can complete the majority of your master’s
            degree online in just <strong>eighteen months,</strong> although you
            may be required to make some visits to campus. In addition to most
            of your requirements being online, you can be a full-time or
            part-time student—whatever best fits your life. And, you’re not
            required to take the GRE or submit a thesis.
          </p>
        </div>
      </section>

      <section className="white-section">
        <div className="wrapper centered">
          <h3>Specializations</h3>
          <div className="cols">
            <div className="col-50">
              <h4>Nursing Education</h4>
              <p>
                Work as an innovative educator in academic or clinical settings
                using foundational knowledge in teaching and learning
                principles, assessment, and curricular design.
              </p>
              <div className="group buttons centered">
                <a href="#" className="button">
                  VIEW COURSE REQUIREMENTS
                </a>
              </div>
            </div>
            <div className="col-50">
              <h4>Nursing Administration and Leadership</h4>
              <p>
                Work as an innovative and collaborative leader in health care
                organizations, improving the quality of health care.
              </p>
              <div className="group buttons centered">
                <a href="#" className="button">
                  VIEW COURSE REQUIREMENTS
                </a>
              </div>
            </div>
          </div>
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
              <strong>DEGREE</strong> BSN from an ACEN- or CCNE-accredited
              college or university
            </li>
            <li>
              <strong>LICENSURE</strong> Active RN license with NE eligibility
            </li>
            <li>
              <strong>Courses</strong>Completed undergraudate courses in
              Statistics and Physical Assessment
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
                We require three letters of recommendation, including one from
                either a supervisor or employer who can speak to your
                performance in an academic or professional setting.
              </p>
            </div>
            <div className="group checkmarked">
              <h4>Official Transcripts</h4>
              <p>
                You must submit official transcripts from all educational
                institutions attended, including high school and undergraduate
                studies.
              </p>
            </div>
          </div>
          <div className="col-50">
            <div className="group checkmarked">
              <h4>Personal Statement</h4>
              <p>
                You are required to submit a personal statement speaking to your
                long- and short-term goals.
              </p>
            </div>
            <div className="group checkmarked">
              <h4>Application Fee</h4>
              <p>
                Once you complete your application, there is a one-time $50
                application fee.
              </p>
            </div>
          </div>
        </div>

        <div className="note centered">
          {' '}
          <small>
            International applicants may be asked to complete additional
            requirements as part of the application process.
          </small>
        </div>
      </section>

      <section className="dark-grey-section">
        <div className="wrapper centered">
          <h3>Ready to take the next step?</h3>
          <p>
            We’d love to hear from you and answer any questions you may have.
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

      {/*GREY SECTION*/}
      <section className="grey-section student-stories">
        <div className="wrapper">
          <div className="group">
            <figure>
              <GatsbyImage image={data.imageFour.childImageSharp.gatsbyImageData} alt="" />
            </figure>
            <h5>
              Navy Nurse and College of Nursing, doctorate student deployed to
              New York City{' '}
            </h5>
          </div>
          <div className="group">
            <figure>
              <GatsbyImage image={data.imageOne.childImageSharp.gatsbyImageData} alt="" />
            </figure>
            <h5>
              Bear University nursing graduate steps up to aid passenger on
              plane
            </h5>
          </div>
          <div className="group">
            <figure>
              <GatsbyImage image={data.imageTwo.childImageSharp.gatsbyImageData} alt="" />
            </figure>
            <h5>
              Jess Johnson ‘19 gives Ted Talk on importance of diversity in
              nursing{' '}
            </h5>
          </div>
          <div className="group">
            <figure>
              <GatsbyImage image={data.imageThree.childImageSharp.gatsbyImageData} alt="" />
            </figure>
            <h5>
              Health care news: Nurses pioneer new tool in pediatric patient
              care in Chicago
            </h5>
          </div>
        </div>
      </section>
      <Fragment>
        <PreFooter
          cta="Take a Virtual Tour"
          url="https://www.youvisit.com/tour/eabcollegeofnursing/eabcollegeofnursinggrad?tourid=tour1"
          callout="Explore campus and see yourself at Bear University"
        />
      </Fragment>
    </Layout>
  );
}

export default AdmissionsIndex

export const query = graphql`{
  imageOne: file(relativePath: {eq: "news-thumbnails/news-plane.jpg"}) {
    ...squareImage
  }
  imageTwo: file(relativePath: {eq: "news-thumbnails/news-tedtalk.jpg"}) {
    ...squareImage
  }
  imageThree: file(relativePath: {eq: "news-thumbnails/news-pediatric.jpg"}) {
    ...squareImage
  }
  imageFour: file(relativePath: {eq: "news-thumbnails/news-lab.jpg"}) {
    ...squareImage
  }
  bannerImage: file(relativePath: {eq: "headers/nursing-header.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`
