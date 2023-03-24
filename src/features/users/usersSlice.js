import { createSlice } from '@reduxjs/toolkit'
import { fetchUsersAsync } from '../../services/api'

const initialState = {
  users: [],
  filteredUsers: [],
  search: '',
  user: {},
  isLoading: false,
  isModalOpen: false
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true
      state.user = state.filteredUsers.find(
        item => item.id === action.payload.id
      )
    },
    closeModal: state => {
      state.isModalOpen = false
      state.user = {}
    },
    sortUsers: (state, action) => {
      if (action.payload === 'asc') {
        state.filteredUsers = state.filteredUsers.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      } else {
        state.filteredUsers = state.filteredUsers.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }
    },
    searchUsers: (state, action) => {
      state.search = action.payload
      state.filteredUsers = state.users.filter(user =>
        user.name.toLowerCase().includes(action.payload.toLowerCase())
      )
    },
    changeInputValues: (state, action) => {
      const { name, value } = action.payload
      state.user = {
        ...state.user,
        [name]: value
      }
    },
    edit: (state, action) => {
      const index = state.filteredUsers.findIndex(
        obj => obj.id === action.payload.id
      )
      const newArray = [...state.filteredUsers]
      newArray[index] = action.payload
      state.filteredUsers = newArray
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsersAsync.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.users = action.payload
        state.filteredUsers = action.payload
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.isLoading = false
      })
  }
})

export const {
  openModal,
  closeModal,
  searchUsers,
  sortUsers,
  changeInputValues,
  edit
} = usersSlice.actions

export default usersSlice.reducer
