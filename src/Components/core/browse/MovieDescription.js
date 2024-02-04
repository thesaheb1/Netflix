import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { MdInfoOutline } from "react-icons/md";
import { useSelector } from "react-redux";

const MovieDescription = () => {
    const { movieDetails } = useSelector(
        (state) => state.movies
      );

  return (
    <div className="w-full lg:max-w-[500px]">
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold">
        {movieDetails?.original_title}
      </h1>
      <p className="md:hidden block text-sm sm:text-lg lg:text-xl text-white font-medium opacity-90 mt-2 sm:mt-4 lg:mt-8">
        {movieDetails?.overview?.substring(0, 90) + "..."}
      </p>
      <p className="hidden md:block text-sm sm:text-lg lg:text-xl text-white font-medium opacity-90 mt-2 sm:mt-4 lg:mt-8">
        {movieDetails?.overview?.substring(0, 150) + "..."}
      </p>
      <div className="flex items-center mt-2 sm:mt-4 gap-x-4">
        <button className="flex justify-center items-center bg-white hover:bg-white/80 transition-all duration-200 text-black py-2 gap-x-[4px] px-4 rounded-sm text-sm md:text-xl font-bold">
          <BsFillPlayFill className="text-lg md:text-3xl" />
          Play
        </button>
        <button className="flex justify-center items-center bg-white/30 hover:bg-white/40 transition-all duration-200 text-white py-2 gap-x-[4px] px-4 rounded-sm text-sm md:text-xl font-bold">
          <MdInfoOutline className="text-lg md:text-3xl" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieDescription;
