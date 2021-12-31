import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
function FeedbackList({ data, handleDelete }) {
  if (!data || data.length === 0) {
    return <p>No feedback</p>
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {data.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
  // return (
  //   <div className='feedback-list'>
  //     {data.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // )
}
FeedbackList.protoTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}
export default FeedbackList
