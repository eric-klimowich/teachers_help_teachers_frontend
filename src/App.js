import React from 'react'

import './App.css'
import UserContainer from './UserContainer'
import WelcomePage from './WelcomePage'

const App = props => {
  return (
    <div>
      <WelcomePage />
      <UserContainer />
    </div>
  )
}


export default App
