import React from "react";
import { useNavigate } from "react-router-dom";

function GettingStarted() {
    const navigate = useNavigate();

    return (
        <section
            id="getting-started"
            className="mx-auto w-full md:w-4/5 lg:w-2/3 my-6 md:my-10 px-4 sm:px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#1D3557] via-[#233B77] to-[#2E4B8C] rounded-2xl shadow-lg text-white"
        >
            <div className="mb-6 text-center md:mb-0 md:text-left">
                <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                    Ready to join the Eureka Network?
                </h2>
                <p className="max-w-xl text-sm text-gray-300 md:text-base">
                    Join our community of innovators and developers. Whether you're looking to build, collaborate, or simply explore, the Eureka Network is your gateway to the future of technology. Sign up today and start your journey with us!
                </p>
            </div>

            <div className="flex w-full justify-center md:w-auto md:justify-end">
                <button
                    onClick={() => navigate("/getting-started")}
                    className="px-6 py-3 font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-[#F57A55] to-[#D33B41] transition duration-300 hover:opacity-90"
                >
                    Get Started
                </button>
            </div>
        </section>
    );
}

export default GettingStarted;
