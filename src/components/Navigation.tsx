import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
      <span className="font-bold">React-Typescript</span>
      <span>
        <Link to="/" className="mr-2">
          Profile
        </Link>
        <Link to="/friends" className="mr-2">
          Friends
        </Link>
        <Link to="/statistics" className="mr-2">
          Statistics
        </Link>
        <Link to="/transaction" className="mr-2">
          Transaction
        </Link>
      </span>
    </nav>
  );
};

export default Navigation;
