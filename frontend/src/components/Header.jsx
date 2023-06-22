import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div id="home">
      <header className="flex items-center justify-between h-20 md:px-20 px-5 bg-gradient-to-r from-blue-950 to-sky-400 mb-5">
        <span className="text-2xl font-bold text-white">Logo</span>
        <div className="hidden md:flex items-center justify-center gap-8 ">
          <li className="list-none text-white text-xl font-semibold py-[5px] px-5 rounded-full border-[1px] border-sky-500 mt-3 hover:bg-sky-500 duration-200 cursor-pointer ">
            <Link to="products">Products</Link>
          </li>
          <li className="list-none text-white text-xl font-semibold py-[5px] px-5 rounded-full border-[1px] border-sky-500 mt-3 hover:bg-sky-500 duration-200 cursor-pointer ">
            <Link to="beast-selling">Beast Selling</Link>
          </li>
        </div>
        <div className="flex items-center justify-center">
          <nav className="flex items-center justify-center list-none gap-16">
            {!user ? (
              <div className="flex items-center justify-center gap-9">
                <li className="text-xl bg-transparent rounded-full px-7 py-[6px] text-white border-[1px] hover:bg-white hover:text-pink-600 cursor-pointer duration-200">
                  <Link to="/login">Login</Link>
                </li>
                <li className="text-xl bg-transparent rounded-full px-7 py-[6px] text-white border-[1px] hover:bg-white hover:text-pink-600 cursor-pointer duration-200">
                  <Link to="/signup">SignUp</Link>
                </li>
              </div>
            ) : (
              <Link to="/profile">
                <img
                  src="https://img.favpng.com/15/22/14/computer-icons-login-person-user-avatar-png-favpng-sRa10v7u9xiE0YcXVrGFb9Uai.jpg"
                  alt="avatar"
                  width={43}
                  className="rounded-full"
                />
              </Link>
            )}
          </nav>
        </div>
      </header>
      <NavBar />
    </div>
  );
};

export default Header;
