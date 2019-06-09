import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReturningUser from './ReturningUser'
import NewUser from './NewUser'
import Welcome from './Welcome'

class Login extends Component {

  renderLoginChoice = () => {
    if (this.props.loginChoice === 'login') {
      return <ReturningUser />
    }
    if (this.props.loginChoice === 'signup') {
      return <NewUser />
    }
  }

  renderWelcomeOrLogin = () => {
    if (this.props.loginChoice) {
      return this.renderLoginChoice()
    } else {
      return (
        <Welcome />
      )
    }
  }

  render() {
    // console.log(this.props)
    return (
      <ReturningUser />
    )
  }
}

// return this.renderWelcomeOrLogin()


const mapStateToProps = state => {
  return {
    loginChoice: state.loginChoice
  }
}



export default connect(mapStateToProps)(Login)
