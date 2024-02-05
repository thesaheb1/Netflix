import { useDispatch } from "react-redux";
import { nowPlayingMoviesUrl, options } from "../utils/Constants";
import { addNowPlayingMovies } from "../redux/slices/moviesSlice";
import { GetCurrentMovieData } from "../helper/GetCurrentMovieData";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const res = await fetch(nowPlayingMoviesUrl, options);
      const data = await res.json();
      dispatch(addNowPlayingMovies(data?.results));
      GetCurrentMovieData(data?.results[0]?.id, data?.results[0], dispatch);
    } catch (error) {
      console.error("error:" + error);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line
  }, []);
};
