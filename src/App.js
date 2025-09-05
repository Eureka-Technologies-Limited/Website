import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import InnovationTimeline from './components/InovationTimeline';
import Products from './components/Products';
import GettingStarted from './components/GettingStarted';

const App = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-[#0A192F] to-[#112240] text-white pt-14 overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <Products />
      <InnovationTimeline />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default App;
