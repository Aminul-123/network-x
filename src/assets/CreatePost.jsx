import React, { useState } from 'react'
import { MdCancelPresentation } from "react-icons/md";
import { RiYoutubeLine } from "react-icons/ri";
import { MdOutlinePermMedia } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
// import { addPost } from '../slices/postSlice';
import { createPost } from '../services/getPostData';

function CreatePost({setShowModal}) {
      const [editorText, setEditorText] = useState("");
      const [shareImage, setShareImage] = useState("");
      const [videoLink, setVideoLink] = useState("");
      const [assetArea, setAssetArea] = useState("");
      const [heading, setHeading] = useState('');


      // const dispatch = useDispatch();
      const username = useSelector((state) => state?.post?.username)
      const profileImg = useSelector((state) => state?.post?.userImg);


     function handleCreatePost (e) {
        e.preventDefault();
        console.log(e)

        if (!heading) {
          alert('heading must not be empty');
          return;
        } ;
       // dispatch(addPost(editorText, shareImage));
        const newPost = {
          id : crypto.randomUUID(),
          name : username || 'Aminul',
          date_created : new Date().toDateString(),
          heading : heading,
          description : editorText,
          imageUrl : shareImage,
          likes : 0,
          comments: [] 
        }
        console.log(newPost);
       createPost(newPost)
        setShowModal(false)
        
      }
  
      
      const switchAssetArea = (area) => {
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);
      };
      
  // const handleChange = (e) => {
  //   const image = e.target.files[0];
  //   if (image === "" || image === undefined) {
  //     alert(`not an image , the file is ${typeof image}`);
  //     return;
  //   }
  //   setShareImage(image);
  // };
  return (
    <div>
        <form className="fixed left-0  w-full top-0 ml-4 lg:left-[27%] lg:w-[35rem] right-0 bottom-0 z-50"  onSubmit={ handleCreatePost}>
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
                src={profileImg}
                alt="profile img"
                className="md:h-12 md:w-12 w-9 h-9  rounded-full"
              />
              <h1 className="font-bold">{username}</h1>
            </div>

            {/* image and video text area */}
            <div>
              <div>
                <div className='flex gap-4 items-center'>
                  <label htmlFor="heading">Heading</label>
                  <input type="text" 
                  id='heading' 
                  placeholder='heading' 
                  className='w-full p-2'
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  />
                </div>
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
                    //  onChange={handleChange}
                      disabled
                    />
                    <p className="text-center mb-3">
                      <label
                        htmlFor="file"
                        className="mt-2  cursor-pointer text-blue-400 p-1 border "
                      >
                        Select an image to share
                      </label>
                      <span>OR</span>
                      <input type="text" placeholder='Paste image url' className='p-2 w-[80%] mt-2'
                      value={shareImage}
                      onChange={(e) => setShareImage(e.target.value)} />
                    </p>
                    {/* {shareImage && (
                      <div className="flex justify-center">
                        <img
                          src={URL.createObjectURL(shareImage)}
                          alt="image"
                          className="h-40 w-[60%] m-2 "
                        />
                       
                      </div>
                    )} */}
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

            {/* below form */}
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
                  // onClick={() => switchAssetArea("media")}
                >
                  <RiYoutubeLine className="h-6 w-6 text-orange-600" />
                  <h1>Video</h1>
                </div>
              </div>
              <div>
                {/* Post button */}
                <button
                  className={`h-8 w-16 bg-blue-500 text-white text-[1.1rem] rounded-full  `}
                  
                 
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </form>
    
    </div>
  )
}

export default CreatePost