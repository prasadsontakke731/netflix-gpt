import { useEffect } from "react"
import { addTrailerVideo } from "../utils/movieSlice"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"

const useMovieTrailer = () => {
    const dispatch = useDispatch()
    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/866398/videos?language=en-US`, API_OPTIONS)

        const json = await data.json()
        console.log(json);

        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results;
        console.log(trailer);
        dispatch(addTrailerVideo(trailer))

    }

    useEffect(() => {
        getMovieVideo()
    }, [])
}
export default useMovieTrailer