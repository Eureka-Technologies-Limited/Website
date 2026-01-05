import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import { motion } from "framer-motion";
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Product from '../components/ui/ProductCard';
import { ArrowRight, Cpu, Cloud, Shield, Laptop } from "lucide-react";
import Footer from '../components/footer';

import PrintNestLogo from '../assets/PrintNest.png'

export default function HomePage() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gradient-to-br from-darkBlue via-blue-950 to-zinc-950 text-white">
            <Navbar /> 

            {/* Hero */}
            <section className="relative overflow-hidden ">
                <div className="max-w-7xl mx-auto px-6 py-32 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="text-5xl md:text-6xl font-bold tracking-tight"
                    >
                        Engineering Systems That Matter
                        <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#f39e3c] via-[#b45f18] to-[#a32222]">
                            for Developers & Communities
                        </span>
                    </motion.h2>

                    <p className="mt-8 max-w-3xl mx-auto text-[#A8B0C2] text-lg leading-relaxed">
                        Eureka Technologies is built by developers, supporting developers and the people who rely on technology the most.
                        We focus on reliable, practical systems that empower teams and communities to innovate without unnecessary barriers.
                    </p>

                    <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[#7C8499]">
                        Innovate · Build · Share
                    </p>
                </div>
            </section>

            {/* Why Eureka */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { icon: Cpu, title: "Developer-First", text: "Built by developers who actively use the systems they create." },
                        { icon: Shield, title: "Reliable by Design", text: "Focused on stability, clarity, and long-term maintainability." },
                        { icon: Cloud, title: "Open Where It Matters", text: "Extensible systems with transparent architecture choices." },
                        { icon: Laptop, title: "Built to Scale", text: "From individuals to growing teams and organisations." }
                    ].map((item, i) => (
                        <Card key={i} className="bg-white/5 border-white/10 hover:-translate-y-3 ease-in-out duration-300">
                            <CardContent className="p-6">
                                <item.icon className="w-8 h-8 text-[#f39e3c] mb-4" />
                                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                <p className="text-sm text-[#A8B0C2]">{item.text}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Products */}
            <section className="max-w-7xl mx-auto px-6 py-24" id='products'>
                <h3 className="text-3xl font-semibold text-center mb-16">
                    Products & Engineering Services
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                    <Product
                        title="PrintNest"
                        description="A developer-first 3D printing and manufacturing platform focused on control, extensibility, and long-term reliability."
                        tag="Manufacturing · Automation"
                        location='/printnest'
                    />
                    <Product
                        title="LogBug"
                        description="Streamline bug tracking and team workflows with observability built in from the start."
                        tag="Observability · Administration"
                        location="https://thelogbug.com"
                    />
                    <Product
                        title="Custom Applications"
                        description="Bespoke software, internal tools, and automation systems built for real operational needs."
                        tag="Consultancy · Engineering"
                    />
                </div>
            </section>

            {/* Featured Product */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-3xl font-semibold mb-6">
                            PrintNest — Manufacturing Control, Done Properly
                        </h3>
                        <p className="text-[#A8B0C2] mb-6">
                            PrintNest is a local-first manufacturing control platform designed for reliability,
                            extensibility, and hands-on environments like labs, schools, andces. makerspa
                        </p>
                        <ul className="space-y-3 text-sm text-[#A8B0C2]">
                            <li>• Local-first and offline capable</li>
                            <li>• Modular Python core with modern UI</li>
                            <li>• Designed for multiple control systems</li>
                        </ul>

                        <Button className="mt-8" onClick={() => navigate('/printnest')}>
                            Explore PrintNest <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-[#7C8499]">
                        <img src={PrintNestLogo} alt="PrintNest Logo" className='rounded-2xl'/>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-[#b0b3b9]">
                        <img src="/logbug-screenshot.png" alt="LogBug Logo" className="rounded-2xl" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-6">
                            LogBug - Streamlined Bug Tracking & Team Workflows
                        </h3>
                        <p className="text-[#A8B0C2] mb-6">
                            LogBug is a developer-first bug tracking and team workflow platform
                            designed to improve collaboration and observability from the ground up.
                        </p>
                        <ul className="space-y-3 text-sm text-[#A8B0C2]">
                            <li>• Built for distributed teams</li>
                            <li>• All-in one application</li>
                            <li>• Intergreated workflows</li>
                        </ul>

                        <Button className="mt-8" onClick={() => {navigate('https://thelogbug.com')}}>
                            Explore LogBug <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="max-w-4xl mx-auto px-6 py-12 text-center">
                <h3 className="text-3xl font-semibold mb-6">
                    Our Philosophy
                </h3>
                <p className="text-[#A8B0C2] leading-relaxed">
                    At Eureka, we believe that technology should adapt to people and not the other way round.
                    While many platforms are providing powerful tools some fall short fitting into real world applications, workflows and individual needs.
                </p>
                <p className="text-[#A8B0C2] leading-relaxed pt-2">
                    We exist to bridge that gap between people and software.
                    Focusing on creating flexible and reliable solutions that solve problems at their core.
                    Weather it is creating custom applications, innovating within technical industries or designing systems that support complex projects beyond just software development.
                </p>
                <p className="text-[#A8B0C2] leading-relaxed pt-2">
                    Instead of forcing users into rigid systems, we build our technology around the users who use it to obtain the best feedback and continue innovating.
                    Being able to prioritise clarity, reliability and a purpose ensuring that every solution designed is designed to be practical and useful for the users who will use it.
                </p>
                <p className="text-[#A8B0C2] leading-relaxed pt-2">
                    Eureka is about building the right solutions - not the closest ones
                </p>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-6 py-12 text-center">
                <h3 className="text-3xl font-semibold mb-6">
                    Let’s Build Something Solid
                </h3>
                <p className="text-[#A8B0C2] mb-8 max-w-2xl mx-auto">
                    Whether you’re exploring our platforms or need custom engineering support,
                    we’d love to talk.
                </p>

                <div className="flex justify-center gap-4">
                    <Button variant="default" onClick={() => navigate('/contact')}>Contact Us</Button>
                    <a className='border border-white/20 text-white hover:bg-white/5 focus:ring-white/30 inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0E14] rounded-2xl px-6 py-3' href='#products'>View Products</a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
