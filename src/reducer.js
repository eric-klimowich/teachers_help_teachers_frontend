const defaultState = {
  users: [],
  lessons: [],
  comments: [],
  currentUser: null
}

export default function (state = defaultState, action) {
  switch(action.type) {
    case 'SET_USERS':
      return {...state, users: action.payload}
    default:
      return state
  }
}
