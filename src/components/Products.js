import React, { useState } from "react";
import PrintNest from "../assets/PrintNest.png";
import CommingSoon from "../assets/CommingSoonLogo.png";

const ProductData = [
    {
        title: "PrintNest",
        description:
            "A smart 3D printing management tool that helps makers and teams monitor, control, and optimise their prints from one place.",
        features: [
            "Live print monitoring",
            "Remote control",
            "Team collaboration",
            "Analytics dashboard",
        ],
        image: PrintNest,
        link: "#",
        comingSoon: false,
    },
    {
        title: "LogBug",
        description:
            "LogBug offers a centralized bug tracking system where all bugs can be reported, tracked, and managed efficiently.",
        features: ["Central bug tracking", "Developer assignments", "Progress reports"],
        image: CommingSoon,
        link: "#",
        comingSoon: true,
    },
];

function Products() {
    const [flippedIndex, setFlippedIndex] = useState(null);

    const toggleFlip = (index) => {
        setFlippedIndex(flippedIndex === index ? null : index);
    };

    return (
        <section id="products" className="py-20 px-6 text-white">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Our <span className="text-[#F57A55]">Products</span>
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto">
                    Explore our innovative solutions designed to empower developers, makers
                    and businesses.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {ProductData.map((product, index) => (
                    <div
                        key={index}
                        className="relative group h-80 w-full [perspective:1000px]"
                    >
                        <div
                            className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${flippedIndex === index ? "[transform:rotateY(180deg)]" : ""
                                }`}
                        >
                            {/* Front */}
                            <div className="absolute inset-0 bg-[#10162a] p-6 rounded-xl shadow-lg [backface-visibility:hidden] flex flex-col justify-between">
                                <div className="text-center">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-20 h-20 mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-semibold mb-2">
                                        {product.title}
                                    </h3>
                                    <p className="text-white/80">{product.description}</p>
                                </div>
                                <div className="text-center">
                                    <button
                                        onClick={() => toggleFlip(index)}
                                        className="mt-4 text-[#F57A55] hover:text-[#D33B41] font-semibold"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            {/* Back */}
                            <div className="absolute inset-0 bg-[#1a2238] p-6 rounded-xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
                                <div>
                                    <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                                    <ul className="list-disc list-inside text-white/80 space-y-1">
                                        {product.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="text-center">
                                    {product.comingSoon ? (
                                        <span className="text-white/50">Coming Soon</span>
                                    ) : (
                                        <a
                                            href={product.link}
                                            className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-[#F57A55] to-[#D33B41] rounded-lg text-white font-semibold hover:opacity-90"
                                        >
                                            Visit Page
                                        </a>
                                    )}
                                    <button
                                        onClick={() => toggleFlip(index)}
                                        className="block mt-2 text-sm text-white/70 hover:text-white"
                                    >
                                        ← Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;