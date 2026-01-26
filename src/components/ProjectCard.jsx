import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ title, description, tags, img, repoLink, siteLink }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        className="group relative h-full bg-terminal-black border border-dim-gray hover:border-neon-green transition-colors duration-300 flex flex-col"
        whileHover={{ y: -4 }}
      >
        {/* Cabeçalho do Terminal */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-dim-gray bg-terminal-dark group-hover:bg-neon-green/10 transition-colors">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="font-mono text-xs text-dim-gray group-hover:text-neon-green truncate max-w-[150px]">
            ./{title.replace(/\s+/g, '_').toLowerCase()}.exe
          </div>
        </div>

        {/* Wrapper do Conteúdo para alternar o Modal */}
        <div
          onClick={() => setShowModal(true)}
          className="cursor-pointer flex-grow flex flex-col"
        >
          {/* Imagem */}
          <div className="relative overflow-hidden w-full aspect-video border-b border-dim-gray">
            <div className="absolute inset-0 bg-neon-green/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            {/* Efeito Scanlines */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')] opacity-50 pointer-events-none"></div>
          </div>

          <div className="p-4 flex flex-col flex-grow bg-terminal-black/80">
            <h3 className="text-xl font-bold font-pixel text-white mb-2 group-hover:text-neon-green transition-colors">
              {title}
            </h3>

            <p className="font-mono text-sm text-dim-gray mb-4 line-clamp-3 flex-grow">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-neon-cyan border border-neon-cyan/30 px-2 py-1"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="text-xs font-mono text-dim-gray px-2 py-1">+{tags.length - 3}</span>
              )}
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
              <div className="flex items-center justify-between px-4 py-2 bg-neon-green text-black font-bold font-mono">
                <span>USER_ACCESS: {title.toUpperCase()}</span>
                <button
                  onClick={() => setShowModal(false)}
                  className="hover:bg-black hover:text-neon-green px-2 py-0.5 border border-transparent hover:border-black transition-colors"
                >
                  [X]
                </button>
              </div>

              {/* Corpo do Modal */}
              <div className="p-3 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8 overflow-y-auto custom-scrollbar flex-1">

                <div className="w-full md:w-1/2">
                  <div className="border border-dim-gray p-1 relative group">
                    <img src={img} alt={title} className="w-full h-auto grayscale-0" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')] opacity-20 pointer-events-none"></div>
                  </div>

                  <div className="mt-3 md:mt-6 flex flex-col gap-2 md:gap-4">
                    {siteLink && (
                      <a
                        href={siteLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center px-4 py-1.5 md:py-3 bg-neon-green text-black font-bold font-mono hover:bg-white transition-colors text-xs md:text-base uppercase tracking-wider"
                      >
                        &gt; EXECUTE_PROJECT.EXE
                      </a>
                    )}
                    {repoLink && (
                      <a
                        href={repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center px-4 py-1.5 md:py-3 border border-dim-gray text-dim-gray font-mono hover:border-neon-green hover:text-neon-green transition-colors text-xs md:text-base uppercase tracking-wider"
                      >
                        &gt; VIEW_SOURCE_CODE
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