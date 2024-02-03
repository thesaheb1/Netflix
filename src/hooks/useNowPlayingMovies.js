import { useDispatch } from "react-redux";
import { nowPlayingMoviesUrl, options } from "../utils/Constants";
import { addNowPlayingMovies } from "../redux/slices/moviesSlice";
import { addMovieDetails, addMovieTrailer } from "../redux/slices/moviesSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const GetCurrentMovieData = (movieId, movieData) => {
    const Movie_URL = `https://api.themoviedb.org/3/movie/${movieId}/videos`;

    fetch(Movie_URL, options)
      .then((res) => res.json())
      .then((json) => {
        const trailerKey = json?.results?.filter((data) =>
          data?.type?.includes("Trailer")
        );
        if (trailerKey) {
          dispatch(addMovieTrailer(trailerKey[0]));
        }
      })
      .catch((err) => console.error("error:" + err));
    dispatch(addMovieDetails(movieData));
  };
  fetch(nowPlayingMoviesUrl, options)
    .then((res) => res.json())
    .then((json) => {
      dispatch(addNowPlayingMovies(json?.results));
      GetCurrentMovieData(json?.results[0]?.id, json?.results[0]);
    })
    .catch((err) => console.error("error:" + err));
};
