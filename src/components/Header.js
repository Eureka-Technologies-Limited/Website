import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/EurekaLogoNoText.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Helper: if we’re not on homepage, go back to "/" then scroll
    const buildLink = (hash) => {
        return location.pathname === "/" ? hash : `/${hash}`;
    };

    return (
        <header className="bg-transparent text-white w-full fixed top-0 z-50 shadow-md h-20 border-b-lighterBlue backdrop-blur-xl trasparency-DarkBlue">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 py-4">
                {/* Logo + Brand */}
                <Link to="/" className="flex items-center space-x-3 cursor-pointer">
                    <img src={Logo} alt="Eureka Logo" className="h-10 w-10 md:h-10 rounded-full" />
                    <h1 className="text-lg sm:text-base md:text-xl font-bold text-accent whitespace-nowrap">
                        Eureka Technologies
                    </h1>
                </Link>
                {/*
                <nav className="hidden md:flex">
                    <ul className="flex space-x-6 text-l">
                        <li>
                            <Link to={buildLink("#features")} className="hover:text-[#F57A55]">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link to={buildLink("#products")} className="hover:text-[#F57A55]">
                                Products
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button
                    className="md:hidden text-white text-2xl focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-darkBlue w-full px-4 pb-4">
                    <ul className="flex flex-col space-y-4">
                        <li>
                            <Link to={buildLink("#features")} className="hover:text-[#F57A55]" onClick={toggleMenu}>
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link to={buildLink("#products")} className="hover:text-[#F57A55]" onClick={toggleMenu}>
                                Products
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
*/}
            </div>
        </header>
    );
}

export default Header;
