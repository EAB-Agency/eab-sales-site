import React, { Component } from 'react'
import scriptjs from 'scriptjs'

class IWC extends Component {
  constructor(props) {
    super(props)
    this.YVSource = 'https://www.youvisit.com/tour/Embed/js3'
  }
  scan() {
    scriptjs(this.YVSource, () => {
      console.log('scanning for links')
      const yvObj = window.YVScript
      yvObj && yvObj.scanEmbeds()
    })
  }

  componentWillUnmount() {
    // hack to remove all of the iframes so the yvscript doesn't get confused
    let molotav = document.getElementsByTagName('iFrame')
    let i = 0
    while (i < molotav.length) {
      if (molotav[i].id.startsWith('virtualtour_iframe')) {
        console.log('==================removing iFrame', molotav[i])
        molotav[i].remove()
      }
      i += 1
    }
  }

  componentDidMount() {
    this.scan()
  }

  render() {
    return (
      <>
        <div
          className="iwc"
          style={{
            height: this.props.containerHeight,
            width: this.props.containerWidth,
            display: 'block',
          }}
        >
          <a
            style={{ display: 'block' }}
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
      </>
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
  showCode: false,
}

export default IWC
