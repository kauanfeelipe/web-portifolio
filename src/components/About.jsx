import React from 'react';

// Dados da sua formação (baseado no seu código anterior)
const formationData = [
  {
    level: 'Bacharelado',
    course: 'Ciência da Computação',
    institution: 'UNIFRAN',
    period: 'Cursando 2024 - 2027',
  },
  {
    level: 'Curso Online',
    course: 'ReactJS / Tailwind CSS',
    institution: 'Udemy',
    period: 'Cursando - 2025',
  },
  {
    level: 'Curso Online',
    course: 'Python do zero ao Hacking Avançado',
    institution: 'Ackerdemy',
    period: 'Cursando - 2025',
  },
  {
    level: 'Curso Técnico',
    course: 'Informática para Internet',
    institution: 'ETEC',
    period: 'Concluído - 2018',
  },
];

// Suas Hard Skills
const hardSkills = [
  'Python', 'Java', 'JavaScript', 'SQL', 'Firebase', 'FastAPI ',  'HTML', 'CSS', 'React', 'Tailwind', 'Git', 
];

// Suas Soft Skills
const softSkills = [
  'Trabalho em Equipe', 'Resolução de Problemas', 'Criatividade',
  'Comunicação', 'Agilidade de Aprendizado', 'Capacidade de adaptação',
  'Atendimento ao Cliente'
];

function About() {
  return (
    // AJUSTE 1: Padding vertical responsivo (menor no mobile, maior no desktop)
    <section id="formacao" className="bg-slate-900 pt-6 pb-20 lg:py-20">
      <div className="container mx-auto px-6">
        {/* AJUSTE 2: Tamanho da fonte responsivo (maior no desktop) */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-white mb-16">
          Formação
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Coluna da Esquerda: Cursos */}
          <div>
            <div className="space-y-6">
              {formationData.map((item, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-md">
                  <p className="text-teal-400 font-semibold">{item.level}</p>
                  <h4 className="text-xl font-bold text-white mt-1">{item.course}</h4>
                  <p className="text-slate-400">{item.institution}</p>
                  <p className="text-slate-500 text-sm mt-2">{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna da Direita: Habilidades */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-10 text-center">Habilidades</h3>
            
            <div>
              <h4 className="text-2xl font-semibold text-white mb-4">Hard Skills</h4>
              <div className="flex flex-wrap gap-3">
                {hardSkills.map(skill => (
                  <span key={skill} className="bg-slate-700 text-white font-medium px-4 py-2 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-2xl font-semibold text-white mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-3">
                {softSkills.map(skill => (
                  <span key={skill} className="bg-slate-700 text-white font-medium px-4 py-2 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default About;