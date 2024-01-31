import React from 'react'
import logo from "../Assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full absolute py-8">
    <navbar className="w-8/12 mx-auto flex justify-between items-center">
      <img src={logo} alt="logo" width={150} height={40} />
      <div className="flex justify-center items-center gap-x-4">
        <div>
          <select
            className="bg-black cursor-pointer rounded-md border border-netflixLine px-4 py-1 font-bold text-sm text-white"
            name="lang"
            id="lang"
          >
            <option value="English">English</option>
            <option value="हिन्दी">हिन्दी</option>
          </select>
        </div>
        <Link to='/signup' className="bg-netflix hover:bg-netflixDark transition-all duration-200 rounded-md px-4 py-1 font-bold text-sm text-white">SignUp</Link>
      </div>
    </navbar>
  </header>
  )
}

export default Header