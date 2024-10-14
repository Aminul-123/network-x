import {createSlice} from '@reduxjs/toolkit'
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
