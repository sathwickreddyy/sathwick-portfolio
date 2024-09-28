import Globe from "react-globe.gl";
import React, {useState} from "react";
import Button from "../components/Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import PdfViewer from "../utilities/PDFViewer.jsx";
import {hideResume, showResume} from "../utilities/redux/viewResume.jsx";
import {useMediaQuery} from "react-responsive";
import {PROFILE_PIC} from "../constants/index.js";

const GridColSpan1 = () => (
    <div className={"col-span-1 xl:row-span-3"}>
        <div className={"grid-container"}>
            <img
                src={PROFILE_PIC}
                alt={"grid-1"}
                className={"w-full sm:h-[276px] 2xl:h-[532px] h-fit object-contain"}
            />
            <div>
                <p className={"grid-headtext"}>Hi, I&apos;m Sathwick Reddy</p>
                <p className={"grid-subtext text-sm text-justify"}>
                    With four years of experience, I honed my skills in backend, cloud,
                    and frontend development, consistently delivering scalable solutions.
                    My expertise encompasses problem-solving, data structures, algorithms,
                    and system design.
                </p>
            </div>
        </div>
    </div>
);

const GridColSpan2 = () => (
    <div className={"col-span-1 xl:row-span-3"}>
        <div className={"grid-container flex items-center"}>
            <img
                src={"/assets/grid2.png"}
                alt={
                    "https://drive.google.com/file/d/1J1vvk6JylV0eavNWHMu84NPwzdID8U9W/view?usp=sharing"
                }
                className={"w-full sm:w-[276px] 2xl:h-[532px] h-fit object-contain"}
            />
            <div>
                <p className={"grid-headtext"}>Tech Stack</p>
                <p className={"grid-subtext text-justify"}>
                    I am proficient in a variety of programming languages and frameworks,
                    including Python, Java, Spring Boot, and Angular JS, TypeScript, React
                    JS, Tailwind CSS, Node JS, Additionally, I have significant experience
                    with big data technologies such as Hadoop and Apache Spark and am
                    adept at utilizing AWS cloud services. Have hands on experience in
                    machine learning domain.
                </p>
            </div>
        </div>
    </div>
);

