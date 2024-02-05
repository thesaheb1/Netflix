import { FaUserCircle } from "react-icons/fa";
import { ImCross, ImExit } from "react-icons/im";
import { RiSettings2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { TbLanguageKatakana } from "react-icons/tb";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../Assets/images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../../firebase/firebaseConfig";
import chatGPTIcon from "../../Assets/images/chatgpt-icon.svg";
import { movieSearchUrl, options } from "../../utils/Constants";
import { addSearchMovie } from "../../redux/slices/moviesSlice";
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const [showSearch, setShowSearch] = useState(false);
  const [searchData, setSearchData] = useState("");
  // const [GPTSearchData, setGPTSearchData] = useState("");
  const [showGPTSearch, setShowGPTSearch] = useState(false);

  const [dropdown, setDropDown] = useState(false);

  const avtarRef = useRef();

  const onSignOutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign out successfully");
    } catch (error) {
      // An error happened.
      console.error(error);
      toast.success("Sign out failed");
    }
  };

  const searchDataHandler = async () => {
    try {
      const res = await fetch(movieSearchUrl(searchData), options);
      const data = await res.json();
      dispatch(addSearchMovie(data?.results));
      navigate("/search");

    } catch (error) {
      console.error("error:" + error);
    }
  };

  // Onclick listener in useEffect
  useEffect(() => {
    const handleDropDown = (event) => {
      if (!(event?.target === avtarRef?.current)) {
        setDropDown(false);
      }
    };

    window.addEventListener("click", handleDropDown);
    return () => {
      window.removeEventListener("click", handleDropDown);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <header className="w-full absolute top-0 py-8 z-[999] mb-8">
      <nav
        className={`${
          location.pathname === "/" ? "w-full md:w-8/12" : "w-full"
        } px-8 mx-auto flex justify-between items-center`}
      >
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[90px] h-[25px] sm:w-[150px] sm:h-[40px]"
          />
        </Link>

        {!userData && location.pathname === "/" && (
          <div className="flex justify-center items-center gap-x-4">
            <div className="flex justify-center items-center gap-2 bg-black cursor-pointer rounded-md border border-netflixLine px-1 sm:px-4 py-2 font-bold text-sm text-white">
              <TbLanguageKatakana className="text-xl" />
              <select
                className="bg-black outline-none sm:w-auto w-3"
                name="lang"
                id="lang"
              >
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
          <div className="flex justify-center items-center gap-x-4 font-bold">
            <div className="bg-white/20 px-2 rounded-md text-white/50 md:flex justify-between items-center gap-4 hidden">
              <input
                type="search"
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
                placeholder="Ex : 3 idiots"
                className="bg-white/0 px-4 py-2 outline-none text-white placeholder:text-white/70"
              />
              <FaSearch
                onClick={searchDataHandler}
                className="text-xl text-netflix cursor-pointer"
              />
            </div>
            <FaSearch
              onClick={() => {
                setShowSearch(true);
                setShowGPTSearch(false);
              }}
              className="text-xl text-netflix cursor-pointer md:hidden block"
            />
            <img
              src={chatGPTIcon}
              onClick={() => {
                setShowGPTSearch(true);
                setShowSearch(false);
              }}
              alt="chatGPTIcon"
              className="w-[36px] aspect-square cursor-pointer"
            />

            <img
              src={userData?.photoURL}
              alt="profile"
              onClick={() => setDropDown(!dropdown)}
              ref={avtarRef}
              className="rounded-md w-[36px] aspect-square cursor-pointer"
            />
            {dropdown && (
              <div className="absolute z-[999] top-20 right-8 rounded-md w-[150px] bg-white/80 text-black">
                <ul className="flex flex-col justify-center items-start text-base font-semibold">
                  <Link className="w-full" to="/my-profile">
                    <li className="cursor-pointer hover:bg-black/20 rounded-md p-2 flex justify-start-start items-center gap-x-2 transition-all duration-200">
                      <span className="text-xl">
                        <FaUserCircle />
                      </span>{" "}
                      My Profile
                    </li>
                  </Link>
                  <Link className="w-full" to="/settings">
                    <li className="cursor-pointer hover:bg-black/20  rounded-md p-2 flex justify-start-start items-center gap-x-2 transition-all duration-200">
                      <span className="text-xl">
                        <RiSettings2Fill />
                      </span>{" "}
                      Setting
                    </li>
                  </Link>
                  <li
                    onClick={onSignOutHandler}
                    className="cursor-pointer w-full hover:bg-black/20 rounded-md p-2 flex justify-start-start items-center gap-x-2 transition-all duration-200"
                  >
                    <span className="text-xl">
                      <ImExit />
                    </span>{" "}
                    Log out
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </nav>
      <>
        {userData && showSearch && (
          <div className="w-full px-8 md:hidden flex flex-col justify-center items-end mt-4">
            <div className="bg-white/20 px-2 rounded-md text-white/50 flex justify-between items-center gap-4 my-4 w-full">
              <input
                type="search"
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
                placeholder="Ex : 3 idiots"
                className="bg-white/0 px-4 py-2 outline-none text-white w-full placeholder:text-white/70"
              />
              <FaSearch onClick={searchDataHandler} className="text-xl text-netflix cursor-pointer" />
            </div>
            <ImCross
              onClick={() => setShowSearch(false)}
              className="text-xl text-netflix cursor-pointer md:hidden block"
            />
          </div>
        )}
        {userData && showGPTSearch && (
          <div className="w-full px-8 flex flex-col justify-center items-end mt-4">
            <div className="bg-white/20 px-2 rounded-md text-white/50 flex justify-between items-center gap-4 my-4 w-full">
              <input
                type="search"
                placeholder="Ex : Top 5 horror movies"
                className="bg-white/0 px-4 py-2 outline-none text-white w-full placeholder:text-white/70"
              />
              <FaSearch className="text-xl text-[#00A67E] cursor-pointer" />
            </div>
            <ImCross
              onClick={() => setShowGPTSearch(false)}
              className="text-xl text-[#00A67E] cursor-pointer"
            />
          </div>
        )}
      </>
    </header>
  );
};

export default Header;
