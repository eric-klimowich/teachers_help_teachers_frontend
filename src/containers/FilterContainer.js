import React from 'react'

import GradeFilter from '../GradeFilter'
import SubjectFilter from '../SubjectFilter'

const FilterContainer = props => {
  return (
    <div className="ui container" >
      <GradeFilter />
      <SubjectFilter />
      <br />
    </div>
  )
}

export default FilterContainer
