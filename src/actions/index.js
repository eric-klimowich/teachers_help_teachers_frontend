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
