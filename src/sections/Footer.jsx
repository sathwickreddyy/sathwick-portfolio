import React from "react";
import {GITHUB_URL, INSTA_URL, LINKEDIN_URL} from "../constants/index.js";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer
            className={
                "c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"
            }
        >
            <div className={"text-white-500 flex gap-2"}>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className={"flex gap-3 items-center"}>
                <h2 className={"font-semibold text-stone-200"}>Connect with me: </h2>
                <div className={"social-icon"}>
                    <a
                        href={LINKEDIN_URL}
                        target={"_blank"}
                        rel={"noreferrer"}
                        className={"w-1/2 h-1/2"}
                    >
                        <img
                            src={"/assets/linkedin.png"}
                            alt={"github"}
                            className={"w-full h-full"}
                        />
                    </a>
                </div>
                <div className={"social-icon"}>
                    <a
                        href={GITHUB_URL}
                        target={"_blank"}
                        rel={"noreferrer"}
                        className={"w-1/2 h-1/2"}
                    >
                        <img
                            src={"/assets/github.svg"}
                            alt={"github"}
                            className={"w-full h-full"}
                        />
                    </a>
                </div>
                <div className={"social-icon"}>
                    <a
                        href={INSTA_URL}
                        target={"_blank"}
                        rel={"noreferrer"}
                        className={"w-1/2 h-1/2"}
                    >
                        <img
                            src={"/assets/instagram.svg"}
                            alt={"github"}
                            className={"w-full h-full"}
                        />
                    </a>
                </div>
            </div>
            <p className={"text-white-500"}>
                © {currentYear} Sathwick Reddy. All Rights Reserved
            </p>
        </footer>
    );
};
export default Footer;
