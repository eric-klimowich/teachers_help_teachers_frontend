export const setUsers = users => {
  return {
    type: 'SET_USERS',
    payload: users
  }
}

export const setLessons = lessons => {
  return {
    type: 'SET_LESSONS',
    payload: lessons
  }
}

export const setCurrentUser = currentUser => {
  return {
    type: 'SET_CURRENT_USER',
    payload: currentUser
  }
}
