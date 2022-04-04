import React, { useContext, useEffect, useState } from 'react'
import Button from './shared/Button';
import Card from './shared/card'
import FeedbackContext from '../contexts/FeedbackContext'
import SelectRating from './SelectRating';

function FeedbackForm() {

    const {addFeedback,feedbackToEdit, updateFeedback} = useContext(FeedbackContext)
    const [text,setText] = useState('');
    const [message,setMessage] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [rating, setRating] = useState(3);
    const handleSubmit = (e) => {
        e.preventDefault()
        const newFeedback = {
            text,
            rating
        }
        if (feedbackToEdit.edit) {
            updateFeedback(feedbackToEdit.item.id, newFeedback);
        }else{
            addFeedback(newFeedback)
        }
            setText('')
        
    }
    const handleText = ({target : {value}}) => {
       if(value ===' '){
        setMessage('Please enter some text');
        setIsDisabled(true);
       }else if(value.trim().length < 10){
        setMessage('Please enter at least 10 characters');
        setIsDisabled(true);
       }else{
           setMessage('');
           setIsDisabled(false);
       }
       setText(value);
    }
    useEffect(()=>{
        if (feedbackToEdit.edit) {
            setRating(feedbackToEdit.item.rating);
            setText(feedbackToEdit.item.text);
            setIsDisabled(false)
        }
    },[feedbackToEdit])


  return (
      <Card>
          <form onSubmit={handleSubmit}>
          <h2>How Would you rate your service with us?</h2>
          {/* set rating and check selected */}
          <SelectRating select={(rating) => setRating(rating)} selected={rating}/>
          <div className="input-group">
              <input type="text" name="text" id="text" onChange={handleText} placeholder='Write a Review' value={text} />
              <Button type='submit' color="secondary" isDisabled={isDisabled}>Send</Button>
          </div>
            <div className="message">{message}</div>
          </form>
      </Card>
  )
}

export default FeedbackForm