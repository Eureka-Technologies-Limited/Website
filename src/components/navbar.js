import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/EurekatTechnologiesWhiteLogo.png';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <img
                        src={logo}
                        alt="Eureka Technologies Logo"
                        className="h-8 w-auto"
                    />
                    <h1 className="text-xl font-semibold tracking-wide">
                        Eureka Technologies
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
                    <a
                        href="/"
                        className="border-b-2 border-transparent hover:border-blue-600 hover:text-white transition-colors duration-200"
                    >
                        Products
                    </a>
                    <button
                        onClick={() => navigate('/eureka-consult')}
                        className="border-b-2 border-transparent hover:border-blue-600 hover:text-white transition-colors duration-200"
                    >
                        EurekaConsult
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="border-b-2 border-transparent hover:border-blue-600 hover:text-white transition-colors duration-200"
                    >
                        Contact
                    </button>
                </nav>
            </div>
        </header>
    );
}
