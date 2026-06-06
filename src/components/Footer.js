import React from "react";
import { useNavigate } from "react-router-dom";
import { Mail, MapPin, Instagram } from "lucide-react";

export default function Footer() {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Eureka Technologies</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Enterprise solutions for service management and digital transformation.
                        </p>
                        <p className="text-cyan-400 text-xs font-semibold tracking-widest">
                            INNOVATE · BUILD · SHARE
                        </p>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Products</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <button
                                    onClick={() => navigate('/eureka-now')}
                                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                                >
                                    EurekaNow
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/')}
                                    className="text-slate-400 hover:text-purple-400 transition-colors"
                                >
                                    Eureka Network
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <button
                                    onClick={() => navigate('/eureka-consult')}
                                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                                >
                                    EurekaConsult
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="text-slate-400 hover:text-slate-300 transition-colors"
                                >
                                    Get in Touch
                                </button>
                            </li>
                            <li>
                                <a
                                    href="https://eureka-now-nine.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-slate-300 transition-colors"
                                >
                                    Live Demo
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-start gap-2">
                                <Mail className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                                <a href="mailto:info@eureka-technologies.co.uk" className="hover:text-cyan-400 transition-colors">
                                    info@eureka-technologies.co.uk
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                                <span>48 West George Street, Glasgow, G2 1BP, Scotland</span>
                            </li>
                        </ul>
                    </div>

                    {/* Company Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>Company No: SC836082</li>
                            <li>Registered in Scotland</li>
                            <li className="pt-2 border-t border-slate-700">
                                <a
                                    href="https://eureka-technologies.co.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    Visit Website →
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-700/50 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Copyright */}
                        <div className="text-xs text-slate-500">
                            © {currentYear} Eureka Technologies Limited. All rights reserved.
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-slate-600">Follow us:</span>
                            <button
                                onClick={() => window.open('https://www.instagram.com/eurekatechnologiesltd/', '_blank')}
                                className="text-slate-500 hover:text-cyan-400 transition-colors p-2"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Legal Links */}
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                            <button
                                className="hover:text-slate-300 transition-colors"
                                onClick={() => navigate('/legal', { state: { tab: 'Privacy Policy' } })}
                            >
                                Privacy Policy
                            </button>
                            <span>·</span>
                            <button
                                className="hover:text-slate-300 transition-colors"
                                onClick={() => navigate('/legal', { state: { tab: 'Terms of Service' } })}
                            >
                                Terms of Service
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}