import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { formationData, hardSkills, softSkills } from '../data/portfolio';

function About() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section id="sobre" className="py-10 md:py-20 relative bg-terminal-black">
      <div className="container mx-auto px-4 md:px-6">

        <div className="border border-dim-gray p-1 bg-terminal-dark/50">

          {/* Cabeçalho da Janela */}
          <div className="bg-dim-gray/20 border-b border-dim-gray px-4 py-2 flex items-center justify-between">
            <span className="font-mono text-xs text-neon-green">root@system:~/about_me</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full border border-dim-gray"></div>
              <div className="w-3 h-3 rounded-full border border-dim-gray"></div>
            </div>
          </div>

          <div className="p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8">

            {/* Barra Lateral / Abas */}
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <button
                onClick={() => setActiveTab('skills')}
                className={`text-left font-mono px-4 py-2 border-l-2 transition-all ${activeTab === 'skills'
                  ? 'border-neon-green text-neon-green bg-neon-green/10'
                  : 'border-dim-gray text-dim-gray hover:text-white'
                  }`}
              >
                [ HARDWARE_SKILLS ]
              </button>
              <button
                onClick={() => setActiveTab('formations')}
                className={`text-left font-mono px-4 py-2 border-l-2 transition-all ${activeTab === 'formations'
                  ? 'border-neon-cyan text-neon-cyan bg-neon-cyan/10'
                  : 'border-dim-gray text-dim-gray hover:text-white'
                  }`}
              >
                [ KERNEL_LOGS ]
              </button>
              <button
                onClick={() => setActiveTab('soft-skills')}
                className={`text-left font-mono px-4 py-2 border-l-2 transition-all ${activeTab === 'soft-skills'
                  ? 'border-neon-pink text-neon-pink bg-neon-pink/10'
                  : 'border-dim-gray text-dim-gray hover:text-white'
                  }`}
              >
                [ RUNNING_PROCESSES ]
              </button>
            </div>

            {/* Exibição de Conteúdo */}
            <div className="w-full md:w-3/4 min-h-[300px] md:min-h-[400px]">
              <AnimatePresence mode="wait">

                {/* SKILLS */}
                {activeTab === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {hardSkills.map((skill) => (
                      <div key={skill.name} className="font-mono text-sm">
                        <div className="flex justify-between mb-1 text-white">
                          <span>{skill.name}</span>
                          <span className="text-neon-green">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-dim-gray relative overflow-hidden">
                          <motion.div
                            className="absolute top-0 left-0 h-full bg-neon-green"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    ))}

                    {/* Grid de Ícones Tech (Decorativo) */}
                    <div className="col-span-1 md:col-span-2 mt-8 pt-8 border-t border-dim-gray border-dashed">
                      <div className="flex flex-wrap gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="text-xs text-dim-gray w-full text-center">
                           // ARCHITECTURE: X64_BASED_SYSTEM
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* FORMATIONS */}
                {activeTab === 'formations' && (
                  <motion.div
                    key="formations"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-4 font-mono text-sm"
                  >
                    {formationData.map((item, index) => (
                      <div key={index} className="border-l border-dim-gray pl-4 pb-4">
                        <div className="text-neon-cyan mb-1">
                          [{item.period}] <span className="text-white font-bold">{item.institution}</span>
                        </div>
                        <div className="text-dim-gray">
                          &gt; {item.level} in <span className="text-white">{item.course}</span>
                        </div>
                        <div className="text-xs text-neon-pink mt-1">STATUS: {item.status}</div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* SOFT SKILLS */}
                {activeTab === 'soft-skills' && (
                  <motion.div
                    key="soft-skills"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="bg-black p-4 font-mono text-sm text-dim-gray border border-dim-gray">
                      <div className="mb-2 border-b border-dim-gray pb-2">Top Processes</div>
                      <table className="w-full text-left">
                        <thead>
                          <tr className="text-neon-pink">
                            <th className="pb-2">PID</th>
                            <th className="pb-2">Image Name</th>
                            <th className="pb-2 text-right">Mem Usage</th>
                          </tr>
                        </thead>
                        <tbody>
                          {softSkills.map((process, idx) => (
                            <tr key={idx} className="hover:bg-white/5 hover:text-white transition-colors">
                              <td className="py-1 text-neon-cyan">{1000 + idx}</td>
                              <td className="py-1">{process}</td>
                              <td className="py-1 text-right text-neon-green">{(Math.random() * 50 + 10).toFixed(1)} MB</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;