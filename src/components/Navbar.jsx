import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

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
    fixed w-full top-0 left-0 z-50 transition-colors duration-300 ease-in-out
    ${isScrolled || isMenuOpen ? 'bg-slate-900 shadow-lg' : 'bg-transparent'}
  `;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-white">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            <TypeAnimation sequence={['<Kauan Felipe />', 2000, '<Desenvolvedor />', 2000]} wrapper="span" speed={50} repeat={Infinity} />
          </a>
        </div>

        {/* Links para Desktop - AQUI FOI O AJUSTE */}
        <div className="hidden md:flex space-x-6">
          <a href="#projetos" className="text-gray-300 hover:text-white transition-colors">Projetos</a>
          <a href="#formacao" className="text-gray-300 hover:text-white transition-colors">Formação</a>
          <a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a>
        </div>

        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown - AQUI FOI O AJUSTE */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900">
          <a href="#projetos" onClick={() => setIsMenuOpen(false)} className="block text-center py-4 text-gray-300 hover:bg-slate-800 transition-colors">Projetos</a>
          <a href="#formacao" onClick={() => setIsMenuOpen(false)} className="block text-center py-4 text-gray-300 hover:bg-slate-800 transition-colors">Formação</a>
          <a href="#contato" onClick={() => setIsMenuOpen(false)} className="block text-center py-4 text-gray-300 hover:bg-slate-800 transition-colors">Contato</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;