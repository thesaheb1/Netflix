import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieTrailer: null,
    movieDetails: null,
    nowPlayingMovies: null,
    searchMovie: null,
    GPTSearchMovie: null,
  },
  reducers: {
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addSearchMovie: (state, action) => {
      state.searchMovie = action.payload;
    },
    addGPTSearchMovie: (state, action) => {
      state.GPTSearchMovie = action.payload;
    }
  },
});
export const {
  addMovieTrailer,
  addMovieDetails,
  addNowPlayingMovies,
  addSearchMovie,
  addGPTSearchMovie
} = moviesSlice.actions;

export default moviesSlice.reducer;
