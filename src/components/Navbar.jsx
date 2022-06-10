import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to={"/"}>
        <h1 className="text-red-600 text-4xl cursor-pointer font-bold">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to={"/account"}>
            <button className="text-white pr-4">Account</button>
          </Link>

          <button
            onClick={logoutHandler}
            className="bg-red-600 px-6 p-2 rounded text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to={"/login"}>
            <button className="text-white pr-4">Login</button>
          </Link>
          <Link to={"/signup"}>
            <button className="bg-red-600 px-6 p-2 rounded text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
