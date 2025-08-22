import React from 'react';
import profileImage from '/minha-foto.png';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);

function Hero() {
  const primaryBtnClasses = "bg-teal-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-teal-600 transition-colors duration-300 flex items-center gap-2 text-sm";
  const secondaryBtnClasses = "bg-slate-700 text-white font-semibold py-2 px-5 rounded-lg hover:bg-slate-600 transition-colors duration-300 flex items-center gap-2 text-sm";

  return (
    <section id="home" className="min-h-screen flex items-center bg-slate-950 pt-24 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Kauan Felipe</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-400 mt-2">Desenvolvedor em Formação</h2>

            <div className="md:hidden my-8">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-600 rounded-full blur-xl opacity-70"></div>
                <img src={profileImage} alt="Foto de Kauan Felipe" className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl" />
              </div>
            </div>

            <p className="text-slate-300 mt-6 text-lg max-w-xl mx-auto md:mx-0">
              Entusiasmado por transformar ideias em soluções reais, unindo criatividade e habilidades técnicas para desenvolver projetos inovadores. Atualmente curso Ciência da Computação na UNIFRAN e estou sempre em busca de novos desafios que me permitam evoluir profissionalmente e expandir meus conhecimentos.
            </p>

            {/* Container dos botões */}
            <div className="mt-8">
              {/* LAYOUT PARA MOBILE (Triângulo) - Visível apenas no mobile */}
              <div className="block md:hidden">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex gap-3">
                    <a href="https://github.com/kauanfeelipe" target="_blank" rel="noopener noreferrer" className={secondaryBtnClasses}>
                      <GithubIcon /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/kauanfeelipe/" target="_blank" rel="noopener noreferrer" className={secondaryBtnClasses}>
                      <LinkedinIcon /> LinkedIn
                    </a>
                  </div>
                  <div>
                    <a href="/web-portifolio/curri_kauanzera.pdf" target="_blank" rel="noopener noreferrer" className={primaryBtnClasses}>
                      <DocumentIcon /> Currículo
                    </a>
                  </div>
                </div>
              </div>

              {/* LAYOUT PARA DESKTOP (Linha única) - Visível apenas no desktop */}
              <div className="hidden md:flex justify-start gap-4">
                <a href="/curri_kauanzera.pdf" target="_blank" rel="noopener noreferrer" className={primaryBtnClasses}>
                  <DocumentIcon /> Currículo
                </a>
                <a href="https://github.com/kauanfeelipe" target="_blank" rel="noopener noreferrer" className={secondaryBtnClasses}>
                  <GithubIcon /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/kauanfeelipe/" target="_blank" rel="noopener noreferrer" className={secondaryBtnClasses}>
                  <LinkedinIcon /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Imagem (Escondida no mobile) */}
          <div className="hidden md:flex md:w-1/2 justify-center mt-10 md:mt-0">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-600 rounded-full blur-xl opacity-70"></div>
              <img src="/minha-foto.png" alt="Foto de Kauan Felipe" className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;