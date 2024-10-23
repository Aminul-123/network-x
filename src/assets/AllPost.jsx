import React from 'react'
import Post from './Post';
import { usePosts } from './usePosts';
import Loader from './Loader';

function AllPost() {
  const {post, isLoading} = usePosts()
    
    // here Post is reusable components for both SavedPost and Added Post.
  return (
    <div>

            {
              isLoading ? (
                  <Loader dataName={'post'} />
              ) : (

                
                post.map((post) => (
                  <Post post={post} key={post.id}  />
                ))
              )
          }
    </div>
  )
}

export default AllPost