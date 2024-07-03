import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const googleClick = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    navigate("/home");
    //console.log(result);
  };
  return (
    <>
      <nav className="flex justify-between px-7 py-3 border border-b-gray-200 ">
        <div className="h-[2.8rem] w-28 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzQkqTU_elyfEYqfilXlpl5Q23ELNsTDq7g&s"
            alt="linkedin image"
          />
        </div>
        <div className="flex gap-7 ">
          <button
            className="h-[2rem] w-[5rem] border border-black rounded-xl hover:bg-orange-400 hover:text-white
          hover:border-white "
          >
            Join now
          </button>
          <button
            className="h-[2rem] w-[5rem] border text-blue-600 border-blue-500 
          
          rounded-xl 
          hover:bg-blue-400 hover:text-white hover:border-none
          "
           
          >
            Sign in
          </button>
        </div>
      </nav>
      {/* main section */}
      <main className="flex justify-between flex-col md:flex-row items-center pl-8 ">
        <div className="flex flex-col items-start">
          <h1
            className="text-[16px] text-blue-800 md:leading-[3.3rem] md:text-[40px] lg:text-[50px] mt-5
             "
          >
            Welcome to your professional community
          </h1>
          <button className="h-8 w-80 my-8 px-10 border border-black rounded-2xl text-center 
          hover:border-orange-400"
          onClick={googleClick}
          >
            <FcGoogle className="relative top-1 left-5 h-6 w-6" />{" "}
            <span className=" relative bottom-5 ">Sign in with Google</span>
          </button>
        </div>
        <div className="h-[25rem] w-[40rem] md:w-[60rem] md:flex items-center justify-center ">
          <img
            src="https://octopuscrm.io/wp-content/uploads/2022/11/linkedin-community-manager.png"
            alt="banner-community"
          />
        </div>
      </main>
    </>
  );
}

export default Login;
