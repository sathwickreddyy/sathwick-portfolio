import {YOE} from "./about.js";

export const navLinks = [
    {
        id: 1,
        name: "Home",
        href: "#home",
    },
    {
        id: 2,
        name: "About",
        href: "#about",
    },
    {
        id: 3,
        name: "Work Experience",
        href: "#experience",
    },
    {
        id: 4,
        name: "Projects",
        href: "#projects",
    },
    {
        id: 5,
        name: "Contact",
        href: "#contact",
    },
    {
        id: 6,
        name: "Resume",
        href: "#resume",
    },
];

export const NAVBAR_HOME_LINK = "/";
export const NAVBAR_OWNER_NAME = "Sathwick Reddy - A Senior Software Developer";
export const NAVBAR_TOGGLE_IMAGE_OPEN = "/sathwick-portfolio/assets/menu.svg";
export const NAVBAR_TOGGLE_IMAGE_CLOSE = "/sathwick-portfolio/assets/close.svg";
export const NAVBAR_TOGGLE_ALT_TEXT = "toggle";


export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.05 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall
            ? [4, -5, 0]
            : isMobile
                ? [5, -5, 0]
                : isTablet
                    ? [5, -5, 0]
                    : [9, -5.5, 0],
        reactLogoPosition: isSmall
            ? [3, 3, 0]
            : isMobile
                ? [5, 4, 0]
                : isTablet
                    ? [5, 4, 0]
                    : [12, 3, 0],
        ringPosition: isSmall
            ? [-5, 7, 0]
            : isMobile
                ? [-10, 10, 0]
                : isTablet
                    ? [-12, 10, 0]
                    : [-24, 10, 0],
        targetPosition: isSmall
            ? [-5.5, -10, -10]
            : isMobile
                ? [-9, -10, -10]
                : isTablet
                    ? [-11, -7, -10]
                    : [-13, -13, -10],
    };
};


export const HERO_CONTENT = `I'm a Senior Software Developer with ${YOE} years of experience architecting and developing enterprise-scale systems at Morgan Stanley, Amazon, and Oracle. I specialize in building robust backend services, distributed systems, and intelligent AI-powered applications. Currently mastering advanced system design patterns while pioneering Gen AI solutions and autonomous agent development. My expertise spans cloud architecture, scalable backend development, and cutting-edge AI integration, with a proven track record of delivering high-impact solutions that drive business value.`
export const GITHUB_URL = "https://github.com/sathwickreddyy"
export const LINKEDIN_URL = "https://www.linkedin.com/in/sathwickreddy/"
export const INSTA_URL = "https://www.instagram.com/sathwickreddyy/"


// In constants/index.js or within Footer.jsx
export const LINKEDIN_ICON_SRC = "/sathwick-portfolio/assets/linkedin.png";
export const GITHUB_ICON_SRC = "/sathwick-portfolio/assets/github.svg";
export const INSTAGRAM_ICON_SRC = "/sathwick-portfolio/assets/instagram.svg";

