import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="h-auto flex items-start justify-center relative overflow-hidden pt-12 md:pt-24 lg:pt-40 pb-20 md:pb-32">

      {/* Efeito de Fundo Binário/Ruído */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 font-mono text-xs text-neon-green">
          01001000 01100101 01101100 01101100 01101111
        </div>
        <div className="absolute bottom-10 right-10 font-mono text-xs text-neon-green">
          01010111 01101111 01110010 01101100 01100100
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        {/* Conteúdo de Texto */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 text-left">

          <div className="font-mono text- neon-green text-sm md:text-base flex flex-col gap-1 mt-4 md:mt-0">
            <TypeAnimation
              sequence={[
                '> SYSTEM.INIT()',
                500,
                '> LOADING MODULES...',
                500,
                '> USER DETECTED: VISITOR',
                500,
                '> WELCOME, USER.',
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={0}
              className="text-dim-gray text-xs md:text-base"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-pixel text-white leading-tight whitespace-nowrap">
            &lt;Kauan <span className="text-neon-green text-glow-green">Felipe</span> /&gt;
          </h1>

          <div className="flex items-center gap-3 font-mono text-neon-cyan text-sm md:text-xl border-l-4 border-neon-cyan pl-4">
            <span>[</span>
            <TypeAnimation
              sequence={[
                'PROGRAMMER',
                2000,
                'FULLSTACK_DEV',
                2000,
                'WEB_DEVELOPER',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <span>]</span>
          </div>

          <p className="font-mono text-gray-400 max-w-lg leading-relaxed text-xs md:text-base">
            // Transforming ideas into digital reality.
            <br />
            // Combining <span className="text-amber-alert">logic</span> and <span className="text-neon-pink">creativity</span> to build robust systems.
          </p>

          <div className="flex flex-wrap gap-6 md:gap-4 mt-2 md:mt-4">
            <a
              href="/web-portifolio/img/curri_kauanzera.pdf"
              target="_blank"
              className="group relative px-4 py-2 md:px-6 md:py-3 bg-transparent border border-neon-green text-neon-green font-mono text-xs md:text-base uppercase tracking-wider hover:bg-neon-green hover:text-black transition-all duration-300"
            >
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-neon-green group-hover:bg-neon-green transition-all"></span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-neon-green group-hover:bg-neon-green transition-all"></span>
              Download_CV
            </a>

            <a
              href="https://github.com/kauanfeelipe"
              target="_blank"
              className="group px-4 py-2 md:px-6 md:py-3 bg-transparent border border-dim-gray text-dim-gray font-mono text-xs md:text-base uppercase tracking-wider hover:border-white hover:text-white transition-all duration-300"
            >
              :: GITHUB_REPO
            </a>
          </div>
        </div>

        {/* Imagem de Perfil com Glitch */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="relative w-48 h-48 md:w-80 md:h-80 group">

            {/* Camadas de Glitch */}
            <div className="absolute inset-0 bg-neon-green opacity-20 translate-x-1 translate-y-1 group-hover:animate-glitch"></div>
            <div className="absolute inset-0 bg-neon-pink opacity-20 -translate-x-1 -translate-y-1 group-hover:animate-glitch animation-delay-500"></div>

            {/* Container Principal da Imagem */}
            <div className="relative w-full h-full border-2 border-dim-gray bg-terminal-dark overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <img
                src="/web-portifolio/img/minha-foto.png"
                alt="Kauan Felipe Profile"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay de Scanline */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')] opacity-20 pointer-events-none"></div>
            </div>

            {/* Elementos Decorativos */}
            <div className="absolute -bottom-4 -right-4 font-mono text-xs text-dim-gray">
              IMG_001.JPG
            </div>
            <div className="absolute -top-4 -left-4 font-mono text-xs text-neon-green">
              [ LOADED ]
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;