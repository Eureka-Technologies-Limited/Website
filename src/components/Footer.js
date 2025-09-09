import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaInstagram />, url: 'https://www.instagram.com/eurekatechnologiesltd/' },
        { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/company/eureka-technologies-limited/' },
        { icon: <FaGithub />, url: 'https://github.com/Eureka-Technologies-Limtied/' },
    ];


    return (
        <footer className="relative bg-lightBlue text-white w-full bottom-0">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-3/4 mx-auto px-4 py-8 space-y-4 md:space-y-0 md:space-x-8">
                
                <div className="flex flex-col items-center md:items-start w-full md:w-1/4">
                    <h2 className="text-2xl font-bold mb-4">Eureka Technologies</h2>
                    <p className="text-gray-300 mb-6 text-center md:text-left">
                        Empowering developers with AI solutions for a smarter future.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 mb-6 text-2xl">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.url} className="text-gray-300 hover:text-white p-2 rounded-full bg-lighterBlue shadow-darkBlue shadow-sm">
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/*
                <div className="flex flex-col w-full md:w-1/4">
                    <h3 className="text-lg font-semibold mb-2">Solutions</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-300 hover:text-white">AI Development</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Data Analytics</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Cloud Services</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">DevOps Tools</a></li>
                    </ul>
                </div>

                <div className="flex flex-col w-full md:w-1/4">
                    <h3 className="text-lg font-semibold mb-2">Resources</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Community Forum</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Support</a></li>
                    </ul>
                </div>
                */}

                <div className="flex flex-col w-full md:w-1/3">
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                            <FaLocationDot className="text-gray-300" />
                            <span className="text-gray-300">48 West George Street, Glasgow, Scotland, G2 1BP</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaEnvelope className="text-gray-300" />
                            <span className="text-gray-300"> hello@eureka-ai.co.uk </span>
                        </li>
                    </ul>   
                </div>
            </div>

            <div className="border-t border-gray-400 mt-10 pt-4 w-3/4 mx-auto flex flex-col md:flex-row justify-between text-sm text-gray-400 py-4 bottom-0">
                <p>© {currentYear} Eureka Technologies. All rights reserved.</p>
                {/*
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                    <a href="#" className="hover:text-white">Cookie Policy</a>
                </div>
                */}
            </div>
        </footer>
    );
}

export default Footer;
