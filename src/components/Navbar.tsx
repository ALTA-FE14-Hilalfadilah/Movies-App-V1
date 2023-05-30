import React, { useContext } from "react";
import image from "../image/logo.png";
import Toggle from "./toggle";
import { DarkModeContext } from "../utils/Darkmode";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar bg-zinc-900 fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home </Link>
            </li>
            <li>
              <Link to={"/Listmovies"}>Listmovies</Link>
            </li>
            <li>
              <Link to={"/"}>Favorite</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to={"/"}>
          <div className="btn btn-ghost normal-case text-2xl text-purple-500">
            <img src={image} alt="logo" />
            ScenixMovieApp
          </div>
        </Link>
      </div>
      <div className="navbar-end gap-x-5">
        <button className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <Toggle id={"toggle"} onClick={toggleDarkMode} />
      </div>
    </div>
  );
};

export default Navbar;
