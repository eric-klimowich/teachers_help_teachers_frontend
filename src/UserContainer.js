import React from 'react'
import UserProfile from './UserProfile'
import LessonsContainer from './LessonsContainer'

const UserContainer = props => {
    // console.log(this.state.currentUser)
  return (
    <div>
      <form>
        <select onChange={props.handleSelectedUser} >
          {props.users.map(user => <option key={user.id} value={user.id}>{user.first_name}</option>)}
        </select>
      </form>
      <UserProfile currentUser={props.currentUser} />
      <LessonsContainer lessons={props.lessons}/>
    </div>
  )
}

export default UserContainer
