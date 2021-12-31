import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedBackData from './data/FeedbackData'
import AboutPage from './pages/AboutPage'
function App() {
  const [feedback, setFeedback] = useState(FeedBackData)
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats data={feedback} />
        <FeedbackList data={feedback} handleDelete={deleteFeedback} />
        <AboutPage/>
      </div>
    </>
  )
}

export default App
