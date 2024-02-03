import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieTrailer: null,
    movieDetails: null,
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcommingMovies: null,
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
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcommingMovies: (state, action) => {
      state.upcommingMovies = action.payload;
    },
  },
});
export const {
  addMovieTrailer,
  addMovieDetails,
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcommingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
