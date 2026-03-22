"use client";

import React from 'react';
import Image from 'next/image';
import { 
  TrendingUp, 
  ExternalLink,
  Monitor,
  Settings,
  Shield,
  Wifi,
  Signal,
  Router
} from 'lucide-react';
import { 
  Globe,
  Code,
  Database,
  Zap,
  Shield as ShieldIcon
} from 'lucide-react';
import better from '../../../../public/images/betterenet.png';
import dashboard from '../../../../public/images/enet_dashboard.png';
import Navbar from '../../../components/Navbar';
import Contact from '../../../components/Contact';
import Footer from '../../../components/Footer';

const BetterENetCaseStudy = () => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#030014] min-h-screen text-white">
      <Navbar scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <div>
        <div className="max-w-7xl mx-auto py-24 px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6 shimmer-text">
                Better E Net
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-xl">
                A comprehensive WiFi service provider platform offering high-speed internet, network management, and customer support services in Chittagong, Bangladesh.
              </p>
              <a 
                href="https://betternet.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-white/[0.06] text-base font-medium rounded-md text-white bg-white/[0.06] backdrop-blur-sm hover:bg-white/[0.1] transition-colors duration-300"
              >
                Visit Website <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] transform md:translate-y-4 transition-transform duration-500 hover:translate-y-0">
              <Image 
                src={better} 
                alt="Better E Net WiFi Services Platform" 
                className="w-full h-auto" 
                priority 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        {/* Project Overview with cleaner layout */}
        <section className="mt-16">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6 inline-block pb-2 border-b-2 border-cyan-500/40">
                Project Overview
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Better E Net is a full-featured WiFi service provider platform that offers high-speed internet connectivity, 
                network monitoring, customer management, and technical support with comprehensive dashboards for both customers and technicians.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/10 p-3 rounded-xl">
                      <Wifi className="text-cyan-400 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold text-white">WiFi Services</h3>
                  </div>
                  <p className="text-slate-400">High-speed internet connectivity</p>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/10 p-3 rounded-xl">
                      <Signal className="text-cyan-400 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold text-white">Network Monitoring</h3>
                  </div>
                  <p className="text-slate-400">Real-time network performance tracking</p>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/10 p-3 rounded-xl">
                      <Monitor className="text-cyan-400 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold text-white">Customer Portal</h3>
                  </div>
                  <p className="text-slate-400">Self-service account management</p>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/10 p-3 rounded-xl">
                      <Settings className="text-cyan-400 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold text-white">Admin Panel</h3>
                  </div>
                  <p className="text-slate-400">Comprehensive service management</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center">
              <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06] w-full">
                <h3 className="text-2xl font-bold text-white mb-6">Challenge & Solution</h3>
                <p className="text-slate-300 mb-6">
                  Better E Net needed a modern WiFi service management platform that could handle customer subscriptions, 
                  network monitoring, billing, and technical support. We developed a comprehensive 
                  solution with both customer-facing and technician management interfaces.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">Multi-tier WiFi service plans with bandwidth management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">Advanced network monitoring and performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">Secure customer portal for account management and billing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">Comprehensive support ticket system and technician dispatch</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features with card design */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="inline-block pb-2 border-b-2 border-cyan-500/40">Key Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-t-2xl -mt-8 -mx-8 mb-6" />
              <Wifi className="text-cyan-400 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">WiFi Service Management</h3>
              <p className="text-slate-400">
                Complete WiFi service platform with bandwidth control, user management, and network optimization.
              </p>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-t-2xl -mt-8 -mx-8 mb-6" />
              <Monitor className="text-cyan-400 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Network Operations Center</h3>
              <p className="text-slate-400">
                Real-time network monitoring, performance tracking, and automated alert systems.
              </p>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-t-2xl -mt-8 -mx-8 mb-6" />
              <TrendingUp className="text-cyan-400 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Customer Analytics</h3>
              <p className="text-slate-400">
                Detailed insights into usage patterns, service quality, and customer satisfaction metrics.
              </p>
            </div>
          </div>
        </section>


  
        {/* Dashboard Section */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            <span className="inline-block pb-2 border-b-2 border-cyan-500/40">Comprehensive Management System</span>
          </h2>
          
          {/* Network Operations Dashboard */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-white mb-4">Network Operations Dashboard</h3>
                <p className="text-lg text-slate-300 mb-6">
                  The Network Operations Dashboard provides technicians with a powerful interface 
                  for monitoring WiFi networks, managing customer connections, and resolving technical issues efficiently.
                </p>
                <div className="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/[0.06]">
                  <h4 className="font-semibold text-white mb-4">Key Capabilities:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">1</span>
                      <span className="text-slate-300">Monitor network performance and bandwidth usage 
                      across all WiFi access points</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">2</span>
                      <span className="text-slate-300">Track customer connections and manage 
                      service subscriptions in real-time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">3</span>
                      <span className="text-slate-300">Process support tickets and dispatch 
                      technicians for on-site service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">4</span>
                      <span className="text-slate-300">View network health reports and 
                      customer satisfaction metrics</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10">
                  <Image 
                    src={dashboard} 
                    alt="Better E Net Network Operations Dashboard Interface" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </div>
          </div>


        </section>

                {/* Technology Stack with improved layout */}
                <section className="mt-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            <span className="inline-block pb-2 border-b-2 border-cyan-500/40">Technology Stack</span>
          </h2>
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06]">
            <div className="grid grid-cols-2 md:grid-cols-7 gap-6">
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Globe className="text-cyan-400 w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">Next.js</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Code className="text-cyan-400 w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">TypeScript</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Database className="text-purple-600 w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">MongoDB</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Zap className="text-yellow-500 w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">Express.js</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Router className="text-green-600 w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">Network APIs</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Globe className="text-white w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">Vercel</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Globe className="text-green-600 w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">Netlify</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default BetterENetCaseStudy;
