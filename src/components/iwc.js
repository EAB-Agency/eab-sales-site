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
        style={{ height: this.props.height, width: this.props.width }}
      >
        <a
          alt={this.props.title || 'Launch Experience'}
          href={this.props.url}
          data-hover-height="70%"
          data-hover-width="90%"
          data-image-height="100%"
          data-image-width="100%"
          data-ims-hide-panels="1"
        >
          {this.props.title || 'Launch Experience'}
        </a>
      </div>
    )
  }
}

export default IWC
