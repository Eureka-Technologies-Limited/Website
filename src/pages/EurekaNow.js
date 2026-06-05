import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { motion } from "framer-motion";

import { Card, CardContent } from '../components/ui/card';
import { 
  ArrowRight, 
  Check, 
  Zap, 
  Layers, 
  Users, 
  Settings,
  BarChart3,
  Shield,
  Cpu,
  Briefcase,
  Clock,
  Target,
  TrendingUp,
  Globe,
  Code,
  Lightbulb,
  Headphones
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

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

export default function EurekaNowLandingPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('eureka');

  // ─────────────────────────────────────────────────────────────────────────
  // Hero Section
  // ─────────────────────────────────────────────────────────────────────────
  const HeroSection = () => (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-cyan-300">Enterprise Service Management</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Powerful Service Management.
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Built Your Way.
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Enterprise-grade service desk platform for IT, clinical operations, engineering, and HR. Customize workflows, automate processes, and empower your teams with intelligent ticketing that adapts to how you work.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              Start Free Trial
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
              View Live Demo
            </motion.a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/50">
            {[
              { label: "99.9% Uptime", value: "Enterprise SLA" },
              { label: "< 2min", value: "Avg Response Time" },
              { label: "5 Modules", value: "Pre-built Workflows" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-cyan-400">{stat.label}</p>
                <p className="text-sm text-slate-400">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Product Tabs
  // ─────────────────────────────────────────────────────────────────────────
  const ProductTabs = () => (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center gap-4 mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveTab('eureka')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'eureka'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            EurekaNow Platform
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveTab('consulting')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'consulting'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            IT Consulting & Custom Apps
          </motion.button>
        </div>

        {activeTab === 'eureka' && <EurekaNowContent />}
        {activeTab === 'consulting' && <ConsultingContent />}
      </div>
    </section>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // EurekaNow Content
  // ─────────────────────────────────────────────────────────────────────────
  const EurekaNowContent = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-white mb-6">Service Desk Excellence</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Built for teams that demand flexibility without sacrificing power. EurekaNow combines enterprise-grade features with intuitive design to handle your entire ticket lifecycle.
          </p>
          <ul className="space-y-4">
            {[
              "Multi-channel ticket ingestion (email, web, API)",
              "Intelligent routing and assignment workflows",
              "Real-time SLA tracking and escalations",
              "Knowledge base with AI-powered search",
              "Custom dashboards and analytics",
              "Multi-org and multi-team structure"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="grid gap-4">
          {[
            { icon: Layers, title: "Unified Workspace", desc: "Manage IT, clinical, engineering, and HR in one platform" },
            { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed with real-time updates and seamless collaboration" },
            { icon: Settings, title: "Infinitely Customizable", desc: "Build workflows that match your exact process requirements" },
            { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant with role-based access and audit trails" }
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30 transition-all">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-cyan-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-bold text-white mb-8">Core Capabilities</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Layers, title: "Incident Management", desc: "Track, triage, and resolve critical issues with automated escalations and SLA timers" },
            { icon: ClipboardList, title: "Change Control", desc: "Manage requests with approval chains, impact analysis, and calendar visibility" },
            { icon: Users, title: "Service Requests", desc: "Standardized workflows for access, hardware, software, and onboarding" },
            { icon: Target, title: "Priority Routing", desc: "Smart assignment rules and workload balancing across teams" },
            { icon: BarChart3, title: "Advanced Analytics", desc: "Real-time dashboards with custom KPIs and trend analysis" },
            { icon: Globe, title: "Knowledge Base", desc: "Self-service articles to reduce tickets and improve resolution time" }
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-800/20 border-slate-700/50 hover:border-cyan-400/50 transition-all h-full">
                <CardContent className="p-6">
                  <item.icon className="w-10 h-10 text-cyan-400 mb-4" />
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Consulting Content
  // ─────────────────────────────────────────────────────────────────────────
  const ConsultingContent = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-white mb-6">Digital Transformation Partners</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Beyond our platform, we deliver expert consulting and custom application development to accelerate your digital transformation. Our team of seasoned architects and engineers design solutions that drive business value.
          </p>
          <ul className="space-y-4">
            {[
              "IT infrastructure strategy and optimization",
              "Custom application development",
              "Cloud migration and modernization",
              "DevOps and automation implementation",
              "Security and compliance advisory",
              "Team augmentation and training"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="grid gap-4">
          {[
            { icon: Cpu, title: "Infrastructure Expert", desc: "Design scalable, secure, and cost-effective infrastructure" },
            { icon: Code, title: "Full-Stack Development", desc: "Custom applications built with modern tech stack" },
            { icon: Lightbulb, title: "Innovation Strategy", desc: "Digital roadmap and transformation planning" },
            { icon: Headphones, title: "Dedicated Support", desc: "Your dedicated team of experienced architects" }
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="bg-slate-800/50 border-slate-700/50 hover:border-purple-500/30 transition-all">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-bold text-white mb-8">Consulting Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Briefcase, title: "IT Consulting", desc: "Strategic guidance for digital transformation and IT optimization" },
            { icon: TrendingUp, title: "DevOps & Automation", desc: "CI/CD pipelines, infrastructure-as-code, and deployment automation" },
            { icon: Shield, title: "Security & Compliance", desc: "Risk assessment, security hardening, and compliance implementation" },
            { icon: Code, title: "Custom Development", desc: "Tailored applications designed for your specific business needs" },
            { icon: Users, title: "Team Augmentation", desc: "Experienced engineers to extend your team's capabilities" },
            { icon: Clock, title: "24/7 Support", desc: "Managed services and on-call support for your infrastructure" }
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-800/20 border-slate-700/50 hover:border-purple-400/50 transition-all h-full">
                <CardContent className="p-6">
                  <item.icon className="w-10 h-10 text-purple-400 mb-4" />
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Use Cases Section
  // ─────────────────────────────────────────────────────────────────────────
  const UseCasesSection = () => (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Who Uses Eureka?</h2>
          <p className="text-slate-400 text-lg">Trusted by organizations across multiple industries</p>
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
              title: "Healthcare & Clinical Operations",
              points: [
                "Patient request management",
                "Clinical workflow tracking",
                "Secure audit trails",
                "HIPAA-compliant workflows"
              ]
            },
            {
              title: "Enterprise IT",
              points: [
                "IT ticketing and asset management",
                "Incident and problem tracking",
                "Change management",
                "SLA enforcement"
              ]
            },
            {
              title: "Engineering & Product Teams",
              points: [
                "Bug tracking and resolution",
                "Feature request workflows",
                "Sprint planning integration",
                "Deployment coordination"
              ]
            },
            {
              title: "HR & People Operations",
              points: [
                "Onboarding workflows",
                "Employee service requests",
                "Access provisioning",
                "Benefits administration"
              ]
            }
          ].map((useCase, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="bg-slate-800/50 border-slate-700/50 h-full">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                </div>
                <CardContent>
                  <ul className="space-y-3">
                    {useCase.points.map((point, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Pricing Section
  // ─────────────────────────────────────────────────────────────────────────
  const PricingSection = () => (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 text-lg">Scale as you grow. No hidden fees.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            {
              name: "Free",
              price: "Free",
              desc: "Perfect for small teams",
              features: ["Up to 3 agents", "100 active tickets", "Incident & service requests", "Simple dashboard"]
            },
            {
              name: "Basic",
              price: "£29/month",
              desc: "For growing organizations",
              features: ["Up to 10 agents", "500 active tickets", "All ticket types", "Kanban board", "Knowedge base", "Reports and analytics", "CSV export", "Up to 10 closing templates"],
              highlighted: true
            },
            {
              name: "Pro",
              price: "£79/month",
              desc: "Full-featured with support",
              features: ["Unlimted agents", "Unlimited tickets", "Unlimited knowedge base", "Full reports and analytics", "Custom SLAs", "Unlimited closing templates", "Priority support"]
            },
            {
              name: "Enterprise",
              price: "Quote based",
              desc: "Tailored solutions for large organizations",
              features: ["All Pro features", "On-premise deployment option", "Custom SLAs", "Dedicated account manager", "Custom onboarding and training", "Custom modifications to suit needs"]
            }
          ].map((plan, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className={`h-full transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50'
              }`}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-cyan-400 text-3xl font-bold mb-1">{plan.price}</p>
                  <p className="text-sm text-slate-400 mb-6">{plan.desc}</p>
                  <button className={`w-full py-2 rounded-lg font-semibold transition-all mb-8 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Get Started
                  </button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-300 text-sm">
                        <Check className="w-4 h-4 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // CTA Section
  // ─────────────────────────────────────────────────────────────────────────
  const CTASection = () => (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Service Management?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Join hundreds of organizations using Eureka to streamline their operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              Schedule a Demo
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
              Start Free Trial
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Main Render
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <ProductTabs />
      <UseCasesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Helper component for Clipboard icon (not in lucide-react)
// ─────────────────────────────────────────────────────────────────────────
function ClipboardList(props) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 2h6v2H9V2zm-1 4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-1V4h-2v4H9V6zm0 4h6v2H8v-2zm0 4h6v2H8v-2z"/>
    </svg>
  );
}
