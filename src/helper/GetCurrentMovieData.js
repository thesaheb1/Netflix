import { addMovieDetails, addMovieTrailer } from "../redux/slices/moviesSlice";
import { options } from "../utils/Constants";

export const GetCurrentMovieData = (movieId, movieData, dispatch) => {
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