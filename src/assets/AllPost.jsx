import React from 'react'
import Post from './Post';
import { usePosts } from './usePosts';

function AllPost() {
  const {post, savedPost, showSavedItem} = usePosts()
    
    // here Post is reusable components for both SavedPost and Added Post.
  return (
    <div>

            {

            post.map((post) => (
                <Post post={post} key={post.id}  />
            ))
          }
    </div>
  )
}

export default AllPost