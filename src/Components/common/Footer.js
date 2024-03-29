import React from "react";
import { TbLanguageKatakana } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="w-full mx-auto bg-black text-[#ffffffb3] text-sm font-[400]">
      <div className="w-full sm:w-[90%] lg:w-4/5 xl:w-8/12 mx-auto  p-8 space-y-2">
        <div>
          Questions?{" "}
          <span className="underline cursor-pointer">
            Call 000-800-040-1843
          </span>
        </div>

        <div className="flex-wrap w-full flex my-4 underline">
          <div className="sm:w-1/4 w-1/2">
            <ul className="space-y-2">
              <li className="cursor-pointer">FAQ </li>
              <li className="cursor-pointer">Investor Relations</li>
              <li className="cursor-pointer">Privacy</li>
              <li className="cursor-pointer">Speed Test</li>
            </ul>
          </div>
          <div className="sm:w-1/4 w-1/2">
            <ul className="space-y-2">
              <li className="cursor-pointer">Help Centre </li>
              <li className="cursor-pointer"> Jobs</li>
              <li className="cursor-pointer"> Cookie Preferences</li>
              <li className="cursor-pointer"> Legal Notices</li>
            </ul>
          </div>
          <div className="sm:w-1/4 w-1/2">
            <ul className="space-y-2">
              <li className="cursor-pointer">Account </li>
              <li className="cursor-pointer">Ways to Watch </li>
              <li className="cursor-pointer">Corporate Information </li>
              <li className="cursor-pointer">Netflix Originals </li>
            </ul>
          </div>
          <div className="sm:w-1/4 w-1/2">
            <ul className="space-y-2">
              <li className="cursor-pointer"> Media Centre</li>
              <li className="cursor-pointer">Terms of Use </li>
              <li className="cursor-pointer">Contact Us </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 pt-3">
          <div className="w-fit flex justify-center items-center gap-2 bg-black cursor-pointer rounded-md border border-netflixLine px-4 py-2 font-bold text-sm text-white">
            <TbLanguageKatakana className="text-xl" />
            <select className="bg-black outline-none" name="lang" id="lang">
              <option value="English">English</option>
              <option value="हिन्दी">हिन्दी</option>
            </select>
          </div>
          <div className="no-underline">Netflix India</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
