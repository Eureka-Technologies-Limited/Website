import React from 'react'


function Nav() {
    return (
        <header className="bg-white shadow-sm">
            <div className="container flex items-center justify-between h-16">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-eureka flex items-center justify-center text-white font-semibold">ET</div>
                    <div>
                        <h1 className="text-lg font-bold">Eureka Technologies</h1>
                        <p className="text-xs text-slate-500">IT Consultancy & products</p>
                    </div>
                </div>
                <nav className="hidden md:flex gap-6 text-sm text-slate-700">
                    <a href="#products" className="hover:text-eureka">Products</a>
                    <a href="#about" className="hover:text-eureka">About</a>
                    <a href="#contact" className="hover:text-eureka">Contact</a>
                </nav>
                <a href="#contact" className="hidden sm:inline-block px-4 py-2 rounded-md bg-eureka text-white text-sm">Get in touch</a>
                <button className="md:hidden ml-2 text-slate-700">☰</button>
            </div>
        </header>
    )
}


function Hero() {
    return (
        <section className="bg-gradient-to-r from-eureka to-eureka-dark text-white">
            <div className="container py-20">
                <div className="max-w-3xl">
                    <h2 className="text-4xl sm:text-5xl font-extrabold">Eureka Technologies</h2>
                    <p className="mt-4 text-lg text-orange-100/90">We build engineering-grade software and tools for creators — PrintNest and LogBug are just the start.</p>


                    <div className="mt-8 flex gap-4">
                        <a href="#products" className="px-5 py-3 rounded-md bg-white text-eureka font-semibold">Explore Products</a>
                        <a href="#contact" className="px-5 py-3 rounded-md border border-white/30">Contact Sales</a>
                    </div>
                </div>
            </div>
        </section>
    )
}


function ProductCard({ title, desc, icon }) {
    return (
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100">{icon}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-slate-600 flex-1">{desc}</p>
            <div className="mt-4">
                <a href="#contact" className="text-eureka font-medium">Learn more →</a>
            </div>
        </div>
    )
}

function Products() {
    return (
        <section id="products" className="py-16">
            <div className="container">
                <h3 className="text-2xl font-bold">Our Products</h3>
                <p className="mt-2 text-slate-600 max-w-xl">Tools and platforms built by engineers, for engineers. Designed to be reliable, extensible and production-ready.</p>


                <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProductCard title="PrintNest" desc="Local-first network printer controller — manage multiple 3D printers, queues and prints." icon={<span>🖨️</span>} />
                    <ProductCard title="LogBug" desc="Robust logging & error tracking for embedded devices and web apps." icon={<span>🐞</span>} />
                    <ProductCard title="Custom Work" desc="Consulting, integrations and custom engineering projects for teams." icon={<span>⚙️</span>} />
                </div>
            </div>
        </section>
    )
}

function About() {
    return (
        <section id="about" className="bg-slate-50 py-12">
            <div className="container grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h4 className="text-2xl font-bold">About Eureka</h4>
                    <p className="mt-3 text-slate-600">Eureka Technologies is an IT consultancy and product studio focused on tooling for creators and engineers. We combine practical engineering with clean UX to ship reliable software.</p>
                    <ul className="mt-4 grid gap-2 text-slate-700">
                        <li>• Product design & development</li>
                        <li>• Embedded systems & IoT</li>
                        <li>• Cloud & local-first integrations</li>
                    </ul>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-eureka to-eureka-dark flex items-center justify-center text-white font-semibold">Eureka — Product Studio</div>
                </div>
            </div>
        </section>
    )
}


function Contact() {
    return (
        <section id="contact" className="py-12">
            <div className="container max-w-2xl">
                <h4 className="text-xl font-bold">Get in touch</h4>
                <p className="mt-2 text-slate-600">Tell us about your project or ask for product demos.</p>


                <form className="mt-6 grid gap-3">
                    <input className="p-3 border rounded-md" placeholder="Your name" />
                    <input className="p-3 border rounded-md" placeholder="Email" type="email" />
                    <textarea className="p-3 border rounded-md" rows="5" placeholder="Message"></textarea>
                    <div className="flex justify-end">
                        <button type="submit" className="px-5 py-3 rounded-md bg-eureka text-white">Send message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}


function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 py-8">
            <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                    <strong>Eureka Technologies</strong>
                    <div className="text-sm text-slate-400">© {new Date().getFullYear()}</div>
                </div>
                <div className="text-sm text-slate-400">Built with care — responsive by design</div>
            </div>
        </footer>
    )
}


export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Nav />
            <main className="flex-1">
                <Hero />
                <Products />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}