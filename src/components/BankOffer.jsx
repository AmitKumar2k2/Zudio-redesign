import React from 'react';

const BankOffer = () => {
    return (
        <div className="w-full text-white flex justify-evenly items-center bg-[var(--rich-black)] p-4 h-32 overflow-hidden mt-8">
            <img src="/img/cdnlogo.com_hdfc-bank.svg" alt="HDFC Bank" className="w-60" />
            <div className="hidden md:block">
                <p className="text-[1.8rem] font-extrabold">10% Off</p>
                <p className="text-base text-[#c4c4c4]">On HDFC Bank Credit Cards & EMI</p>
            </div>
            <button className="bg-[#edb730] w-32 p-3 border-none font-semibold hover:bg-[darkorange] text-black">
                Know More
            </button>
        </div>
    );
};

export default BankOffer;
