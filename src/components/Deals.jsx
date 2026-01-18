import React from 'react';

const Deals = () => {
    return (
        <section className="mt-16 bg-[#010b14] w-full flex text-white p-4 flex-wrap overflow-hidden justify-around">
            <div className="pt-16">
                <p className="font-['futura-b'] text-[1.6rem]">Irresistable deals</p>
                <p className="text-[1.1rem] text-[#c4c4c4]">Min 30-60% offer</p>
            </div>
            <div className="">
                <img src="/img/s.png-removebg-preview.png" alt="Deal" className="h-[11rem] mb-[-20px] object-cover" />
            </div>
        </section>
    );
};

export default Deals;
