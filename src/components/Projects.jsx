import React from 'react';
import ProjectCard from './ProjectCard';

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// SEUS DADOS DOS PROJETOS
const projectData = [
    {
        title: 'Study Terminal',
        description: 'Aplicação web com tema terminal, desenvolvida para aprendizado e utilidade na faculdade, permitindo a execução de codigos python e salvar arquivos.',
        tags: ['React', 'Tailwind', 'Firebase'],
        img: '/img/prj01.jpg',
        repoLink: 'https://github.com/kauanfeelipe/studyTerminal',
        siteLink: 'https://files-terminal.web.app/'
      },
      {
        title: 'Web Portifólio cs1.6',
        description: 'Portfólio desenvolvido com o tema do jogo Counter-Strike 1.6, utilizando React, JavaScript e CSS. O portfólio é responsivo e possui uma navegação intuitiva.',
        tags: ['React', 'JavaScript', 'CSS'],
        img: '/img/prj03.png',
        repoLink: 'https://github.com/kauanfeelipe/portifolioo',
        siteLink: 'https://kauanfeelipe.github.io/portifolioo/'
      },
            {
        title: 'Barbearia Agendamentos',
        description: 'Web-Site de agendamentos para uma barbearia, desenvolvido para aprendizado com Flask , Python, Templates Jinja2 HTML, CSS e banco de dados MYSQL.',
        tags: ['Python', 'Flask', 'MySQL'],
        img: '/img/prj02.jpg',
        repoLink: 'https://github.com/kauanfeelipe/barbearia',
        siteLink: 'https://github.com/kauanfeelipe/barbearia'
      },
      {
        title: 'Técnico Virtual de Redes ',
        description: 'Este projeto foi desenvolvido como trabalho para a matéria de Redes de Computadores do curso de Ciência da Computação. O objetivo era aplicar conceitos teóricos na criação de uma solução prática para um problema relevante.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        img: '/img/prj9.png',
        repoLink: 'https://github.com/kauanfeelipe/assistente_rede',
        siteLink: 'https://kauanfeelipe.github.io/assistente_rede/'
      },
      {
        title: 'Biblioteca Francesa',
        description: 'Web-site que simula uma Biblioteca, Desenvolvida na faculdade como atividade avaliativa no semestre. Nele pude fixar conhecimentos de JavaScript, HTML, e CSS.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        img: '/img/prj04.png',
        repoLink: 'https://github.com/kauanfeelipe/biblioteca_francesa',
        siteLink: 'https://github.com/kauanfeelipe/biblioteca_francesa/blob/main/README.md'
      },
      {
        title: 'Simulador de Vendas',
        description: 'Projeto criado com simulação de vendas para uma construtora em um projeto de faculdade. Nele pude fixar conhecimentos de JavaScript, HTML, e CSS.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        img: '/img/prj05.png',
        repoLink: 'https://github.com/kauanfeelipe/projeto-construtora',
        siteLink: 'https://github.com/kauanfeelipe/projeto-construtora/blob/master/README.md'
      },
      {
        title: 'Game Pedra/Papel/Tesoura',
        description: 'Desenvolvi um jogo de navegador que simula o jogo Pedra, Papel e Tesoura, onde o usuário pode jogar contra a máquina gerando uma jogada aleatória.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        img: '/img/prj06.png',
        repoLink: 'https://github.com/kauanfeelipe/gameJS-pedra-papel-tesoura',
        siteLink: 'https://game-js-pedra-papel-tesoura.vercel.app/'
      },
      {
        title: 'Calculadora Web',
        description: 'Calculadora web interativa com operações matemáticas básicas, interface intuitiva e responsiva.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        img: '/img/prj07.png',
        repoLink: 'https://github.com/kauanfeelipe/projeto-calculadora',
        siteLink: 'https://calculadora-omega-five.vercel.app/'
      },
      {
        title: 'Simulador de Dados',
        description: 'Jogo de navegador que simula rolar um dado, pude explorar a IA como material de aprendizado.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        img: '/img/prj08.png',
        repoLink: 'https://github.com/kauanfeelipe/projeto-jogo-dados',
        siteLink: 'https://projeto-jogo-dados.vercel.app/'
      }
];

function Projects() {
  return (
    <section id="projetos" className="bg-slate-950 pt-20 pb-8 md:pb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          Meus Projetos
        </h2>

        {/* Grid para Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((proj) => (
            <ProjectCard key={proj.title} {...proj} />
          ))}
        </div>

        {/* Carrossel para Mobile */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={25}
            slidesPerView={'auto'}
            centeredSlides={true}
            pagination={{ clickable: true }}
            className="pb-10"
          >
            {projectData.map((proj) => (
              // AQUI ESTÁ A CORREÇÃO: Garantindo que o style com a largura está presente
              <SwiperSlide key={proj.title} style={{ width: '100%', height: 'auto' }}>
                <div className='h-full'>
                  <ProjectCard {...proj} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Projects;