import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "../core/supabase";

export function EarlyAccessModal({ product, isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const productInfo = {
    workflow_engine: {
      name: "Workflow Engine",
      description: "Process automation and orchestration",
      color: "from-purple-500 to-pink-500",
    },
    integration_hub: {
      name: "Integration Hub",
      description: "Seamless API gateway and integrations",
      color: "from-cyan-500 to-blue-500",
    },
  };

  const info = productInfo[product];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Check if email already registered for this product
      const { data: existing } = await supabase
        .from("early_access_registrations")
        .select("id")
        .eq("email", form.email)
        .eq("product", product)
        .single();

      if (existing) {
        setStatus("error");
        setMessage("You're already registered for this product!");
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 4000);
        return;
      }

      // Insert registration
      const { error } = await supabase
        .from("early_access_registrations")
        .insert({
          name: form.name,
          email: form.email,
          company: form.company || null,
          product: product,
        });

      if (error) throw error;

      // Send confirmation email (optional)
      await fetch("https://email-notifications-server.vercel.app/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          template: "eureka-early-access",
          data: {
            name: form.name,
            email: form.email,
            product: info.name,
            toAddress: form.email,
          },
        }),
      }).catch(() => {}); // Don't fail if email fails

      setStatus("success");
      setForm({ name: "", email: "", company: "" });
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 2000);
    } catch (err) {
      console.error("Registration failed:", err);
      setStatus("error");
      setMessage(err.message || "Registration failed. Please try again.");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 4000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X size={20} className="text-slate-400" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div
                className={`inline-block p-3 bg-gradient-to-r ${info.color} rounded-lg mb-4`}
              >
                <div className="text-2xl">⚡</div>
              </div>
              <h2 className="text-2xl font-bold mb-1">{info.name}</h2>
              <p className="text-sm text-slate-400">{info.description}</p>
            </div>

            {/* Success State */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle2
                    size={48}
                    className="text-green-400 mx-auto mb-4"
                  />
                </motion.div>
                <p className="font-semibold text-green-400">
                  You're on the list!
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  We'll notify you as soon as {info.name} launches.
                </p>
              </motion.div>
            )}

            {/* Form State */}
            {status !== "success" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-200">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-purple-500/50 focus:outline-none disabled:opacity-50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-200">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-purple-500/50 focus:outline-none disabled:opacity-50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-200">
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    disabled={status === "loading"}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-purple-500/50 focus:outline-none disabled:opacity-50 transition-all"
                  />
                </div>

                {/* Error */}
                {status === "error" && message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm flex items-center gap-2"
                  >
                    <AlertCircle size={16} />
                    {message}
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Registering...
                    </>
                  ) : (
                    "Register for Early Access"
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  We'll only reach out when {info.name} is ready to launch.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}