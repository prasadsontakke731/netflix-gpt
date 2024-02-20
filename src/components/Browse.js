import React from 'react'
import { useSelector } from "react-redux"
import Header from './Header'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainter from './SecondaryContainter'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import GptSearch from './GptSearch'
const Browse = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()

    return (
        <div>
            <Header />
            {
                showGptSearch ? <GptSearch /> : <>
                    <MainContainer />
                    <SecondaryContainter />
                </>
            }


        </div>
    )
}

export default Browse