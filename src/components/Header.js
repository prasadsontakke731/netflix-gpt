import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import "./Header.css"
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES, UserIcon } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    const handleSignOut = () => {
        signOut(auth).then(() => {


        }).catch((error) => {


        })
    }

    // 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //user is signed in see docs for the list of avialable properties
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")


            }


        })
        //          unSbcribe when component unMount

        return () => unSubscribe()
    }, [])

    const handleGptSearchClick = () => {
        // toggle GPT Search
        dispatch(toggleGptSearchView())
    }

    const handleLangaugeChange = (e) => {
        console.log(e.target.value);
        dispatch(changeLanguage(e.target.value))
    }
    return (
        <div className="absolute  w-screen px-8 py-2  z-10 flex flex-col md:flex-row justify-between bg-transparent ">
            <img className='w-44 mx-auto text-red-800  md:mx-0' src={LOGO} alt="logo" />
            {
                user && (
                    <div className='flex p-2 '>
                        <div>
                            {showGptSearch && <select className='p-2 bg-gray-900 text-white m-2 ' onChange={handleLangaugeChange}>
                                {
                                    SUPPORTED_LANGUAGES.map(lang => <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)
                                }
                                {/* <option value="en">English</option>
                                <option value="hindi">Hindi</option>
                                <option value="spanish">Spanish</option> */}
                            </select>}
                        </div>
                        <div>
                            <button onClick={handleGptSearchClick} className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'>{showGptSearch ? "Home Page" : "GPT Search"}</button>
                        </div>

                        <img src={UserIcon} alt="icon" className='hidden md:block w-12 h-12 rounded' />
                        <button onClick={handleSignOut} className='text-white font-bold mb-8 cursor-pointer z-10'>(Sign Out)</button>
                    </div>
                )
            }
        </div >
    )
}

export default Header