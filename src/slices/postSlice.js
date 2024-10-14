import { createSlice} from '@reduxjs/toolkit'
// import { getPost } from '../services/getPostData'

//LETS LEAVE THIS FOR LATER.
// export const fetchPostData = createAsyncThunk('post/fetchPostData', async function () {
//     // now got the solution - create service file -> then make a func getPost and -> fetch all the post using js fetch method return the data and here this is without using useEffect . -> call the function here -> return some value -> then create the reducer function as it is described in the docs.
//     const post = await getPost();
//     return post;
// })

const initialState = {
    description : '',
    image : {},
    username : ''
}

 
const postSlice = createSlice( {
    name : 'post',
    initialState : initialState,
    reducers : {
        addPost : {
            prepare(desc, img) {
                return {             
                    payload : {desc, img}
                }
            },
            reducer (state, action) {

                
                state.description = action.payload.desc;
                state.image = action.payload.img;
            }
        },
        user(state, action) {
            state.username = action.payload;
        }
    }
})

export const {addPost, user} = postSlice.actions;
export default postSlice.reducer;
