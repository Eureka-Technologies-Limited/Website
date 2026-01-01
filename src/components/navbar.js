import React from "react";

import Logo from '../assets/EurekaLogoNoText.png';
import { href } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-lightBlue shadow-sm text-white">
            <div className="container flex items-center justify-between h-16">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-eureka flex items-center justify-center text-secondaryText font-semibold mx-3">
                        <img src={Logo} alt="Eureka Technologies" className="w-10 h-10 rounded-full"/>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">Eureka Technologies</h1>
                        <p className="text-xs text-slate-400">IT Consultancy</p>
                    </div>
                </div>
                <nav className="hidden md:flex gap-6 text-sm text-slate-400">
                    <a href="#products" className="hover:text-eureka">Products</a>
                    <a href="#about" className="hover:text-eureka">About</a>
                    <a href="#contact" className="hover:text-eureka">Contact</a>
                </nav>
                <a href="#contact" className="hidden sm:inline-block px-4 py-2 rounded-md bg-eureka text-white text-sm">Get in touch</a>
                <button className="md:hidden ml-2 text-slate-700">☰</button>
            </div>
        </nav>
    )
}

export default Navbar;
