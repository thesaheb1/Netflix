import { addMovieDetails, addMovieTrailer } from "../redux/slices/moviesSlice";
import { options } from "../utils/Constants";

export const GetCurrentMovieData = async (movieId, movieData, dispatch) => {
  const Movie_URL = `https://api.themoviedb.org/3/movie/${movieId}/videos`;

  try {
    const res = await fetch(Movie_URL, options);
    const data = await res.json();
    const trailerKey = data?.results?.filter((item) =>
      item?.type?.includes("Trailer")
    );
    dispatch(
      addMovieTrailer(trailerKey.length > 0 ? trailerKey[0] : data?.results[0])
    );
  } catch (error) {
    console.error("error:" + error);
  }
  dispatch(addMovieDetails(movieData));
};
