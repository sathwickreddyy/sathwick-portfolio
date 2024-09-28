import React from 'react'
import PortfolioHeroSection from "./PortfolioHeroSection.jsx";

const PortfolioHero = () => {
    const BackgroundLight = () => (
        <div className={"fixed top-0 -z-10 h-full w-full"}>
            <div
                className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,119,198,0.3),rgba(255,255,255,0))]">
            </div>
        </div>
    )

    return (
        <section
            className={"lg:h-screen w-full overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:text-cyan-900"}
            id={"home"}>
            <BackgroundLight/>
            <div className={"flex items-center"}>
                <div className={"mx-auto px-8"}>
                    <PortfolioHeroSection/>
                </div>
            </div>

        </section>
    )
}
export default PortfolioHero

