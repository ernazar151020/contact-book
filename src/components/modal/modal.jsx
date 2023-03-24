import { createPortal } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeInputValues,
  closeModal,
  edit
} from '../../features/users/usersSlice'

export function Modal () {
  const { user } = useSelector(state => state.users)

  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  const handleChange = e => {
    console.log(e)
    dispatch(changeInputValues(e.target))
  }

  const handleEdit = () => {
    dispatch(edit(user))
    dispatch(closeModal())
  }

  console.log(user)
  const modalRoot = document.getElementById('modal-root')
  return createPortal(
    <div className='modal'>
      <form className='form_wrapper'>
        <div className='input_group'>
          <label>Name</label>
          <input value={user?.name} name='name' onChange={handleChange} />
        </div>
        <div className='input_group'>
          <label>Username</label>
          <input
            onChange={handleChange}
            value={user?.username}
            name='username'
          />
        </div>
        <div className='input_group'>
          <label>Phone</label>
          <input onChange={handleChange} value={user?.phone} name='phone' />
        </div>
        <div className='input_group'>
          <label>Email</label>
          <input onChange={handleChange} value={user?.email} name='email' />
        </div>
        <div className='form_btn'>
          <button
            type='button'
            onClick={handleCloseModal}
            className='cancel_btn'
          >
            Cancel
          </button>
          <button className='edit_btn' onClick={handleEdit}>
            Edit
          </button>
        </div>
      </form>
    </div>,
    modalRoot
  )
}
