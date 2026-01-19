import React from 'react';

const Deals = () => {
    return (
        <section className="mt-16 bg-[#010b14] w-full flex flex-col justify-center items-center text-white p-4 flex-wrap overflow-hidden md:flex-row md:justify-around">
            <div className="pt-10 text-center md:pt-16 md:text-left">
                <p className="font-['futura-b'] text-[1.6rem]">Irresistable deals</p>
                <p className="text-[1.1rem] text-[#c4c4c4]">Min 30-60% offer</p>
            </div>
            <div className="mt-4 md:mt-0">
                <img src="/img/s.png-removebg-preview.png" alt="Deal" className="h-[11rem] mb-[-20px] object-cover" />
            </div>
        </section>
    );
};

export default Deals;
