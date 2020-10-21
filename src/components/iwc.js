import React, { Component } from 'react'

class IWC extends Component {
  constructor(props) {
    super(props)
    this.YVSource = 'https://www.youvisit.com/tour/Embed/js3'
  }
  onScriptLoad() {
    // global.YVScript.scanEmbeds()
  }

  componentDidMount() {
    if (!window.YVScript) {
      var s = document.createElement('script')
      s.type = 'text/javascript'
      s.src = this.YVSource
      s.async = true
      // var x = document.getElementsByTagName('script')[0]
      document.body.appendChild(s)
      // x.parentNode.insertBefore(s, x)
      // s.addEventListener('load', (e) => {
      this.onScriptLoad()
      // })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    return (
      <div className="iwc" style={{ height: this.props.height || '500px' }}>
        <a alt={this.props.title || 'Launch Experience'} href={this.props.url}>
          {this.props.title || 'Launch Experience'}
        </a>
      </div>
    )
  }
}

export default IWC
