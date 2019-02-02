import React from 'react'

import GradeFilter from './GradeFilter'
import SubjectFilter from './SubjectFilter'

const FilterContainer = props => {
  return (
    <div>
      <GradeFilter />
      <SubjectFilter />
    </div>
  )
}

export default FilterContainer
