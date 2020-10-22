import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'

class ProgramsIndex extends React.Component {
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
            <h2 className="page-title">News & Events</h2>
            <div className="breadcrumb">
              <p>Univertisy Home / News & Events</p>
            </div>
          </div>
        </header>

        {/*WHITE SECTION*/}
        <section className="white-section top-news">
          <div className="wrapper narrow">
            <h3>Construction begins on residence hall</h3>
            <p>
              <strong>
                The $42 million Premier Living-Learning Community at College of
                Amerida will provide housing for 500 students and flexible
                spaces to study and attend class.
              </strong>
            </p>

            <p>
              College of Amerida has broken ground for an innovative
              mixed-purpose residence hall, which is set to open in July 2021.
            </p>

            <p>
              “We are just so thrilled to have this project getting underway,”
              says University President Lauren Ipsum.
            </p>

            <p>
              The new building will be home to the school’s Premier Program
              Academy and including both freshman and upperclass housing
              opportunities. The center also will contain space to house student
              businesses, a student maker space and technology-infused
              classrooms.
            </p>

            <p>
              <a href="" className="button">
                Follow Our Progress
              </a>
            </p>

            <figure className="col-50">
              <img src="" />
            </figure>

            {/* IWC */}

            <p>
              Built through a public-private partnership, the $42 million
              project is being funded through a combination of tax-exempt bonds
              and private donations. While the initial phases are completely
              funded, CoA is still working diligently to secure funding to
              finalize construction.
            </p>

            <p>
              If you’re interested in making a lasting mark on campus and
              ensuring the students of tomorrow are receiving a comprehensive,
              competitive education, we encourage you to learn more about
              supporting the Campaign for CoA today.
            </p>

            <p className="buttons">
              <a href="" className="button">
                Learn about the Campaign
              </a>{' '}
              <a href="" className="button wire-button">
                Make a Gift
              </a>
            </p>
          </div>
        </section>

        {/*GREY SECTION*/}
        <section className="grey-section student-stories">
          <div className="wrapper">
            <div className="group">
              <figure>
                <img src="" />
              </figure>
              <h5>Cutting-edge upgrades coming to CoA labs</h5>
              <p>CoA’s STEM labs are getting a major upgrade this summer.</p>
            </div>
            <div className="group">
              <figure>
                <img src="" />
              </figure>
              <h5>Celebrating 2020’s All-American Scholars</h5>
              <p>
                More than a dozen student-athletes qualified for the program
                this year.
              </p>
            </div>
            <div className="group">
              <figure>
                <img src="" />
              </figure>
              <h5>CoA professor Jon Doe’s top-ranked TED talk</h5>
              <p>Watch the acclaimed TED talk about the future of AI.</p>
            </div>
            <div className="group">
              <figure>
                <img src="" />
              </figure>
              <h5>Where are they now: Class of 2020</h5>
              <p>
                The survey is in! See how recent grads are using their CoA
                degrees.
              </p>
            </div>
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

export default ProgramsIndex
