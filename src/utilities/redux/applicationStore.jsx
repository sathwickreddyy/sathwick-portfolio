import {configureStore} from "@reduxjs/toolkit";
import viewResumeReducer from "./viewResume.jsx";

const applicationStore = configureStore({
    reducer: {
        resume: viewResumeReducer
    }
})

export default applicationStore