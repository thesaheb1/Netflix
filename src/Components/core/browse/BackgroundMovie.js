import React from "react";
import { useSelector } from "react-redux";

const BackgroundMovie = () => {
    const {movieTrailer} = useSelector(state => state.movies)
  return (
    <>
      <iframe
        className="w-screen h-screen aspect-video shadow-[inset_0px_0px_100px_27px_#000]"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  );
};

export default BackgroundMovie;
