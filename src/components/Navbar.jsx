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
        <div className="hidden md:flex space-x-8">
          <a href="#projetos" className="link-underline font-medium" style={{ color: 'var(--color-text-secondary)' }}>
            Projetos
          </a>
          <a href="#formacao" className="link-underline font-medium" style={{ color: 'var(--color-text-secondary)' }}>
            Jornada
          </a>
          <a href="#contato" className="link-underline font-medium" style={{ color: 'var(--color-text-secondary)' }}>
            Contato
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
        <div className="md:hidden glass border-t border-white/10">
          <a 
            href="#projetos" 
            onClick={() => setIsMenuOpen(false)} 
            className="block text-center py-4 font-medium transition-colors hover:bg-white/5"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Projetos
          </a>
          <a 
            href="#formacao" 
            onClick={() => setIsMenuOpen(false)} 
            className="block text-center py-4 font-medium transition-colors hover:bg-white/5"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Jornada
          </a>
          <a 
            href="#contato" 
            onClick={() => setIsMenuOpen(false)} 
            className="block text-center py-4 font-medium transition-colors hover:bg-white/5"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Contato
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;