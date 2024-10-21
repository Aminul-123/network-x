import { useEffect, useState } from "react";
import { getPost } from "../services/getPostData";
// import { useSelector } from "react-redux";

export function usePosts () {
    const [post, setPost] = useState([]);
    // const showSavedItem = useSelector((state) => state?.post?.showSavedPost)


    useEffect(function () {
        async function fetchPost () {
             const post = await getPost()
             setPost(post);
           //  console.log(post)
        }
        // infinite render prevented using post.length dependency
        fetchPost()
      }, [post.length]);

      return {
        post
      }

}
