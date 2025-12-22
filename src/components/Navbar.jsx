import React, { useState, useEffect } from 'react';

// Ícones para o menu hambúrguer
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `
    fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out
    ${isScrolled || isMenuOpen ? 'glass shadow-2xl' : 'bg-transparent'}
  `;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Nome - apenas em desktop */}
        <div className="hidden md:block text-xl md:text-2xl font-bold font-mono" style={{ color: 'var(--color-text-primary)' }}>
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="link-underline">
            &lt;Kauan Felipe /&gt;
          </a>
        </div>

        {/* Espaço flexível para centralizar o menu mobile */}
        <div className="flex-1 md:hidden"></div>

        {/* Links para Desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#projetos" className="nav-link font-mono text-sm uppercase tracking-wider font-semibold hover:text-white transition-all duration-300" style={{ color: 'var(--color-text-secondary)' }}>
            <span className="text-blue-500 mr-1">01.</span> Projetos
          </a>
          <a href="#sobre" className="nav-link font-mono text-sm uppercase tracking-wider font-semibold hover:text-white transition-all duration-300" style={{ color: 'var(--color-text-secondary)' }}>
            <span className="text-blue-500 mr-1">02.</span> Sobre
          </a>
          <a href="#contato" className="nav-link font-mono text-sm uppercase tracking-wider font-semibold hover:text-white transition-all duration-300" style={{ color: 'var(--color-text-secondary)' }}>
            <span className="text-blue-500 mr-1">03.</span> Contato
          </a>

          <a
            href="/web-portifolio/img/curri_kauanzera.pdf"
            target="_blank"
            className="px-4 py-2 text-sm font-mono text-blue-400 border border-blue-400 rounded hover:bg-blue-400/10 transition-colors"
          >
            Currículo
          </a>
        </div>

        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg glass glass-hover md:hidden"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full flex flex-col items-center justify-center space-y-6 py-8 shadow-2xl border-b border-white/10"
          style={{ backgroundColor: 'var(--color-bg-primary)' }}
        >
          <a
            href="#projetos"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-mono font-bold tracking-wider hover:text-blue-400 transition-colors"
            style={{ color: 'var(--color-text-primary)' }}
          >
            &lt;PROJETOS /&gt;
          </a>
          <a
            href="#sobre"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-mono font-bold tracking-wider hover:text-blue-400 transition-colors"
            style={{ color: 'var(--color-text-primary)' }}
          >
            &lt;SOBRE /&gt;
          </a>
          <a
            href="#contato"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-mono font-bold tracking-wider hover:text-blue-400 transition-colors"
            style={{ color: 'var(--color-text-primary)' }}
          >
            &lt;CONTATO /&gt;
          </a>
          <a
            href="/web-portifolio/img/curri_kauanzera.pdf"
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-3 text-lg font-mono text-blue-400 border border-blue-400 rounded hover:bg-blue-400/10 transition-colors mt-4"
          >
            Currículo
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;