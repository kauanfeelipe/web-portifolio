import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terminal-black border-t border-dim-gray py-4 font-mono text-xs text-dim-gray">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-2">

        {/* Left: Copyright */}
        <div className="flex items-center gap-2">
          <span className="text-neon-cyan">root@kauan:~$</span>
          <span>&copy; {currentYear} Kauan Felipe. All rights reserved.</span>
        </div>

        {/* Right: Mock System Stats */}
        <div className="flex gap-4">
          <span>MEM_USAGE: {(Math.random() * 40 + 20).toFixed(1)}%</span>
          <span>EXIT_CODE: 0 (SUCCESS)</span>
          <span className="animate-pulse text-neon-green">ONLINE</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;