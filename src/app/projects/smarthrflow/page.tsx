"use client";

import React from 'react';
import Image from 'next/image';
import { 
  ExternalLink,
  Settings,
  Mail,
  Brain,
  Target,
  Server,
  Cloud,
  Bot
} from 'lucide-react';
import { 
  Globe,
  Code,
  Database,
  Zap as ZapIcon,
  Shield as ShieldIcon
} from 'lucide-react';
import better from '../../../../public/images/smartHRflow.png';
import better2 from '../../../../public/images/smartHRflowV2.png';
import dashboard from '../../../../public/images/smartHRflow_dashboard.png';
import Navbar from '../../../components/Navbar';
import Contact from '../../../components/Contact';
import Footer from '../../../components/Footer';

const SmartHRflowCaseStudy = () => {
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
      <div>
        <div className="max-w-7xl mx-auto py-24 px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6 shimmer-text">
                SmartHRflow
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-xl">
                An AI-powered HR hiring platform that reduces recruitment steps by 60% through intelligent CV parsing, automated assessments, and streamlined candidate management.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://smarthrflow.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-white/[0.06] backdrop-blur-sm border border-white/[0.06] hover:bg-white/[0.1] transition-colors duration-300"
                >
                  Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                <a 
                  href="https://front-delta-seven.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-colors duration-300"
                >
                  Preview V2 (Vercel) <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] transform md:translate-y-4 transition-transform duration-500 hover:translate-y-0">
              <Image 
                src={better} 
                alt="SmartHRflow AI-Powered Hiring Platform" 
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
                SmartHRflow is an AI-powered recruitment platform that revolutionizes the hiring process by automating CV parsing, 
                creating custom assessments, and streamlining candidate evaluation, reducing HR workload by 60%.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/10 p-3 rounded-xl">
                      <Brain className="text-cyan-400 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold text-white">AI CV Parsing</h3>
                  </div>
                  <p className="text-slate-400">98% accuracy resume parsing</p>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/10 p-3 rounded-xl">
                      <Target className="text-cyan-400 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold text-white">Custom Assessments</h3>
                  </div>
                  <p className="text-slate-400">Skill-based evaluation tools</p>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/10 p-3 rounded-xl">
                      <Mail className="text-cyan-400 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold text-white">Bulk Email</h3>
                  </div>
                  <p className="text-slate-400">Automated candidate communication</p>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-500/10 p-3 rounded-xl">
                      <Settings className="text-cyan-400 w-5 h-5" />
                    </div>
                    <h3 className="ml-4 font-semibold text-white">Interview Management</h3>
                  </div>
                  <p className="text-slate-400">Structured evaluation process</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center">
              <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06] w-full">
                <h3 className="text-2xl font-bold text-white mb-6">Challenge & Solution</h3>
                <p className="text-slate-300 mb-6">
                  Traditional hiring processes are time-consuming and inefficient. SmartHRflow needed to create an AI-powered 
                  platform that could automate CV screening, streamline assessments, and reduce manual HR tasks by 60%.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">AI-powered resume parsing with 98% accuracy across all formats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">Intelligent skill matching and automated candidate ranking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">Custom assessment creation with anti-cheating measures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-slate-300">Bulk email automation and interview scorecard system</span>
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
              <Brain className="text-cyan-400 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">AI Resume Parsing</h3>
              <p className="text-slate-400">
                98% accuracy parsing with intelligent skill matching and automated candidate ranking for bias-free evaluation.
              </p>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-t-2xl -mt-8 -mx-8 mb-6" />
              <Target className="text-cyan-400 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Custom Assessments</h3>
              <p className="text-slate-400">
                Create skill-based assessments with multiple question types, custom scoring, and anti-cheating measures.
              </p>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-t-2xl -mt-8 -mx-8 mb-6" />
              <Mail className="text-cyan-400 w-8 h-8 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Bulk Communication</h3>
              <p className="text-slate-400">
                Automated email campaigns and candidate communication with customizable templates and tracking.
              </p>
            </div>
          </div>
        </section>


  
        {/* Dashboard Section */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            <span className="inline-block pb-2 border-b-2 border-cyan-500/40">Comprehensive Hiring System</span>
          </h2>
          
          {/* AI Resume Parsing Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-white mb-4">Smart Resume Parsing & Matching</h3>
                <p className="text-lg text-slate-300 mb-6">
                  Our advanced AI technology automatically parses resumes and matches candidates to your requirements 
                  with incredible accuracy, reducing screening time by 60%.
                </p>
                <div className="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/[0.06]">
                  <h4 className="font-semibold text-white mb-4">AI Capabilities:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                      <span className="text-slate-300">98% parsing accuracy for all resume formats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                      <span className="text-slate-300">Intelligent skill matching & scoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                      <span className="text-slate-300">Automated candidate ranking & shortlisting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                      <span className="text-slate-300">Bias-free candidate evaluation</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10">
                  <Image 
                    src={dashboard} 
                    alt="SmartHRflow AI Resume Parsing Interface" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Custom Application Forms Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10">
                  <Image 
                    src={better2} 
                    alt="SmartHRflow Custom Application Forms" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Beautiful & Customizable Application Forms</h3>
                <p className="text-lg text-slate-300 mb-6">
                  Create branded application forms and workflows that make it easy for candidates to apply 
                  and for you to process applications. Fully customizable and mobile-optimized.
                </p>
                <div className="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/[0.06]">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">100%</div>
                      <div className="text-sm text-slate-400">Customizable</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">5min</div>
                      <div className="text-sm text-slate-400">Setup Time</div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                      <span className="text-slate-300">Custom branding & styling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                      <span className="text-slate-300">Mobile-first design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 
                      rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mr-3 mt-0.5">✓</span>
                      <span className="text-slate-300">Easy apply - just drag and drop</span>
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
            <div className="grid grid-cols-2 md:grid-cols-8 gap-6">
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Globe className="text-blue-400 w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">Next.js</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Code className="text-blue-400 w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">TypeScript</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Database className="text-green-400 w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">Supabase</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Server className="text-red-400 w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">Nest.js</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Brain className="text-purple-400 w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">AI/ML</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Cloud className="text-white w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">Vercel</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <Bot className="text-emerald-400 w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">OpenAI API</span>
              </div>
              <div className="flex flex-col items-center p-4 hover:bg-white/[0.06] rounded-xl transition-colors duration-300">
                <ZapIcon className="text-pink-400 w-12 h-12 mb-3" />
                <span className="font-medium text-slate-200">Pixel-perfect UI</span>
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

export default SmartHRflowCaseStudy;
