import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { MdInfoOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { IMG_CDN } from "../utils/Constants";

const Search = () => {
  const { searchMovie } = useSelector((state) => state.movies);
  return (
    <div className="mt-16 md:mt-28 p-8">
      <h1 className="text-lg md:text-3xl text-white font-bold  py-16">
        Searched Result...
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-8 flex-wrap">
        {searchMovie?.map((movie) => (
          <div
            key={movie?.id}
            className="w-full sm:w-[300px] sm:aspect-[3/4] rounded-md overflow-hidden cursor-pointer flex group flex-col justify-start items-start gap-4 relative transition-all duration-300"
          >
            <img
              src={IMG_CDN + movie?.poster_path}
              alt="movieImg"
              onError={(e) =>
                (e.target.src =
                  "https://w0.peakpx.com/wallpaper/894/391/HD-wallpaper-404-background-apple-designer-error-humor-logo-not-found-silly.jpg")
              }
              className="w-full aspect-[3/4] rounded-md group-hover:scale-110  cursor-pointer transition-all duration-300"
            />

            <div className="w-full sm:w-[300px] absolute inset-0 bg-black/50 hidden group-hover:flex flex-col justify-end items-center gap-8 p-4 transition-all duration-300">
              <div className="w-full">
                <p className="text-lg md:text-3xl text-white">
                  {movie?.original_title}
                </p>
                <p className="text-sm md:text-xl text-white/80">
                  {movie?.overview?.substring(0, 70)}...
                </p>
              </div>
              <div className="w-full flex items-center mt-2 sm:mt-4 gap-x-4">
                <button className="flex justify-center items-center bg-white hover:bg-white/80 transition-all duration-200 text-black py-2 gap-x-[4px] px-4 rounded-sm text-sm md:text-lg font-bold">
                  <BsFillPlayFill className="text-lg md:text-2xl" />
                  Play
                </button>
                <button className="flex justify-center items-center bg-white/30 hover:bg-white/40 transition-all duration-200 text-white py-2 gap-x-[4px] px-4 rounded-sm text-sm md:text-lg font-bold">
                  <MdInfoOutline className="text-lg md:text-2xl" />
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
