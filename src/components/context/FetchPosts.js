import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { auth} from '../Firebase';
import { toast } from "react-toastify";


// All posts API
const LIBRARY_URL = "https://jsonplaceholder.typicode.com/posts"

// Context data
const FetchPostsContext = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');
    const [userId, setUserId] = useState(8);

    


    // user sign up and login
    const handleUser = (id) => {
        if (id === 2) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((response) => {
                    console.log(response)
                    navigate('/posts')
                    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                })
                .catch((err) => {
                    if (err.code === 'email-already-in-use') {
                        toast.error('Email already in use')
                    }
                })
        }
        if (id === 1) {

            signInWithEmailAndPassword(auth, email, password)
                .then((response) => {
                    navigate('/posts')
                    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
                })
                .catch((err) => {
                    if (err.code === 'auth/wrong-password') {
                        toast.error('Please Check the password')
                    }
                    if (err.code === 'auth/user-not-found') {
                        toast.error('Please chech your email address')
                    }
                })
        }
    }

    //use logout
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token')
        navigate('/')
    }

    //set user ID
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUserId(Math.floor((Math.random() * 10) + 1))
    //         }
    //     })

    // }, [])



    // Fetch all posts
    useEffect(() => {
        
            axios
            .get(LIBRARY_URL)
            
            .then((res) => {
                console.log(res)
                setPosts(res.data)
                setIsLoading(true)
            })
            .catch((err) => console.log(err))
    }, [])






    return {
        posts,
        isLoading,
        setIsLoading,
        setPosts,
        email,
        setUserEmail,
        password,
        setUserPassword,
        handleUser,
        handleLogout,
        userId,
        setUserId,

    }

}

const AllPostContext = createContext([])

export function useAllPostContext() {
    return useContext(AllPostContext)
}

export const GetPost = ({ children }) => {

    return (
        <AllPostContext.Provider value={FetchPostsContext()}>
            {children}
        </AllPostContext.Provider>
    )
}

