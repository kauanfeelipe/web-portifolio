// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact'; // Importe a seção de Contato
import Footer from './components/Footer';   // Importe o Rodapé

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact /> {/* Adicione a seção de Contato */}
      </main>
      <Footer /> {/* Adicione o Rodapé */}
    </div>
  );
}

export default App;