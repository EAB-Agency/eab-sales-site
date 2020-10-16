import React from 'react'
import Hero from '../components/hero'
import Layout from '../components/layout'

class FinancialAid extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Hero data={author.node} />
      </Layout>
    )
  }
}

export default FinancialAid
