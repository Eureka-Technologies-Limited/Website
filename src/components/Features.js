import React from 'react';

const features = [
    {
        title: 'Software that solves real problems',
        desc: 'Designing tools that cuct through complexity and help makers and developers focus on what matters - creating and innovating',
    },
    {
        title: 'Created with creators in mind',
        desc: 'From 3D printing to software debugging, our products are crafted for those who push boundaries, expeimentaly boldly and brining ideas to life',
    },
    {
        title: 'Sharing sparks progress',
        desc: 'Innovation thrives when ideas are shared. We create software that not only supports indidual makers but also encourages collaboration across communities',
    },
];

function Features() {
    return (
        <section id='features' className="text-center px-6 py-10 top-auto h-full">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Why use <span className="text-[#F57A55]">Eureka?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 mx-auto text-justify">
                Eureka Technologies builds practical, maker-focused tools that bridge the gap between software and creativity. Our produtcs empower developers and innovators to work smarter, solve real problems and share there creations with the world. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
                {features.map((feature, idx) => (
                    <div key={idx} className="p-6 rounded-2xl shadow-lg bg-lightBlue hover:bg-lighterBlue transition duration-300 hover:shadow-xl hover:transform hover:scale-105 hover:translate-y-3">
                        <h4 className="text-xl font-semibold mb-3 text-[#F57A55]">{feature.title}</h4>
                        <p className="text-white/80">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
