import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import LessonsContainer from './containers/LessonsContainer'
import HomePage from './HomePage'
import About from './About'
import ReturningUser from './forms/ReturningUser'
import NewUser from './forms/NewUser'
import AddLessonForm from './forms/AddLessonForm'


class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(lessons => {
        console.log(lessons)
      })
  }

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
            <Route path="/addlessonform" exact component={AddLessonForm} />
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

export default App
