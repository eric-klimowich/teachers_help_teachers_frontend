import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReturningUser from './ReturningUser'

class Login extends Component {

  render() {
    console.log(this.props)
    return (
      <ReturningUser />
    )
  }
}


const mapStateToProps = state => {
  return {
    loginChoice: state.loginChoice
  }
}



export default connect(mapStateToProps)(Login)
