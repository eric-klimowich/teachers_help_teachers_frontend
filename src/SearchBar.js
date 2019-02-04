import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeSearchBarInput } from './actions'

class SearchBar extends Component {

  handleSearchBarInputChange = event => {
    // console.log(event.target.value)
    this.props.changeSearchBarInput(event.target.value)
  }

  render() {
    // console.log(this.props.searchBarInput)
    return (
      <div className="ui icon input">
        <input
          type="text"
          value={this.props.searchBarInput}
          placeholder="Search..."
          onChange={this.handleSearchBarInputChange}
        />
        <i
          className="inverted circular search link icon">
        </i>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchBarInput: state.searchBarInput
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSearchBarInput: (searchBarInput) => dispatch(changeSearchBarInput(searchBarInput))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
