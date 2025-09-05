import React from 'react';
import { motion } from 'framer-motion';
import { 
  FloatingParticles, 
  ScrollReveal, 
  MagneticButton, 
  GlitchText, 
  TypewriterText,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem
} from './AnimationSystem';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden pt-32 xs:pt-28 sm:pt-24 md:pt-28 lg:pt-20" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Column - Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Name with Glitch Effect */}
            <motion.div variants={staggerItem}>
              <GlitchText className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                <span style={{ 
                  background: 'var(--gradient-primary)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Kauan Felipe
                </span>
              </GlitchText>
            </motion.div>

            {/* Animated Subtitle */}
            <motion.div 
              variants={staggerItem}
              className="mt-4 text-xl md:text-2xl font-semibold"
              style={{ color: 'var(--color-electric-blue)' }}
            >
              <TypewriterText 
                text="Desenvolvedor em Formação" 
                delay={500}
                speed={50}
              />
            </motion.div>

            {/* Mobile Photo */}
            <motion.div 
              variants={staggerItem}
              className="lg:hidden my-8 flex justify-center"
            >
              <div className="relative">
                <motion.div 
                  className="w-56 h-56 rounded-full overflow-hidden relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Subtle Border */}
                  <div className="absolute inset-0 rounded-full p-1">
                    <div 
                      className="w-full h-full rounded-full overflow-hidden"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(14, 165, 233, 0.3))',
                        padding: '2px'
                      }}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
                        <img 
                          src='/web-portifolio/img/minha-foto.png' 
                          alt="Kauan Felipe" 
                          className="w-full h-full object-cover"
                        />
                      </div>
              </div>
            </div>

                  {/* Subtle Glow Effect */}
                  <div 
                    className="absolute -inset-2 rounded-full opacity-20 blur-xl -z-10"
                    style={{ background: 'var(--gradient-primary)' }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={staggerItem}
              className="mt-6 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto lg:mx-0 px-4 lg:px-0"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Desenvolvedor em formação, transformando ideias em <span className="font-semibold bg-gradient-primary bg-clip-text text-transparent">soluções digitais inovadoras</span>. 
              Cursando Ciência da Computação na UNIFRAN, combino <span className="font-semibold" style={{ color: 'var(--color-cyber-green)' }}>criatividade</span> e 
              <span className="font-semibold" style={{ color: 'var(--color-electric-blue)' }}> tecnologia</span> para desenvolver projetos que fazem a diferença no mundo digital.
            </motion.p>


            {/* Action Buttons */}
            <motion.div 
              variants={staggerItem}
              className="mt-8 px-4 lg:px-0"
            >
              {/* Mobile Triangle Layout */}
              <div className="flex flex-col gap-3 sm:hidden">
                {/* Top Row - 2 buttons */}
                <div className="flex gap-3 justify-center">
                  <MagneticButton 
                    as="a"
                    href="/web-portifolio/img/curri_kauanzera.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary group text-sm flex-1 max-w-[140px]"
                  >
                    <DownloadIcon />
                    <span>Download CV</span>
                    <motion.div
                      className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-10"
                      initial={false}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </MagneticButton>

                  <MagneticButton 
                    as="a"
                    href="https://github.com/kauanfeelipe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm flex-1 max-w-[140px]"
                  >
                    <GithubIcon />
                    <span>GitHub</span>
                  </MagneticButton>
                </div>

                {/* Bottom Row - 1 button centered */}
                <div className="flex justify-center">
                  <MagneticButton 
                    as="a"
                    href="https://www.linkedin.com/in/kauanfeelipe/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm max-w-[140px]"
                  >
                    <LinkedinIcon />
                    <span>LinkedIn</span>
                  </MagneticButton>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:flex gap-3 justify-center lg:justify-start">
                <MagneticButton 
                  as="a"
                  href="/web-portifolio/img/curri_kauanzera.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary group text-sm md:text-base"
                >
                  <DownloadIcon />
                  <span>Download CV</span>
                  <motion.div
                    className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-10"
                    initial={false}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </MagneticButton>

                <MagneticButton 
                  as="a"
                  href="https://github.com/kauanfeelipe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm md:text-base"
                >
                  <GithubIcon />
                  <span>GitHub</span>
                </MagneticButton>

                <MagneticButton 
                  as="a"
                  href="https://www.linkedin.com/in/kauanfeelipe/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm md:text-base"
                >
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </MagneticButton>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column - Enhanced Photo for Desktop */}
          <motion.div 
            className="hidden lg:flex lg:w-1/2 justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              {/* Subtle Orbiting Elements */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative w-80 h-80">
                  {[0, 120, 240].map((angle, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        background: 'rgba(124, 58, 237, 0.4)',
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-160px)`,
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 1
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Main Photo */}
              <motion.div 
                className="relative w-80 h-80 rounded-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Subtle Border */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(14, 165, 233, 0.3))',
                    padding: '3px'
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
                    <img 
                      src="/web-portifolio/img/minha-foto.png" 
                      alt="Kauan Felipe" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
            </div>
          </div>

                {/* Subtle Glow Effect */}
                <div 
                  className="absolute -inset-4 rounded-full opacity-15 blur-2xl -z-10"
                  style={{ background: 'var(--gradient-primary)' }}
                />
              </motion.div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Hero;