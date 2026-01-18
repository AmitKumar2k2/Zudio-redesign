import React from 'react';

const WhoWeAre = () => {
    return (
        <section className="w-full flex justify-center items-center gap-40 flex-wrap p-8">
            <div className="flex flex-col gap-6">
                <div className="flex gap-6 items-start">
                    <div className="w-12 pt-2">
                        <img src="/img/WhatsApp_Image_2024-04-02_at_19.22.56_8e00d3fa.png-removebg-preview.png" alt="Icon" className="w-full" />
                    </div>
                    <div>
                        <h3 className="font-bold">WHO ARE YOU</h3>
                        <p className="text-sm text-[var(--rich-black)] mt-2">a fashion brand from-the house of tata trent ltd</p>
                    </div>
                </div>
                <div className="flex gap-6 items-start">
                    <div className="w-12 pt-2">
                        <img src="/img/WhatsApp_Image_2024-04-02_at_19.22.56_8e00d3fa.png-removebg-preview.png" alt="Icon" className="w-full" />
                    </div>
                    <div>
                        <h3 className="font-bold">WHAT WE DO</h3>
                        <p className="text-sm text-[var(--rich-black)] mt-2">offer irresistible fashion at irresistible <br /> pricesconstant newness in store</p>
                    </div>
                </div>
                <div className="flex gap-6 items-start">
                    <div className="w-12 pt-2">
                        <img src="/img/WhatsApp_Image_2024-04-02_at_19.22.56_8e00d3fa.png-removebg-preview.png" alt="Icon" className="w-full" />
                    </div>
                    <div>
                        <h3 className="font-bold">WHERE WE ARE</h3>
                        <p className="text-sm text-[var(--rich-black)] mt-2">currently in 42 cities in india , coming to your city very soon</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 md:mt-0">
                <img src="/img/pexels-jonathan-faria-2220316.jpg" className="w-72 shadow-[-25px_-35px_1px_gray]" alt="Who We Are" />
            </div>
        </section>
    );
};

export default WhoWeAre;
