import {React,useContext} from 'react'
import Card from './shared/card'
import {FaTimes, FaPencilAlt} from 'react-icons/fa'
import FeedbackContext from '../contexts/FeedbackContext'

function FeedbackItem({item}) {
    const {deleteFeedback,editFeedback} = useContext(FeedbackContext)
  return (
      <Card>
          <p className="num-display">{item.rating}</p>
          <p className="text-display">{item.text}</p>
          <button className='close' onClick={() =>deleteFeedback(item.id)}>
              <FaTimes color='purple'/>
          </button>
          <button className='edit' onClick={()=>editFeedback(item)}>
              <FaPencilAlt color='purple'/>
          </button>
      </Card>
  )
}

export default FeedbackItem