import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/scrollbar";
import { IMG_CDN, options } from "../../../utils/Constants";
import { addMovieDetails, addMovieTrailer } from "../../../redux/slices/moviesSlice";

const NowPlayingMoviesSlider = () => {
  const dispatch = useDispatch();
  const { nowPlayingMovies } = useSelector((state) => state.movies);

  const getCurrentMovieData = (movieId, movieData) => {
    const Movie_URL = `https://api.themoviedb.org/3/movie/${movieId}/videos`;

    fetch(Movie_URL, options)
      .then((res) => res.json())
      .then((json) => {
        const trailerKey = json?.results?.filter((data) =>
          data?.type?.includes("Trailer")
        );
        if (trailerKey) {
          dispatch(addMovieTrailer(trailerKey[0]));
        }
      })
      .catch((err) => console.error("error:" + err));
    dispatch(addMovieDetails(movieData));
  };

  return (
    <div className="w-full mt-8">
      <p className="text-white text-2xl font-bold my-4">Trending Movies</p>
      <Swiper
        spaceBetween={10}
        scrollbar={{ draggable: true }}
        // breakpoints={{
        //   480: {
        //     // width: 576,
        //     slidesPerView: 2,
        //   },
        //   768: {
        //     // width: 576,
        //     slidesPerView: 3,
        //   },
        //   1536: {
        //     // width: 768,
        //     slidesPerView: 10,
        //   },
        // }}
        slidesPerView={12}
        loop={true}
      >
        {nowPlayingMovies?.map((poster) => (
          <SwiperSlide key={poster?.id}>
            <img
              onClick={() => {getCurrentMovieData(poster?.id, poster)}}
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
