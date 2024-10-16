import { useEffect, useState } from "react";
import { getPost } from "../services/getPostData";
import { useSelector } from "react-redux";

export function usePosts () {
    const [post, setPost] = useState([]);
    const savedPost = useSelector((state) => state?.post?.savedPost);
    const showSavedItem = useSelector((state) => state?.post?.showSavedPost)


    useEffect(function () {
        async function fetchPost () {
        //     const res = await fetch(`http://localhost:8000/post`);
        //     const data = await res.json();
        //   //  console.log(data)
        const post = await getPost()
           setPost(post);
        }
        fetchPost()
      }, [post]);

      return {
        post, savedPost, showSavedItem
      }

}