import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <nav>
      <div className='logo'>
        <Link to={'/'}> W{" "}S</Link>
      </div>
      <div className='nav-links'>
        <Link to={'/posts'}>BLOG</Link>
        <button onClick={() => navigate('/signup')} className={'action-buttons'}>SIGN UP</button>
      </div>
    </nav>
  )
}

export default NavBar