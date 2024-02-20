import React from 'react'
import MovieList from './MovieList'
import { useSelector } from "react-redux"

const SecondaryContainter = () => {
    const movies = useSelector(store => store.movies)
    console.log(movies);
    return (
        movies.nowPlayingMovies && (
            <div className=' bg-black'>
                <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>

                    <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"} />
                    <MovieList movies={movies.nowPlayingMovies} title={"Trending"} />
                    <MovieList movies={movies.popularMovies} title={"Popular"} />
                    <MovieList movies={movies.nowPlayingMovies} title={"Top Rated"} />
                    <MovieList movies={movies.nowPlayingMovies} title={"Horror"} />
                    <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"} />
                </div>
            </div>
        )
    )
}

export default SecondaryContainter