import React from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <Navbar />
      <main>
        <div id="home">
          <LandingPage />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="education">
          <Education />
        </div>
      </main>
      {/* Footer acts as the Contact section */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;