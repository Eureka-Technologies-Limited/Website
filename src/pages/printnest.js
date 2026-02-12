import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Cpu, Server, Layers, WifiOff } from "lucide-react";

export default function PrintNestPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-darkBlue via-blue-950 to-zinc-950 text-white">
            <Navbar />

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 py-28">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                    PrintNest
                </h1>
                <p className="mt-8 max-w-3xl text-[#A8B0C2] text-lg leading-relaxed">
                    PrintNest is a developer-first manufacturing control platform designed
                    for 3D printing and digital fabrication environments that demand
                    reliability, clarity, and long-term control.
                </p>
                <div className="mt-10 flex">
                    <Button
                        disabled
                        className="cursor-not-allowed opacity-80 flex items-center gap-2"
                    >
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                        In Active Development
                    </Button>

                </div>

                {/**
                <div className="mt-10 flex gap-4">
                    <Button>
                        Get Started <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline">
                        View Documentation
                    </Button>
                </div>
                 */}

            </section>

            {/* What is PrintNest */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-10">
                        <h2 className="text-3xl font-semibold mb-6">
                            What Is PrintNest?
                        </h2>
                        <p className="text-[#A8B0C2] leading-relaxed max-w-4xl">
                            PrintNest is not just a printer controller — it is a modular
                            manufacturing platform. It provides a stable core for connecting,
                            managing, and extending control over 3D printers and fabrication
                            devices, while remaining local-first and fully understandable by
                            the people who run it.
                        </p>
                    </CardContent>
                </Card>
            </section>

            {/* Core Principles */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <h2 className="text-3xl font-semibold mb-12 text-center">
                    Core Design Principles
                </h2>

                <div className="grid md:grid-cols-4 gap-8">
                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-6">
                            <WifiOff className="w-8 h-8 text-[#f39e3c] mb-4" />
                            <h3 className="font-semibold mb-2">Local-First</h3>
                            <p className="text-sm text-[#A8B0C2]">
                                PrintNest runs locally by default. No forced cloud, no external
                                dependencies to function.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-6">
                            <Layers className="w-8 h-8 text-[#f39e3c] mb-4" />
                            <h3 className="font-semibold mb-2">Modular Core</h3>
                            <p className="text-sm text-[#A8B0C2]">
                                Designed around clear interfaces so transports, UIs, and
                                behaviours can evolve independently.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-6">
                            <Cpu className="w-8 h-8 text-[#f39e3c] mb-4" />
                            <h3 className="font-semibold mb-2">Hardware-Aware</h3>
                            <p className="text-sm text-[#A8B0C2]">
                                Built with real printers in mind — serial devices, timeouts,
                                failures, and recovery.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-6">
                            <Server className="w-8 h-8 text-[#f39e3c] mb-4" />
                            <h3 className="font-semibold mb-2">Scales Naturally</h3>
                            <p className="text-sm text-[#A8B0C2]">
                                From one printer on a desk to multiple machines across a lab.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Use Cases */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <h2 className="text-3xl font-semibold mb-12">
                    Where PrintNest Fits Best
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Education",
                            text: "Reliable control for schools, colleges, and universities without fragile cloud dependencies."
                        },
                        {
                            title: "Makerspaces & Labs",
                            text: "Shared environments where clarity, control, and fault recovery matter."
                        },
                        {
                            title: "Internal Manufacturing",
                            text: "Small-scale production and prototyping workflows that need structure, not bloat."
                        }
                    ].map((item, i) => (
                        <Card key={i} className="bg-white/5 border-white/10 hover:-translate-y-3 ease-in-out duration-300">
                            <CardContent className="p-6">
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-[#A8B0C2]">{item.text}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Roadmap */}
            <section className="max-w-4xl mx-auto px-6 py-24 text-center">
                <h2 className="text-3xl font-semibold mb-6">
                    The Road Ahead
                </h2>
                <p className="text-[#A8B0C2] leading-relaxed">
                    PrintNest is actively evolving. Planned capabilities include multi-device
                    dashboards, real-time telemetry, user roles, and optional cloud
                    connectivity — all built on the same stable core.
                </p>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-6 py-24 text-center">
                <h2 className="text-3xl font-semibold mb-6">
                    Built for People Who Care About Systems
                </h2>
                <p className="text-[#A8B0C2] mb-8 max-w-2xl mx-auto">
                    PrintNest is for engineers, educators, and builders who want control,
                    understanding, and reliability — without compromise.
                </p>
                {/**
                <Button>
                    Start Exploring PrintNest <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                 */}
                <Button
                    disabled
                    className="cursor-not-allowed opacity-80 flex items-center gap-2"
                >
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    In Active Development
                </Button>


            </section>

            <Footer />
        </div>
    );
}
