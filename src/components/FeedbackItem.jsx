import React from 'react'
import Card from './shared/card'

function FeedbackItem({item}) {
  return (
      <Card>
          <p className="num-display">{item.rating}</p>
          <p className="text-display">{item.text}</p>
      </Card>
  )
}

export default FeedbackItem