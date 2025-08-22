// src/components/Contact.jsx
import React from 'react';

// Reutilizando os ícones que já definimos em outros componentes
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);


function Contact() {
  return (
    <section id="contato" className="bg-slate-950 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Entre em Contato
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
          Estou sempre aberto a novas oportunidades, projetos e ideias. Vamos conversar!
        </p>
        
        <a 
          href="mailto:kauan_nup@outlook.com" 
          className="inline-block bg-teal-500 text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-teal-600 transition-colors duration-300 mb-10"
        >
          Mande um E-mail
        </a>

        {/* Links Sociais */}
        <div className="flex justify-center gap-6">
          <a href="https://github.com/kauanfeelipe" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/kauanfeelipe/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;