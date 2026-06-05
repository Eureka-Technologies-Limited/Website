import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Mail, Clock, MapPin, Phone, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", product: "general" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await fetch("https://email-notifications-server.vercel.app/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          template: "eureka-contact-form",
          data: {
            name: form.name,
            email: form.email,
            message: form.message,
            product: form.product,
            toAddress: "info@eureka-technologies.co.uk"
          },
        }),
      });

      setForm({ name: "", email: "", message: "", product: "general" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Form submission failed", err);
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Our preferred contact method",
      value: "info@eureka-technologies.co.uk",
      href: "mailto:info@eureka-technologies.co.uk",
      response: "1–2 business days"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "For urgent matters",
      phones: [
        { value: "+44 7562 272917", href: "tel:+447562272917" },
        { value: "+44 7731 838374", href: "tel:+447731838374" }
      ],
      response: "Leave a voicemail"
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit us by appointment",
      value: "",
      details: "Please email or call to schedule a visit",
      response: "Visits by appointment only"
    },
    {
      icon: Clock,
      title: "Available Hours",
      description: "UK Business Hours",
      hours: ["Mon–Fri: 8:00–22:00 UTC", "Sat: 10:00–22:00 UTC", "Sun: 10:00–20:00 UTC"],
      response: "Extended availability"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative px-6 py-20 md:py-32 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <MessageCircle size={16} className="text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Let's Connect</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Whether you're exploring EurekaNow, EurekaConsult, or have a custom project in mind, our team is ready to help. Get in touch and let's discuss your next steps.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact-form" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Send a Message <ArrowRight size={18} />
            </a>
            <a href="#contact-methods" className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
              View Contact Info
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Methods Grid */}
      <motion.section
        id="contact-methods"
        className="max-w-6xl mx-auto px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="mb-4 p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg w-fit group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                  <Icon size={24} className="text-purple-300" />
                </div>

                <h3 className="text-lg font-bold mb-1">{method.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{method.description}</p>

                {method.phones ? (
                  <div className="space-y-2">
                    {method.phones.map((phone, i) => (
                      <a key={i} href={phone.href} className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors inline-flex items-center gap-1 block">
                        {phone.value} <ArrowRight size={14} />
                      </a>
                    ))}
                  </div>
                ) : method.href ? (
                  <a href={method.href} className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors inline-flex items-center gap-1">
                    {method.value} <ArrowRight size={14} />
                  </a>
                ) : method.hours ? (
                  <div className="space-y-1">
                    {method.hours.map((h, i) => (
                      <p key={i} className="text-sm text-slate-300">{h}</p>
                    ))}
                  </div>
                ) : (
                  <div>
                    <p className="text-cyan-400 font-semibold">{method.value}</p>
                    {method.details && <p className="text-sm text-slate-300">{method.details}</p>}
                  </div>
                )}

                {method.response && (
                  <p className="text-xs text-slate-500 mt-4 pt-4 border-t border-white/10">
                    ✓ {method.response}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        id="contact-form"
        className="max-w-4xl mx-auto px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Send us a Message</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Tell us about your project, questions, or how we can help. We'll respond as quickly as possible.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-200">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-200">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Product Interest */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-200">What are you interested in? *</label>
              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500/50 focus:bg-white/10 focus:outline-none transition-all"
              >
                <option value="general" className="bg-slate-900">General Inquiry</option>
                <option value="eurekanow" className="bg-slate-900">EurekaNow Service Desk</option>
                <option value="eurekaconsult" className="bg-slate-900">EurekaConsult Services</option>
                <option value="custom" className="bg-slate-900">Custom Project</option>
                <option value="partnership" className="bg-slate-900">Partnership Opportunity</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-200">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project or question..."
                rows={6}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || submitted}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <CheckCircle2 size={20} /> Message Sent!
                </>
              ) : loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <ArrowRight size={20} />
                </>
              )}
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-400 text-sm font-medium"
              >
                ✓ Thanks for reaching out! We'll get back to you within 1–2 business days.
              </motion.p>
            )}
          </form>
        </motion.div>
      </motion.section>

      {/* Why Contact CTA */}
      <motion.section
        className="max-w-5xl mx-auto px-6 py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
          Why Choose the Eureka Ecosystem?
        </motion.h2>
        <motion.p variants={itemVariants} className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Whether it's EurekaNow for enterprise service management or EurekaConsult for digital transformation, we're committed to your success. Let's innovate, build, and share together.
        </motion.p>

        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full">
          <span className="text-cyan-400 font-semibold">Innovate · Build · Share</span>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}
