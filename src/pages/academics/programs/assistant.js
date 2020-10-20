import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../../components/layout'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const ProgramsIndex = ({ data, location, pageContext }) => {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout location={location}>
      <Helmet title={siteTitle} />
      <div className="wrapper">
        <h2 className="section-headline">Academic Programs</h2>
        <Breadcrumb crumbs={crumbs} crumbLabel="Physician assistant" />
      </div>
    </Layout>
  )
}

export default ProgramsIndex
