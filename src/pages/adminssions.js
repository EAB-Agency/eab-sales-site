import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

class FundingIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet />
        <div className="wrapper">
          <h2 className="section-headline">Admissions</h2>
        </div>
      </Layout>
    )
  }
}

export default FundingIndex
