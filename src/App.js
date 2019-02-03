import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'
import UserContainer from './UserContainer'
import HomePage from './HomePage'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.currentUser ? <UserContainer /> : <HomePage />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(App)
