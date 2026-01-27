import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-terminal-black">
      <MatrixBackground />
      <div className="crt-overlay pointer-events-none fixed inset-0 z-[100]" />
      <Navbar />
      <main className="relative z-10 pt-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="projetos">
          <Projects />
        </section>
        <section id="sobre">
          <About />
        </section>
        <section id="contato">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;