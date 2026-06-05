import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import { Card, CardContent } from '../components/ui/card';
import { 
  ArrowRight, 
 
  Briefcase,
  TrendingUp,
  Shield,
  Code,
  Users,
  Clock,
  Cpu,
  Cloud,
  Zap,
  Target
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

export default function EurekaConsultPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
              <span className="text-sm font-medium text-cyan-300">Expert Digital Transformation</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              EurekaConsult.
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Your Digital Strategy Partner.
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Expert consulting and bespoke development services. From infrastructure architecture to custom applications, 
              our team of experienced engineers and strategists guide your digital transformation journey.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                Schedule Consultation
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="px-8 py-4 border border-slate-500/30 text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
              >
                Back to Eureka
              </motion.button>
            </div>

            <p className="text-sm text-slate-400">
              Trusted by enterprise organizations • Expert architects • Proven delivery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why EurekaConsult */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why EurekaConsult</h2>
            <p className="text-slate-300 text-lg">We bring more than just technical expertise</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { icon: Cpu, title: "Deep Expertise", desc: "20+ years of combined experience in enterprise architecture" },
              { icon: Target, title: "Strategic Thinking", desc: "Solutions aligned with your business objectives" },
              { icon: TrendingUp, title: "Proven Track Record", desc: "Successful transformations across multiple industries" },
              { icon: Users, title: "Dedicated Teams", desc: "Expert engineers committed to your success" }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-800/20 border-slate-700/50 h-full hover:border-cyan-400/50 transition-all">
                  <CardContent className="p-6">
                    <item.icon className="w-10 h-10 text-cyan-400 mb-4" />
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-slate-300 text-lg">Comprehensive solutions for your organization</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { 
                icon: Briefcase, 
                title: "IT Consulting", 
                desc: "Strategic guidance for digital transformation and IT optimization"
              },
              { 
                icon: TrendingUp, 
                title: "DevOps & Automation", 
                desc: "CI/CD pipelines, infrastructure-as-code, and deployment automation"
              },
              { 
                icon: Shield, 
                title: "Security & Compliance", 
                desc: "Risk assessment, security hardening, and compliance implementation"
              },
              { 
                icon: Code, 
                title: "Custom Development", 
                desc: "Tailored applications designed for your specific business needs"
              },
              { 
                icon: Users, 
                title: "Team Augmentation", 
                desc: "Experienced engineers to extend your team's capabilities"
              },
              { 
                icon: Clock, 
                title: "24/7 Support", 
                desc: "Managed services and on-call support for your infrastructure"
              }
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
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Technology Stack</h2>
            <p className="text-slate-300 text-lg">We work with modern, proven technologies</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: Cloud, title: "Cloud Platforms", desc: "AWS, Azure, GCP expertise for scalable infrastructure" },
              { icon: Code, title: "Modern Stacks", desc: "JavaScript, Python, Go, Rust - whatever fits your needs" },
              { icon: Zap, title: "DevOps Tools", desc: "Kubernetes, Docker, Terraform, and industry-standard tools" }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-cyan-400/50 transition-all text-center">
                  <item.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-slate-300 text-lg">Proven methodology for successful outcomes</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {[
              { step: "1", title: "Discovery", desc: "We understand your current state, goals, and challenges" },
              { step: "2", title: "Strategy", desc: "Create a detailed roadmap aligned with your business objectives" },
              { step: "3", title: "Execution", desc: "Build and implement solutions with agile methodologies" },
              { step: "4", title: "Optimization", desc: "Monitor, optimize, and continuously improve" }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-400/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-xl text-white">{item.step}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-slate-400">{item.desc}</p>
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
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready for Digital Transformation?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Let's discuss how EurekaConsult can accelerate your journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                Schedule Consultation
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="px-8 py-4 border border-slate-500/30 text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
              >
                Back to Eureka
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
