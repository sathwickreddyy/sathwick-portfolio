import React from "react";
import { GITHUB_URL, INSTA_URL, LINKEDIN_URL } from "../constants/index.js";
import { LINKEDIN_ICON_SRC, GITHUB_ICON_SRC, INSTAGRAM_ICON_SRC } from "../constants/index.js"; // Import image source constants

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3 items-center">
                <h2 className="font-semibold text-stone-200">Connect with me:</h2>
                <div className="social-icon">
                    <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="w-1/2 h-1/2">
                        <img src={LINKEDIN_ICON_SRC} alt="LinkedIn" className="w-full h-full" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="w-1/2 h-1/2">
                        <img src={GITHUB_ICON_SRC} alt="GitHub" className="w-full h-full" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href={INSTA_URL} target="_blank" rel="noreferrer" className="w-1/2 h-1/2">
                        <img src={INSTAGRAM_ICON_SRC} alt="Instagram" className="w-full h-full" />
                    </a>
                </div>
            </div>
            <p className="text-white-500">© {currentYear} Sathwick Reddy. All Rights Reserved</p>
        </footer>
    );
};

export default Footer;