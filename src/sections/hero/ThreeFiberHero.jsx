import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import CanvasLoader from "../../components/CanvasLoader.jsx";
import HackerRoom from "../../components/HackerRoom.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../../constants/index.js";
import Target from "../../components/Target.jsx";
import AmazonLogo from "../../components/AmazonLogo.jsx";
import Cube from "../../components/Cube.jsx";
import Rings from "../../components/Rings.jsx";
import HeroCamera from "../../components/HeroCamera.jsx";
import Button from "../../components/Button.jsx";


export const AnimatedView = () => {
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
    const isSmall = useMediaQuery({maxWidth: 440});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <div className={"w-full h-full absolute inset-0"}>
            {/*<Leva />*/}
            <Canvas className={"w-full h-full"}>
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom
                            // position={[
                            //   controls.positionX,
                            //   controls.positionY,
                            //   controls.positionZ,
                            // ]}
                            // rotation={[
                            //   controls.rotationX,
                            //   controls.rotationY,
                            //   controls.rotationZ,
                            // ]}
                            // scale={[controls.scale, controls.scale, controls.scale]}
                            position={sizes.deskPosition}
                            rotation={[0, -Math.PI, 0]}
                            scale={sizes.deskScale}
                        />
                    </HeroCamera>
                    <group>
                        <Target position={sizes.targetPosition}/>
                        <AmazonLogo position={sizes.reactLogoPosition}/>
                        <Cube position={sizes.cubePosition}/>
                        <Rings position={sizes.ringPosition}/>
                    </group>

                    <ambientLight intensity={1}/>
                    <directionalLight position={[10, 10, 10]}/>
                </Suspense>
            </Canvas>
        </div>
    )
}
const ThreeFiberHero = () => {
    return (
        <section className={"min-h-screen w-full flex flex-col relative"} id={"home"}>
            <div
                className={"w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3"}
            >
                <p
                    className={
                        "sm:text-3xl text-2xl font-medium text-white text-center font-generalsans"
                    }
                >
                    Hello <span className={"waving-hand"}>👋🏻</span> , I am Sathwick Reddy
                </p>
                <p className={"hero_tag text-gray_gradient"}>
                    @ Senior Software Engineer
                </p>
            </div>

            <AnimatedView/>

            <div className={"absolute bottom-7 left-0 right-0 w-full z-10 c-space"}>
                <a href={"#about"} className={"w-fit"}>
                    <Button
                        name={"Let's work together"}
                        isBeam
                        containerClass={"sm:w-fit w-full sm:min-w-96"}
                    ></Button>
                </a>
            </div>
        </section>
    );
};


export default ThreeFiberHero;
