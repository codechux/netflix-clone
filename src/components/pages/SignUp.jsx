import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Loader from "../Loader";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
    e.target.reset();
    setIsLoading(false);
  };

  return (
    <div>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/0d1c0164-ff93-4a66-9f94-bfb174f82637/NG-en-20220606-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflixBg"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-100">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-xl text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold"> Sign Up</h1>
              <form
                onSubmit={submitHandler}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="email"
                  placeholder="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="password"
                  placeholder="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="bg-red-600 py-3 my-6 rounded font-bold"
                  type="submit"
                >
                  {isLoading ? <Loader /> : <p>Sign Up</p>}
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8 ">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?
                  </span>
                  <Link to={"/login"}>Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
