import axios from "axios"

const apiKey = process.env.REACT_APP_API_KEY
const baseUrl = process.env.REACT_APP_BASEURL


export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    return movie.data.results   
}

export const searchMovie = async (q) => {
    const search = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return search.data
}