import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Clock, MapPin } from "lucide-react";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        setLoading(true);

        try {
            await fetch("https://email-notifications-server.vercel.app/api/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    template: "eureka-contact-form",
                    data: {
                        name: form.name.value,
                        email: form.email.value,
                        message: form.message.value,
                        toAddress: "info@eureka-technologies.co.uk"
                    },
                }),
            });

            form.reset();
            setSubmitted(true);
        } catch (err) {
            console.error("Form submission failed", err);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-darkBlue via-blue-950 to-zinc-950 text-white">
            <Navbar />

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                    Get in Touch
                </h1>
                <p className="mt-8 max-w-3xl mx-auto text-[#A8B0C2] text-lg leading-relaxed">
                    Have a question, want to discuss a project, or need a bespoke solution?
                    Reach out to our team and we’ll get back to you promptly.
                </p>
            </section>

            {/* Contact Section */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Input
                                    name="name"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                                <Textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={6}
                                    required
                                    className="resize-none"
                                />
                                <Button
                                    type="submit"
                                    className="w-full bg-[#f57a55] hover:bg-[#d33b41]"
                                >
                                    Send Message
                                </Button>
                                {submitted && (
                                    <p className="text-green-500 font-medium mt-2">
                                        Thanks! We'll get back to you soon.
                                    </p>
                                )}
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact Info */}
                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-8 space-y-6">
                            <h2 className="text-2xl flex justify-center font-bold">
                                Contact Information
                            </h2>

                            <div className="flex items-center space-x-4">
                                <MapPin className="text-[#f57a55] w-6 h-6" />
                                <span>48 West George Street, Glasgow, G2 1BP, Scotland</span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <Mail className="text-[#f57a55] w-6 h-6" />
                                <a
                                    href="mailto:info@eureka-technologies.co.uk"
                                    className="hover:text-[#5EEAD4] hover:underline"
                                >
                                    info@eureka-technologies.co.uk
                                </a>
                            </div>

                            <div className="flex items-center space-x-4">
                                <Clock className="text-[#f57a55] w-6 h-6" />
                                <span>Monday – Friday · 8:00 – 20:00 (UK Time)</span>
                            </div>

                            <div className="pt-4 border-t border-white/10">
                                <p className="text-sm text-[#A8B0C2]">
                                    Email is our primary contact method. We typically respond within 1–2 business days.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-semibold mb-6">
                    Want to Discuss a Custom Project?
                </h2>
                <p className="text-[#A8B0C2] mb-8 max-w-2xl mx-auto">
                    We also create bespoke solutions built with the same engineering principles
                    as our core platforms. Let’s explore how we can help your project succeed.
                </p>
                <Button className="bg-[#f57a55] hover:bg-[#d33b41]">
                    Talk to Us
                </Button>
            </section>

            <Footer />
        </div>
    );
}
