import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowRight, Layers, Server, Cpu } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function PlatformsPage() {
    const navigate = useNavigate()
    return (
        
        <div className="min-h-screen bg-gradient-to-br from-darkBlue via-blue-950 to-zinc-950 text-white">
            <Navbar />

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                    Our Platforms
                </h1>
                <p className="mt-8 max-w-3xl mx-auto text-[#A8B0C2] text-lg leading-relaxed">
                    Eureka platforms are purpose-built systems designed to solve real
                    engineering problems — modular, reliable, and built to grow with the
                    people who use them.
                </p>
            </section>

            {/* What is a Platform */}
            <section className="max-w-5xl mx-auto px-6 py-12">
                <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-8 text-center">
                        <Layers className="w-10 h-10 text-[#f39e3c] mx-auto mb-6" />
                        <h2 className="text-2xl font-semibold mb-4">
                            What We Mean by “Platform”
                        </h2>
                        <p className="text-[#A8B0C2] leading-relaxed">
                            A platform at Eureka is not just an app — it’s a foundation.
                            Each platform is designed as a core system that can be extended,
                            integrated, and adapted to different environments without
                            compromising reliability or clarity.
                        </p>
                    </CardContent>
                </Card>
            </section>

            {/* Platforms List */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-10">
                    {/* PrintNest */}
                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-8">
                            <Cpu className="w-8 h-8 text-[#f39e3c] mb-4" />
                            <h3 className="text-2xl font-semibold mb-4">PrintNest</h3>
                            <p className="text-[#A8B0C2] mb-6">
                                PrintNest is a developer-first manufacturing control platform
                                designed for 3D printing and digital fabrication environments.
                                It prioritises local control, extensibility, and long-term
                                maintainability.
                            </p>
                            <ul className="space-y-2 text-sm text-[#A8B0C2] mb-6">
                                <li>• Local-first & offline capable</li>
                                <li>• Modular Python-based core</li>
                                <li>• Built for labs, schools, and makerspaces</li>
                                <li>• Designed to scale into fleet management</li>
                            </ul>

                            <Button  onClick={() => navigate('/printnest')}>
                                Explore PrintNest <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </CardContent>
                    </Card>

                    {/* LogBug */}
                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-8">
                            <Server className="w-8 h-8 text-[#f39e3c] mb-4" />
                            <h3 className="text-2xl font-semibold mb-4">LogBug</h3>
                            <p className="text-[#A8B0C2] mb-6">
                                LogBug is an observability and workflow platform designed to help
                                teams track issues, behaviours, and operational data across
                                projects — without unnecessary complexity.
                            </p>
                            <ul className="space-y-2 text-sm text-[#A8B0C2] mb-6">
                                <li>• Structured logging & bug tracking</li>
                                <li>• Built for distributed teams</li>
                                <li>• Focus on clarity over noise</li>
                                <li>• Designed for internal and client-facing workflows</li>
                            </ul>

                            <Button  onClick={() => navigate('/logbug')}>
                                Explore LogBug <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Philosophy */}
            <section className="max-w-4xl mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-semibold mb-6">
                    Built with Engineering Principles
                </h2>
                <p className="text-[#A8B0C2] leading-relaxed">
                    Every platform we build follows the same principles: clarity over
                    cleverness, extensibility over lock-in, and reliability over hype.
                    These systems are designed to be understood, trusted, and evolved —
                    not replaced.
                </p>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-semibold mb-6">
                    Looking for Something Custom?
                </h2>
                <p className="text-[#A8B0C2] mb-8 max-w-2xl mx-auto">
                    If none of our platforms fit your exact needs, we also design and build
                    bespoke systems using the same foundations and engineering discipline.
                </p>

                <Button onClick={() => navigate('/contact')}>
                    Talk to Us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </section>

            <Footer />
        </div>
    );
}
