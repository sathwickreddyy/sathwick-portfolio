import React, {Suspense} from "react";
import {myProjects} from "../constants/projects.js";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";
import {
    PROJECT_SECTION_ARROW_LEFT_ALT_TEXT,
    PROJECT_SECTION_ARROW_LEFT_IMAGE,
    PROJECT_SECTION_ARROW_RIGHT_ALT_TEXT,
    PROJECT_SECTION_ARROW_RIGHT_IMAGE,
    PROJECT_SECTION_ARROW_UP_IMAGE,
    PROJECT_SECTION_ID,
    PROJECT_SECTION_LOGO_ALT_TEXT,
    PROJECT_SECTION_SPOTLIGHT_ALT_TEXT,
    PROJECT_SECTION_TITLE
} from "../constants/projects.js";

const projectsCount = myProjects.length;

// eslint-disable-next-line react/prop-types
const DisplayTags = ({currentProject}) => (
    <div className={"flex items-center justify-between flex-wrap"}>
        <div className={"flex items-center gap-3"}>
            {/* eslint-disable-next-line react/prop-types */}
            {currentProject.tags.map((tag, index) => (
                <div key={index} className={"tech-logo"}>
                    <img src={tag.path} alt={tag.name}/>
                </div>
            ))}
        </div>

        <a
            className={"flex items-center gap-2 cursor-pointer text-white-600"}
            target={"_blank"} // to open project in new tab
            rel={"noreferrer"}
            href={currentProject.href}
        >
            <p>Check Live Site</p>
            <img src={PROJECT_SECTION_ARROW_UP_IMAGE} alt={"arrow-up"} className={"w-3 h-3"}/>
        </a>
    </div>
);

// eslint-disable-next-line react/prop-types
const ProjectCanvasDisplay = ({currentProject}) => (
    <div
        className={"border border-black-300 bg-black-200 rounded-lg h-96 md:h-full"}
    >
        <Canvas>
            <ambientLight intensity={Math.PI}/>
            <directionalLight position={[10, 10, 10]}/>
            <Center>
                <Suspense fallback={<CanvasLoader/>}>
                    <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                        <DemoComputer texture={currentProject.texture}/>
                    </group>
                </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
        </Canvas>
    </div>
);

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = React.useState(0);
    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? projectsCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectsCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    return (
        <section className={"c-space my-20"} id={PROJECT_SECTION_ID}>
            <p className={"head-text"}>{PROJECT_SECTION_TITLE}</p>
            <div className={"grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full"}>
                <div
                    className={
                        "flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200"
                    }
                >
                    <div className={"absolute top-0 right-0"}>
                        <img
                            src={currentProject.spotlight}
                            alt={PROJECT_SECTION_SPOTLIGHT_ALT_TEXT}
                            className={"w-full h-96 object-cover rounded-xl"}
                        />
                    </div>

                    <div
                        className={"p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"}
                        style={currentProject.logoStyle}
                    >
                        <img
                            src={currentProject.logo}
                            alt={PROJECT_SECTION_LOGO_ALT_TEXT}
                            className={"w-10 h-10 shadow-sm"}
                        />
                    </div>

                    <div className={"flex flex-col gap-5 text-white-600 my-5"}>
                        <p className={"text-white text-2xl font-semibold animatedText"}>
                            {currentProject.title}
                        </p>
                        <p className={"animatedText"}>{currentProject.desc}</p>
                        <p className={"animatedText"}>{currentProject.subdesc}</p>
                    </div>

                    <DisplayTags currentProject={currentProject}/>

                    <div className={"flex justify-between items-center mt-7"}>
                        <button
                            className={"arrow-btn"}
                            onClick={() => handleNavigation("previous")}
                        >
                            <img
                                src={PROJECT_SECTION_ARROW_LEFT_IMAGE}
                                className={"w-4 h-4"}
                                alt={PROJECT_SECTION_ARROW_LEFT_ALT_TEXT}
                            />
                        </button>

                        <button
                            className={"arrow-btn"}
                            onClick={() => handleNavigation("next")}
                        >
                            <img
                                src={PROJECT_SECTION_ARROW_RIGHT_IMAGE}
                                className={"w-4 h-4"}
                                alt={PROJECT_SECTION_ARROW_RIGHT_ALT_TEXT}
                            />
                        </button>
                    </div>
                </div>

                <ProjectCanvasDisplay currentProject={currentProject}/>
            </div>
        </section>
    );
};
export default Projects;
