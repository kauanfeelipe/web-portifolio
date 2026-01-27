import React from 'react';

const FloppyProfile = () => {
    return (
        <div className="floppy-disk group cursor-pointer relative mx-auto">

            {/* Top Section (Shutter Area) */}
            <div className="floppy-top">
                <div className="floppy-shutter"></div>
                {/* Write Protect Tab */}
                {/* Write Protect Tab removed */}
            </div>

            {/* Main Label Area (Profile Picture Container) */}
            <div className="floppy-label-area group-hover:border-neon-green/50 transition-colors duration-300">

                {/* Sticker/Header of Label */}
                <div className="floppy-sticker">
                    <span className="font-mono text-[10px] text-neon-green tracking-widest">
                        PROFILE_DATA_V1.0
                    </span>
                </div>

                {/* The Profile Image */}
                <div className="floppy-img-container flex items-end justify-center">
                    <div className="relative w-full h-full flex items-end justify-center">
                        {/* Glow Effect behind head */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[70%] bg-neon-green/10 blur-xl rounded-full"></div>

                        <img
                            src="/web-portifolio/img/minha-foto.png"
                            alt="Kauan Profile"
                            className="w-auto h-[85%] object-contain drop-shadow-[0_0_5px_rgba(0,255,65,0.3)] group-hover:scale-105 transition-transform duration-500 mb-0"
                            style={{ filter: 'grayscale(100%) brightness(1.1) contrast(1.1)' }}
                        />

                        {/* Glitch Overlay on Image only */}
                        <div className="absolute inset-0 bg-transparent mix-blend-overlay opacity-0 group-hover:opacity-20 animate-glitch pointer-events-none"></div>
                    </div>
                </div>
            </div>

            {/* Retro Lines / Texture */}
            <div className="absolute bottom-2 left-4 flex gap-1">
                <div className="w-1 h-3 bg-dim-gray"></div>
                <div className="w-1 h-3 bg-dim-gray"></div>
                <div className="w-1 h-3 bg-dim-gray"></div>
            </div>

            {/* Tech Decor */}
            <div className="absolute bottom-2 right-4 font-pixel text-xs text-dim-gray group-hover:text-neon-cyan">
                1.44MB
            </div>

        </div>
    );
};

export default FloppyProfile;
