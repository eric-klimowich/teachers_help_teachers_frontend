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

export const setMyLessons = myLessons => {
  return {
    type: 'SET_MY_LESSONS',
    payload: myLessons
  }
}

export const setFavoriteLessons = favoriteLessons => {
  return {
    type: 'SET_FAVORITE_LESSONS',
    payload: favoriteLessons
  }
}

export const setMyFavoriteLessons = myFavoriteLessons => {
  return {
    type: 'SET_MY_FAVORITE_LESSONS',
    payload: myFavoriteLessons
  }
}

export const setGrades = grades => {
  return {
    type: 'SET_GRADES',
    payload: grades
  }
}

export const setSubjects = subjects => {
  return {
    type: 'SET_SUBJECTS',
    payload: subjects
  }
}

export const addLesson = newLesson => {
  return {
    type: 'ADD_LESSON',
    payload: newLesson
  }
}

export const addLessonToMyLessons = newLesson => {
  return {
    type: 'ADD_LESSON_TO_MY_LESSONS',
    payload: newLesson
  }
}
export const addLessonToMyFavoriteLessons = newLesson => {
  return {
    type: 'ADD_LESSON_TO_MY_FAVORITE_LESSONS',
    payload: newLesson
  }
}

export const setCurrentUser = currentUser => {
  return {
    type: 'SET_CURRENT_USER',
    payload: currentUser
  }
}

export const addGradesToFilter = (gradeIds) => {
  return {
    type: 'ADD_GRADES_TO_FILTER',
    payload: gradeIds
  }
}

export const removeGradesToFilter = (gradeIds) => {
  return {
    type: 'REMOVE_GRADES_TO_FILTER',
    payload: gradeIds
  }
}

export const addSubjectsToFilter = (subjectIds) => {
  return {
    type: 'ADD_SUBJECTS_TO_FILTER',
    payload: subjectIds
  }
}

export const removeSubjectsToFilter = (subjectIds) => {
  return {
    type: 'REMOVE_SUBJECTS_TO_FILTER',
    payload: subjectIds
  }
}

export const setPickedLesson = currentLesson => {
  return {
    type: 'SET_CURRENT_LESSON',
    payload: currentLesson
  }
}

export const resetPickedLesson = () => {
  return {
    type: 'RESET_CURRENT_LESSON'
  }
}

export const setLoginChoice = loginChoice => {
  return {
    type: 'SET_LOGIN_CHOICE',
    payload: loginChoice
  }
}

export const resetLoginChoice = () => {
  return {
    type: 'RESET_LOGIN_CHOICE',
  }
}

export const addNewUser = newUser => {
  return {
    type: 'ADD_NEW_USER',
    payload: newUser
  }
}

export const showAddLessonForm = () => {
  return {
    type: 'SHOW_ADD_LESSON_FORM'
  }
}

export const hideAddLessonForm = () => {
  return {
    type: 'HIDE_ADD_LESSON_FORM'
  }
}

export const showAllLessonsPage = () => {
  return {
    type: 'SHOW_ALL_LESSONS_PAGE'
  }
}

export const hideAllLessonsPage = () => {
  return {
    type: 'HIDE_ALL_LESSONS_PAGE'
  }
}

export const showAboutPage = () => {
  return {
    type: 'SHOW_ABOUT_PAGE'
  }
}

export const hideAboutPage = () => {
  return {
    type: 'HIDE_ABOUT_PAGE'
  }
}

export const changeSearchBarInput = (searchBarInput) => {
  return {
    type: 'CHANGE_SEARCH_BAR_INPUT',
    payload: searchBarInput
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}

export const addComment = (newComment) => {
  return {
    type: 'ADD_COMMENT',
    payload: newComment
  }
}

export const resetGradesToFilter = () => {
  return {
    type: 'RESET_GRADES_TO_FILTER'
  }
}

export const resetSubjectsToFilter = () => {
  return {
    type: 'RESET_SUBJECTS_TO_FILTER'
  }
}

export const resetSearchBarInput = () => {
  return {
    type: 'RESET_SEARCH_BAR_INPUT'
  }
}

export const setMyLessonsChoiceToFavorites = () => {
  return {
    type: 'SET_MY_LESSONS_CHOICE_TO_FAVORITES'
  }
}

export const setMyLessonsChoiceToMy = () => {
  return {
    type: 'SET_MY_LESSONS_CHOICE_TO_MY'
  }
}

export const resetMyLessonsChoice = () => {
  return {
    type: 'RESET_MY_LESSONS_CHOICE'
  }
}
