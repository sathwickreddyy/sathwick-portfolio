export const PROJECT_SECTION_ID = "projects";
export const PROJECT_SECTION_TITLE = "Projects";
export const PROJECT_SECTION_SPOTLIGHT_ALT_TEXT = "spotlight";
export const PROJECT_SECTION_LOGO_ALT_TEXT = "logo";
export const PROJECT_SECTION_ARROW_LEFT_IMAGE = "/sathwick-portfolio/assets/left-arrow.png";
export const PROJECT_SECTION_ARROW_LEFT_ALT_TEXT = "arrow-left";
export const PROJECT_SECTION_ARROW_RIGHT_IMAGE = "/sathwick-portfolio/assets/right-arrow.png";
export const PROJECT_SECTION_ARROW_RIGHT_ALT_TEXT = "arrow-right";
export const PROJECT_SECTION_ARROW_UP_IMAGE = "/sathwick-portfolio/assets/arrow-up.png"

export const myProjects = [
    {
        title: "React Cognito Auth - Enterprise Authentication Library",
        desc: "A production-grade reusable authentication library solution that reduces AWS Cognito integration time by 70% for web applications. Provides secure JWT management, pre-built UI flows, and error handling used by 15+ projects.",
        subdesc:
            "Published as an npm library with hundreds of weekly downloads, it handles thousands of monthly authentications across client projects. Built with TypeScript, AWS Amplify v6, and Tailwind CSS, offering 95% code reuse across authentication flows.",
        href: "https://www.npmjs.com/package/@sathwickreddyy/cognito-auth-library",
        texture: "/sathwick-portfolio/textures/project/cognito-auth-library.mp4",
        logo: "/sathwick-portfolio/assets/cognito-auth-library.png",
        logoStyle: {
            backgroundColor: "#2F3A4E",
            border: "0.2px solid #3B4559",
            boxShadow: "0px 0px 60px 0px #4A90E24D",
        },
        spotlight: "/sathwick-portfolio/assets/spotlight1.png",
        tags: [
            {
                id: 1,
                name: "AWS Amplify",
                path: "/sathwick-portfolio/assets/aws.png",
            },
            {
                id: 2,
                name: "React.js",
                path: "/sathwick-portfolio/assets/react.svg",
            },
            {
                id: 3,
                name: "TypeScript",
                path: "/sathwick-portfolio/assets/typescript.png",
            },
            {
                id: 4,
                name: "Tailwind CSS",
                path: "/sathwick-portfolio/assets/tailwindcss.png",
            },
        ],
    },
];
