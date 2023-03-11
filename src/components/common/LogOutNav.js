import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAllPostContext } from '../context/FetchPosts'

const LogOutNav = () => {
   const {handleLogout} = useAllPostContext()


    // const handleLogout = () =>{
    //     sessionStorage.removeItem('Auth Token')
    //     navigate('/')
    // }

  return (
    <nav>
      <div className='logo'>
               <Link to={'/'}> W{" "}S</Link>
      </div>

      <div className='nav-links'>
        <button  onClick={handleLogout} className={'action-buttons'} >LOG OUT</button>
      </div>
    </nav>
  )
}

export default LogOutNav
