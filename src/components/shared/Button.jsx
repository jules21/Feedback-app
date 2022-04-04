import React from 'react'

function Button({children, type, color, isDisabled}) {
  return (
      <button type={type} className={`btn btn-${color}`} disabled={isDisabled} >
          {children}
      </button>
  )
}
Button.defaultProps = {
    type: 'button',
    color: 'primary',
    isDisabled: false
}

export default Button