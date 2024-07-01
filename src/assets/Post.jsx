import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
function Post() {
  return (
    <>
    <main className=' mt-4 mb-4 bg-white p-3 border border-gray-300 shadow-lg rounded-md'>
      <div>
        <div className='flex justify-between '>
          {/* profile img and person name , follow and unfollow */}
          <div className='flex gap-2 '>
            {/* profile img , person name */}
            <div>
                 <img src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_640.jpg" alt="profile img" className=" w-11 h-11  rounded-full" />

            </div>
            <div className='leading-5'>
              <div className='flex gap-2'>
              <h1>Aminul Ali</h1>
              <span className='text-gray-600'> 3d ago</span>
              </div>
             
              <p className='text-gray-600'>Frontend developer</p>
            </div>
          </div>
          <div className='flex flex-col items-end' >
            {/* setting btn , follow and unfollow */}
            <CiSettings className='h-6 w-6' />
            <div className='flex gap-2 h-8 w-24 p-2 items-center cursor-pointer text-blue-600 
             hover:bg-gray-100 rounded-full'>
               <FaPlus  />
                <button className='text-[1.2rem]'>Follow</button>
            </div>
          </div>
        </div>

<hr />
        {/* text paragraph post */}
        <div className='pb-3 pt-2'>
          <p>
          An image is a visual representation. An image can be two-dimensional, such as a drawing, painting, or photograph, or three-dimensional, such as a carving or sculpture.
          </p>
        </div>
        <div>
          <img src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" alt="posted image" className='w-full' />
        </div>
        <hr />
        <div className='mt-3 mb-3 flex items-center justify-between border border-t-gray-300'>
          {/* like comment functionality */}
          <div className='flex items-center cursor-pointer'>
            {/* likes and comments */}
            <AiFillLike className='h-6 w-6 text-blue-800' />
            <p> <span>12 </span>Likes</p>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            {/* comments */}
            <FaRegComment className='h-6 w-6' />
            <p> <span>7 </span> Comment</p>
          </div>
        </div>
      </div>
    </main> 
    </>
  )
}

export default Post