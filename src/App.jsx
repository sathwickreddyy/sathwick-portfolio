import React from "react";
import Navbar from "./sections/Navbar.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";
import {Provider} from "react-redux";
import applicationStore from "./utilities/redux/applicationStore.jsx";
import PortfolioHero from "./sections/hero/PortfolioHero.jsx";

const App = () => {
    return (
        <Provider store={applicationStore}>
            <main className="max-w-10xl mx-auto">
                <Navbar/>
                {<PortfolioHero/>}
                <About/>
                <Experience/>
                <Projects/>
                <Clients/>
                <Contact/>
                <Footer/>
            </main>
        </Provider>
    );
};
export default App;
