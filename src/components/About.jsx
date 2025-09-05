import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, staggerContainer, staggerItem } from './AnimationSystem';
import TechIcons from './TechIcons';

// Dados da sua formação (informações exatas)
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
    period: 'Cursando 2024 até o momento',
  },
  {
    level: 'Curso Técnico',
    course: 'Informática para Internet',
    institution: 'ETEC',
    period: 'Concluído - 2018',
  },
];

// Hard Skills com ícones e cores
const hardSkills = [
  { name: 'Python', color: '#3776ab' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'React', color: '#61dafb' },
  { name: 'HTML', color: '#e34f26' },
  { name: 'CSS', color: '#1572b6' },
  { name: 'Tailwind', color: '#38bdf8' },
  { name: 'Java', color: '#ed8b00' },
  { name: 'Git', color: '#f05032' },
  { name: 'Firebase', color: '#ffca28' },
  { name: 'SQL', color: '#336791' },
  { name: 'FastAPI', color: '#009688' }
];

// Soft Skills
const softSkills = [
  'Trabalho em Equipe', 'Resolução de Problemas', 'Criatividade',
  'Comunicação', 'Agilidade de Aprendizado', 'Capacidade de adaptação',
  'Atendimento ao Cliente', 'Pensamento Crítico'
];



function About() {
  const [activeTab, setActiveTab] = useState('formations');

  return (
    <section 
      id="formacao" 
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Minha{' '}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Jornada
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Uma visão da minha formação acadêmica, habilidades técnicas 
              e evolução como desenvolvedor em formação.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Navigation Tabs */}
        <ScrollReveal>
          <div className="flex justify-center mb-12 px-4 md:px-0">
            <div className="glass p-1 md:p-2 rounded-2xl">
              {[
                { id: 'formations', label: 'Formações', icon: '🎓' },
                { id: 'skills', label: 'Habilidades', icon: '⚡' },
                { id: 'soft-skills', label: 'Competências', icon: '🧠' }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 md:px-6 py-2 md:py-3 rounded-xl font-medium text-xs md:text-base transition-all duration-300 mx-0.5 md:mx-1 ${
                    activeTab === tab.id 
                      ? 'bg-gradient-primary text-white' 
                      : 'hover:bg-white/5'
                  }`}
                  style={activeTab !== tab.id ? { color: 'var(--color-text-primary)' } : {}}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-1 md:mr-2">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Content Sections */}
        <div className="min-h-[600px]">
          {/* Formations Section */}
          {activeTab === 'formations' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h3 
                  className="text-3xl font-bold mb-4"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Formação Acadêmica e Cursos
                </h3>
                <p 
                  className="text-lg"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Minha jornada educacional e desenvolvimento profissional
                </p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {formationData.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="card-interactive p-4 md:p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span 
                        className="text-sm font-medium px-3 py-1 rounded-full"
                        style={{ 
                          backgroundColor: 'var(--color-electric-blue)' + '20',
                          color: 'var(--color-electric-blue)'
                        }}
                      >
                        {item.level}
                      </span>
                      <div className={`w-3 h-3 rounded-full ${
                        item.period.includes('Cursando') ? 'bg-green-400' : 'bg-gray-400'
                      }`} />
                    </div>
                    
                    <h4 
                      className="text-xl font-bold mb-2"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {item.course}
                    </h4>
                    
                    <p 
                      className="text-lg font-medium mb-3"
                      style={{ color: 'var(--color-electric-blue)' }}
                    >
                      {item.institution}
                    </p>
                    
                    <p 
                      className="text-sm"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {item.period}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Skills Section */}
          {activeTab === 'skills' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h3 
                  className="text-3xl font-bold mb-4"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Habilidades Técnicas
                </h3>
                <p 
                  className="text-lg"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Tecnologias e ferramentas que utilizo no desenvolvimento
                </p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {hardSkills.map((skill, index) => {
                  const IconComponent = TechIcons[skill.name];
                  return (
                    <motion.div
                      key={skill.name}
                      variants={staggerItem}
                      className="card-interactive p-3 md:p-4 text-center group"
                      whileHover={{ scale: 1.05, y: -4 }}
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}10, ${skill.color}05)`,
                        border: `1px solid ${skill.color}30`
                      }}
                    >
                      <div className="flex flex-col items-center gap-2">
                        {IconComponent && (
                          <div className="transition-transform duration-300 group-hover:scale-110">
                            <IconComponent />
                          </div>
                        )}
                        <span 
                          className="text-xs md:text-sm font-medium"
                          style={{ color: 'var(--color-text-primary)' }}
                        >
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}

          {/* Soft Skills Section */}
          {activeTab === 'soft-skills' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h3 
                  className="text-3xl font-bold mb-4"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Competências Interpessoais
                </h3>
                <p 
                  className="text-lg"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Habilidades comportamentais que complementam minha expertise técnica
                </p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={staggerItem}
                    className="card-interactive p-4 md:p-6 text-center group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-2xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {['🤝', '🧩', '💡', '💬', '📚', '🔄', '👥', '🎯'][index % 8]}
                    </motion.div>
                    <h4 
                      className="font-semibold text-lg"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {skill}
                    </h4>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;