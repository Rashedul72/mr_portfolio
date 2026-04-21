"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Ticket, 
  Clock, 
  CreditCard,
  ExternalLink,
  Monitor,
  Settings
} from 'lucide-react';
import { 
  Globe,
  Code,
  Database,
  Zap,
  Shield
} from 'lucide-react';
import kumira from '../../../../public/images/kumira.png';
import kumira_dashboard from '../../../../public/images/kumira_dashboard.png';
import kumira_admin from '../../../../public/images/Kumira_admin.png';
import Navbar from '../../../components/Navbar';
import Contact from '../../../components/Contact';
import Footer from '../../../components/Footer';

const KumiraCaseStudy = () => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#082c47] min-h-screen text-white">
      <Navbar scrollToSection={scrollToSection} />
      
      {/* Hero Section with improved styling */}
      <div>
        <div className="max-w-7xl mx-auto py-24 px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6 text-white shimmer-text">
                Kumira Guptachara Boat Ticketing
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-xl">
                A hassle-free boat ticket booking platform with secure payment integration.
              </p>
              <a 
                href="https://kumiraguptachara.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-white/[0.06] backdrop-blur-sm border border-white/[0.06] hover:bg-white/[0.1] transition-colors duration-300"
              >
                Visit Website <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl transform md:translate-y-4 transition-transform duration-500 hover:translate-y-0">
              <Image 
                src={kumira} 
                alt="Kumira Boat Ticketing Platform" 
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
                Kumira Boat Ticketing is an online platform that allows passengers to easily book boat tickets, 
                check schedules, and make secure payments through Aamar Pay integration.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.06] hover:bg-white/[0.06] p-6 transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/10 rounded-xl p-3">
                      <Ticket className="text-cyan-400 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold text-white">Online Booking</h3>
                  </div>
                  <p className="text-slate-400">Seamless online ticket reservation system</p>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.06] hover:bg-white/[0.06] p-6 transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/10 rounded-xl p-3">
                      <Clock className="text-cyan-400 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold text-white">Real-Time Updates</h3>
                  </div>
                  <p className="text-slate-400">Live schedule information for passengers</p>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.06] hover:bg-white/[0.06] p-6 transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/10 rounded-xl p-3">
                      <Monitor className="text-cyan-400 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold text-white">Counter Dashboard</h3>
                  </div>
                  <p className="text-slate-400">Dedicated interface for in-person bookings</p>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.06] hover:bg-white/[0.06] p-6 transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/10 rounded-xl p-3">
                      <Settings className="text-cyan-400 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold text-white">Admin Panel</h3>
                  </div>
                  <p className="text-slate-400">Comprehensive management system</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center">
              <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-8 border border-white/[0.06] w-full">
                <h3 className="text-2xl font-bold text-white mb-6">Challenge & Solution</h3>
                <p className="text-slate-300 mb-6">
                  Kumira needed a modern, user-friendly platform for boat ticket bookings that could handle 
                  real-time scheduling and secure payments. We developed a comprehensive solution with 
                  multiple interfaces for different user types.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">User-friendly booking interface with real-time availability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">Secure payment integration with Aamar Pay</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">Dedicated counter dashboard for in-person bookings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">Comprehensive admin panel for management</span>
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
            <div className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] hover:bg-white/[0.06] transition-shadow duration-300">
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-t-2xl -mt-8 -mx-8 mb-6" />
              <Ticket className="text-cyan-400 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Online Booking</h3>
              <p className="text-slate-400">
                Easy-to-use interface for passengers to book tickets online with real-time availability.
              </p>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] hover:bg-white/[0.06] transition-shadow duration-300">
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-t-2xl -mt-8 -mx-8 mb-6" />
              <CreditCard className="text-cyan-400 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Secure Payments</h3>
              <p className="text-slate-400">
                Integrated Aamar Pay for secure online transactions and payment processing.
              </p>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] hover:bg-white/[0.06] transition-shadow duration-300">
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-t-2xl -mt-8 -mx-8 mb-6" />
              <Clock className="text-cyan-400 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Real-Time Schedules</h3>
              <p className="text-slate-400">
                Live updates on boat schedules, availability, and booking status.
              </p>
            </div>
          </div>
        </section>



        {/* Dashboard Section - NEW */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            <span className="inline-block pb-2 border-b-2 border-cyan-500/40">Comprehensive Management System</span>
          </h2>
          
          {/* Counter Dashboard */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-white mb-4">Counter Dashboard</h3>
                <p className="text-lg text-slate-300 mb-6">
                  The Counter Dashboard provides ticket agents with a powerful interface 
                  for managing in-person bookings and daily operations.
                </p>
                <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.06] p-6">
                  <h4 className="font-semibold text-white mb-4">Key Capabilities:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">1</span>
                      <span className="text-slate-300">Process in-person ticket bookings 
                      quickly with minimal waiting time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">2</span>
                      <span className="text-slate-300">Track boat availability and manage 
                      seat assignments in real-time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">3</span>
                      <span className="text-slate-300">Process cash payments and generate 
                      boarding passes instantly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">4</span>
                      <span className="text-slate-300">View daily sales reports and 
                      transaction history</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">5</span>
                      <span className="text-slate-300">Custom POS system for ticket printing 
                      and barcode scanning</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
                  <Image 
                    src={kumira_dashboard} 
                    alt="Kumira Counter Dashboard Interface" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Admin Panel */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
                  <Image 
                    src={kumira_admin} 
                    alt="Kumira Admin Panel" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Admin Panel</h3>
                <p className="text-lg text-slate-300 mb-6">
                  The comprehensive Admin Panel empowers business owners with powerful 
                  tools to track performance, analyze trends, and optimize operations.
                </p>
                <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.06] p-6">
                  <h4 className="font-semibold text-white mb-4">Business Intelligence 
                  Features:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">1</span>
                      <span className="text-slate-300">Comprehensive business analytics with 
                      visual data representations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">2</span>
                      <span className="text-slate-300">Monitor revenue streams, ticket 
                      sales, and boat utilization rates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">3</span>
                      <span className="text-slate-300">Track customer acquisition and 
                      retention metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">4</span>
                      <span className="text-slate-300">Manage fleet schedules, pricing 
                      strategies, and system configurations</span>
                    </li>
                  </ul>
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Globe className="text-cyan-400 w-12 h-12 mb-3" />
                <span className="font-medium">Next.js</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Code className="text-green-600 w-12 h-12 mb-3" />
                <span className="font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Database className="text-purple-600 w-12 h-12 mb-3" />
                <span className="font-medium">MongoDB</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Zap className="text-yellow-500 w-12 h-12 mb-3" />
                <span className="font-medium">Express.js</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Shield className="text-red-600 w-12 h-12 mb-3" />
                <span className="font-medium">SSL COMMERZ</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Monitor className="text-cyan-400 w-12 h-12 mb-3" />
                <span className="font-medium">POS System</span>
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

export default KumiraCaseStudy;
