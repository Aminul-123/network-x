import React, { useEffect, useState } from 'react'
import Post from './Post';
import { getPost } from '../services/getPostData';

function AllPost() {
    const [post, setPost] = useState([]);

    useEffect(function () {
        async function fetchPost () {
        //     const res = await fetch(`http://localhost:8000/post`);
        //     const data = await res.json();
        //   //  console.log(data)
        const post = await getPost()
           setPost(post);
        }
        fetchPost()
      }, []);
  return (
    <div>
        {
            post.map((post) => (
                <Post post={post} key={post.id} />
            ))
        }
    </div>
  )
}

export default AllPost