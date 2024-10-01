import React from "react";
import {motion} from "framer-motion";
import {GITHUB_URL, HERO_CONTENT, INSTA_URL, LINKEDIN_URL} from "../../constants/index.js";
import Button from "../../components/Button.jsx";
import {TypeAnimation} from "react-type-animation";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa6";
import {PROFILE_PIC} from "../../constants/about.js";
import ShowResume from "../../utilities/ShowResume.jsx";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
});

const ContentSection = () => (
    <div className={"w-full lg:w-1/2"}>
        <div className={"flex flex-col items-center lg:items-start"}>
            <motion.div
                variants={container(0)}
                initial="hidden"
                animate={"visible"}
            >

                <div className={
                    "pb-8 text-6xl font-thin tracking-tight lg:mt-16 xl:text-7xl 3xl:text-10xl "
                }>
                    <p
                        className={
                            "text-xl px-2 text-white font-thin tracking-tight"
                        }
                    >
                        Hello <span className={"waving-hand"}>👋🏻</span>, I am
                    </p>
                    Sathwick Reddy
                </div>

            </motion.div>
            <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate={"visible"}
                className={
                    "bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl text-transparent"
                }
            >
                <span>
                    <TypeAnimation
                        sequence={[
                            'Senior Software Engineer',
                            1000,
                            'Senior Software Developer',
                            1000,
                            'Full Stack Developer',
                            1000,
                            "Machine Learning Enthusiast",
                            1000
                        ]}
                        wrapper="span"
                        speed={10}
                        repeat={Infinity}
                    />
                </span>
            </motion.span>
            <motion.p
                variants={container(1)}
                initial="hidden"
                animate={"visible"}
                className={"my-2 max-w-2xl py-6 font-light text-justify"}
            >
                {HERO_CONTENT}
            </motion.p>
            <motion.div variants={container(1.5)}
                        initial="hidden"
                        animate={"visible"}>
                <div className={"md:hidden flex justify-center"}>
                    <a href={"#resume"}><ShowResume /></a>
                </div>
                <div className={"my-10 flex items-center justify-center gap-4"}>
                    <p className={"font-semibold"}>Check out my </p>
                    <a href={LINKEDIN_URL} target={"_blank"}><FaLinkedin className={"w-8 h-8"}/></a>
                    <a href={GITHUB_URL} target={"_blank"}><FaGithub className={"w-8 h-8"}/></a>
                    <a href={INSTA_URL} target={"_blank"}><FaInstagram className={"w-8 h-8"}/></a>
                </div>
            </motion.div>
        </div>
    </div>
)

const ProfilePicSection = () => (
    <div className={"hidden md:block lg:w-1/2 lg:p-8"}>
        <div className={"flex justify-center h-full w-full"}>
            <motion.img
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, delay: 1.2}}
                src={PROFILE_PIC}
                alt={"profile_pic"}
            />
        </div>
    </div>
)

const PortfolioHeroSection = () => {
    return (
        <div className={"border-b border-neutral-900 pb-4 lg:mb-35 py-36 md:px-24"}>
            <div className={"flex flex-wrap"}>
                <ContentSection/>
                <ProfilePicSection/>
            </div>
            <div className={"hidden lg:block absolute bottom-7 left-0 right-0 w-full z-10 c-space"}>
                <a href={"#about"} className={"w-fit"}>
                    <Button
                        name={"Let's work together"}
                        isBeam
                        containerClass={"sm:w-fit w-full sm:min-w-96"}
                    ></Button>
                </a>
            </div>
        </div>
    );
};
export default PortfolioHeroSection;
