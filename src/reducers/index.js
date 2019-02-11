const defaultState = {
  users: [],
  grades: [],
  gradesToFilter: [],
  subjectsToFilter: [],
  subjects: [],
  lessons: [],
  myLessons: [],
  favoriteLessons: [],
  myFavoriteLessons: [],
  comments: [],
  pickedLesson: null,
  currentUser: null,
  loginChoice: '',
  showAddLessonForm: false,
  searchBarInput: '',
  showAllLessons: false,
  showAboutPage: false,
  myLessonsChoice: ''
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
    case 'SET_MY_LESSONS':
      return {...state, myLessons: action.payload}
    case 'SET_FAVORITE_LESSONS':
      return {...state, favoriteLessons: action.payload}
    case 'SET_MY_FAVORITE_LESSONS':
      return {...state, myFavoriteLessons: action.payload}
    case 'ADD_LESSON':
      return {...state, lessons: [...state.lessons, action.payload]}
    case 'ADD_LESSON_TO_MY_LESSONS':
      return {...state, myLessons: [...state.myLessons, action.payload]}
    case 'ADD_LESSON_TO_MY_FAVORITE_LESSONS':
      return {...state, myFavoriteLessons: [...state.myFavoriteLessons, action.payload]}
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
    case 'RESET_LOGIN_CHOICE':
      return {...state, loginChoice: ''}
    case 'ADD_NEW_USER':
      return {...state, users: [...state.users, action.payload]}
    case 'SHOW_ADD_LESSON_FORM':
      return {...state, showAddLessonForm: true}
    case 'HIDE_ADD_LESSON_FORM':
      return {...state, showAddLessonForm: false}
    case 'SHOW_ALL_LESSONS_PAGE':
      return {...state, showAllLessons: true}
    case 'HIDE_ALL_LESSONS_PAGE':
      return {...state, showAllLessons: false}
    case 'SHOW_ABOUT_PAGE':
      return {...state, showAboutPage: true}
    case 'HIDE_ABOUT_PAGE':
      return {...state, showAboutPage: false}
    case 'CHANGE_SEARCH_BAR_INPUT':
      return {...state, searchBarInput: action.payload}
    case 'LOGOUT_USER':
      return {...state, currentUser: null}
    case 'ADD_COMMENT':
      const pickedLessonCopy = {...state.pickedLesson}
      pickedLessonCopy.comments.push(action.payload)
      return {...state, pickedLesson: pickedLessonCopy}
    case 'RESET_GRADES_TO_FILTER':
      return {...state, gradesToFilter: []}
    case 'RESET_SUBJECTS_TO_FILTER':
      return {...state, subjectsToFilter: []}
    case 'RESET_SEARCH_BAR_INPUT':
      return {...state, searchBarInput: ''}
    case 'SET_MY_LESSONS_CHOICE_TO_FAVORITES':
      return {...state, myLessonsChoice: 'myFavorites'}
    case 'SET_MY_LESSONS_CHOICE_TO_MY':
      return {...state, myLessonsChoice: 'myLessons'}
    case 'RESET_MY_LESSONS_CHOICE':
      return {...state, myLessonsChoice: ''}
    default:
      return state
  }
}
