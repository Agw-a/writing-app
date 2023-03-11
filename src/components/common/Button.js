import React from 'react'

const Button = ({title, handleUser}) => {
  return (
    
        <button
        type='submit'
        onClick={handleUser}
        className='login-button'
        >
            {title}
        </button>
    
  )
}

export default Button