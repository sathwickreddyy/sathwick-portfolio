import { lazy, Suspense } from "react";
import Navbar from "./sections/Navbar.jsx";
import PortfolioHero from "./sections/hero/PortfolioHero.jsx";
import { Provider } from "react-redux";
import applicationStore from "./utilities/redux/applicationStore.jsx";

const Clients = lazy(() => import("./sections/Clients.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));
const Footer = lazy(() => import("./sections/Footer.jsx"));
const Experience = lazy(() => import("./sections/Experience.jsx"));
const About = lazy(() => import("./sections/About.jsx"));
const Projects = lazy(() => import("./sections/Projects.jsx"));

const SectionFallback = () => (
    <div className="c-space my-20 text-white-500">Loading...</div>
);

// eslint-disable-next-line react/prop-types
const LazySection = ({ children }) => (
    <Suspense fallback={<SectionFallback />}>{children}</Suspense>
);

const App = () => {
    return (
        <Provider store={applicationStore}>
            <main className="max-w-10xl mx-auto">
                <Navbar />
                <PortfolioHero />

                <LazySection><About /></LazySection>
                <LazySection><Experience /></LazySection>
                <LazySection><Projects /></LazySection>
                <LazySection><Clients /></LazySection>
                <LazySection><Contact /></LazySection>
                <LazySection><Footer /></LazySection>
            </main>
        </Provider>
    );
};

export default App;