import React from 'react'

import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedBackData from './data/FeedbackData'
function App() {
  const [feedback, setFeedback] = useState(FeedBackData)
  const deleteFeedback = (id) => {
    if (window.confirm('are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats data={feedback} />
        <FeedbackList data={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
