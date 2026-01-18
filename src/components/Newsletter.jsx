import React from 'react';

const Newsletter = () => {
    return (
        <section className="w-full text-center mt-24 mb-12">
            <div className="p-6">
                <p className="text-[1.8rem] font-black tracking-wide">Subscribe to our awesome emails.</p>
                <p className="text-sm mt-1">Get out our latest offers and new straight in your phone</p>
            </div>
            <div className="flex justify-center flex-wrap gap-0 mt-4 px-4">
                <input
                    type="text"
                    placeholder="Please enter an email address"
                    className="p-3 w-72 outline-none border border-[#c4c4c4]"
                />
                <button className="p-3 bg-[var(--rich-black)] w-28 border-none text-[#c4c4c4] hover:bg-black transition-colors">
                    Subscribe
                </button>
            </div>
        </section>
    );
};

export default Newsletter;
