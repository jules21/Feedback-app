import React from 'react'
import Card from './shared/card'

function FeedbackForm() {
  return (
      <Card>
          <form >
          <h2>How Would you rate your service with us?</h2>
          <div className="input-group">
              <input type="text" name="text" id="text" placeholder='Write a Review' />
              <button type='submit' className='btn btn-primary'>Send</button>
          </div>
          </form>
      </Card>
  )
}

export default FeedbackForm