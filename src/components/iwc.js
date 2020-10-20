import React, { Component } from 'react'

class IWC extends Component {
  constructor(props) {
    super(props)
    this.jsSource = 'https://www.youvisit.com/tour/Embed/js3'
  }
  loadScript() {
    // load podigee player scripts when the component was mounted
    const script = document.createElement('script')
    script.src = this.jsSource
    script.async = true
    document.body.appendChild(script)
  }

  componentDidMount() {
    this.loadScript()
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
