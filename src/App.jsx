import React, { lazy, Suspense } from "react";
import Navbar from "./sections/Navbar.jsx";
import PortfolioHero from "./sections/hero/PortfolioHero.jsx";
import { Provider } from "react-redux";
import applicationStore from "./utilities/redux/applicationStore.jsx";

// Lazy load components that are not needed immediately
const Clients = lazy(() => import("./sections/Clients.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));
const Footer = lazy(() => import("./sections/Footer.jsx"));
const Experience = lazy(() => import("./sections/Experience.jsx"));
const About = lazy(() => import("./sections/About.jsx"));
const Projects = lazy(() => import("./sections/Projects.jsx"));

const App = () => {
    return (
        <Provider store={applicationStore}>
            <main className="max-w-10xl mx-auto">
                <Navbar />
                <PortfolioHero />

                {/* Wrap lazy-loaded components with Suspense */}
                <Suspense fallback={<div>Loading...</div>}>
                    <About />
                    <Experience />
                    <Projects />
                    <Clients />
                    <Contact />
                    <Footer />
                </Suspense>
            </main>
        </Provider>
    );
};

export default App;