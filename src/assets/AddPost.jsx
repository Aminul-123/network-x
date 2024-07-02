import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import { MdOutlinePermMedia } from "react-icons/md";
import { BsCalendar3Event } from "react-icons/bs";
import { PiArticleNyTimesDuotone } from "react-icons/pi";
import { MdCancelPresentation } from "react-icons/md";
import { RiYoutubeLine } from "react-icons/ri";

function AddPost({text, setText}) {
  const [editorText, setEditorText] = useState("");
  const [showModal, setShowModal] = useState('close');
  const [shareImage , setShareImage] = useState('')
  const [videoLink, setVideoLink] = useState('');
  const [assetArea, setAssetArea] = useState('')

  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === '' || image===undefined) {
      alert(`not an image , the file is ${typeof image}`)
      return;
    }
    setShareImage(image);
   
  }
  const switchAssetArea = (area) => {
    setShareImage('');
    setVideoLink('');
    setAssetArea(area);
  }

  const handleClick = (e) => {
    e.preventDefault();
    if(e.target != e.currentTarget) {
      return;
    }
    switch (showModal) {
      case 'open' : {
        setShowModal("close");
        break;
      }
      case 'close' : {
        setShowModal('open')
        break;
      }
      default : {
        setShowModal('close');
        break;
      }
    }
  }

  const reset = (e) => {
    setEditorText('');
    setShareImage('');
    setVideoLink('')
    setAssetArea('');
    handleClick(e)
  }
  
  return (
    <>
    <section className='bg-white border border-gray-300 shadow-lg rounded-md'>
      <div className='flex pl-2 gap-3 items-center mt-2 mb-2'>
          <img src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_640.jpg" alt="profile img" className="md:h-12 md:w-12 w-9 h-9  rounded-full" />

             <input type="text" placeholder='Start a post try writing with AI' className=' pl-2 h-10  w-[70%] border border-gray-400 rounded-full 
        ' 
        value={text}
        onChange={(e) => setText(e.target.value)}
        onClick={handleClick}
        />
        <button className={`h-10 w-20 bg-blue-500 text-white text-[1.1rem] rounded-full p-2 `}
        
        >Post</button>
      </div>
      <hr />
      <div className='flex justify-between mb-3 mt-3 p-3 '>
        <div className='flex gap-2 cursor-pointer'
        
        >
          { /* icon and text */}
          
          <MdOutlinePermMedia className={`h-6 w-6 text-green-600  `} />
          <h1>Media</h1>
      
         
          
        </div>
        <div className='flex gap-2 cursor-pointer '>
        <BsCalendar3Event className='h-6 w-6 text-teal-500' />
        <h1>Events</h1>
        </div>
        <div className='flex gap-2 cursor-pointer'>
        <PiArticleNyTimesDuotone  className='h-6 w-6 text-orange-500'/>
        <h1>Write article</h1>
        </div>
      </div>
    </section>
 
{/* actual post */}
   {
   showModal === 'open' && (

    
    <section className='fixed  top-0 left-0 right-0 bottom-0 z-50'>
         <div className='w-[100%] max-w-96 bg-white  border border-black p-3 rounded flex flex-col relative
         top-8'>

          <div className='flex justify-between '>
            <h1>Create a post</h1>
            <MdCancelPresentation className='h-8 w-8 cursor-pointer' onClick={(event) => reset(event)} />
          </div>
          <div className='flex items-center gap-3 '>
             <img src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_640.jpg" alt="profile img" className="md:h-12 md:w-12 w-9 h-9  rounded-full" />
             <h1 className='font-bold'>Aminul Ali</h1>
          </div>

          {/* image and video text area */}
          <div>
              <div>

              
              
                <textarea name="text" id="text" value={editorText}
                onChange={(e) => setEditorText(e.target.value)}
                placeholder='What do you want to write about...'
                className='p-2 w-full mt-2 mb-2 border border-gray-300 resize-none h-28'
                >
                </textarea>

                { /* upload image */ }

                {
                  assetArea === 'image' && (
                    <>
                    

                <input type="file"
                accept='image/gif, image/jpeg, image/png'
                name='image'
                id='file'
                className='mt-2 mb-3 hidden'
                onChange={handleChange}
                />
                <p className='text-center mb-3'>
                  <label htmlFor="file" className='mt-2  cursor-pointer text-blue-400 p-1 border '>Select an image to share</label>
                </p>
                {
                  shareImage && (
                    <div className='flex justify-center'>
                        <img src={URL.createObjectURL(shareImage)} alt="image" className='h-40 w-[60%] m-2 '  />
                    </div>
                   
                  )
                }
              
                    </>
                  ) 

                }
                {

                assetArea === 'media' && 
                  (
                    <>
                    
                <div className='flex flex-col items-center mt-2'>
                  <input type="text"
                  placeholder='Please enter a video link'
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                  className='border border-gray-300 w-full pl-2 p-2 mt-2 mb-3'
                  />
                  {
                    videoLink &&
                    (
                      <div className='h-40 w-[60%] mt-2 mb-3 flex justify-center'>
                          <ReactPlayer  height={'10rem'} url={videoLink}  />
                      </div>
                       
                    )
                  }
                  
                </div>
                    </>
                  )
                }

          
              </div>
          </div>

          {/* below section */}
          <div className='flex justify-between '>
            <div className='flex gap-2'>

           
              <div className='flex gap-1 cursor-pointer'
              onClick={() => switchAssetArea('image')}
              >
                   { /* icon and text */}
          
                  <MdOutlinePermMedia className={`h-6 w-6 text-green-600  `} />
                      <h1>Image</h1>
               </div>
                <div className='flex gap-1 cursor-pointer'
                onClick={() => switchAssetArea('media')}
                >
                    <RiYoutubeLine className='h-6 w-6 text-orange-600' />
                  <h1>Video</h1>
              </div>
             </div>
             <div>
              {/* Post button */}
              <button className={`h-8 w-16 bg-blue-500 text-white text-[1.1rem] rounded-full  `}>Post</button>
             </div>
          </div>
        
         </div>
    </section>
     ) 
    }
    </>
  )
}

export default AddPost;