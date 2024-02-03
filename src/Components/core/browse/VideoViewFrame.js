import React from "react";
import { useNowPlayingMovies } from "../../../hooks/useNowPlayingMovies";
import BackgroundMovie from "./BackgroundMovie";
import MovieDescription from "./MovieDescription";
import NowPlayingMoviesSlider from "./NowPlayingMoviesSlider";

const VideoViewFrame = () => {
  // get the movies Data
  useNowPlayingMovies();
  return (
    <div className="h-svh xl:w-svw aspect-video">
      {/* BackgroundMovie */}
      <BackgroundMovie />
      <div className="w-full h-full px-8 md:px-16 pb-8 flex flex-col justify-end items-start bg-[rgba(0,0,0,0.5)] shadow-[inset_0px_0px_100px_100px_#000] absolute inset-0 z-[99]">
        <div className="w-full">
          {/* Movie Description */}
          <MovieDescription />

          {/* NowPlayingMovies */}
          <NowPlayingMoviesSlider />
        </div>
      </div>
    </div>
  );
};

export default VideoViewFrame;
