import React from 'react'
import UserForm from '../components/common/Form'
import { useAllPostContext } from '../components/context/FetchPosts'


const SignUp = () => {
    const {handleUser, setUserEmail, setUserPassword} = useAllPostContext()
  return (
    <>

      <UserForm
            title='Sign Up'
            handleUser={() => handleUser(2)}
            setUserEmail={setUserEmail}
            setUserPassword={setUserPassword}
            />
    </>
  )
}

export default SignUp
