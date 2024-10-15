import React, { useState } from "react";
//import ReactPlayer from 'react-player';
import { MdOutlinePermMedia } from "react-icons/md";
import { BsCalendar3Event } from "react-icons/bs";
import { PiArticleNyTimesDuotone } from "react-icons/pi";

import CreatePost from "./CreatePost";

function AddPost({ text, setText }) {
  const [showModal, setShowModal] = useState(false);



  return (
    <>
      <section className="bg-white border border-gray-300 shadow-lg rounded-md">
        <div className="flex pl-2 gap-3 items-center mt-2 mb-2">
          <img
            src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_640.jpg"
            alt="profile img"
            className="md:h-12 md:w-12 w-9 h-9  rounded-full"
          />

          <input
            type="text"
            placeholder="Start a post try writing with AI"
            className=" pl-2 h-10  w-[70%] border border-gray-400 rounded-full 
        "
            value={text}
            onChange={(e) => setText(e.target.value)}
            onClick={() => setShowModal(true)}
          />
          <button
            className={`h-10 w-20 bg-blue-500 text-white text-[1.1rem] rounded-full p-2 `}
          >
            Post
          </button>
        </div>
        <hr />
        <div className="flex justify-between mb-3 mt-3 p-3 ">
          <div className="flex gap-2 cursor-pointer">
            {/* icon and text */}

            <MdOutlinePermMedia className={`h-6 w-6 text-green-600  `} />
            <h1>Media</h1>
          </div>
          <div className="flex gap-2 cursor-pointer ">
            <BsCalendar3Event className="h-6 w-6 text-teal-500" />
            <h1>Events</h1>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <PiArticleNyTimesDuotone className="h-6 w-6 text-orange-500" />
            <h1>Write article</h1>
          </div>
        </div>
      </section>

          {/* actual post */}

          {
            showModal && <CreatePost
                                  
                                      setShowModal={setShowModal} 
                                      />
          }
     
    </>
  );
}

export default AddPost;
