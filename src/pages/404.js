import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'

const Error = () => {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')

  return (
    <Layout>
      <Helmet title={siteTitle} />
      <div className="wrapper">
        <h2 className="section-headline">Oops! Page not found!</h2>
      </div>
    </Layout>
  )
}

export default Error
