import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import resumePdf from './assets/resume.pdf';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.setAttribute('download', 'Paulo_Saclolo_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const menuItems = ['home', 'experience', 'projects', 'education', 'contact'];

  return (
    <nav className="sticky top-0 z-50 bg-[#F4F4F4] border-b border-black p-4 md:px-12 grid grid-cols-[1fr_auto_1fr] md:grid-cols-3 items-center font-primary">
      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden p-2 text-black justify-self-start" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Menu - Centered */}
      <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-black col-start-2 justify-self-center">
        {menuItems.map((item) => (
          <button 
            key={item}
            onClick={() => scrollToSection(item)}
            className="hover:text-[#E04D4D] transition-colors cursor-pointer uppercase"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Download Button - Aligned Right */}
      <button 
        onClick={handleDownload}
        className="flex items-center gap-2 bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#E04D4D] transition-colors cursor-pointer justify-self-end"
      >
        <Download size={14} /> Resume
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F4F4F4] border-b border-black md:hidden flex flex-col p-6 gap-6 text-xs font-bold uppercase tracking-widest text-black shadow-xl">
          {menuItems.map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-left hover:text-[#E04D4D] transition-colors uppercase"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}