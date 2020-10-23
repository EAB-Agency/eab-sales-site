import React, { Component } from 'react'

class IWC extends Component {
  constructor(props) {
    super(props)
    this.YVSource = 'https://www.youvisit.com/tour/Embed/js3'
  }
  onScriptLoad() {
    // still a problem constantly reloading in dev
    window.YVScript.scanEmbeds()
  }

  componentDidMount() {
    if (!window.YVScript) {
      var s = document.createElement('script')
      s.type = 'text/javascript'
      s.src = this.YVSource
      s.async = true
      var x = document.getElementsByTagName('script')[0]
      // document.body.appendChild(s)
      x.parentNode.insertBefore(s, x)
      s.addEventListener('load', (e) => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    return (
      <div
        className="iwc"
        style={{
          height: this.props.containerHeight,
          width: this.props.containerWidth,
        }}
      >
        {/* <a
          alt={this.props.title || 'Launch Experience'}
          href={this.props.url}
          data-hover-height="70%"
          data-hover-width="90%"
          data-image-height="100%"
          data-image-width="100%"
          data-ims-hide-panels="1"
        >
          {this.props.title || 'Launch Experience'}
        </a> */}

        {/* <a
          href="https://www.youvisit.com"
          alt={this.props.title}
          className="virtualtour_embed"
          title={this.props.title}
          data-platform="v"
          data-link-type={this.props.linkType}
          data-image-width={this.props.iwcWidth}
          data-image-height={this.props.iwcHeight}
          data-inst={this.props.institution}
          data-loc={this.props.location}
        >
          {this.props.title}
        </a> */}

        <a
          href="https://www.youvisit.com"
          className="virtualtour_embed"
          title={this.props.title}
          data-platform="v"
          data-link-type={this.props.linkType}
          data-inst={this.props.institution}
          data-type={this.props.dataType}
          data-image-width={this.props.iwcWidth}
          data-image-height={this.props.iwcHeight}
          data-loc={this.props.location}
          data-hover-width={this.props.hoverWidth}
          data-hover-height={this.props.hoverHeight}
          data-type={this.props.dataType}
        >
          Virtual Tour
        </a>
      </div>
    )
  }
}

IWC.defaultProps = {
  containerHeight: '300px',
  containerWidth: '100%',
  title: 'Launch Experience',
  linkType: 'immersive',
  dataType: '',
  iwcWidth: '100%',
  iwcHeight: '100%',
  location: '',
  hoverWidth: '90%',
  hoverHeight: '70%',
}

export default IWC
