import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from 'gatsby'

class NewsIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <h2 className="section-headline">News &amp; Events</h2>
          <ol className="breadcrumbs">
            <li>
              <Link to="/">University Home</Link>
            </li>
            <li>
              <Link to="/news">News &amp; Events</Link>
            </li>
          </ol>
          <article>
            <h1>Construction begins on residence hall</h1>
            <p>
              The $42 million Premier Living-Learning Community at College of
              Amerida will provide housing for 500 students and flexible spaces
              to study and attend class.
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
            <button>Follow Our Progress</button>
            <div style={{ height: '500px' }}>
              <a
                alt="Launch Experience"
                href="https://www.youvisit.com/tour/whitney.pratt/143200?command=3"
                className="virtualtour_embed"
              >
                Launch Experience
              </a>
            </div>
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
          </article>
          <button>Learn about the Campaign</button> <button>Make a Gift</button>
        </div>
      </Layout>
    )
  }
}

export default NewsIndex
