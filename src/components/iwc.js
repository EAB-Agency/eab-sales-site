import React, { Component } from 'react'
class IWC extends Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://www.youvisit.com/tour/Embed/js3'
    script.async = true
    // this.instance.appendChild(script)
    // document.getElementsByTagName('body').appendChild(script)
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
