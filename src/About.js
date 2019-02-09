import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from './Button'
import { hideAboutPage } from './actions'

class About extends Component {
  render() {
    return (
      <div>
        In About
        <br />
        <Button action={this.props.hideAboutPage} text="Back" />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideAboutPage: () => dispatch(hideAboutPage())
  }
}

export default connect(null, mapDispatchToProps)(About)
