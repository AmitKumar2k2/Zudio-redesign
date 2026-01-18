import React from 'react';

const SkinCare = () => {
    return (
        <section className="mt-32 w-full flex justify-center items-center flex-wrap gap-12 px-4">
            <div className="bg-[var(--rich-black)] text-white flex justify-center items-center h-56 w-[27rem] relative mb-12">
                <div className="flex flex-col gap-16 ml-8">
                    <div className="text-center mt-4">
                        <p className="text-[1.2rem] text-left">Winter</p>
                        <p className="text-[1.2rem] text-left">skin care</p>
                    </div>
                    <div className="bg-white text-black h-12 w-16 mb-4">
                        <p className="mt-3 text-center text-sm font-bold">$ 577.00</p>
                    </div>
                </div>
                <div>
                    <img src="/women/girls_care.png-removebg-preview.png" alt="Skin Care" className="h-80 w-80 object-cover mt-[-5.7rem] relative" />
                </div>
            </div>

            <div className="bg-[var(--rich-black)] text-white flex justify-center items-center h-56 w-[27rem] relative mb-12">
                <div className="flex flex-col gap-16 ml-8">
                    <div className="text-center mt-4">
                        <p className="text-[1.2rem] text-left">Lips</p>
                        <p className="text-[1.2rem] text-left">Stick</p>
                    </div>
                    <div className="bg-white text-black h-12 w-16 mb-4">
                        <p className="mt-3 text-center text-sm font-bold">$ 499.00</p>
                    </div>
                </div>
                <div>
                    <img src="/women/girls_care.png-removebg-preview.png" alt="Lip Stick" className="h-80 w-80 object-cover mt-[-5.7rem] relative" />
                </div>
            </div>
        </section>
    );
};

export default SkinCare;
