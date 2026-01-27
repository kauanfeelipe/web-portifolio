import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ title, description, tags, img, repoLink, siteLink }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        className="group relative h-full flex flex-col transition-all duration-300 bg-dim-gray clip-path-cyberpunk p-[1px] hover:bg-neon-green/50"
        whileHover={{ y: -4 }}
      >
        {/* Inner Content - Relative to keep layout flow */}
        <div className="relative flex flex-col h-full w-full bg-terminal-black/90 backdrop-blur-sm clip-path-cyberpunk overflow-hidden">

          {/* Cabeçalho do Terminal */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-dim-gray/50 bg-terminal-dark/50 group-hover:bg-neon-green/5 transition-colors">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-dim-gray group-hover:bg-red-500 transition-colors"></div>
              <div className="w-2 h-2 rounded-full bg-dim-gray group-hover:bg-yellow-500 transition-colors"></div>
              <div className="w-2 h-2 rounded-full bg-dim-gray group-hover:bg-green-500 transition-colors"></div>
            </div>
            <div className="font-mono text-[10px] text-dim-gray group-hover:text-neon-green truncate max-w-[150px] tracking-wider uppercase">
              ./{title.replace(/\s+/g, '_').toLowerCase()}.exe
            </div>
          </div>

          {/* Wrapper do Conteúdo para alternar o Modal */}
          <div
            onClick={() => setShowModal(true)}
            className="cursor-pointer flex-grow flex flex-col relative"
          >
            {/* Imagem */}
            <div className="relative overflow-hidden w-full aspect-video border-b border-dim-gray/30 group-hover:border-neon-green/30 transition-colors">
              <div className="absolute inset-0 bg-neon-green/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
              {/* Glitch Overlay on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 animate-glitch pointer-events-none bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" style={{ backgroundSize: '200% 100%' }}></div>

              {/* Efeito Scanlines */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')] opacity-50 pointer-events-none"></div>
            </div>

            <div className="p-4 flex flex-col flex-grow bg-transparent relative">
              {/* Tech Decoration Lines */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-dim-gray/30 group-hover:border-neon-green/50 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-dim-gray/30 group-hover:border-neon-green/50 transition-colors"></div>

              <h3 className="text-xl font-bold font-pixel text-white mb-2 group-hover:text-neon-green transition-colors flex items-center gap-2">
                <span className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">&gt;</span>
                {title}
              </h3>

              <p className="font-mono text-sm text-dim-gray mb-4 line-clamp-3 flex-grow group-hover:text-gray-400 transition-colors">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono text-neon-cyan/70 border border-neon-cyan/20 px-2 py-1 uppercase tracking-wider group-hover:border-neon-cyan/50 group-hover:text-neon-cyan transition-colors"
                  >
                    {tag}
                  </span>
                ))}
                {tags.length > 3 && (
                  <span className="text-[10px] font-mono text-dim-gray px-2 py-1">+{tags.length - 3}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>


      {/* MODAL POPUP - Estilo Retro */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-2 md:p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="w-full max-w-4xl bg-terminal-black border border-neon-green shadow-lg flex flex-col max-h-[90vh] md:max-h-[80vh]"
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cabeçalho do Modal */}
              <div className="flex items-center justify-between px-3 py-1 md:px-4 md:py-2 bg-neon-green text-black font-bold font-mono">
                <span className="text-[10px] md:text-base truncate mr-2">USER_ACCESS: {title.toUpperCase()}</span>
                <button
                  onClick={() => setShowModal(false)}
                  className="hover:bg-black hover:text-neon-green px-1.5 md:px-2 py-0 border border-transparent hover:border-black transition-colors text-xs md:text-base"
                >
                  [X]
                </button>
              </div>

              {/* Corpo do Modal */}
              <div className="p-3 md:p-8 flex flex-col md:flex-row gap-3 md:gap-8 overflow-y-auto custom-scrollbar flex-1">

                <div className="w-full md:w-1/2">
                  <div className="border border-dim-gray p-1 relative group">
                    <img src={img} alt={title} className="w-full h-auto grayscale-0" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')] opacity-20 pointer-events-none"></div>
                  </div>

                  <div className="mt-3 md:mt-6 flex flex-row md:flex-col gap-2 md:gap-4">
                    {siteLink && (
                      <a
                        href={siteLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center px-2 py-2 md:px-4 md:py-3 bg-neon-green text-black font-bold font-mono hover:bg-white transition-colors text-[10px] sm:text-xs md:text-base uppercase tracking-wider whitespace-nowrap"
                      >
                        <span className="block sm:hidden">&gt; EXECUTE</span>
                        <span className="hidden sm:block">&gt; EXECUTE_PROJECT.EXE</span>
                      </a>
                    )}
                    {repoLink && (
                      <a
                        href={repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center px-2 py-2 md:px-4 md:py-3 border border-dim-gray text-dim-gray font-mono hover:border-neon-green hover:text-neon-green transition-colors text-[10px] sm:text-xs md:text-base uppercase tracking-wider whitespace-nowrap"
                      >
                        <span className="block sm:hidden">&gt; SOURCE</span>
                        <span className="hidden sm:block">&gt; VIEW_SOURCE_CODE</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col">
                  <h2 className="text-2xl md:text-3xl font-pixel text-white mb-3 md:mb-4">{title}</h2>
                  <p className="font-mono text-dim-gray leading-relaxed mb-4 text-sm md:text-base">
                    {description}
                  </p>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;