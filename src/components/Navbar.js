import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl font-bold bg-blue-500 py-1 px-2 rounded text-white dark:bg-gray-500 dark:text-gray-900">
            Google 🔍
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-gray-900 text-gray-200 border rounded-full px-3 py-1 hover:shadow-lg transition-colors duration-500"
        >
          <span className="hidden sm:inline-block">
            {darkTheme ? "Light " : "Dark "}
          </span>
          <span>{darkTheme ? "💡" : "🌙"}</span>
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
