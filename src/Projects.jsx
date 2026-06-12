import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import inventoryImg from './assets/inventory.png';
import ticketingImg from './assets/ticketing.png';
import coffeeImg from './assets/coffee.png';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: "01",
      title: "Inventory System",
      desc: "A comprehensive inventory management system built for small-to-medium businesses. Features real-time stock tracking, automated low-stock alerts, supplier management, and detailed reporting dashboards with export capabilities.",
      image: inventoryImg,
      link: "https://inventory-system-self-one.vercel.app/",
      color: "bg-[#E04D4D]"
    },
    {
      id: "02",
      title: "Ticketing System",
      desc: "A robust ticketing platform designed for IT support and customer service teams. Includes ticket lifecycle management, priority-based routing, SLA tracking, knowledge base integration, and real-time notifications.",
      image: ticketingImg,
      link: "https://ticketing-seven-coral.vercel.app/",
      color: "bg-[#F59E0B]"
    },
    {
      id: "03",
      title: "Coffee Shop System",
      desc: "An integrated point-of-sale and online ordering system for coffee shops. Features menu management, order processing, payment integration, loyalty program tracking, and kitchen display screens for baristas.",
      image: coffeeImg,
      link: "https://coffee-system.vercel.app/",
      color: "bg-[#2563EB]"
    }
  ];

  return (
    <div 
      id="projects" 
      className="min-h-screen bg-[#F4F4F4] bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] p-6 md:p-12 font-primary"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-secondary text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Projects</h2>
          <div className="border-t border-b border-black py-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-black">Sample Work</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border border-black bg-white flex flex-col"
            >
              <div className={`p-4 ${project.color} text-white font-bold text-xs uppercase tracking-widest`}>
                Project {project.id} / {project.title}
              </div>
              <img 
                src={project.image} 
                alt={project.title} 
                onClick={() => setSelectedImage(project.image)}
                className="w-full h-48 object-cover border-b border-black cursor-pointer hover:opacity-90 transition-opacity" 
              />
              <div className="p-6 flex-grow">
                <p className="text-sm text-gray-700 leading-relaxed">{project.desc}</p>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full border-t border-black p-4 font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors text-center block"
              >
                View Live System ↗
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex justify-between items-center border-t border-black pt-4 text-[10px] font-bold tracking-widest uppercase text-gray-400"
        >
          <span>All systems deployed by Paulo Saclolo</span>
          <span>Philippines</span>
        </motion.div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage} 
              className="max-w-full max-h-full object-contain border-4 border-white"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}