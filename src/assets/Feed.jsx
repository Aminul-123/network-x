import React, { useState } from 'react'
import AddPost from './AddPost'
import AllPost from './AllPost';
import { useSelector } from 'react-redux';
function Feed() {
  const [text, setText] = useState('');
  const showSavedItem = useSelector((state) => state?.post?.showSavedPost)
  return (
    <>
    <div className='h-full mt-4 lg:mt-0 w-full lg:absolute top-24 left-[27%] lg:w-[45%] ml-4 pr-4 mb-16
    flex flex-col '>
      {
        
          <>
          
        {!showSavedItem && 
             <AddPost text={text} setText={setText} />
        }
       
            <AllPost />
          </>
        
      }
    </div>
   
    </>
  )
}

export default Feed