const GridColSpan3 = () => {
    const [nightView, setNightView] = useState(true);
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
    const isMonitor = useMediaQuery({minWidth: 2000});
    const handleToggle = () => {
        setNightView(!nightView);
    };

    const getMode = () => {
        return nightView ? "night" : "day";
    };

    return (
        <div className={"col-span-1 xl:row-span-4"}>
            <div className={"grid-container"}>
                <div
                    className={
                        "rounded-3xl w-full, sm:h-3/4 h-fit flex justify-center items-center"
                    }
                >
                    <Globe
                        height={isMobile ? 336 : isTablet ? 400 : 512}
                        width={isMobile ? window.innerWidth / 1.6 : isTablet ? window.innerWidth / 3 : isMonitor ? 600 : 400}
                        backgroundColor={"rgba(0,0,0,0)"}
                        backgroundImageOpacitiy={0}
                        showAtmosphere
                        showGraticules
                        globeImageUrl={`//unpkg.com/three-globe/example/img/earth-${getMode()}.jpg`}
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        labelsData={[
                            {
                                lat: 12.97,
                                lng: 77.72,
                                text: "I'm Here",
                                color: "white",
                                size: 20,
                            },
                        ]}
                    />
                </div>
                <div>
                    <div className={"flex justify-center"}>
                        <label className="inline-flex items-center mb-5 cursor-pointer">
                            <input
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                onClick={handleToggle}
                            />
                            <div
                                className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {nightView ? "Night" : "Day Light"}
              </span>
                        </label>
                    </div>

                    <p className={"grid-headtext"}>
                        I work remotely across most timezones.
                    </p>
                    <p className={"grid-subtext"}>
                        I'm based in India, with remote work available
                    </p>
                    <a href={"#contact"} className={"w-fit"}>
                        <Button
                            name={"Contact Me"}
                            isBeam
                            containerClass={"w-full mt-10"}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

const GridColSpan4 = () => {
    const dispatch = useDispatch();
    const viewResume = useSelector(store => store.resume);


    const handleDownload = () => {
        const fileName = "SathwickReddyResume.pdf";
        const aTag = document.createElement("a");
        aTag.href = `/pdfs/resume.pdf`;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    const ResumeView = () => (
        <div className={"grid-container flex flex-col"}>
            <PdfViewer/>

            <div className={"mt-auto w-full"}>
                <div>
                    <div className={"mt-auto flex justify-between"}>
                        <div onClick={() => dispatch(hideResume())}>
                            <Button name={"Go Back"} isBeam
                                    containerClass={"w-full mt-10"}/>
                        </div>
                        <div onClick={handleDownload}>
                            <Button name={"Download Resume"} isBeam containerClass={"w-full mt-10"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const NormalView = () => (
        <div className={"grid-container flex flex-col "}>
            <div className={"flex xl:flex-row flex-col"}>
                <div className={"flex flex-col"}>
                    <img
                        src={"/assets/grid3.png"}
                        alt={"grid-4"}
                        className={"w-full sm:h-[266px] xl:h-[532px] h-fit object-contain"}
                    />
                </div>
            </div>

            <div className={"mt-auto w-full"}>
                <div>
                    <div className={"p-2 text-center"}>
                        <p className={"grid-headtext"}>My Passion for Coding</p>
                        <p className={"grid-subtext"}>
                            I love solving problems and building things through code. Coding
                            isn't just my profession - it's my passion.
                        </p>
                    </div>
                    <div className={"mt-auto"} onClick={() => dispatch(showResume())}>
                        <Button name={!viewResume ? "View Resume" : "Go Back"} isBeam
                                containerClass={"w-full mt-10"}/>
                    </div>
                </div>

            </div>

        </div>
    )

    return (
        <div className={"xl:col-span-2 xl:row-span-3"} id={"resume"}>
            {
                viewResume ? <ResumeView/> : <NormalView/>
            }
        </div>
    );
};

const GridColSpan5 = () => {
    const mailAddress = "sathwick@outlook.in";
    const mobileNumber = "+919666290002";
    const [hasCopied, setHasCopied] = useState(false);
    const [hasMobileCopied, setHasMobileCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(mailAddress);
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    const handleMobileNumberCopy = () => {
        navigator.clipboard.writeText(mobileNumber);
        setHasMobileCopied(true);
        setTimeout(() => {
            setHasMobileCopied(false);
        }, 2000);
    };

    return (
        <div className={"xl:col-span-1 xl:row-span-2"}>
            <div className={"grid-container"}>
                <img
                    src={"/assets/grid4.png"}
                    alt={"grid-4"}
                    className={"w-full sm:h-[276px] h-fit object-contain "}
                />

                <div className={"space-y-2"}>
                    <p className={"grid-subtext text-center"}>Contact me directly: </p>
                    <div className={"copy-container"} onClick={handleCopy}>
                        <img
                            src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                            alt={"copy"}
                        />
                        <p
                            className={
                                "lg:text-2xl md:text-xl font-medium text-gray_gradient"
                            }
                        >
                            {mailAddress} /
                        </p>
                    </div>
                    <div className={"copy-container"} onClick={handleMobileNumberCopy}>
                        <img
                            src={hasMobileCopied ? "assets/tick.svg" : "assets/copy.svg"}
                            alt={"copy-mobile"}
                        />
                        <p
                            className={
                                "lg:text-2xl md:text-xl font-medium text-gray_gradient"
                            }
                        >
                            {mobileNumber}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <section className={"c-space my-20"} id={"about"}>
            <div
                className={
                    "grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"
                }
            >
                <GridColSpan1/>
                <GridColSpan2/>
                <GridColSpan3/>
                <GridColSpan4/>
                <GridColSpan5/>
            </div>
        </section>
    );
};
export default About;
