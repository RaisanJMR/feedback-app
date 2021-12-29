import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
function FeedbackList({ data }) {
  if (!data || data.length === 0) {
    return <p>No feedback</p>
  }
  return (
    <div className='feedback-list'>
      {data.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
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
