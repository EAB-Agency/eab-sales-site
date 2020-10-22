import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import AltNav from '../components/alternate-navigation'

class ProgramsIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />

        {/*CONTENT HEADER*/}
        <header className="content-header">
          <div className="hero-image">
            <img src="programs-hero.jpg" />
          </div>
          <div className="page-title-container">
            <h2 className="page-title">Funding Your Education</h2>
            <div className="breadcrumb"><p>Univertisy Home / Fundint Your Education</p></div>
          </div>
        </header>


        {/*PAGE DESCRIPTION*/}
        <section className="page-description wrapper cols">
          <div className="col-70">
            <h3>Financial Aid</h3>
            <p>A degree from College of America is a smart investment in your future. At CoA, you’ll get a world-class education for an affordable price. You’ll also build industry connections and gain hands-on experience that will give you an edge in today’s competitive job market.</p>
            <p>Navigating scholarships and aid can be tricky, but you don’t have to figure it out alone. Our friendly  admissions staff will help you and your family build a financial aid and scholarship package that works. We’ll even help you map out the best steps to fund your education so you can reap the full value of your CoA degree and earn a competitive advantage in your career, community and life.</p>
            <p>Reading through the resources on this page is a great way to start making a plan to fund your education. The most important thing is to file your FAFSA as soon as possible. </p>
            <p>We also encourage you to check out some <a href="">CoA success stories</a> to see the type of outcomes our students and alumni enjoy.</p>
          </div>
          <div className="col-30 alternate-navigation">
            <AltNav />
          </div>
        </section>

        {/*RED SECTION*/}
        <section className="red-section statistics affy-outcomes">
          <div className="wrapper">
            <h3>Affordability and Outcomes</h3>
            <ul className="no-list">
              <li><strong>$41 Million+</strong> in Scholarships Awarded</li>
              <li><strong>$55,000</strong> Average Starting Salary of Recent CoA Graduates</li>
              <li><strong>#14 of 66</strong> Best Value Colleges <br />(niche.com)</li>
            </ul>
          </div>
        </section>

        {/*PAGE CONTENT*/}
        <section className="page-content aid-options">
          <div className="wrapper cols">
            <div className="col-50">
              <div className="group">
                <h3>Federal Aid</h3>
                <p>The FAFSA for the 2020-2021 academic year is now available at <a href="">studentaid.gov</a>. We suggest filing <strong>as soon as possible</strong> to avoid delays and make sure you’re considered for the maximum potential amount of aid. Remember to include our FAFSA code, <strong>000000</strong>, so that CoA receives your information—we’ll send you an email confirmation with next steps once we do.</p>
                <p>It’s easier than ever to file your FAFSA. The U.S. Department of Education redesigned its website to make it mobile-friendly and also introduced a new smartphone application called <strong>myStudentAid</strong> that allows you to complete the FAFSA on your phone.</p>
              </div>
              <div className="group">
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/LK0bbu0y5AM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <h4>How to Fill out Your FAFSA</h4>
                <p><i>This video from the Federal Student Aid Office will walk you through how to complete your Free Application for Federal Student Aid.</i></p>
                <p><a href="" className="button wire-button">FAFSA Tips from CoA</a></p>
              </div>
            </div>
            <div className="col-50">
              <div className="group">
                <h3>State Aid</h3>
                <p>In-state applicants may be eligible for special grants and scholarships. To qualify, you or your parent/guardian (if you are a dependent) must be a resident for 12 consecutive months prior to the first day of classes for the academic year for which state aid funds are being requested. Certain exceptions apply, so we encourage you to review CoA’s State Aid Application for more details.</p>
                <p><a href="" className="button wire-button">CoA’s State Aid Application</a></p>
              </div>
              <div className="group">
                <h4>Explore Florida Scholarship and Grant Programs</h4>
                <p>Merit- and need-based opportunities are available for residents.</p>
                <p>
                  <a href="" className="extra-link">Bright Futures Scholarship Program</a>
                  <a href="" className="extra-link">Benacquisto Scholarship Program</a>
                  <a href="" className="extra-link">EASE: Effective Access  to Student Education Grant</a>
                  <a href="" className="extra-link">SAG: Student Assistance Grant</a>
                </p>
                <p><a href="" className="button wire-button">More Aid Opportunities</a></p>
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
                  <p>Scholarships are one of the best ways to pay for your college education. They don’t cost you anything, you don’t have to pay them back and some are considered prestigious honors that you can reference on your resume. College of America offers both need- and merit-based scholarships, and our friendly staff is available to help you find private scholarships to supplement your financial aid package if needed.</p>
                  <p><a href="" className="button">Find a Scholarship</a></p>
                </div>
                <div className="group">
                  <h4>Student Employment</h4>
                  <p>Are you ready to get more than a paycheck while earning your degree? CoA provides assistance to students who are looking for employment opportunities they can balance with their school responsibilities. Students can participate in either need-based employment programs, such as Federal Work-Study, or non-need-based programs, such as the Student Employment Program (on campus) and the Job Location and Development Program (off campus).</p>
                  <p><a href="" className="button">Job Opportunities</a></p>
                </div>
                <div className="group">
                  <h4>Tuition Calculator</h4>
                  <p>Using your own financial information, estimate how much your degree from CoA could cost. It could be much less than you think!</p>
                  <p>Before getting started, you may want to collect any information about your family’s income over the past year, your FAFSA documents and any scholarships you may have received.</p>
                  <p><a href="" className="button">Calculate Your Costs</a></p>
                </div>
              </div>
            </div>
            <div className="col-40 dark-grey-section">
              <div className="wrapper">
                <h3>Student Success</h3>
                <p>Megan Bursch, 2nd Place <br />Winner in NACAC’s First Video <br />Scholarship Contest</p>
              </div>
            </div>
          </div>
        </section>

        {/*YELLOW SECTION*/}
        <section className="yellow-section statistics">
          <div className="wrapper">
            <h3>Premier Program Scholarships</h3>
            <ul className="no-list">
              <li><strong>Full Tuition*</strong> Presidential Scholars <small>(*Up to Full Tuition, by Invitation Only)</small></li>
              <li><strong>$23,000</strong> American Excellence Scholarship <small>(Tuition + Room and Board)</small></li>
              <li><strong>$19,000</strong> The Teaching Academy Scholarship</li>
              <li><strong>$19,000</strong> Business Innovation Academy Scholarship</li>
            </ul>
          </div>
        </section>

        {/*DARK GREY SECTION*/}
        <section className="dark-grey-section">
          <div className="wrapper narrow centered">
            <h3>Why College of America?</h3>
            <p><center>Here, you’ll have access to all the resources of a large public research university—and the personalized attention that makes you feel like part of a tight-knit community. This combination is why we’re nationally recognized for excellence and why our alumni outcomes can’t be beat.</center></p>
            <p>Explore campus and see yourself at CoA:</p>
            <a href="" className="button grey-button">Take a Virtual Tour</a>
          </div>
        </section>
      </Layout>
    )
  }
}

export default ProgramsIndex
