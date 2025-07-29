"use client";

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Anchor, Ship, Wrench, Globe } from 'lucide-react';
import jafsonImage from '../../../../public/images/jafson.png';
import Navbar from '../../../components/Navbar';
import Contact from '../../../components/Contact';
import Footer from '../../../components/Footer';

const JafsonCaseStudy = () => {
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
      
      {/* Hero Section */}
      <div className="bg-blue-200 text-white">
        <div className="max-w-7xl mx-auto py-24 px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6 text-blue-900">
                Jafson Trading & Marine Services
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-xl">
                Quality marine equipment and parts for boating enthusiasts and professionals.
              </p>
              <a 
                href="https://www.jafsonmarine.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-800 bg-white hover:bg-blue-50 transition-colors duration-300"
              >
                Visit Website <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl transform md:translate-y-4 transition-transform duration-500 hover:translate-y-0">
              <Image 
                src={jafsonImage} 
                alt="Jafson Marine Website" 
                className="w-full h-auto" 
                priority 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        {/* Project Overview */}
        <section className="mt-16">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 inline-block pb-2 border-b-4 border-blue-300">
                Project Overview
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Jafson Marine is a static website designed to showcase marine equipment, parts, and services
                in a clean, professional format that appeals to boating enthusiasts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Anchor className="text-[#1E3A8A] w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold">Marine Equipment</h3>
                  </div>
                  <p className="text-gray-600">Quality parts and accessories</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Ship className="text-[#1E3A8A] w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold">Boating Expertise</h3>
                  </div>
                  <p className="text-gray-600">Professional knowledge and service</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center">
              <div className="bg-white rounded-xl p-8 shadow-xl w-full">
                <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6">Challenge & Solution</h3>
                <p className="text-gray-700 mb-6">
                  Jafson Marine needed a straightforward web presence to display their marine products and services. 
                  We created a clean, static website focused on showcasing their offerings with clear navigation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Clear product categorization and display</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Easy-to-find contact information for inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Mobile-friendly design for on-the-go boaters</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features with card design */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-8 text-center">
            <span className="inline-block pb-2 border-b-4 border-blue-300">Key Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <Anchor className="text-[#1E3A8A] w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Product Showcase</h3>
              <p className="text-gray-600">
                Clear presentation of marine equipment and parts with essential specifications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <Wrench className="text-[#1E3A8A] w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Service Information</h3>
              <p className="text-gray-600">
                Detailed overview of marine maintenance and repair services offered.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <Ship className="text-[#1E3A8A] w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Boating Resources</h3>
              <p className="text-gray-600">
                Helpful information and resources for boat owners and marine enthusiasts.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack with improved layout */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-12 text-center">
            <span className="inline-block pb-2 border-b-4 border-blue-300">Technology Stack</span>
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-xl transition-colors duration-300">
                <Globe className="text-orange-500 w-12 h-12 mb-3" />
                <span className="font-medium">HTML5</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-xl transition-colors duration-300">
                <Globe className="text-blue-500 w-12 h-12 mb-3" />
                <span className="font-medium">CSS3</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-xl transition-colors duration-300">
                <Globe className="text-yellow-400 w-12 h-12 mb-3" />
                <span className="font-medium">JavaScript</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-blue-50 rounded-xl transition-colors duration-300">
                <Globe className="text-purple-600 w-12 h-12 mb-3" />
                <span className="font-medium">Bootstrap</span>
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

export default JafsonCaseStudy;