import React from 'react';

function Contact() {
  const whatsappNumber = "5516993720553";
  const whatsappMessage = "Olá! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="py-20 relative bg-terminal-black border-t border-dim-gray">

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="max-w-3xl mx-auto">
          {/* Cabeçalho */}
          <div className="flex items-center gap-2 mb-8 font-mono text-neon-green">
            <span className="animate-pulse">_</span>
            <h2>INIT_COMMUNICATION_PROTOCOL.SH</h2>
          </div>

          <div className="bg-terminal-dark border border-dim-gray p-6 md:p-10 font-mono shadow-[0_0_30px_rgba(0,0,0,0.5)]">

            <div className="flex flex-col gap-6">

              {/* Comando WhatsApp */}
              <div className="group">
                <div className="text-dim-gray text-sm mb-1">// Start secure chat via WhatsApp</div>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-neon-cyan">$</span>
                  <span className="text-yellow-400">sudo</span>
                  <span>connect --target=whatsapp</span>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block w-full text-center py-4 border border-neon-green bg-neon-green/10 text-neon-green hover:bg-neon-green hover:text-black font-bold transition-all duration-300 uppercase tracking-widest"
                >
                  [ EXECUTE CONNECTION ]
                </a>
              </div>

              <div className="h-px bg-dim-gray/30 my-2"></div>

              {/* Comando Email */}
              <div className="group">
                <div className="text-dim-gray text-sm mb-1">// Send electronic mail</div>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-neon-cyan">$</span>
                  <span>mailto --user=kauan_nup@outlook.com</span>
                </div>
                <a
                  href="mailto:kauan_nup@outlook.com"
                  className="mt-2 block pl-6 text-neon-green hover:underline decoration-dashed decoration-1 underline-offset-4"
                >
                  &gt; Send Email
                </a>
              </div>

              {/* Grid de Redes Sociais */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                {/* GitHub */}
                <div className="border border-dim-gray p-4 hover:border-white transition-colors">
                  <div className="text-dim-gray text-xs mb-2">GIT_REPOSITORY</div>
                  <a
                    href="https://github.com/kauanfeelipe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-white hover:text-neon-green group"
                  >
                    <span>github.com/kauanfeelipe</span>
                    <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="border border-dim-gray p-4 hover:border-white transition-colors">
                  <div className="text-dim-gray text-xs mb-2">PROFESSIONAL_NETWORK</div>
                  <a
                    href="https://www.linkedin.com/in/kauanfeelipe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-white hover:text-neon-cyan group"
                  >
                    <span>linkedin.com/in/kauanfeelipe</span>
                    <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
                  </a>
                </div>

              </div>

            </div>

            {/* Rodapé do Terminal */}
            <div className="mt-8 pt-4 border-t border-dim-gray text-xs text-dim-gray flex justify-between">
              <span>STATUS: LISTENING_PORT_443</span>
              <span>SESSION_ID: {Math.floor(Math.random() * 999999)}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;