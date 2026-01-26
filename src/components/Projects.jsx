import React, { useMemo } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectData } from '../data/portfolio';

const MemoizedProjectCard = React.memo(ProjectCard);

const projectsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Projects() {
  const memoizedProjectData = useMemo(() => projectData, []);

  return (
    <section id="projetos" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">

        {/* Título da Seção */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-neon-cyan font-mono text-xl md:text-2xl animate-pulse">01.</span>
          <h2 className="text-3xl md:text-5xl font-pixel text-white">
            PROJECTS_DIR
          </h2>
          <div className="flex-grow h-px bg-dim-gray/50 ml-4 relative">
            <div className="absolute top-0 left-0 h-full w-20 bg-neon-cyan/20"></div>
          </div>
        </div>

        {/* Grid/Carrossel de Projetos */}
        <motion.div
          className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3"
          variants={projectsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Container do Carrossel Mobile */}
          <div className="md:hidden flex overflow-x-auto gap-6 pb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neon-green/50">
            {memoizedProjectData.map((proj) => (
              <div key={proj.title} className="min-w-[85vw] sm:min-w-[400px] snap-center">
                <MemoizedProjectCard {...proj} />
              </div>
            ))}
          </div>

          {/* Grid Desktop (Oculto no Mobile) */}
          <div className="hidden md:contents">
            {memoizedProjectData.map((proj) => (
              <motion.div
                key={proj.title}
                variants={itemVariants}
                className="h-full"
              >
                <MemoizedProjectCard {...proj} />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;