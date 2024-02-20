import React from 'react'
import { useSelector } from "react-redux"
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo?.key)
    useMovieTrailer(movieId)

    return (
        <div className='w-screen'>
            <iframe
                className='w-screen aspect-video mt-28'
                src={"https://www.youtube.com/embed/" + trailerVideo + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

        </div>
    )
}

export default VideoBackground