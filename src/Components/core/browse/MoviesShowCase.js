import React from "react";
import MoviesSlider from "./MoviesSlider";
import {
  popularMoviesUrl,
  topRatedMoviesUrl,
  upcommingMoviesUrl,
} from "../../../utils/Constants";
import NowPlayingMoviesSlider from "./NowPlayingMoviesSlider";

const MoviesShowCase = () => {
  return (
    <div className="px-8 md:px-16 bg-black">
      {/* NowPlayingMovies */}
      <div className="w-full xl:hidden block">
        <NowPlayingMoviesSlider />
      </div>
      <MoviesSlider title={"Popular"} url={popularMoviesUrl} />
      <MoviesSlider title={"Top Rated"} url={topRatedMoviesUrl} />
      <MoviesSlider title={"Upcomming"} url={upcommingMoviesUrl} />
    </div>
  );
};

export default MoviesShowCase;
