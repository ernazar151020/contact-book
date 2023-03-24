import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../features/users/usersSlice'
import { Modal } from '../modal/modal'

const Book = ({ book }) => {
  const dispatch = useDispatch()


  const handleOpenModal = data => {
    dispatch(openModal(data))
  }

  return (
    <article className='book'>
     
      <div className='book_img'>
        <img
          src='https://banner2.cleanpng.com/20180325/qtw/kisspng-customer-relationship-management-app-store-google-avatar-5ab7528e5e2619.1758251415219636623856.jpg'
          alt={book.name}
        />
      </div>
      <div className='book_name book_item'>👤{book.name}</div>
      <div className='book_footer book_item' onClick={()=>handleOpenModal(book)}>
        Edit ✍️
      </div>
    </article>
  )
}

export default Book
