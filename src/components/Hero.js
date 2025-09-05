import React from 'react';
import HexagonPulse from './pulse';

function Hero() {
    return (
        <section className="py-20 px-6 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Inovate. Build. Share.
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 mb-8">
                        Empoweing developers and makers with tools designed to streamline creation, porblem solving and collabroeation.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4">
                        <a
                            href="/controller"
                            className="bg-[#F57A55] hover:bg-[#D33B41] text-white px-6 py-3 rounded-2xl text-lg transition text-center"
                        >
                            Get Started
                        </a>
                        <a
                            href="#learn"
                            className="border border-white/30 hover:border-white text-white px-6 py-3 rounded-2xl text-lg transition text-center"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="hidden md:flex md:w-1/2 justify-center">
                    <HexagonPulse />
                </div>
            </div>
        </section>
    );
}

export default Hero;
