import React from 'react';

const timelineData = [
    {
        year: 'Winter - 2023',
        title: 'Initial Idea',
        description: 'The concept was born: create practical tools for makers and developers.',
    },
    {
        year: 'Summer - 2024',
        title: 'PrintNest Alpha',
        description: 'Released the first alpha version of PrintNest for managing and monitoring 3D printing projects.',
    },
    {
        year: 'Spring - 2025',
        title: 'LogBug Beta',
        description: 'Introduced LogBug, a centralized bug tracking system to simplify issue reporting and management.',
    },
    {
        year: 'To be commenced',
        title: 'Official Product Launch',
        description: 'PrintNest and LogBug officially launched to the public, empowering makers and developers with reliable tools.',
    },
    {
        year: 'Future',
        title: 'Future Roadmap',
        description: 'Expanding the product suite with more tools for innovators — bridging software and making.',
    }
];


function InnovationTimeline() {
    return (
        <section className="relative py-20 px-6 text-white">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Innovation <span className="text-accent">Timeline</span>
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto">
                    Our journey of discovery and technological advancement continues to shape the future.
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#D33B41] to-[#F57A55] z-0 rounded-full" />

                <div className="flex flex-col space-y-0">
                    {timelineData.map((item, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`relative z-5 flex flex-col md:flex-row items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'
                                    }`}
                            >
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-[#0b0f1a] rounded-full shadow-md z-10" />

                                <div
                                    className={`w-full md:w-1/2 px-2 md:px-2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                                        }`}
                                >
                                    <div className="relative bg-[#10162a] p-6 rounded-lg shadow-lg animated-border">
                                        <h3 className="text-white/70 font-semibold text-lg">{item.year}</h3>
                                        <h4 className="text-[#F57A55] text-xl font-bold mt-1">{item.title}</h4>
                                        <p className="text-white/80 text-sm mt-2">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default InnovationTimeline;
