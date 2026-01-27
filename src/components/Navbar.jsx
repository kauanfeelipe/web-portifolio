import React, { useState, useEffect } from 'react';

// Ícones do Menu do Sistema
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-green"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-pink"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
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

  const navLinks = [
    { name: 'projects', href: '#projetos', cmd: './projects.exe' },
    { name: 'about', href: '#sobre', cmd: 'cat about.txt' },
    { name: 'contact', href: '#contato', cmd: 'ssh contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-terminal-black/90 backdrop-blur border-neon-green/30' : 'bg-transparent border-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center font-mono">
        {/* Logo / Prompt do Terminal */}
        <div className="flex items-center gap-2 text-base md:text-lg">
          <span className="text-neon-green">root@kauan:</span>
          <span className="text-neon-cyan">~#</span>
          <span className="animate-flicker">_</span>
        </div>

        {/* Navegação Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 text-sm text-gray-300 hover:text-neon-green transition-colors hover:animate-glitch hover:text-glow-green"
            >
              <span className="opacity-0 group-hover:opacity-100 text-neon-pink">&gt;</span>
              <span className="group-hover:underline decoration-neon-green decoration-2 underline-offset-4">
                {link.cmd}
              </span>
            </a>
          ))}

          <a
            href="/web-portifolio/img/curri_kauanzera.pdf"
            target="_blank"
            className="ml-4 px-3 py-1 border border-neon-green/50 text-neon-green text-xs hover:bg-neon-green hover:text-black transition-all"
          >
            [ DOWNLOAD_CV ]
          </a>
        </div>

        {/* Toggle do Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white/5 rounded transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Overlay do Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-terminal-black border-b border-neon-green/30 shadow-2xl p-4 flex flex-col space-y-4 animate-in slide-in-from-top-4">
          <div className="text-xs text-dim-gray mb-2 border-b border-dim-gray pb-2 uppercase tracking-widest">
            System Navigation
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block font-mono text-lg text-white hover:text-neon-green hover:translate-x-2 transition-transform"
            >
              <span className="text-neon-cyan mr-2">$</span>
              {link.cmd}
            </a>
          ))}
          <a
            href="/web-portifolio/img/curri_kauanzera.pdf"
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-center mt-4 py-2 border border-dashed border-dim-gray text-dim-gray hover:text-neon-green hover:border-neon-green transition-colors font-pixel text-xl"
          >
            [ DOWNLOAD_CV ]
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;