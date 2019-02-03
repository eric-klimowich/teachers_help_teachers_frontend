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
