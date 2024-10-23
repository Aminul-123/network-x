import { useEffect, useState } from "react";
import { getPost } from "../services/getPostData";
// import { useSelector } from "react-redux";


export function usePosts () {
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    // const showSavedItem = useSelector((state) => state?.post?.showSavedPost)


    useEffect(function () {
        async function fetchPost () {
          try {

            setIsLoading(true)
            const post = await getPost()
            if (!post.length) throw new Error ('NO POST DATA PRESENT');
             setPost(post);
             setIsLoading(false)
             //  console.log(post)
            }
            catch (err) {
              console.log(err)
            }
        }
        // infinite render prevented using post.length dependency
        fetchPost()
      }, [post.length]);

      return {
        post, isLoading
      }

}
