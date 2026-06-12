import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pnplogo from './assets/pnplogo.png';
import certificate from './assets/certificate.jpg';

export default function Education() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#F4F4F4] bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] p-6 md:p-12 font-primary">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-secondary text-5xl md:text-7xl font-black uppercase tracking-tighter">EDUCATION & ACHIEVEMENTS</h2>
          <div className="h-[2px] bg-black mt-2 w-32"></div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mt-2">Academic & Training Records</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Academic Credentials */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="border border-black bg-white"
            >
              <div className="bg-black text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest">Academic Credential</div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase tracking-tight">Bachelor of Industrial Technology</h3>
                <p className="text-sm text-gray-600 mt-1">Major in Computer Technology</p>
                <div className="flex justify-between items-center mt-4 text-[10px] font-bold uppercase text-gray-500">
                  <span>Bulacan State University, TJS Matungao, Bulacan</span>
                  <span>July 2025</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-black bg-white"
            >
              <div className="bg-black text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest">Academic Credential</div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase tracking-tight">Science, Technology, Engineering & Mathematics</h3>
                <div className="flex justify-between items-center mt-4 text-[10px] font-bold uppercase text-gray-500">
                  <span>Dr. Yanga's Colleges, Inc.</span>
                  <span>2020</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Training & Achievements */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-black bg-white flex flex-col h-full relative overflow-hidden"
          >
            {/* Background Logo */}
            <div 
              className="absolute inset-0 opacity-[0.15] pointer-events-none bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${pnplogo})` }}
            ></div>

            <div className="bg-black text-white px-4 py-2 flex justify-between items-center z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest">Critical Achievement — Philippine National Police</span>
            </div>
            
            <div className="p-6 flex-grow z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">On the Job Training — 688 Hours</p>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Nationwide Messaging System</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                Philippine National Police, Camp Crame, Quezon City, Metro Manila. Developed and deployed a centralized SMS monitoring and messaging system designed to support nationwide communication operations, enabling large-scale message distribution, tracking, and data management across multiple regions throughout the Philippines.
              </p>
              
              <div className="bg-black text-white p-6 mb-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Database Scale Data Managed Over</p>
                <div className="text-4xl md:text-5xl font-black text-white my-2">250,000,000</div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Records</span>
                  <span className="text-[10px] font-bold uppercase text-[#F59E0B]">Operational ⛁</span>
                </div>
              </div>

              {/* Check Certification Button */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-white border-2 border-black py-3 px-6 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                Check Certification
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal for Certificate Pop-up */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-pointer"
          >
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={certificate} 
              alt="Full Certificate" 
              className="max-w-full max-h-full object-contain border-4 border-white"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}