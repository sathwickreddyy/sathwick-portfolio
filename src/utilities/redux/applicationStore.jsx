import {configureStore} from "@reduxjs/toolkit";
import hireReducer from "./hireSlice.jsx"
import viewResumeReducer from "./viewResume.jsx";

const applicationStore = configureStore({
    reducer: {
        hire: hireReducer,
        resume: viewResumeReducer
    }
})

export default applicationStore