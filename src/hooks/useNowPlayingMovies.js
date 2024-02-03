import { useDispatch } from "react-redux";
import { nowPlayingMoviesUrl, options } from "../utils/Constants";
import { addNowPlayingMovies } from "../redux/slices/moviesSlice";
import { GetCurrentMovieData } from "../helper/GetCurrentMovieData";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = () => {
    fetch(nowPlayingMoviesUrl, options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(addNowPlayingMovies(json?.results));
        GetCurrentMovieData(json?.results[0]?.id, json?.results[0], dispatch);
      })
      .catch((err) => console.error("error:" + err));
  };
  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line
  }, []);
};
