import React from 'react';

// Ícones para os links
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

function ProjectCard({ title, description, tags, img, repoLink, siteLink }) {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      {/* AJUSTE 3: Imagem com aspect-ratio para manter a proporção */}
      <img src={img} alt={`Imagem do projeto ${title}`} className="w-full aspect-video object-cover" />
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 mb-4 flex-grow">{description}</p>
        
        {/* Tags de Tecnologia */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span key={tag} className="bg-slate-700 text-teal-400 text-xs font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {siteLink && (
            <a href={siteLink} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-teal-400 transition-colors duration-300 flex items-center gap-2">
              <ExternalLinkIcon />
              Ver Site
            </a>
          )}
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-teal-400 transition-colors duration-300 flex items-center gap-2">
              <CodeIcon />
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;