// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, staggerContainer, staggerItem, MagneticButton } from './AnimationSystem';

// Ícones
const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);


const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);


function Contact() {
  const whatsappNumber = "5516993720553";
  const whatsappMessage = "Olá! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section 
      id="contato" 
      className="py-12 md:py-16 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg-surface)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6"
            >
              <span style={{ color: 'var(--color-text-primary)' }}>Vamos </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Conversar
              </span>
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4 md:px-0"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Entre em contato comigo através do WhatsApp!
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Main Contact Options */}
        <motion.div 
          className="max-w-4xl mx-auto mb-8 md:mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* WhatsApp CTA Principal */}
          <motion.div variants={staggerItem} className="text-center mb-6 md:mb-8">
            <MagneticButton
              as="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              style={{ 
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)'
              }}
            >
              <WhatsAppIcon />
              <span>Conversar no WhatsApp</span>
            </MagneticButton>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* WhatsApp Card */}
            <motion.div variants={staggerItem}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-interactive p-4 md:p-6 text-center group block"
                style={{
                  background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.1), rgba(18, 140, 126, 0.05))',
                  border: '1px solid rgba(37, 211, 102, 0.3)'
                }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <WhatsAppIcon />
                  </div>
                  <h3 className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    WhatsApp
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    (16) 99372-0553
                  </p>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                    Preferido
                  </span>
                </div>
              </a>
            </motion.div>

            {/* Email Card */}
            <motion.div variants={staggerItem}>
              <a
                href="mailto:kauan_nup@outlook.com"
                className="card-interactive p-4 md:p-6 text-center group block"
              >
                <div className="flex flex-col items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: 'var(--color-electric-blue)' }}
                  >
                    <EmailIcon />
                  </div>
                  <h3 className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    E-mail
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    kauan_nup@outlook.com
                  </p>
                </div>
              </a>
            </motion.div>

          </div>
        </motion.div>

        {/* Social Links */}
        <ScrollReveal>
          <div className="text-center">
            <h3 
              className="text-xl md:text-2xl font-bold mb-4 md:mb-6"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Redes Sociais
            </h3>
            <motion.div 
              className="flex justify-center gap-4 md:gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.a
                variants={staggerItem}
                href="https://github.com/kauanfeelipe"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 md:p-4 rounded-xl glass-hover"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon />
              </motion.a>
              
              <motion.a
                variants={staggerItem}
                href="https://www.linkedin.com/in/kauanfeelipe/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 md:p-4 rounded-xl glass-hover"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedinIcon />
              </motion.a>
            </motion.div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default Contact;