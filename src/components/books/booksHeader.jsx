import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchUsers, sortUsers } from '../../features/users/usersSlice'

const BooksHeader = () => {
  const dispatch = useDispatch()

  const { search } = useSelector(state => state.users)

  const handleSearch = e => {
    dispatch(searchUsers(e.target.value))
  }

  const handleSort = e => {
    dispatch(sortUsers(e.target.value))
  }

  return (
    <div className='books_header'>
      <div className='sort_wrapper'>
        <select onChange={handleSort}>
          <option value='asc'>Sort A-Z</option>
          <option value='desc'>Sort Z-A</option>
        </select>
      </div>
      <div className='search input_group'>
        <input placeholder='Search' value={search} onChange={handleSearch} />
      </div>
    </div>
  )
}

export default BooksHeader
