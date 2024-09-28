import React from "react";

const PdfViewer = () => {
    return (
        <div>
            * <iframe src="/pdfs/resume.pdf" className={"w-full sm:h-[532px] xl:h-[720px] h-full"}/>
        </div>
    );
};

export default PdfViewer;
