import React from 'react'
const IWC = ({ url, height, title, ...props }) => (
  <div className="iwc" style={{ height: height || '500px' }}>
    <a alt={title || 'Launch Experience'} href={url}>
      {title || 'Launch Experience'}
    </a>
  </div>
)
export default IWC
