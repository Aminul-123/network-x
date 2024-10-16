import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdEventNote } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { showSavedItem } from "../slices/postSlice";
import ProfileUpdate from "./ProfileUpdate";
function LeftSideBar() {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const name = useSelector((state) => state?.post?.username)
  const userImg = useSelector((state) => state?.post?.userImg)
  
  const dispatch = useDispatch();
  function handleSaveItem () {
    dispatch(showSavedItem());
  }

 
 // console.log(name);
  return (
    <>
      <section className="lg:h-[70%] max-h-[80%] w-full lg:w-[24%] lg:fixed left-0 top-24 mt-16
      lg:mt-0 ml-4 border border-gray-300 shadow-lg rounded-md  bg-white">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf_mr6dx1OYsdjbGStsFqWdWZlTUWe-jpQcg&s"
            alt="bg img"
            className="w-full h-48 lg:h-32"
          />
          <div className="relative left-16 bottom-16  lg:bottom-8">
            <img
              src={userImg}
              alt="profile image"
              className="lg:h-20 lg:w-20 h-32 w-32 rounded-full"
            />
            <h2 className="font-bold text-[1.2rem]">
              {name || 'Aminul'}
              <span className="p-1 border border-gray-300 ml-2 cursor-pointer"
            onClick={() => setShowUpdateModal((t) => !t)}
              >🖋</span>
            </h2>
            {
              showUpdateModal && (
                <ProfileUpdate setShowUpdateModal={setShowUpdateModal} />
              )
            }
          </div>
        </div>
        <hr className="text-gray-600" />
        <div className="flex justify-between px-3 itmes-center mt-[-3rem] lg:mt-0 ">
          <div>
            <p>Connection</p>
            <p className="font-bold">Grow your network</p>
          </div>
          <div className="mt-3 h-8 w-8 rounded-full hover:bg-gray-200 ">
            <FaUserFriends className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
        <hr />

        <div className="flex px-3 items-center  justify-start gap-2 h-10 w-full "
        onClick={handleSaveItem}
        >
          <CiBookmark className="h-6 w-6 mt-2 cursor-pointer  " />
          <p className="cursor-pointer">My Items</p>
        </div>

        <div className="flex px-3 items-center  justify-start gap-2 h-10 w-full ">
          <FaPeopleGroup className="h-6 w-6 mt-2 cursor-pointer  " />
          <p>Groups</p>
        </div>

        <div className="flex px-3 items-center  justify-start gap-2 h-10 w-full ">
          <MdEventNote className="h-6 w-6 mt-2 cursor-pointer  " />
          <p>Events</p>
        </div>
      </section>
    </>
  );
}

export default LeftSideBar;
