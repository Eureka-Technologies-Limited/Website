import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";

import Header from "../components/Header";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key present:", !!supabaseAnonKey);


const supabase = createClient(supabaseUrl, supabaseAnonKey);

const RegisterInterest = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error } = await supabase.from("interests").insert([formData]);

        if (error) {
            console.error("Error saving interest:", error);
            setStatus("error");
        } else {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] px-6">
            <Header />
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-lg w-full border border-white/20"
            >
                {/* Heading */}
                <h2 className="text-4xl font-extrabold mb-3 text-center text-white">
                    Register Your Interest
                </h2>
                <p className="text-center text-white/70 mb-8">
                    Be among the first to join the{" "}
                    <span className="text-[#F57A55] font-semibold">Eureka Network</span>.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-black">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border border-white/20 bg-white/90 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#F57A55] transition"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border border-white/20 bg-white/90 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#F57A55] transition"
                    />
                    <textarea
                        name="message"
                        placeholder="Anything else you'd like us to know?"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="border border-white/20 bg-white/90 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#F57A55] transition"
                    />

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="bg-gradient-to-r from-[#F57A55] to-[#D33B41] text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition"
                    >
                        Submit
                    </motion.button>
                </form>

                {/* Status messages */}
                {status === "success" && (
                    <p className="mt-6 text-green-400 text-center font-medium">
                        ✅ Thanks! We’ve saved your interest.
                    </p>
                )}
                {status === "error" && (
                    <p className="mt-6 text-red-400 text-center font-medium">
                        ❌ Something went wrong. Please try again.
                    </p>
                )}
            </motion.div>
        </div>
    );
};

export default RegisterInterest;
