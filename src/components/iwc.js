import React, { Component } from 'react'

class IWC extends Component {
  constructor(props) {
    super(props)
  }
  onScriptLoad() {
    YVScript.scanEmbeds()
  }

  componentDidMount() {
    if (!window.YVScript) {
      var s = document.createElement('script')
      s.type = 'text/javascript'
      s.src = `https://www.youvisit.com/tour/Embed/js3`
      var x = document.getElementsByTagName('script')[0]
      x.parentNode.insertBefore(s, x)
      // Below is important.
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', (e) => {
        this.onScriptLoad()
      })
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
