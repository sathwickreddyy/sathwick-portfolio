import {createSlice} from "@reduxjs/toolkit";

const hireSlice = createSlice({
    name: "hire",
    initialState: {
        buttonClicked: null
    },
    reducers: {
        updateHireButtonClicked: (state, action) => {
            state.buttonClicked = action.payload;
        },
    },
})


export const {updateHireButtonClicked} = hireSlice.actions;
export default hireSlice.reducer;