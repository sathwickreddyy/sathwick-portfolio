import React from "react";
import {GRID_COL_4_RESUME_PATH} from "../constants/about.js";

const PdfViewer = () => {
    return (
        <div>
            * <iframe src={GRID_COL_4_RESUME_PATH} className={"w-full sm:h-[532px] xl:h-[720px] h-full"}/>
        </div>
    );
};

export default PdfViewer;
