import {createSlice} from "@reduxjs/toolkit";

const viewResume = createSlice({
    name: "resume",
    initialState: false,
    reducers: {
        showResume: (state, action) => {
            return true;
        },
        hideResume: (state, action) => {
            return false;
        }
    }
})


export const {showResume, hideResume} = viewResume.actions;
export default viewResume.reducer;