import { createSlice} from '@reduxjs/toolkit'
// import { getPost } from '../services/getPostData'

//LETS LEAVE THIS FOR LATER.
// export const fetchPostData = createAsyncThunk('post/fetchPostData', async function () {
//     // now got the solution - create service file -> then make a func getPost and -> fetch all the post using js fetch method return the data and here this is without using useEffect . -> call the function here -> return some value -> then create the reducer function as it is described in the docs.
//     const post = await getPost();
//     return post;
// })

const initialState = {
    userImg : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMEX27vXd200_A8a9VpCPBUlxfDf4BW6Wq-w&s',
    username : '',
    savedPost : [],
    showSavedPost : false,
}

 
const postSlice = createSlice( {
    name : 'post',
    initialState : initialState,
    reducers : {
        updateProfile : {
            //not this
            prepare(name, img) {
                return {             
                    payload : {name, img}
                }
            },
            reducer (state, action) {
              state.userImg = action.payload.img;
              state.username = action.payload.name;
            }
        },
        user(state, action) {
            state.username = action.payload;
        },
        savePost(state, action) {
            // payload will be object containing post details
            state.savedPost.push(action.payload);
        },
        showSavedItem (state) {
            state.showSavedPost = !state.showSavedPost;
        },
        removePost (state, action) {
            // payload will be the id of item which we want to remove from saved List
         state.savedPost =   state.savedPost.filter((item) => item.id !== action.payload);
        },
        
    }
})

export const {updateProfile, user, savePost, showSavedItem, removePost} = postSlice.actions;
export default postSlice.reducer;
