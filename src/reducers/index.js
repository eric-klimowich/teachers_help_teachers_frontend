const defaultState = {
  users: [],
  grades: [],
  gradesToFilter: [],
  subjectsToFilter: [],
  subjects: [],
  lessons: [],
  comments: [],
  pickedLesson: null,
  currentUser: null,
  loginChoice: '',
  showAddLessonForm: false,
  searchBarInput: ''

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
    case 'SET_CURRENT_LESSON':
      return {...state, pickedLesson: action.payload}
    case 'RESET_CURRENT_LESSON':
      return {...state, pickedLesson: null}
    case 'SET_LOGIN_CHOICE':
      return {...state, loginChoice: action.payload}
    case 'ADD_NEW_USER':
      return {...state, users: [...state.users, action.payload]}
    case 'TOGGLE_ADD_LESSON_FORM':
      return {...state, showAddLessonForm: !state.showAddLessonForm}
    case 'CHANGE_SEARCH_BAR_INPUT':
      return {...state, searchBarInput: action.payload}
    default:
      return state
  }
}
