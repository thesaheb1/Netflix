import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        movieTrailer:null,
        movieDetails:null,
        nowPlayingMovies:null,
    },
    reducers:{
        addMovieTrailer:(state, action) => {
            state.movieTrailer = action.payload
        },
        addMovieDetails:(state, action) => {
            state.movieDetails = action.payload
        },
        addNowPlayingMovies:(state, action) => {
            state.nowPlayingMovies = action.payload
        }
    }
});
export const {addMovieTrailer, addMovieDetails, addNowPlayingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;