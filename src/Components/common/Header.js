import { TbLanguageKatakana } from "react-icons/tb";
import React from "react";
import logo from "../../Assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../../firebase/firebaseConfig";

const Header = () => {
  const location = useLocation();
  const { userData } = useSelector((state) => state.user);
  
  const onSignOutHandler = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
        toast.success("Sign out failed");
      });
  };
  return (
    <header className="w-full absolute top-0 py-8 z-[999] mb-8">
      <nav className={`${location.pathname === "/browse" ? "w-full" : "w-full md:w-8/12"} px-8 mx-auto flex justify-between items-center`}>
        <Link to="/">
          <img src={logo} alt="logo" className="w-[90px] h-[25px] sm:w-[150px] sm:h-[40px]" />
        </Link>

        {!userData && location.pathname === "/" && (
          <div className="flex justify-center items-center gap-x-4">
            <div className="flex justify-center items-center gap-2 bg-black cursor-pointer rounded-md border border-netflixLine px-1 sm:px-4 py-2 font-bold text-sm text-white">
              <TbLanguageKatakana className="text-xl" />
              <select className="bg-black outline-none sm:w-auto w-3" name="lang" id="lang">
                <option value="English">English</option>
                <option value="हिन्दी">हिन्दी</option>
              </select>
            </div>
            <Link
              to="/signin"
              className="bg-netflix hover:bg-netflixDark transition-all duration-200 rounded-md px-4 py-2 font-bold text-sm text-white"
            >
              Sign In
            </Link>
          </div>
        )}
        {userData && (
          <button
            onClick={onSignOutHandler}
            className="bg-netflix hover:bg-netflixDark transition-all duration-200 rounded-md px-4 py-2 font-bold text-sm text-white"
          >
            Sign Out
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
