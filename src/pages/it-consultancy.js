import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, Code, Zap, Database, Shield, Users, TrendingUp } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function ITConsultancyPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-darkBlue via-blue-950 to-zinc-950 text-white">
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-32 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="text-5xl md:text-6xl font-bold tracking-tight"
                    >
                        IT Consultancy & Engineering Services
                        <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#f39e3c] via-[#b45f18] to-[#a32222]">
                            Custom Solutions Built for You
                        </span>
                    </motion.h1>

                    <p className="mt-8 max-w-3xl mx-auto text-[#A8B0C2] text-lg leading-relaxed">
                        From bespoke web applications to complete infrastructure setup and strategic consulting, 
                        we deliver solutions tailored to your unique business needs. Our team combines deep technical expertise 
                        with real-world operational experience.
                    </p>

                    <div className="flex justify-center gap-4 mt-8">
                        <Button onClick={() => navigate('/contact')}>Start a Project</Button>
                        <a className='border border-white/20 text-white hover:bg-white/5 focus:ring-white/30 inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0E14] rounded-2xl px-6 py-3' href='/#products'>View Our Work <ArrowRight className="ml-2 w-4 h-4" /></a>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <h2 className="text-3xl font-semibold text-center mb-16">
                    Our Core Services
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { 
                            icon: Code, 
                            title: "Custom Web & Mobile Applications", 
                            description: "Bespoke web applications and mobile solutions built with modern frameworks and best practices. From MVPs to enterprise systems, we handle it all."
                        },
                        { 
                            icon: Database, 
                            title: "Infrastructure & Backend Systems", 
                            description: "Robust API development, database architecture, cloud infrastructure setup, and scalable backend systems that grow with your business."
                        },
                        { 
                            icon: Shield, 
                            title: "Security & DevOps", 
                            description: "Security-first infrastructure, CI/CD pipeline setup, automated deployment, monitoring, and compliance implementation."
                        },
                        { 
                            icon: Zap, 
                            title: "Automation & Integration", 
                            description: "Custom automation solutions, third-party system integration, API orchestration, and workflow optimization for your operations."
                        },
                        { 
                            icon: Users, 
                            title: "Technical Consulting & Strategy", 
                            description: "Strategic technology guidance, architecture design, technology stack recommendations, and technical team augmentation."
                        },
                        { 
                            icon: TrendingUp, 
                            title: "Digital Transformation", 
                            description: "Help modernize legacy systems, migrate to cloud platforms, implement new processes, and optimize existing infrastructure."
                        }
                    ].map((item, i) => (
                        <Card key={i} className="bg-white/5 border-white/10 hover:-translate-y-3 ease-in-out duration-300">
                            <CardContent className="p-6">
                                <item.icon className="w-8 h-8 text-[#f39e3c] mb-4" />
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-[#A8B0C2]">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Our Approach */}
            <section className="max-w-4xl mx-auto px-6 py-24">
                <h2 className="text-3xl font-semibold text-center mb-16">
                    How We Work
                </h2>

                <div className="space-y-6">
                    {[
                        {
                            step: "01",
                            title: "Discovery & Analysis",
                            description: "We deeply understand your business challenges, existing systems, and goals. This foundation guides all technical decisions."
                        },
                        {
                            step: "02",
                            title: "Strategic Planning",
                            description: "We propose clear, practical solutions with transparent timelines, costs, and expected outcomes. No surprises."
                        },
                        {
                            step: "03",
                            title: "Iterative Development",
                            description: "We build in phases with regular feedback loops. You see progress early and influence the direction throughout."
                        },
                        {
                            step: "04",
                            title: "Deployment & Support",
                            description: "Smooth rollout, team training, and ongoing support to ensure your solution succeeds long-term."
                        }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#f39e3c] to-[#b45f18] flex items-center justify-center font-bold text-lg">
                                    {item.step}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-[#A8B0C2]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technology Stack */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <h2 className="text-3xl font-semibold text-center mb-16">
                    Technologies We Work With
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-semibold mb-4">Frontend & Web</h3>
                            <p className="text-[#A8B0C2] mb-4">React, Next.js, Vue.js, TypeScript, Tailwind CSS, HTML5, CSS3, modern JavaScript frameworks and tools.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-semibold mb-4">Backend & APIs</h3>
                            <p className="text-[#A8B0C2] mb-4">Node.js, Python, Go, Java, REST APIs, GraphQL, microservices architecture, and serverless solutions.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-semibold mb-4">Databases & Data</h3>
                            <p className="text-[#A8B0C2] mb-4">PostgreSQL, MongoDB, Redis, Firebase, data pipelines, analytics, and scalable data architecture.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-semibold mb-4">Cloud & DevOps</h3>
                            <p className="text-[#A8B0C2] mb-4">AWS, Google Cloud, Azure, Docker, Kubernetes, CI/CD pipelines, and infrastructure automation.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="max-w-4xl mx-auto px-6 py-24 text-center">
                <h3 className="text-3xl font-semibold mb-6">
                    Why Partner With Us?
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Developer-First Culture",
                            description: "We solve problems like developers—practical, efficient, and maintainable."
                        },
                        {
                            title: "Transparent Communication",
                            description: "Clear updates, realistic timelines, and honest conversations about trade-offs and costs."
                        },
                        {
                            title: "Long-Term Partnership",
                            description: "We build solutions designed to evolve with your business, not become technical debt."
                        },
                        {
                            title: "Full Ownership",
                            description: "Your code, your infrastructure, your data. Complete transparency and control."
                        },
                        {
                            title: "Quality-Focused",
                            description: "We prioritize reliable, maintainable code and solid architecture over rushing to launch."
                        },
                        {
                            title: "Industry Experience",
                            description: "We've built systems across manufacturing, healthcare, enterprise software, and more."
                        }
                    ].map((item, i) => (
                        <div key={i}>
                            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                            <p className="text-[#A8B0C2] text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-6 py-12 text-center">
                <h3 className="text-3xl font-semibold mb-6">
                    Ready to Build Your Next Project?
                </h3>
                <p className="text-[#A8B0C2] mb-8 max-w-2xl mx-auto">
                    Whether you need a complete custom application, infrastructure setup, or strategic technical guidance—
                    let's talk about how we can help.
                </p>

                <Button onClick={() => navigate('/contact')}>
                    Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </section>

            <Footer />
        </div>
    );
}
