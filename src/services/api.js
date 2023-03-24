import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsersAsync = createAsyncThunk(
  'users/fetchUsres',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
  }
)
