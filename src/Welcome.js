import React from 'react'

const Welcome = props => {
  return (
    <div>
      <div id="welcome-intro" className="homepage-introduction__container" >
        <h1 className="homepage-introduction__title">
          Welcome to Teachers Helping Teachers!
          <br />
          <br />
          <h3 className="homepage-introduction__intro" >
          A way for all teachers, new and experienced, to share and find lesson plan and worksheet samples for free.
          Since we are not only teachers but also lifelong students, helpful feedback is always welcome.
          I hope this serves as a valuable resource to the teaching community.
          </h3>
        </h1>
      </div>
    </div>
  )
}

export default Welcome
