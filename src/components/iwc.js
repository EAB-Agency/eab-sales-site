import React, { Component } from 'react'
import scriptjs from 'scriptjs'

class IWC extends Component {
  constructor(props) {
    super(props)
    this.YVSource = 'https://www.youvisit.com/tour/Embed/js3'
  }
  scan() {
    scriptjs(this.YVSource, () => {
      const yvObj = window.YVScript
      // console.log('issue #1 : YVScript', yvObj)
      yvObj && yvObj.scanEmbeds()
    })
  }

  componentDidMount() {
    this.scan()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.scan()
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
        <a
          href="https://www.youvisit.com"
          className="virtualtour_embed"
          title={this.props.title}
          data-platform="v"
          data-link-type={this.props.linkType}
          data-inst={this.props.institution}
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
