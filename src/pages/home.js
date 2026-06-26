import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import eurekaNowLogo from '../assets/EurekaNow-Logo.svg';
import eurekaConsultLogo from '../assets/EurekaConsult-Logo.svg';
import { motion } from "framer-motion";
import { Card, CardContent } from '../components/ui/card';
import { EarlyAccessModal } from '../components/EarlyAccessModal';
import { 
  ArrowRight, 
  Check, 
  Zap, 
  Layers, 
  Users,
  BarChart3,

  Network,
  Brain,
  Workflow,
  Settings
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HomePage() {
  const [earlyAccessProduct, setEarlyAccessProduct] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-sm font-medium text-purple-300">The Future of Enterprise Software</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Eureka Network.
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                An Ecosystem of Excellence.
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              A unified platform of intelligent enterprise applications working seamlessly together. From service management to advanced automation and expert consulting, we're building the ecosystem that modern organizations deserve.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Get Started
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://eureka-now-nine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-slate-500/30 text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
              >
                View Demo
              </motion.a>
            </div>

            <p className="text-sm text-slate-400">
              Trusted by enterprise teams • 99.9% Uptime SLA • Expert Support
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-8 text-sm uppercase tracking-[0.3em] text-purple-400 font-semibold"
            >
              Innovate · Build · Share
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              The Eureka ecosystem is designed to eliminate complexity and empower organizations. 
              Each application is built to integrate seamlessly, creating a unified experience that adapts to your needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { icon: Network, title: "Interconnected", desc: "Apps that talk to each other, not at each other" },
              { icon: Brain, title: "Intelligent", desc: "AI-driven insights built into every layer" },
              { icon: Zap, title: "Lightning Fast", desc: "Performance optimized from the ground up" },
              { icon: Workflow, title: "Workflow First", desc: "Designed around how you actually work" }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-800/20 border-slate-700/50 h-full hover:border-purple-400/50 transition-all">
                  <CardContent c ssName="p-6">
                    <item.icon className="w-10 h-10 text-purple-400 mb-4" />
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Solutions</h2>
            <p className="text-slate-300 text-lg">Powerful tools working together</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                name: "EurekaNow",
                status: "Coming Soon",
                icon: Layers,
                logo: eurekaNowLogo,
                description: "Enterprise service desk platform for IT, clinical ops, engineering, and HR.",
                features: [
                  "Multi-channel ticket ingestion",
                  "Intelligent routing & workflows",
                  "Real-time SLA tracking",
                  "Custom dashboards",
                  "Knowledge base & automation"
                ],
                color: "cyan",
                cta: () => navigate('/eureka-now')
              },
              {
                name: "EurekaConsult",
                status: "Available Now",
                icon: Users,
                logo: eurekaConsultLogo,
                description: "Expert digital transformation services. Custom development, infrastructure, DevOps, and strategic guidance.",
                features: [
                  "IT infrastructure strategy",
                  "Custom application development",
                  "Cloud migration & DevOps",
                  "Security & compliance advisory",
                  "Team augmentation & training"
                ],
                color: "purple",
                cta: () => navigate('/eureka-consult')
              },
              {
                name: "EurekaInsights",
                status: "Coming Soon",
                icon: BarChart3,
                logo: null,
                description: "AI-powered analytics platform delivering actionable insights across your entire ecosystem.",
                features: [
                  "Unified data model",
                  "Pre-built AI insights",
                  "Custom dashboard builder",
                  "Cross-app analytics",
                  "Automated reporting"
                ],
                color: "purple",
                cta: () => setEarlyAccessProduct("eureka_insights")
              }
              /** 
              {
                name: "Workflow Engine",
                status: "Coming Soon",
                icon: Workflow,
                description: "Universal process automation for any business workflow.",
                features: [
                  "No-code workflow builder",
                  "Conditional logic & branching",
                  "Integration with all apps",
                  "Real-time monitoring",
                  "Advanced reporting"
                ],
                color: "purple",
                cta: () => setEarlyAccessProduct("workflow_engine")
              },
              {
                name: "Integration Hub",
                status: "Coming Soon",
                icon: Network,
                description: "Unified API gateway connecting all enterprise systems.",
                features: [
                  "REST & GraphQL APIs",
                  "Pre-built connectors",
                  "Real-time data sync",
                  "Rate limiting & security",
                  "Developer dashboard"
                ],
                color: "purple",
                cta: () => setEarlyAccessProduct("workflow_engine")
              }
              */
            ].map((app, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className={`h-full transition-all cursor-pointer ${
                  app.color === 'cyan'
                    ? 'bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-cyan-500/30 hover:border-cyan-400/50'
                    : 'bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-purple-500/30 hover:border-purple-400/50'
                }`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      {app.logo
                        ? <img src={app.logo} alt={app.name} className="w-12 h-12 rounded-xl" />
                        : <app.icon className={`w-10 h-10 ${app.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`} />
                      }
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        app.status === 'Available Now'
                          ? 'bg-teal-500/20 text-teal-300'
                          : 'bg-purple-500/20 text-purple-300'
                      }`}>
                        {app.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{app.name}</h3>
                    <p className="text-slate-400 mb-6">{app.description}</p>
                    <ul className="space-y-2 mb-6">
                      {app.features.slice(0, 3).map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                          <Check className={`w-4 h-4 ${app.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        app.cta();
                      }}
                      className={`w-full py-2 rounded-lg font-semibold transition-all text-white ${
                        app.color === 'cyan'
                          ? 'bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30'
                          : 'bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30'
                      }`}
                    >
                      {app.status === 'Available Now' ? 'Learn More' : 'Get Early Access'} →
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Focus */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Built for Integration</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Every application in the Eureka ecosystem is designed from day one to work together seamlessly.
              Data flows effortlessly, workflows span across apps, and insights are unified.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: Zap, title: "Unified Data", desc: "Single source of truth across all applications" },
              { icon: Settings, title: "Seamless Workflows", desc: "Automate processes that span multiple apps" },
              { icon: BarChart3, title: "Cross-App Analytics", desc: "Insights that connect the entire ecosystem" }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-purple-400/50 transition-all text-center">
                  <item.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What's Coming</h2>
            <p className="text-slate-300 text-lg">Our vision for the Eureka ecosystem</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {[
              { phase: "2026", items: ["EurekaNow", "EurekaConsult"] },
              { phase: "Early 2027", items: ["EurekaInsights", "EurekaNetwork Portal"] },
              { phase: "Late 2027", items: ["Extended app ecosystem", "Advanced AI features", "Global expansion"] }
            ].map((phase, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="bg-slate-800/50 border-slate-700/50 hover:border-purple-400/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-24 font-bold text-purple-400">{phase.phase}</div>
                      <div className="flex-1">
                        <ul className="space-y-2">
                          {phase.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-2 text-slate-300">
                              <Check className="w-4 h-4 text-purple-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Start with EurekaNow, leverage EurekaConsult expertise, or join our early access program for future products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Get Started Today
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/eureka-now-new')}
                className="px-8 py-4 border border-slate-500/30 text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
              >
                Explore EurekaNow
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <EarlyAccessModal
        product={earlyAccessProduct}
        isOpen={!!earlyAccessProduct}
        onClose={() => setEarlyAccessProduct(null)}
      />

      <Footer />
    </div>
  );
}
