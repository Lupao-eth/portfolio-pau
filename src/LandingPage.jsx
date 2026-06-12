import React, { useState } from 'react';
import { Download, Eye, Phone, Mail, Copy, MapPin, Cake, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePicture from './assets/picture.jpg';
import resumePdf from './assets/resume.pdf';

export default function LandingPage() {
  const [copiedStates, setCopiedStates] = useState({ phone: false, email: false });

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [key]: true });
    setTimeout(() => setCopiedStates({ ...copiedStates, [key]: false }), 2000);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.setAttribute('download', 'Paulo_Saclolo_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4] bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] font-primary">
      <div className="max-w-6xl mx-auto min-h-screen">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 md:p-12"
        >
          <h1 className="font-secondary text-[60px] md:text-[120px] leading-none font-black uppercase text-black tracking-tighter">PORTFOLIO</h1>
          <div className="flex items-center gap-4 mt-4">
            <div className="h-[1px] bg-black flex-1"></div>
            <span className="text-[10px] md:text-[12px] font-bold tracking-widest uppercase text-black whitespace-nowrap">PROGRAMMER · PHILIPPINES</span>
            <div className="h-[1px] bg-black flex-1"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 px-6 md:px-12 pb-12 gap-8">
          {/* Left Column: Image, Profile, Contact */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 space-y-8"
          >
            <div className="relative border border-black p-1 bg-white">
              <img 
                src={profilePicture} 
                alt="Paulo Saclolo" 
                className="w-full h-auto" 
              />
              <div className="bg-black text-white px-2 py-1 text-[10px] font-mono tracking-widest mt-1">
                NAME: PAULO SACLOLO
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="text-[10px] text-gray-500 font-bold tracking-widest uppercase block mb-1">Title</label>
                <p className="text-sm font-bold text-black uppercase">Computer Programmer</p>
              </div>
              <div>
                <label className="text-[10px] text-gray-500 font-bold tracking-widest uppercase block mb-1">Location</label>
                <p className="text-sm text-black flex items-center gap-2"><MapPin size={16} /> Bulacan, Philippines</p>
              </div>
              <div>
                <label className="text-[10px] text-gray-500 font-bold tracking-widest uppercase block mb-1">Born</label>
                <p className="text-sm text-black flex items-center gap-2"><Cake size={16} /> May 14, 2003 (23 years old)</p>
              </div>
            </div>

            <div className="border border-black bg-white w-full">
              <div className="bg-black text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest">Direct Contact</div>
              <div className="p-4 space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-2"><Phone size={14} /> +63 919 359 7428</p>
                  <button onClick={() => copyToClipboard('+63 919 359 7428', 'phone')} className={`cursor-pointer ${copiedStates.phone ? 'text-[#E04D4D]' : 'hover:text-[#E04D4D]'}`}><Copy size={14} /></button>
                </div>
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-2"><Mail size={14} /> paulosaclolo0514@gmail.com</p>
                  <button onClick={() => copyToClipboard('paulosaclolo0514@gmail.com', 'email')} className={`cursor-pointer ${copiedStates.email ? 'text-[#E04D4D]' : 'hover:text-[#E04D4D]'}`}><Copy size={14} /></button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Summary, Buttons, Quick Facts, and Status */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-8 space-y-8"
          >
            <div className="border border-black bg-white p-6 shadow-[8px_8px_0px_rgba(0,0,0,0.1)]">
              <h3 className="font-secondary text-sm font-bold uppercase bg-black text-white px-3 py-1 inline-block mb-4">Professional Summary</h3>
              <p className="text-sm leading-relaxed text-gray-700 font-primary">
                Bachelor of Industrial Technology graduate with a background in programming and technology. Passionate about building practical solutions, continuously learning new skills, and applying problem-solving abilities to create efficient and reliable systems.
              </p>
              <div className="mt-6 border-t border-gray-200"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleDownloadResume}
                className="bg-[#E04D4D] text-white px-6 py-3 font-secondary font-bold uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                <Download size={18} /> Download Resume
              </button>
              <button 
                onClick={scrollToProjects}
                className="bg-white border border-black px-6 py-3 font-secondary font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                <Eye size={18} /> View Projects
              </button>
            </div>

            <div className="border border-black bg-white">
              <div className="bg-[#2563EB] text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest">Quick Facts</div>
              <div className="p-4 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <GraduationCap size={18} className="text-gray-500" />
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Degree</p>
                    <p className="font-medium text-black">BS Industrial Technology Major In Computer</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Briefcase size={18} className="text-gray-500" />
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Experience</p>
                    <p className="font-medium text-black">3+ Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={18} className="text-gray-500" />
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Base</p>
                    <p className="font-medium text-black">Bulacan, Philippines</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-black p-4 pt-9 pb-7 bg-white">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500"></div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black">Status: Available</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">Currently accepting new projects and full-time opportunities.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}