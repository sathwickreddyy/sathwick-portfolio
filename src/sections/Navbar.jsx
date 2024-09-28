import React from "react";
import {
    NAVBAR_HOME_LINK,
    NAVBAR_OWNER_NAME, NAVBAR_TOGGLE_ALT_TEXT,
    NAVBAR_TOGGLE_IMAGE_CLOSE,
    NAVBAR_TOGGLE_IMAGE_OPEN,
    navLinks
} from "../constants/index.js";
import {useDispatch} from "react-redux";
import {hideResume, showResume} from "../utilities/redux/viewResume.jsx";

const NavItems = () => {
    const dispatch = useDispatch();
    const handleViewResume = () => {
        dispatch(showResume());
    };

    const handleHideResume = () => {
        dispatch(hideResume());
    };

    const SectionName = (name) => {
        return name === "Resume" ? (
            <button
                onClick={handleViewResume}
                className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            >
                <span
                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Resume
                </span>
            </button>
        ) : (
            <div onClick={handleHideResume}>{name}</div>
        );
    };

    return (
        <ul className="nav-ul">
            {navLinks.map(({id, href, name}) => (
                <li key={id}>
                    <a href={href} className={"nav-li_a"} onClick={() => {
                    }}>
                        {SectionName(name)}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <div>
            <header
                className={"fixed top-0 left-0 right-0 z-50 bg-black/2 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,119,198,0.3),rgba(255,255,255,0))] text-white"}
            >
                <div className={"max-w=7xl mx-auto"}>
                    <div
                        className={"flex justify-between items-center py-5 mx-auto c-space"}
                    >
                        <a
                            href={NAVBAR_HOME_LINK}
                            className={
                                "text-neutral-400 font-bold text-xl hover:text-white transition-colors"
                            }
                        >
                            {NAVBAR_OWNER_NAME}
                        </a>

                        <button onClick={toggleMenu}>
                            <img
                                src={isOpen ? NAVBAR_TOGGLE_IMAGE_CLOSE : NAVBAR_TOGGLE_IMAGE_OPEN}
                                alt={NAVBAR_TOGGLE_ALT_TEXT}
                                className={
                                    "w-6 h-6 text-neutral-400 hover:text-white focus:outline-none md:hidden flex"
                                }
                            />
                        </button>

                        <nav className={"hidden md:flex"}>
                            <NavItems/>
                        </nav>
                    </div>

                    <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                        <nav className={"p-6"}>
                            <NavItems/>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
