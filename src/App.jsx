import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      <div className="crt-overlay" />
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