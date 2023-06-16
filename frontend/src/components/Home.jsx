import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/reducers/userReducer";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <header className="flex items-center justify-between h-20 px-20">
        <span className="text-2xl font-bold">HomePage</span>
        <div className="flex items-center justify-center">
          <nav className="flex items-center justify-center list-none gap-16">
            {!user ? (
              <div className="flex items-center justify-center gap-20">
                <li className="text-xl bg-blue-600 rounded-full px-4 py-[6px] text-white border-blue-600 border-[1px] hover:bg-white hover:text-blue-600 cursor-pointer duration-200">
                  <Link to="/login">Login</Link>
                </li>
                <li className="text-xl bg-blue-600 rounded-full px-4 py-[6px] text-white border-blue-600 border-[1px] hover:bg-white hover:text-blue-600 cursor-pointer duration-200">
                  <Link to="/signup">SignUp</Link>
                </li>
              </div>
            ) : (
              <li
                onClick={handelLogout}
                className="text-xl bg-blue-600 rounded-full px-4 py-[6px] text-white border-blue-600 border-[1px] hover:bg-white hover:text-blue-600 cursor-pointer duration-200"
              >
                <button>Log out</button>
              </li>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Home;
