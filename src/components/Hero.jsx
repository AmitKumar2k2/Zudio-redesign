import React from 'react';

const Hero = () => {
    return (
        <div className="w-full flex justify-center items-center gap-10 md:gap-32 flex-wrap pt-10 px-4">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-[3rem] md:text-[3.5rem] font-['futura-h'] font-black leading-tight text-transparent" style={{ WebkitTextStroke: '0px' }}>
                    <span className="text-black">Where Fashion</span>
                </h2>
                <h2 className="text-[2.8rem] md:text-[3.5rem] font-['futura-h'] font-black leading-tight text-transparent" style={{ WebkitTextStroke: '1px #c4c4c4' }}>
                    Meets Passion
                </h2>
                <p className="text-[1.1rem] md:text-[1.3rem] text-[#c4c4c4] mt-2 md:mt-6">
                    Indian's largest online fashion platform
                </p>
            </div>

            <div className="right-img">
                <img src="/img/hero1.jpg" alt="Fashion Model" className="h-[25rem] md:h-[30rem] object-cover mb-[-4px]" />
            </div>

            <div className="w-full bg-[var(--rich-black)] min-h-[4rem] text-white text-[1.3rem] flex items-center justify-center text-center p-4">
                <h2 className="font-bold">
                    FLAT SALE
                    <span className="ml-2 text-[var(--rich-black)] font-black" style={{ WebkitTextStroke: '1px #c4c4c4' }}>50%</span>
                </h2>
            </div>
        </div>
    );
};

export default Hero;
