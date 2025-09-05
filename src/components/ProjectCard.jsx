import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveCard } from './AnimationSystem';

// Ícones para os links
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

function ProjectCard({ title, description, tags, img, repoLink, siteLink }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        className="group relative h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Main Card */}
        <div 
          className="card-interactive h-full flex flex-col overflow-hidden relative cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          {/* Gradient Border Animation */}
          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm" />
          
          {/* Card Content */}
          <div className="relative z-10 h-full flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
            {/* Image Container with Overlay */}
            <div className="relative overflow-hidden">
              <motion.img 
                src={img} 
                alt={`Projeto ${title}`}
                className="w-full aspect-video object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Floating Action Buttons */}
              <motion.div
                className="absolute top-4 right-4 flex gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0, 
                  y: isHovered ? 0 : -20 
                }}
                transition={{ duration: 0.3 }}
              >
                {siteLink && (
                  <motion.a
                    href={siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-2 rounded-lg hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLinkIcon />
                  </motion.a>
                )}
                {repoLink && (
                  <motion.a
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-2 rounded-lg hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <CodeIcon />
                  </motion.a>
                )}
              </motion.div>

              {/* Tech Stack Preview */}
              <motion.div
                className="absolute bottom-4 left-4 flex gap-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0, 
                  y: isHovered ? 0 : 20 
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {tags.slice(0, 3).map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="glass px-2 py-1 text-xs font-mono font-semibold rounded"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Title */}
              <motion.h3 
                className="text-xl lg:text-2xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent"
                layout
              >
                {title}
              </motion.h3>

              {/* Description */}
              <motion.p 
                className="text-sm leading-relaxed mb-4 flex-grow"
                style={{ color: 'var(--color-text-secondary)' }}
                layout
              >
                {description}
              </motion.p>

              {/* Tech Tags */}
              <motion.div 
                className="flex flex-wrap gap-2"
                layout
              >
                {tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium font-mono"
                    style={{
                      background: 'var(--glass-bg)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--color-electric-blue)'
                    }}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Hover Effect Indicator */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
        </div>
      </motion.div>

      {/* Modal Preview */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            {/* Modal Content */}
            <motion.div
              className="relative z-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="card-interactive p-0 m-0">
                {/* Header */}
                <div className="relative">
                  <img 
                    src={img} 
                    alt={`Projeto ${title}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 glass p-2 rounded-lg hover:scale-110 transition-transform"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                    {title}
                  </h2>
                  
                  <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {description}
                  </p>

                  {/* Enhanced Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                      Tecnologias Utilizadas
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          className="px-4 py-2 rounded-lg text-sm font-medium"
                          style={{
                            background: 'var(--gradient-primary)',
                            color: 'white'
                          }}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {siteLink && (
                      <motion.a
                        href={siteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-1 justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLinkIcon />
                        Ver Projeto
                      </motion.a>
                    )}
                    {repoLink && (
                      <motion.a
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex-1 justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <CodeIcon />
                        Ver Código
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectCard;