const defaultState = {
  users: [],
  grades: [],
  gradesToFilter: [],
  subjectsToFilter: [],
  subjects: [],
  lessons: [],
  comments: [],
  currentUser: null
}

export default function (state = defaultState, action) {
  // debugger
  switch(action.type) {
    case 'SET_USERS':
      return {...state, users: action.payload}
    case 'SET_GRADES':
      return {...state, grades: action.payload}
    case 'SET_SUBJECTS':
      return {...state, subjects: action.payload}
    case 'SET_LESSONS':
      return {...state, lessons: action.payload}
    case 'ADD_LESSON':
      return {...state, lessons: [...state.lessons, action.payload]}
    case 'SET_CURRENT_USER':
      return {...state, currentUser: action.payload}
    case 'ADD_GRADES_TO_FILTER':
      return {...state, gradesToFilter: action.payload}
    case 'REMOVE_GRADES_TO_FILTER':
      return {...state, gradesToFilter: action.payload}
    case 'ADD_SUBJECTS_TO_FILTER':
      return {...state, subjectsToFilter: action.payload}
    case 'REMOVE_SUBJECTS_TO_FILTER':
      return {...state, subjectsToFilter: action.payload}
    default:
      return state
  }
}
