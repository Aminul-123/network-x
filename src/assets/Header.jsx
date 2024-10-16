import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
// import { SiNintendonetwork } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const profileImg = useSelector((state) => state?.post?.userImg);

  return (
    <>
      {/*  working on header component === done */}
      <header className=" w-full border-2 p-3 bg-gray-100 fixed top-0 left-0 z-50  border-b-gray-300">
        <nav className="flex justify-between">
          <div className="flex items-center  ">
            <img
              src="images/logo.jpg"
              alt="header-image"
              className="h-12 w-12 mr-5"
            />

            <div className="flex h-8 w-64 border border-black p-2 rounded-2xl ">
              <CiSearch className="text-black h-8 w-8 relative bottom-2 " />
              <input
                type="text"
                placeholder="search"
                className="border-none outline-none h-full w-full px-2"
              />
            </div>
          </div>
           <div className="flex gap-3 cursor-pointer w-full lg:w-auto
           fixed bottom-0 left-auto  md:top-3 md:right-3 md:left-auto  justify-center border pt-2 md:border-none  border-t-gray-400 bg-gray-100 md:bg-none
           h-14
           ">
              <Link to={'/home'} className="flex flex-col items-center
              active:border border-b-gray-600
              "
              
              >
                   {/* icon and header text */}
                   <IoHomeOutline className="md:h-6 md:w-6 " />
                    <h5>Home</h5>
              </Link>
              <div className="flex flex-col items-center">
                   {/* <SiNintendonetwork className=" md:h-6 md:w-6" /> */}
                   <span>🔍</span>
                   <h5>Network</h5>
              </div>
              <div className="flex flex-col items-center">
                   <FaUpwork className="md:h-6 md:w-6" />
                   <h5>Jobs</h5>
              </div>
              <div className="flex flex-col items-center">
                  <AiOutlineMessage className="md:h-6 md:w-6" />
                 <h5>Messaging</h5>
              </div>
              <div className="flex flex-col items-center">
                <IoNotificationsOutline className="md:h-6 md:w-6" />
                 <h5>Notification</h5>
              </div>
              <div className="flex flex-col items-center ">
                {/* profile img */}
                <img src={profileImg}
                alt="profile img" className="md:h-12 md:w-12 w-9 h-9  rounded-full" />
                
              </div>
            </div>
         
        </nav>
      </header>
    </>
  );
}

export default Header;
