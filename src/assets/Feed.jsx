import React, { useState } from 'react'
import AddPost from './AddPost'
import Post from './Post'

function Feed() {
  const [text, setText] = useState('');
  return (
    <>
    <div className='h-full mt-4 lg:mt-0 w-full lg:absolute top-24 left-[27%] lg:w-[45%] ml-4 pr-4 mb-16
    flex flex-col '>
      {/* tomorrow will be working on addpost option  */}
         <AddPost text={text} setText={setText} />
         <Post/>
         <Post/>
         <Post/>
         <Post/>
    </div>
   
    </>
  )
}

export default Feed