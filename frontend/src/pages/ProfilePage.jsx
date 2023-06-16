import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  const handelLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div>
      <button
        onClick={handelLogout}
        className="text-xl bg-blue-600 rounded-full px-4 py-[6px] text-white border-blue-600 border-[1px] hover:bg-white hover:text-blue-600 cursor-pointer duration-200"
      >
        Log out
      </button>
      {user?.name}
    </div>
  );
};

export default ProfilePage;
