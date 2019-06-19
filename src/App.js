import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import { connect } from 'react-redux'

import './App.css'
import Navbar from './components/Navbar'
// import ProfileContainer from './ProfileContainer'
import LessonsContainer from './containers/LessonsContainer'
import HomePage from './HomePage'
import About from './About'
import ReturningUser from './ReturningUser'
import NewUser from './NewUser'


class App extends Component {

  // renderAppOrAbout = () => {
  //   if (this.props.showAboutPage) {
  //     return (
  //       <About />
  //     )
  //   } else {
  //     return (
  //       <div>
  //         {this.props.currentUser ? <ProfileContainer /> : <HomePage />}
  //       </div>
  //     )
  //   }
  // }

  render() {
    return (
        <div>
          <BrowserRouter>
          <div>
            <Navbar />
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={About} />
            <Route path="/login" exact component={ReturningUser} />
            <Route path="/signup" exact component={NewUser} />
            <Route path="/lessons" exact component={LessonsContainer} />
          </div>
          </BrowserRouter>
        </div>
      )
    }
}

// <Route path="/lessons" exact component={} />
// <Route path="/lessons/currentlesson" exact component={} />
// <Route path="/user" exact component={} />
// <Route path="/user/favorites" exact component={} />
// <Route path="/user/mylessons" exact component={} />
// <Route path="/user/addlesson" exact component={} />

// render() {
  //   return (
    //     this.renderAppOrAbout()
    //   )
    // }


// const mapStateToProps = state => {
//   return {
//     showAboutPage: state.showAboutPage
//   }
// }


export default (App)
