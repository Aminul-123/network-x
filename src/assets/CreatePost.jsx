import React from 'react'
import { MdCancelPresentation } from "react-icons/md";
import { RiYoutubeLine } from "react-icons/ri";
import { MdOutlinePermMedia } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addPost } from '../slices/postSlice';

function CreatePost({  editorText,
    setEditorText,
    shareImage,
    setShareImage,
    videoLink,
    setVideoLink,
    assetArea,
    setAssetArea,
    handleChange,
    switchAssetArea,
    handleClick,
    reset,
    setShowModal }) {
      const dispatch = useDispatch();

      function handleCreatePost  () {
        dispatch(addPost(editorText, shareImage));
      }
  return (
    <div>
        <section className="fixed left-0  w-full top-0 ml-4 lg:left-[27%] lg:w-[35rem] right-0 bottom-0 z-50">
          <div
            className="w-[100%]  bg-white  border border-gray-400 p-3 rounded flex flex-col relative
         top-8"
          >
            <div className="flex justify-between ">
              <h1>Create a post</h1>
              <MdCancelPresentation
                className="h-8 w-8 cursor-pointer"
                onClick={() => setShowModal(false)}
              />
            </div>
            <div className="flex items-center gap-3 ">
              <img
                src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_640.jpg"
                alt="profile img"
                className="md:h-12 md:w-12 w-9 h-9  rounded-full"
              />
              <h1 className="font-bold">Aminul Ali</h1>
            </div>

            {/* image and video text area */}
            <div>
              <div>
                <textarea
                  name="text"
                  id="text"
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to write about..."
                  className="p-2 w-full mt-2 mb-2 border border-gray-300 resize-none h-28"
                ></textarea>

                {/* upload image */}

                {assetArea === "image" && (
                  <>
                    <input
                      type="file"
                      accept="image/gif, image/jpeg, image/png"
                      name="image"
                      id="file"
                      className="mt-2 mb-3 hidden"
                      onChange={handleChange}
                    />
                    <p className="text-center mb-3">
                      <label
                        htmlFor="file"
                        className="mt-2  cursor-pointer text-blue-400 p-1 border "
                      >
                        Select an image to share
                      </label>
                    </p>
                    {shareImage && (
                      <div className="flex justify-center">
                        <img
                          src={URL.createObjectURL(shareImage)}
                          alt="image"
                          className="h-40 w-[60%] m-2 "
                        />
                      </div>
                    )}
                  </>
                )}
                {assetArea === "media" && (
                  <>
                    <div className="flex flex-col items-center mt-2">
                      <input
                        type="text"
                        placeholder="Please enter a video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                        className="border border-gray-300 w-full pl-2 p-2 mt-2 mb-3"
                      />
                      {/* {
                    videoLink &&
                    (
                      <div className='h-40 w-[60%] mt-2 mb-3 flex justify-center'>
                          <ReactPlayer  url={videoLink}  />
                      </div>
                       
                    )
                  } */}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* below section */}
            <div className="flex justify-between ">
              <div className="flex gap-2">
                <div
                  className="flex gap-1 cursor-pointer"
                  onClick={() => switchAssetArea("image")}
                >
                  {/* icon and text */}

                  <MdOutlinePermMedia className={`h-6 w-6 text-green-600  `} />
                  <h1>Image</h1>
                </div>
                <div
                  className="flex gap-1 cursor-pointer"
                  onClick={() => switchAssetArea("media")}
                >
                  <RiYoutubeLine className="h-6 w-6 text-orange-600" />
                  <h1>Video</h1>
                </div>
              </div>
              <div>
                {/* Post button */}
                <button
                  className={`h-8 w-16 bg-blue-500 text-white text-[1.1rem] rounded-full  `}
                  onClick={() => handleCreatePost ()}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </section>
    
    </div>
  )
}

export default CreatePost