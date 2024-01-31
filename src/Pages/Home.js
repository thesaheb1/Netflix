import React from "react";
import { FAQ } from "../utils/FAQ";
import HomeForm from "../Components/HomeForm";

const Home = () => {
  
  return (
    <div className="bg-black">
      <section className="w-full h-[75vh] bg-bg-home shadow-[inset_0px_20px_50px_50px_#000]">
        <div className="w-full h-[75vh] bg-black/50 absolute inset-0 flex justify-center items-center">
          <div className="w-8/12 flex justify-center items-center  flex-col gap-4">
            <div className="text-5xl font-bold text-white">
              Unlimited movies, TV shows and more
            </div>
            <div className="text-2xl text-white">
              Watch anywhere. Cancel anytime.
            </div>
            <div className="text-center text-xl font-medium text-white">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <HomeForm/>
          </div>
        </div>
      </section>
      <div className="h-2 bg-netflixLine/40" />
      <section className="py-20  flex flex-col sm:flex-row sm:justify-between sm:items-center gap-x-12 mx-auto h-[60vh] w-8/12 z-50 text-white bg-black">
        <div className="flex my-auto  h-full justify-center   items-center  flex-col sm:w-1/2 gap-4 w-full">
          <div className="text-5xl text-left  w-full font-bold">
            Enjoy on your TV.
          </div>
          <div className="text-2xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </div>
        </div>

        <div className="sm:w-1/2 w-full relative flex justify-center items-center">
          <img
            className="w-[500px] z-10"
            alt="example-videos"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          />

          <video
            className="w-[365px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[53%]"
            playsInline={true}
            autoPlay={true}
            loop={true}
            muted={true}
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
      <div className="h-2 bg-netflixLine/40" />
      <section className="py-20  flex flex-col sm:flex-row sm:justify-between sm:items-center gap-x-12 mx-auto h-[60vh] w-8/12 z-50 text-white bg-black">
        <div className="flex my-auto  h-full justify-center items-center flex-col sm:w-1/2 w-full">
          <div className="relative">
            <div className="flex justify-center w-full">
              <div className="absolute w-full flex justify-between items-center  max-w-sm bottom-0  bg-black rounded-2xl border-2 border-gray-600 p-4">
                <div className="flex justify-center items-center gap-x-4">
                  <img
                    className="h-16"
                    alt="img"
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  />
                  <div>
                    <p>Stranger Things</p>
                    <p className="text-blue">Downloading...</p>
                  </div>
                </div>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                  className="w-[3rem] h-[3rem]"
                  alt=""
                  typeof="gif"
                />
              </div>
            </div>

            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="img"
            />
          </div>
        </div>
        <div className="flex my-auto  h-full justify-center   items-center  flex-col sm:w-1/2 gap-4 w-full">
          <div className="text-5xl text-left  w-full font-bold">
            Download your shows to watch offline
          </div>
          <div className="text-2xl">
            Save your favourites easily and always have something to watch.
          </div>
        </div>
      </section>
      <div className="h-2 bg-netflixLine/40" />
      <section className="py-20  flex flex-col sm:flex-row sm:justify-between sm:items-center gap-x-12 mx-auto h-[60vh] w-8/12 z-50 text-white bg-black">
        <div className="flex my-auto  h-full justify-center   items-center  flex-col sm:w-1/2 gap-4 w-full">
          <div className="text-5xl text-left  w-full font-bold">
            Watch everywhere
          </div>
          <div className="text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </div>
        </div>
        <div className="sm:w-1/2 w-full relative flex justify-center items-center">
          <img
            className="w-[500px] z-10"
            alt="example-videos"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          />

          <video
            className="w-[330px] absolute top-[30%] left-[50%] -translate-x-[51%] -translate-y-[50%]"
            playsInline={true}
            autoPlay={true}
            loop={true}
            muted={true}
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
      <div className="h-2 bg-netflixLine/40" />
      <section className="py-20  flex flex-col sm:flex-row sm:justify-between sm:items-center gap-x-12 mx-auto h-[60vh] w-8/12 z-50 text-white bg-black">
        <div className="flex my-auto  h-full justify-center items-center flex-col sm:w-1/2 w-full">
          <img
            src="https://occ-0-2152-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt="img"
          />
        </div>
        <div className="flex my-auto  h-full justify-center   items-center  flex-col sm:w-1/2 gap-4 w-full">
          <div className="text-5xl text-left  w-full font-bold">
            Create profiles for kids
          </div>
          <div className="text-2xl">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </div>
        </div>
      </section>
      <div className="h-2 bg-netflixLine/40" />
      <section className="py-16 mx-auto flex justify-center items-center w-full z-50 text-white bg-black">
        <div className="w-full max-w-3xl mx-auto">
          <div className="text-5xl font-bold text-center">
            Frequently Asked Questions
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-8">
            {FAQ?.map((item) => (
              <details
                key={item?.id}
                className="w-full p-4 bg-white/20 rounded-md cursor-pointer"
              >
                <summary>{item?.title}</summary>
                <p className="pt-4">{item?.description}</p>
              </details>
            ))}
          </div>

          <div className="py-4 text-center text-xl font-medium">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>

          <div className="flex w-full justify-center items-center gap-x-4 text-xl font-bold">
          <HomeForm />
          </div>
        </div>
      </section>
      <div className="h-2 bg-netflixLine/40" />
    </div>
  );
};

export default Home;
