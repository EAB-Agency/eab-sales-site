import React from 'react'
import Img from 'gatsby-image'

export default ({ data }) => (
  <div className="hero-image">
    <Img fluid={data.heroImage.fluid} />
  </div>
)
