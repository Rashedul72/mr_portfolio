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
    <div className="bg-[#082c47] min-h-screen text-white">
      <Navbar scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <div className="text-white">
        <div className="max-w-7xl mx-auto py-24 px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6 text-white shimmer-text">
                Jafson Trading & Marine Services
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-xl">
                Quality marine equipment and parts for boating enthusiasts and professionals.
              </p>
              <a 
                href="https://www.jafsonmarine.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-white/[0.06] text-base font-medium rounded-md shadow-sm text-white bg-white/[0.06] backdrop-blur-sm hover:bg-white/[0.1] transition-colors duration-300"
              >
                Visit Website <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] transform md:translate-y-4 transition-transform duration-500 hover:translate-y-0">
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
              <h2 className="text-3xl font-bold text-white mb-6 inline-block pb-2 border-b-2 border-cyan-500/40">
                Project Overview
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Jafson Marine is a static website designed to showcase marine equipment, parts, and services
                in a clean, professional format that appeals to boating enthusiasts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.06] hover:bg-white/[0.06] p-6 transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/10 rounded-xl p-3">
                      <Anchor className="text-cyan-400 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold text-white">Marine Equipment</h3>
                  </div>
                  <p className="text-slate-400">Quality parts and accessories</p>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.06] hover:bg-white/[0.06] p-6 transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/10 rounded-xl p-3">
                      <Ship className="text-cyan-400 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold text-white">Boating Expertise</h3>
                  </div>
                  <p className="text-slate-400">Professional knowledge and service</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center">
              <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-8 border border-white/[0.06] w-full">
                <h3 className="text-2xl font-bold text-white mb-6">Challenge & Solution</h3>
                <p className="text-slate-300 mb-6">
                  Jafson Marine needed a straightforward web presence to display their marine products and services. 
                  We created a clean, static website focused on showcasing their offerings with clear navigation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">Clear product categorization and display</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">Easy-to-find contact information for inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">Mobile-friendly design for on-the-go boaters</span>
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
              <Anchor className="text-cyan-400 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">Product Showcase</h3>
              <p className="text-slate-400">
                Clear presentation of marine equipment and parts with essential specifications.
              </p>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] hover:bg-white/[0.06] transition-shadow duration-300">
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-t-2xl -mt-8 -mx-8 mb-6" />
              <Wrench className="text-cyan-400 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">Service Information</h3>
              <p className="text-slate-400">
                Detailed overview of marine maintenance and repair services offered.
              </p>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] hover:bg-white/[0.06] transition-shadow duration-300">
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-t-2xl -mt-8 -mx-8 mb-6" />
              <Ship className="text-cyan-400 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">Boating Resources</h3>
              <p className="text-slate-400">
                Helpful information and resources for boat owners and marine enthusiasts.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack with improved layout */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            <span className="inline-block pb-2 border-b-2 border-cyan-500/40">Technology Stack</span>
          </h2>
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Globe className="text-orange-500 w-12 h-12 mb-3" />
                <span className="font-medium">HTML5</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Globe className="text-blue-500 w-12 h-12 mb-3" />
                <span className="font-medium">CSS3</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Globe className="text-yellow-400 w-12 h-12 mb-3" />
                <span className="font-medium">JavaScript</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
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
