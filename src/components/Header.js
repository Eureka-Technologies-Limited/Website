import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Bulb.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-transparent text-white w-full fixed top-0 z-50 shadow-md h-20 border-b-lighterBlue backdrop-blur-xl trasparency-DarkBlue">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 py-4">
                <div className='flex items-center space-x-4 cursor-pointer'>
                    <img src={Logo} alt="Eureka Logo" className="h-12 w-auto md:h-16" />
                    <h1 className="text-sm sm:text-base md:text-xl font-bold text-accent whitespace-nowrap">Eureka Technologies</h1>
                </div>

                <nav className="hidden md:flex">
                    <ul className="flex space-x-6 text-l">
                        <li><a href="#features" className="hover:text-[#F57A55]">Features</a></li>
                        <li><a href="#products" className="hover:text-[#F57A55]">Products</a></li>
                        <li><a href="#contact" className="hover:text-[#F57A55]">Contact</a></li>
                        <li><a href='' className=''>Dashboard</a></li>
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

            {/* Mobile menu */}

            {isOpen && (
                <div className="md:hidden bg-darkBlue w-full px-4 pb-4">
                    <ul className="flex flex-col space-y-4">
                        <li><a href="#features" className="hover:text-[#F57A55]" onClick={toggleMenu}>Features</a></li>
                        <li><a href="#products" className="hover:text-[#F57A55]" onClick={toggleMenu}>Products</a></li>
                        <li><a href="#resources" className="hover:text-[#F57A55]" onClick={toggleMenu}>Resources</a></li>
                        <li><a href="#contact" className="hover:text-[#F57A55]" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
