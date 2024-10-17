import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post';
import GoBackBtn from './GoBackBtn';

function SavedPost() {
    const savedPost = useSelector((state) => state?.post?.savedPost);

  return (
    <div className='main-feed '>
       <GoBackBtn />
          {
                savedPost.map((post) => (
                    <Post post={post}  key={post.id}/>
                ))
            }
    </div>
  )
}

export default SavedPost