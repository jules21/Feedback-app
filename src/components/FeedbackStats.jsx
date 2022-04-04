import React, { useContext } from 'react'
import FeedbackContext from '../contexts/FeedbackContext';

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext);
    let average = feedback.reduce((acc, cur) => acc +cur.rating,0) /feedback.length
    average = isNaN(average) ? 0 : average.toFixed(1).replace(/\.0$/, '');
  return (
      <div className="feedback-stats">
          <p>{feedback.length} Reviews</p>
          <p>Rating Average: {average}</p>
      </div>
  )
}

export default FeedbackStats