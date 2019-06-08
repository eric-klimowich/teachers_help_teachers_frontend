import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css'
import ProfileContainer from './ProfileContainer'
import HomePage from './HomePage'
import About from './About'
import { setUsers } from './actions'


class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users => this.props.setUsers(users))
  }

  renderAppOrAbout = () => {
    if (this.props.showAboutPage) {
      return (
        <About />
      )
    } else {
      return (
        <div>
          {this.props.currentUser ? <ProfileContainer /> : <HomePage />}
        </div>
      )
    }
  }
  render() {
    return (
      this.renderAppOrAbout()
    )
  }
}

// render() {
//   return (
//     <div>
//     <BrowserRouter>
//     <div>
//     <Route path="/" exact component={HomePage} />
//     <Route path="/about" exact component={About} />
//     <Route path="/lessons" exact component={} />
//     <Route path="/login" exact component={} />
//     <Route path="/signup" exact component={} />
//     <Route path="/user" exact component={ProfileContainer} />
//     <Route path="/user/favorites" exact component={} />
//     <Route path="/user/mylessons" exact component={} />
//     <Route path="/user/addlesson" exact component={} />
//     </div>
//     </BrowserRouter>
//     </div>
//   )
// }

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    showAboutPage: state.showAboutPage
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setUsers: (users) => dispatch(setUsers(users)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
