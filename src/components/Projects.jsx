import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ScrollReveal, staggerContainer, staggerItem } from './AnimationSystem';

// SEUS DADOS DOS PROJETOS
const projectData = [
  {
    title: 'CF Drones',
    description: 'Homepage desenvolvida para o meu primeiro cliente, a CF Drones — uma empresa especializada em serviços agrícolas com drones. Criei a estrutura, layout e conteúdo principal do site, destacando os serviços, diferenciais e imagens dos drones em operação no campo.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    img: '/web-portifolio/img/cf-drones.png',
    repoLink: 'https://cfagricoladrone.vercel.app/',
    siteLink: 'https://cfagricoladrone.vercel.app/'
  },
  {
        title: 'ctD Valorant API',
        description: 'Este projeto é uma aplicação web desenvolvida para consumir a Valorant API e apresentar dados do jogo de forma visualmente impactante. O objetivo principal foi praticar o consumo de APIs REST, implementação de design responsivo e otimização de performance em React.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        img: '/web-portifolio/img/prj10.png',
        repoLink: 'https://github.com/kauanfeelipe/projeto-valorant',
        siteLink: 'https://kauanfeelipe.github.io/projeto-valorant/'
  },
  {
    title: 'Web Portifólio cs1.6',
    description: 'Portfólio desenvolvido com o tema do jogo Counter-Strike 1.6, utilizando React, JavaScript e CSS. O portfólio é responsivo e possui uma navegação intuitiva.',
    tags: ['React', 'JavaScript', 'CSS'],
    img: '/web-portifolio/img/prj03.png',
    repoLink: 'https://github.com/kauanfeelipe/portifolioo',
    siteLink: 'https://kauanfeelipe.github.io/portifolioo/'
  },
  {
    title: 'Explanatory Translator',
    description: 'a API recebe um texto em português e, usando IA (Gemini), devolve uma análise didática completa: A tradução natural para o inglês. Uma análise gramatical palavra por palavra.Uma lista de erros comuns que brasileiros cometeriam (e como evitar).',
    tags: ['Python', 'FastAPI', 'Docker'],
    img: '/web-portifolio/img/translator.png',
    repoLink: 'https://github.com/kauanfeelipe/explanatory-translator-api',
    siteLink: 'https://github.com/kauanfeelipe/explanatory-translator-api'
  },
    {
        title: 'Study Terminal',
        description: 'Aplicação web com tema terminal, desenvolvida para aprendizado e utilidade na faculdade, permitindo a execução de codigos python e salvar arquivos.',
        tags: ['React', 'Tailwind', 'Firebase'],
        img: '/web-portifolio/img/prj01.jpg',
        repoLink: 'https://github.com/kauanfeelipe/studyTerminal',
        siteLink: 'https://files-terminal.web.app/'
      },
            {
        title: 'Barbearia Agendamentos',
        description: 'Web-Site de agendamentos para uma barbearia, desenvolvido para aprendizado com Flask , Python, Templates Jinja2 HTML, CSS e banco de dados MYSQL.',
        tags: ['Python', 'Flask', 'MySQL'],
        img: '/web-portifolio/img/prj02.jpg',
        repoLink: 'https://github.com/kauanfeelipe/barbearia',
        siteLink: 'https://github.com/kauanfeelipe/barbearia'
      },
      {
        title: 'Técnico Virtual de Redes ',
        description: 'Este projeto foi desenvolvido como trabalho para a matéria de Redes de Computadores do curso de Ciência da Computação. O objetivo era aplicar conceitos teóricos na criação de uma solução prática para um problema relevante.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        img: '/web-portifolio/img/prj9.png',
        repoLink: 'https://github.com/kauanfeelipe/assistente_rede',
        siteLink: 'https://kauanfeelipe.github.io/assistente_rede/'
      },
      {
        title: 'Biblioteca Francesa',
        description: 'Web-site que simula uma Biblioteca, Desenvolvida na faculdade como atividade avaliativa no semestre. Nele pude fixar conhecimentos de JavaScript, HTML, e CSS.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        img: '/web-portifolio/img/prj04.png',
        repoLink: 'https://github.com/kauanfeelipe/biblioteca_francesa',
        siteLink: 'https://github.com/kauanfeelipe/biblioteca_francesa/blob/main/README.md'
      },
      {
        title: 'Simulador de Vendas',
        description: 'Projeto criado com simulação de vendas para uma construtora em um projeto de faculdade. Nele pude fixar conhecimentos de JavaScript, HTML, e CSS.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        img: '/web-portifolio/img/prj05.png',
        repoLink: 'https://github.com/kauanfeelipe/projeto-construtora',
        siteLink: 'https://github.com/kauanfeelipe/projeto-construtora/blob/master/README.md'
      },
      {
        title: 'Game Pedra/Papel/Tesoura',
        description: 'Desenvolvi um jogo de navegador que simula o jogo Pedra, Papel e Tesoura, onde o usuário pode jogar contra a máquina gerando uma jogada aleatória.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        img: '/web-portifolio/img/prj06.png',
        repoLink: 'https://github.com/kauanfeelipe/gameJS-pedra-papel-tesoura',
        siteLink: 'https://game-js-pedra-papel-tesoura.vercel.app/'
      },
      {
        title: 'Calculadora Web',
        description: 'Calculadora web interativa com operações matemáticas básicas, interface intuitiva e responsiva.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        img: '/web-portifolio/img/prj07.png',
        repoLink: 'https://github.com/kauanfeelipe/projeto-calculadora',
        siteLink: 'https://calculadora-omega-five.vercel.app/'
      },
      {
        title: 'Simulador de Dados',
        description: 'Jogo de navegador que simula rolar um dado, pude explorar a IA como material de aprendizado.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        img: '/web-portifolio/img/prj08.png',
        repoLink: 'https://github.com/kauanfeelipe/projeto-jogo-dados',
        siteLink: 'https://projeto-jogo-dados.vercel.app/'
      }
];

// Memoizar o componente ProjectCard para evitar re-renders desnecessários
const MemoizedProjectCard = React.memo(ProjectCard);

function Projects() {
  // Memoizar os dados dos projetos para evitar recriação
  const memoizedProjectData = useMemo(() => projectData, []);

  return (
    <section 
      id="projetos" 
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg-surface)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Meus{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Projetos
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Projetos desenvolvidos utilizando diferentes tecnologias e abordagens.
            </motion.p>
          </div>
        </ScrollReveal>


        {/* Projects Grid - Desktop */}
        <div className="hidden md:block">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {memoizedProjectData.map((proj, index) => (
              <motion.div
                key={proj.title}
                variants={staggerItem}
                custom={index}
              >
                <MemoizedProjectCard {...proj} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Projects Scroll Horizontal - Mobile */}
        <div className="md:hidden">
          <div className="projects-scroll-container">
            <div className="projects-scroll-wrapper">
              {memoizedProjectData.map((proj, index) => (
                <div key={`mobile-${proj.title}`} className="projects-scroll-item">
                  <MemoizedProjectCard {...proj} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Custom Swiper Styles moved to global CSS */}
    </section>
  );
}

export default Projects;