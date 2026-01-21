import React from 'react';

const Hero = () => {
    return (
        <div className="relative w-full h-[85vh] overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/480.MP4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
                <div className="flex flex-col items-center">
                    <h2 className="text-[3rem] md:text-[5rem] font-['futura-h'] font-black leading-tight text-white drop-shadow-lg">
                        Where Fashion
                    </h2>
                    <h2 className="text-[3rem] md:text-[5rem] font-['futura-h'] font-black leading-tight text-transparent drop-shadow-lg" style={{ WebkitTextStroke: '1px #fff' }}>
                        Meets Passion
                    </h2>
                    <p className="text-[1.1rem] md:text-[1.5rem] text-gray-200 mt-4 tracking-widest uppercase">
                        India's largest online fashion platform
                    </p>
                </div>
            </div>

            {/* Bottom Banner */}
            <div className="absolute bottom-0 w-full bg-[var(--rich-black)] min-h-[4rem] text-white text-[1.3rem] flex items-center justify-center text-center p-4">
                <h2 className="font-bold tracking-wider">
                    FLAT SALE
                    <span className="ml-3 text-transparent font-black" style={{ WebkitTextStroke: '1px #fff' }}>50%</span>
                </h2>
            </div>
        </div>
    );
};

export default Hero;
