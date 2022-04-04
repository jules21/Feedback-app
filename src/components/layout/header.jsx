import React from 'react'

function header() {
    const headerStyles = {
        background: 'rgb(0,0,0,0.3)',
        color:'#ff6a95'
    }
  return (
    <header style={headerStyles}>
      <div className="container">
          <h1>Feedback App</h1>
      </div>
    </header>

  )
}

export default header