import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/scrollbar";
import { IMG_CDN } from "../../../utils/Constants";
import { GetCurrentMovieData } from "../../../helper/GetCurrentMovieData";

const NowPlayingMoviesSlider = () => {
  const { nowPlayingMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  return (
    <div className="w-full pt-8">
      <p className="text-white text-2xl font-bold my-4">Now Playing Movies</p>
      <Swiper
        spaceBetween={10}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 7,
          },
          1280: {
            slidesPerView: 8,
          },
          1536: {
            slidesPerView: 10,
          },
          1920: {
            slidesPerView: 12,
          },
        }}
        loop={true}
      >
        {nowPlayingMovies?.map((poster) => (
          <SwiperSlide key={poster?.id}>
            <img
              onClick={() => {GetCurrentMovieData(poster?.id, poster, dispatch)}}
              className="h-[200px] rounded-md cursor-pointer"
              src={IMG_CDN + poster?.poster_path}
              alt="Movie Poster"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NowPlayingMoviesSlider;
