import React, { Component } from 'react'
import WebBanner from './component/webbanner/WebBanner'
import WebCards from './component/webcards/WebCards'

export class HomeIndex extends Component {
  render() {
    return (
      <div>
        <WebBanner />
        <WebCards />
      </div>
    )
  }
}

export default HomeIndex
