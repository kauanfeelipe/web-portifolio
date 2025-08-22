// src/components/Footer.jsx
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-6">
      <div className="container mx-auto px-6 text-center text-slate-400">
        <p>&copy; {currentYear} Kauan Felipe. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;