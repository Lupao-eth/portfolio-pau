import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] p-6 md:p-12 font-primary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex justify-between items-end border-b border-black pb-2">
            <h2 className="font-secondary text-5xl md:text-7xl font-black uppercase tracking-tighter">Experience</h2>
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Work History</span>
          </div>
          <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mt-2">Professional Timeline</div>
        </motion.div>

        {/* Experience Content */}
        <div className="space-y-4">
          {/* Primary Role */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,0.1)]"
          >
            <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Primary Role — Current</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest">2023 — Present</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black uppercase tracking-tight">Freelance Programmer</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Self-Employed</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-3xl">
                Designed, developed, and deployed custom web applications tailored to client requirements, managing projects from planning and development through implementation and delivery.
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['PHP', 'LARAVEL', 'REACT', 'PYTHON', 'MYSQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 border border-black text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Status: Active</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Open to Contracts</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Catering Services */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border border-black bg-white p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold uppercase tracking-widest">Catering Services / Crew</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">2021 — 2025</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Prepared buffet area, organized and sorted utensils, designed and decorated celebrants’ area, and served as a waiter providing excellent customer service.
            </p>
          </motion.div>

          {/* Customer Service */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border border-black bg-white p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold uppercase tracking-widest">Customer Service</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">2023 — 8 Months</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Assisted customers by addressing inquiries, providing guidance, and resolving concerns.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}