import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";

export default ({ data }) => (
  <div className="hero-image">
    <GatsbyImage image={data.childImageSharp.gatsbyImageData} />
  </div>
)
