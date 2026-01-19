import React from 'react';

const DealsSecond = () => {
    return (
        <section className="mt-16 bg-[var(--rich-black)] w-full flex flex-col justify-center items-center text-white flex-wrap overflow-hidden h-auto md:h-64 md:flex-row md:justify-between">
            <div className="pt-10 text-center pl-0 md:pt-24 md:pl-52 md:text-left">
                <p className="font-['futura-b'] text-[1.6rem]">Irresistable deals</p>
                <p className="text-[1.1rem] text-[#c4c4c4]">Min 30-60% offer</p>
            </div>
            <div className="mt-4 md:mt-0">
                <img src="/mens/suits/2263ea1f7d5e142968b5396bf8ff0b01.jpg" alt="Deal" className="h-[15rem] mb-[-3.1px] object-contain" />
            </div>
        </section>
    );
};

export default DealsSecond;
