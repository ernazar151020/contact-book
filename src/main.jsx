import React from 'react'
import ReactDOM from 'react-dom/client'
import Books from './components/books/books'
import { Provider } from 'react-redux'
import { store } from './store'
import './general.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Books />
    </Provider>
  </React.StrictMode>
)
