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
    case 'SET_LESSONS':
      return {...state, lessons: action.payload}
    case 'ADD_LESSON':
      return {...state, lessons: [...state.lessons, action.payload]}
    case 'SET_CURRENT_USER':
      return {...state, currentUser: action.payload}
    default:
      return state
  }
}
