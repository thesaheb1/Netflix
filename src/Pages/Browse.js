import React from "react";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import BackgroundMovie from "../Components/core/browse/BackgroundMovie";
import MovieDescription from "../Components/core/browse/MovieDescription";
import NowPlayingMoviesSlider from "../Components/core/browse/NowPlayingMoviesSlider";

const Browse = () => {
  // get the movies Data
  useNowPlayingMovies();
  return (
    <div className="w-full min-h-screen relative">
      {/* BackgroundMovie */}
      <BackgroundMovie />
      <div className="w-full min-h-screen px-16 pb-8 flex flex-col justify-end items-start bg-[rgba(0,0,0,0.5)] shadow-[inset_0px_0px_100px_100px_#000] absolute inset-0 z-[99]">
        <div className="w-full">
          {/* Movie Description */}
          <MovieDescription />

          {/* NowPlayingMovies */}
          <NowPlayingMoviesSlider/>
        </div>
      </div>
    </div>
  );
};

export default Browse;
