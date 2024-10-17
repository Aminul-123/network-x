import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    openNetwork : false,
}
const networkSlice = createSlice({
    name : 'network',
    initialState,
    reducers : {
        openNetworkPage (state) {
            state.openNetwork = !state.openNetwork;
        },
    }
})

export const {openNetworkPage} = networkSlice.actions
export default networkSlice.reducer;