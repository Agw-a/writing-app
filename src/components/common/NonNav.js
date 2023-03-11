import React from 'react'
import { Link } from 'react-router-dom'

const NonNav = () => {
  return (
    <nav>
      <div className='logo'>
        <Link to={'/'}> W{" "}S</Link>
      </div>

      <div className='nav-links'>
        <Link to={'/login'}>SIGN IN</Link>
        <Link to={'/signup'}>SIGN UP</Link>
      </div>
    </nav>
  )
}

export default NonNav;