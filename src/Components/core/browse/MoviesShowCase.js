import React from "react";
import MoviesSlider from "./MoviesSlider";
import {
  popularMoviesUrl,
  topRatedMoviesUrl,
  upcommingMoviesUrl,
} from "../../../utils/Constants";

const MoviesShowCase = () => {
  return (
    <div className="px-8 md:px-16 bg-black">
      <MoviesSlider title={"Popular"} url={popularMoviesUrl} />
      <MoviesSlider title={"Top Rated"} url={topRatedMoviesUrl} />
      <MoviesSlider title={"Upcomming"} url={upcommingMoviesUrl} />
    </div>
  );
};

export default MoviesShowCase;
