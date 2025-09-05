import React from "react";
import PrintNest from "../assets/PrintNest.png";


const ProductData = [
    {
        title: "PrintNest",
        description: "A smart 3D printing manages tool that helps makers and teams monitor, control and optimse their prints from one place",
        image: PrintNest,
        link: "/PrintNest",
    },
    {
        title: "LogBug",
        description: "An physical assistant running Eureka AI, designed to help users within a home or workplace environment.",
        image: "/images/agents.png",
        link: "/LogBug",
    },
]

function Products() {
    console.log(ProductData);
    return (
        <section id='products' className="py-20 px-6 text-white">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Our <span className="text-[#F57A55]">Products</span>
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto">
                    Explore our innovative AI solutions designed to empower developers and businesses.
                </p>

            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {ProductData.map((product, index) => (
                    <div key={index} className="bg-[#10162a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <img src={product.image} alt={product.title} className="w-full h-38 object-cover rounded-2xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                        <p className="text-white/80 mb-4">{product.description}</p>
                        <a href={product.link} className="text-[#F57A55] hover:text-[#D33B41] font-semibold">Learn More</a>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Products;