import React, { useEffect, useState } from 'react'
import Post from './Post';

function AllPost() {
    const [post, setPost] = useState([]);

    useEffect(function () {
        async function fetchPost () {
            const res = await fetch(`http://localhost:8000/post`);
            const data = await res.json();
            console.log(data)
           setPost(data);
        }
        fetchPost()
      }, []);
  return (
    <div>
        {
            post.map((post) => (
                <Post post={post} key={post.name} />
            ))
        }
    </div>
  )
}

export default AllPost