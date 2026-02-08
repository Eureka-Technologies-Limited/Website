import React from "react";
import { Link } from "react-router-dom";
import printnest from '../pages/printnest';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#05070C]">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
                {/* Company */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Eureka Technologies</h4>
                    <p className="text-[#A8B0C2] leading-relaxed">
                        Engineering reliable systems for developers, makers, and organisations.
                        Built with care, clarity, and long-term thinking.
                    </p>
                </div>


                {/* Products */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Products</h4>
                    <ul className="space-y-2 text-[#A8B0C2]">
                        <li><Link to="/printnest">PrintNest</Link></li>
                        <li><Link to="/logbug">LogBug</Link></li>
                        <li><Link to="/contact">Custom Applications</Link></li>
                    </ul>
                </div>


                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <ul className="space-y-2 text-[#A8B0C2]">
                        <li>Email: <a href="mailto:info@eureka-technologies.co.uk" className="text-[#5EEAD4] hover:underline">info@eureka-technologies.co.uk</a></li>
                        <li>Website: <a href="https://eureka-technologies.co.uk" className="text-[#5EEAD4] hover:underline">eureka-technologies.co.uk</a></li>
                        <li>Location: 48 West George Street, Glasgow, G2 1BP, Scotland</li>
                    </ul>
                </div>


                {/* Legal */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2 text-[#A8B0C2]">
                        <li>Company No: SC836082</li>
                        <li>Registered in Scotland</li>
                        <li>All rights reserved</li>
                    </ul>
                </div>
            </div>


            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-xs text-[#7C8499]">
                    <span>© {new Date().getFullYear()} Eureka Technologies</span>
                    <span>Innovate · Build · Share</span>
                </div>
            </div>
        </footer>
    );
}