import React, { useRef, useState } from 'react'
import { useDispatch } from "react-redux"
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../utils/firebase'
import { addUser } from '../utils/userSlice'
import "./Login.css"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch()

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    // 
    const handlButtonClick = (e) => {

        // validate the form data 

        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)

        if (message) return;
        //signin/signUp logic

        if (!isSignInForm) {
            // for signUp Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName
                            })
                        )

                    }).catch((error) => {
                        setErrorMessage(error.message)
                    })

                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    setErrorMessage(errorCode + "-" + errorMessage)
                })
        }
        else {
            // for signIn Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode, errorMessage)
                })

        }
    }
    // 
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header />
            <form onSubmit={(e) => e.preventDefault()} className='absolute top-40 left-0 right-0 form w-3/12 p-12 bg-black   text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignInForm && <input type="text" ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
                }
                <input type="text" ref={email} placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
                <input type="password" ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
                <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>
                <button type='submit' className='p-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer' onClick={handlButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New To Netflix? Sign up Now" : "Already Registered Sign In now..."}
                </p>
            </form>
        </div>
    )
}

export default Login