import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="relative z-10 pt-20 flex-1">
        <Hero />
        <Marquee />
        <Projects />
        <Achievements />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
