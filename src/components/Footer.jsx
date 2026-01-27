import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terminal-black/90 backdrop-blur-sm border-t border-dim-gray py-4 font-mono text-xs text-dim-gray relative z-10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-2">

        {/* Left: Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
          <span className="text-neon-cyan">root@kauan:~$</span>
          <span>&copy; {currentYear} Kauan Felipe. All rights reserved.</span>
        </div>

        {/* Right: Mock System Stats */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs">
          <span>MEM_USAGE: {(Math.random() * 40 + 20).toFixed(1)}%</span>
          <span>EXIT_CODE: 0 (SUCCESS)</span>
          <span className="animate-pulse text-neon-green">ONLINE</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;