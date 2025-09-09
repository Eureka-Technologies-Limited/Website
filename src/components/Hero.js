import React from 'react';
import { useNavigate } from 'react-router-dom';

import HexagonPulse from './pulse';

function Hero() {
    const navigate = useNavigate();

    return (
        <section className="py-20 px-6 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Inovate. Build. Share.
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 mb-8">
                        Empowering developers and makers with tools designed to streamline creation, problem solving and collaboration.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4">
                        <text
                            onClick={() => navigate("/getting-started")}
                            className="bg-[#F57A55] hover:bg-[#D33B41] text-white px-6 py-3 rounded-2xl text-lg transition text-center"
                        >
                            Get Started
                        </text>
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
