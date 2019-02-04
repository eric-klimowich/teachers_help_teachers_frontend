import React, { Component } from 'react'
import { connect } from 'react-redux'

import Login from './Login'
import { setLoginChoice } from './actions'

class Nav extends Component {

  handleLoginChoice = event => {
    // console.log(event.target.value)
    this.props.setLoginChoice(event.target.value)
  }

  renderNavBar = () => {
    if (this.props.currentUser) {
      return (
        <div>
          <div className="ui large menu">
            <button className="active item">
              Home
            </button>
            <button className="item">
              Messages
            </button>
            <div className="right menu">
              <div className="ui dropdown item">
                Language <i className="dropdown icon"></i>
                <div className="menu">

                </div>
              </div>
              <div className="item">
                <button
                  className="ui primary button"
                  value="signup"
                  onClick={this.handleLoginChoice}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="ui large menu">
            <button className="active item">
              Home
            </button>
            <button className="item">
              Messages
            </button>
            <div className="right menu">
              <div className="ui dropdown item">
                Language <i className="dropdown icon"></i>
                <div className="menu">

                </div>
              </div>
              <div className="item">
                <button
                  className="ui primary button"
                  value="signup"
                  onClick={this.handleLoginChoice}
                >
                  Sign Up
                </button>
                <div className="item">
                  <button
                    className="ui primary button"
                    value="login"
                    onClick={this.handleLoginChoice}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Login />
        </div>
      )
    }
  }

  render() {
    // console.log(this.props)
    return (
      this.renderNavBar()
    )
  }
}

const mapStateToProps = state => {
  return {
    loginChoice: state.loginChoice,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLoginChoice: (loginChoice) => dispatch(setLoginChoice(loginChoice))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
