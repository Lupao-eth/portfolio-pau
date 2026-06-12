import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F4F4F4] bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] p-6 md:p-12 font-primary border-t border-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Contact Section */}
        <div className="space-y-3 text-sm">
          <a href="tel:+639193597428" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
            <Phone size={16} /> +63 919 359 7428
          </a>
          <a href="mailto:paulosaclolo0514@gmail.com" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
            <Mail size={16} /> paulosaclolo0514@gmail.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/in/paulo-saclolo-267048416/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600 transition-colors flex items-center justify-center"
          >
            {/* LinkedIn Icon SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.251-.129.602-.129.954v5.413h-3.554s.05-8.736 0-9.646h3.554v1.348c.421-.649 1.175-1.574 2.857-1.574 2.084 0 3.642 1.362 3.642 4.292v5.58zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.956.77-1.708 1.957-1.708 1.188 0 1.914.752 1.939 1.708 0 .949-.751 1.707-1.981 1.707zm1.946 11.019H3.391V9.806h3.892v10.646zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z"/>
            </svg>
          </a>
          <a 
            href="https://discord.gg/m9JBSFjfY" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-indigo-600 transition-colors flex items-center justify-center"
          >
            {/* Discord Icon SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.579.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.972.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.007-.128.044.044 0 0 1 .038-.022c.125.057.25.114.375.166a.077.077 0 0 1 .063.032c.708.324 1.455.62 2.223.864a.075.075 0 0 0 .086-.032 17.59 17.59 0 0 0 5.626 0 .075.075 0 0 0 .086.032c.767-.244 1.514-.54 2.222-.864a.078.078 0 0 1 .064-.032c.123.052.248.109.373.166a.046.046 0 0 1 .038.022.077.077 0 0 1-.007.128 13.09 13.09 0 0 1-1.872.892.077.077 0 0 0-.041.106c.36.698.771 1.362 1.225 1.972a.077.077 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.507-5.174-.834-9.628-3.645-13.658a.066.066 0 0 0-.032-.027zM8.02 15.332c-1.18 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.176 1.095 2.156 2.418 0 1.334-.956 2.419-2.156 2.419zm7.975 0c-1.18 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.176 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-500">
        <p>© 2026 PAULO SACLOLO. ALL RIGHTS RESERVED</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <div className="w-2 h-2 bg-red-500"></div>
          <span>BUILT WITH REACT & TAILWIND</span>
        </div>
      </div>
    </footer>
  );
}