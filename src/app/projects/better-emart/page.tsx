"use client";

import React from 'react';
import Image from 'next/image';
import { 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  ExternalLink,
  Monitor,
  Settings
} from 'lucide-react';
import { 
  Globe,
  Code,
  Database,
  Zap
} from 'lucide-react';
import better from '../../../../public/images/better.jpeg';
import dashboard from '../../../../public/images/better_dashboard.png';
import Navbar from '../../../components/Navbar';
import Contact from '../../../components/Contact';
import Footer from '../../../components/Footer';

const BetterEMartCaseStudy = () => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen text-gray-900">
      <Navbar scrollToSection={scrollToSection} />
      
      {/* Hero Section with green theme */}
      <div className="bg-green-50 ">
        <div className="max-w-7xl mx-auto py-24 px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6 text-green-800">
                Better E Mart
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-xl">
                A comprehensive e-commerce platform based in Chittagong, Bangladesh.
              </p>
              <a 
                href="https://betteremart.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-900 bg-white hover:bg-green-50 transition-colors duration-300"
              >
                Visit Website <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl transform md:translate-y-4 transition-transform duration-500 hover:translate-y-0">
              <Image 
                src={better} 
                alt="Better EMart Platform" 
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
              <h2 className="text-3xl font-bold text-green-800 mb-6 inline-block pb-2 border-b-4 border-green-300">
                Project Overview
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Better EMart is a full-featured e-commerce platform that allows customers to browse products, 
                manage shopping carts, and complete the ordering process with a comprehensive dashboard for vendors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <ShoppingCart className="text-green-600 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold">Product Catalog</h3>
                  </div>
                  <p className="text-gray-600">Extensive catalog with category filtering</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Package className="text-green-600 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold">Order Management</h3>
                  </div>
                  <p className="text-gray-600">Complete order tracking system</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Monitor className="text-green-600 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold">Vendor Dashboard</h3>
                  </div>
                  <p className="text-gray-600">Dedicated interface for sellers</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Settings className="text-green-600 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold">Admin Panel</h3>
                  </div>
                  <p className="text-gray-600">Comprehensive management system</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center">
              <div className="bg-white rounded-xl p-8 shadow-xl w-full">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Challenge & Solution</h3>
                <p className="text-gray-700 mb-6">
                  Better EMart needed a modern e-commerce platform that could handle multiple vendors, 
                  manage inventory, and provide a seamless shopping experience. We developed a comprehensive 
                  solution with both customer-facing and vendor management interfaces.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Multi-vendor marketplace with individual storefronts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Advanced inventory management and order processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Secure payment integration and order tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Comprehensive analytics and reporting system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features with card design */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
            <span className="inline-block pb-2 border-b-4 border-green-300">Key Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
              <ShoppingCart className="text-green-600 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold mb-4">E-commerce Platform</h3>
              <p className="text-gray-600">
                Complete online shopping experience with product catalog, cart, and checkout system.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
              <Monitor className="text-green-600 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Vendor Dashboard</h3>
              <p className="text-gray-600">
                Comprehensive interface for vendors to manage products, orders, and analytics.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
              <TrendingUp className="text-green-600 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Analytics & Reports</h3>
              <p className="text-gray-600">
                Detailed insights into sales performance, customer behavior, and inventory trends.
              </p>
            </div>
          </div>
        </section>


  
        {/* Dashboard Section - NEW */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">
            <span className="inline-block pb-2 border-b-4 border-green-300">Comprehensive Management System</span>
          </h2>
          
          {/* Vendor Dashboard */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Powerful Dashboard</h3>
                <p className="text-lg text-gray-700 mb-6">
                  The Vendor Dashboard provides sellers with a powerful interface 
                  for managing products, orders, and inventory efficiently.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-green-800 mb-4">Key Capabilities:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-green-100 text-green-800 font-bold text-sm mr-3 mt-0.5">1</span>
                      <span className="text-gray-700">Add, edit and manage product listings 
                      with multiple images and descriptions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-green-100 text-green-800 font-bold text-sm mr-3 mt-0.5">2</span>
                      <span className="text-gray-700">Track inventory levels and receive 
                      low stock alerts automatically</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-green-100 text-green-800 font-bold text-sm mr-3 mt-0.5">3</span>
                      <span className="text-gray-700">Process new orders and update 
                      order statuses in real-time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-green-100 text-green-800 font-bold text-sm mr-3 mt-0.5">4</span>
                      <span className="text-gray-700">View sales reports and transaction 
                      history with detailed analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
                  <Image 
                    src={dashboard} 
                    alt="Better EMart Vendor Dashboard Interface" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* Technology Stack with improved layout */}
                <section className="mt-32">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">
            <span className="inline-block pb-2 border-b-4 border-green-300">Technology Stack</span>
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-7 gap-6">
              <div className="flex flex-col items-center p-4 hover:bg-green-50 rounded-xl transition-colors duration-300">
                <Globe className="text-green-600 w-12 h-12 mb-3" />
                <span className="font-medium">Next.js</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-green-50 rounded-xl transition-colors duration-300">
                <Code className="text-blue-600 w-12 h-12 mb-3" />
                <span className="font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-green-50 rounded-xl transition-colors duration-300">
                <Database className="text-purple-600 w-12 h-12 mb-3" />
                <span className="font-medium">MongoDB</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-green-50 rounded-xl transition-colors duration-300">
                <Zap className="text-yellow-500 w-12 h-12 mb-3" />
                <span className="font-medium">Express.js</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-xl transition-colors duration-300">
                <Globe className="text-orange-500 w-12 h-12 mb-3" />
                <span className="font-medium">Cloudflare</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-xl transition-colors duration-300">
                <Globe className="text-black w-12 h-12 mb-3" />
                <span className="font-medium">Vercel</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-xl transition-colors duration-300">
                <Globe className="text-green-600 w-12 h-12 mb-3" />
                <span className="font-medium">Netlify</span>
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

export default BetterEMartCaseStudy;