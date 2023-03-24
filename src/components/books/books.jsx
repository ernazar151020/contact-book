import React, { useEffect } from 'react'
import { fetchUsersAsync } from './../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import Book from './book'
import Navbar from '../navbar/navbar'
import Spinner from './../spinner/spinner'
import { Modal } from './../modal/modal'
import BooksHeader from './booksHeader'

const Books = () => {
  const dispatch = useDispatch()
  const { isModalOpen } = useSelector(state => state.users)

  const { filteredUsers, isLoading } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUsersAsync())
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <section className='main_page'>
      {isModalOpen ? <Modal /> : null}

      <div className='backgroun_image'>
        <img
          src='https://www.servicedeskinstitute.com/wp-content/uploads/2018/07/virtual-background.jpg'
          alt='bg-image'
        />
      </div>
      <div className='container'>
        <Navbar />
        <BooksHeader />
        <main className='books_wrapper'>
          {filteredUsers.map(book => {
            return <Book key={book.id} book={book} />
          })}
        </main>
      </div>
    </section>
  )
}

export default Books
