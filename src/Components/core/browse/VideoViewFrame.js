import React from "react";
import { useNowPlayingMovies } from "../../../hooks/useNowPlayingMovies";
import BackgroundMovie from "./BackgroundMovie";
import MovieDescription from "./MovieDescription";
import NowPlayingMoviesSlider from "./NowPlayingMoviesSlider";

const VideoViewFrame = () => {
  // get the movies Data
  useNowPlayingMovies();
  return (
    <div className="w-screen aspect-video">
      {/* BackgroundMovie */}
      <BackgroundMovie />
      <div className="w-screen aspect-video mt-20 sm:mt-0 px-8 md:px-16 pb-2 sm:pb-8 flex flex-col justify-end items-start  sm:bg-[rgba(0,0,0,0.5)] shadow-[inset_0px_0px_100px_60px_#000] sm:shadow-[inset_0px_0px_100px_100px_#000] absolute inset-0 z-[99]">
        <div className="w-full">
          {/* Movie Description */}
          <MovieDescription />

          {/* NowPlayingMovies */}
          <div className="w-full hidden xl:block">
          <NowPlayingMoviesSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoViewFrame;
