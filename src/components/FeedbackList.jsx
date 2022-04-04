import React, { useContext } from 'react'
import FeedbackContext from '../contexts/FeedbackContext';
import FeedbackItem from './FeedbackItem';

function FeedbackList() {
    const { feedback } = useContext(FeedbackContext);
    return <ul className="feedback-list">
       {feedback.map(item => 
       <FeedbackItem key={item.id} item={item} />)}
    </ul>
}

export default FeedbackList