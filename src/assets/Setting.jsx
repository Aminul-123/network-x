import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePost, savePost } from "../slices/postSlice";
import { createPost, deletePost } from "../services/getPostData";

function Setting({ post }) {
  //TOMMOROW WE WILL BE WORKING ON SAVE POST BTN , POST WILL BE SAVED IN REDUX STORE POST=[],
  // LATER ON WE WILL SHOW UP THESE POST WHEN IN MY ITEMS BTN IS CLICKED.
  const dispatch = useDispatch();
  const userName = useSelector((state) => state?.post?.username);

  const isSaved = useSelector((state) =>
    state?.post?.savedPost.find((item) => item.id === post.id)
  );

  function handleSavePost() {
    dispatch(savePost(post));
  }
  function handleRemoveFromSaveList() {
    dispatch(removePost(post.id));
  }
  async function handleDeletePost() {
    await deletePost(post.id);
    console.log("post deleted successfully");
  }
 async function handleRepost () {
    const repost = {
        id : crypto.randomUUID(), 
        name : userName, // name is username
        date_created : new Date().toDateString(),
        heading : post.heading || '',
        description : post.description,
        imageUrl : post.imageUrl,
        likes : 0,
        comments : 0
    }
    await createPost(repost);
  }
  return (
    <div className="relative right-40">
      <div className="w-40 p-2 bg-gray-100 border border-grey-700 shadow-md shadow-gray-500 absolute ">
        <ul>
          <li className="list-style">
            {isSaved ? (
              <p onClick={handleRemoveFromSaveList}>Remove</p>
            ) : (
              <p onClick={handleSavePost}>Save Post</p>
            )}
          </li>
          <li className="list-style"
          onClick={handleRepost}
          >Repost</li>
          <li className="list-style" onClick={handleDeletePost}>
            Delete Post
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Setting;
