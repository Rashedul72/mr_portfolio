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
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen text-gray-900">
      <Navbar scrollToSection={scrollToSection} />
      
      {/* Hero Section with improved styling */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-24 px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6 text-blue-900">
                Kumira Guptachara Boat Ticketing
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-xl">
                A hassle-free boat ticket booking platform with secure payment integration.
              </p>
              <a 
                href="https://kumiraguptachara.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-900 bg-white hover:bg-blue-50 transition-colors duration-300"
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
              <h2 className="text-3xl font-bold text-blue-900 mb-6 inline-block pb-2 border-b-4 border-blue-300">
                Project Overview
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Kumira Boat Ticketing is an online platform that allows passengers to easily book boat tickets, 
                check schedules, and make secure payments through Aamar Pay integration.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Ticket className="text-blue-600 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold">Online Booking</h3>
                  </div>
                  <p className="text-gray-600">Seamless online ticket reservation system</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Clock className="text-blue-600 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold">Real-Time Updates</h3>
                  </div>
                  <p className="text-gray-600">Live schedule information for passengers</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Monitor className="text-blue-600 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold">Counter Dashboard</h3>
                  </div>
                  <p className="text-gray-600">Dedicated interface for in-person bookings</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Settings className="text-blue-600 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold">Admin Panel</h3>
                  </div>
                  <p className="text-gray-600">Comprehensive management system</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center">
              <div className="bg-white rounded-xl p-8 shadow-xl w-full">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Challenge & Solution</h3>
                <p className="text-gray-700 mb-6">
                  Kumira needed a modern, user-friendly platform for boat ticket bookings that could handle 
                  real-time scheduling and secure payments. We developed a comprehensive solution with 
                  multiple interfaces for different user types.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">User-friendly booking interface with real-time availability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Secure payment integration with Aamar Pay</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Dedicated counter dashboard for in-person bookings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Comprehensive admin panel for management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features with card design */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            <span className="inline-block pb-2 border-b-4 border-blue-300">Key Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <Ticket className="text-blue-600 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Online Booking</h3>
              <p className="text-gray-600">
                Easy-to-use interface for passengers to book tickets online with real-time availability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <CreditCard className="text-blue-600 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
              <p className="text-gray-600">
                Integrated Aamar Pay for secure online transactions and payment processing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <Clock className="text-blue-600 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Real-Time Schedules</h3>
              <p className="text-gray-600">
                Live updates on boat schedules, availability, and booking status.
              </p>
            </div>
          </div>
        </section>



        {/* Dashboard Section - NEW */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            <span className="inline-block pb-2 border-b-4 border-blue-300">Comprehensive Management System</span>
          </h2>
          
          {/* Counter Dashboard */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Counter Dashboard</h3>
                <p className="text-lg text-gray-700 mb-6">
                  The Counter Dashboard provides ticket agents with a powerful interface 
                  for managing in-person bookings and daily operations.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-blue-900 mb-4">Key Capabilities:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">1</span>
                      <span className="text-gray-700">Process in-person ticket bookings 
                      quickly with minimal waiting time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">2</span>
                      <span className="text-gray-700">Track boat availability and manage 
                      seat assignments in real-time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">3</span>
                      <span className="text-gray-700">Process cash payments and generate 
                      boarding passes instantly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">4</span>
                      <span className="text-gray-700">View daily sales reports and 
                      transaction history</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">5</span>
                      <span className="text-gray-700">Custom POS system for ticket printing 
                      and barcode scanning</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
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
                <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
                  <Image 
                    src={kumira_admin} 
                    alt="Kumira Admin Panel" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Admin Panel</h3>
                <p className="text-lg text-gray-700 mb-6">
                  The comprehensive Admin Panel empowers business owners with powerful 
                  tools to track performance, analyze trends, and optimize operations.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-blue-900 mb-4">Business Intelligence 
                  Features:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">1</span>
                      <span className="text-gray-700">Comprehensive business analytics with 
                      visual data representations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">2</span>
                      <span className="text-gray-700">Monitor revenue streams, ticket 
                      sales, and boat utilization rates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">3</span>
                      <span className="text-gray-700">Track customer acquisition and 
                      retention metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">4</span>
                      <span className="text-gray-700">Manage fleet schedules, pricing 
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
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            <span className="inline-block pb-2 border-b-4 border-blue-300">Technology Stack</span>
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-xl transition-colors duration-300">
                <Globe className="text-blue-600 w-12 h-12 mb-3" />
                <span className="font-medium">Next.js</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-xl transition-colors duration-300">
                <Code className="text-green-600 w-12 h-12 mb-3" />
                <span className="font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-xl transition-colors duration-300">
                <Database className="text-purple-600 w-12 h-12 mb-3" />
                <span className="font-medium">MongoDB</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-xl transition-colors duration-300">
                <Zap className="text-yellow-500 w-12 h-12 mb-3" />
                <span className="font-medium">Express.js</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-xl transition-colors duration-300">
                <Shield className="text-red-600 w-12 h-12 mb-3" />
                <span className="font-medium">SSL COMMERZ</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-xl transition-colors duration-300">
                <Monitor className="text-blue-600 w-12 h-12 mb-3" />
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