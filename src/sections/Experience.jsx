import React, {Suspense, useEffect, useRef, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../constants/index.js";
import {OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Developer from "../components/Developer.jsx";
import {motion, useAnimation, useInView} from "framer-motion";

const Experience = () => {
    const [animationName, setAnimationName] = useState("idle")

    const containerRef = useRef(null)
    const isInView = useInView(containerRef, {once: false})
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView]);

    return (
        <section className={"c-space my-20"} id={"experience"}>
            <div className={"w-full text-white-600"} ref={containerRef}>
                <motion.h3
                    className={"head-text"}
                    animate={mainControls}
                    initial={"hidden"}
                    variants={{
                        hidden: {opacity: 0, y: 75},
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    }}
                    transition={{delay: 0.3}}
                >Work Experience
                </motion.h3>

                <div className={"work-container"}>
                    <div
                        className={"work-canvas"}
                        animate={mainControls}
                        initial={"hidden"}
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visible: {
                                opacity: 1,
                                y: 0
                            }
                        }}
                        transition={{delay: 0.3,}}
                    >
                        <Canvas>
                            <ambientLight intensity={7}/>
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                            <directionalLight position={[10, 10, 10]} intensity={1}/>
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>
                            <Suspense fallback={<CanvasLoader/>}>
                                <Developer position-y={-3} scale={3} animationName={animationName}/>
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className={"work-content"}>
                        <div className={"sm:py-10 py-5 sm:px-5 px-2.5"}>
                            {workExperiences.map(
                                (
                                    {id, name, pos, duration, title, icon, animation}
                                ) => (
                                    <div
                                        key={id}
                                        className={"work-content_container group"}
                                        onClick={() => setAnimationName(animation.toLowerCase())}
                                        onPointerOver={() => setAnimationName(animation.toLowerCase())}
                                        onPointerOut={() => setAnimationName(animation.toLowerCase())}>
                                        <div
                                            className={
                                                "flex flex-col h-full justify-start items-center py-2"
                                            }
                                        >
                                            <div className={"work-content_logo"}>
                                                <img
                                                    src={icon}
                                                    alt={"logo"}
                                                    className={"w-full h-full rounded-xl"}
                                                />
                                            </div>
                                            <div className={"work-content_bar text-sm"}/>
                                        </div>
                                        <div className={"sm:p-5 px-2.5 py-5"}>
                                            <div
                                            >
                                                <p className={"font-bold text-white-800"}>{name}</p>
                                                <div className={"flex justify-between"}>
                                                    <p className={"text-sm mb-5 pr-1"}>{pos} </p>
                                                    <p className={"text-sm mb-5"}>{duration} </p>
                                                </div>
                                            </div>
                                            <p

                                                className={
                                                    "group-hover:text-white transition ease-in-out duration-500 sm:text-justify text-xs sm:text-sm"
                                                }
                                            >
                                                {title}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Experience;
