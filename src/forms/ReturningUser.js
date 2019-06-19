import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setCurrentUser } from '../actions'

class ReturningUser extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmitReturningUser = (event, loginInput) => {
      event.preventDefault()
      // console.log(loginInput)
      const userExists = this.props.users.find(user => user.username === loginInput.username)
      if (userExists) {
        if (loginInput.password === userExists.password) {
          this.props.setCurrentUser(userExists)
        }
      }
      this.setState({
        username: '',
        password: ''
      })
    }

  render() {
    return (
      <div id="form-container" className="ui container form-container" >
        <div className="ui middle aligned center aligned grid" >
          <div className="column" >
            <form className="ui large form" onSubmit={(event) => this.handleSubmitReturningUser(event, this.state)} >
              <div className="ui stacked segment" >
                <h2 className="ui blue image header" >
                  <div className="content" >
                    Login to your account
                  </div>
                </h2>
                <div className="field" >
                  <div className="ui left icon input" >
                    <i className="user circle icon" ></i>
                    <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    placeholder="Username..."
                    onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field" >
                  <div className="ui left icon input" >
                    <i className="lock icon" ></i>
                    <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    placeholder="Enter password..."
                    onChange={this.handleChange}
                    />
                  </div>
                </div>
                <input
                className="ui fluid large blue submit button"
                type="submit"
                value="Log me in"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: (currentUser) => dispatch(setCurrentUser(currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReturningUser)
