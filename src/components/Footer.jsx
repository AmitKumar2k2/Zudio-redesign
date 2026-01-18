import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-20 text-white flex justify-evenly items-start flex-wrap p-12 bg-[var(--rich-black)] w-full gap-8">
            <div className="w-40 text-center md:text-left">
                <img src="/img/logo_300x300.png" alt="Logo" className="w-full" />
            </div>

            <div className="text-xs tracking-wider">
                <h2 className="mb-4 font-bold text-sm">COMPANY INFO</h2>
                <ul className="list-none text-[#c4c4c4]">
                    <li className="pt-3 hover:text-white cursor-pointer">About Us</li>
                    <li className="pt-3 hover:text-white cursor-pointer">Latest Post</li>
                    <li className="pt-3 hover:text-white cursor-pointer">Control Us</li>
                    <li className="pt-3 hover:text-white cursor-pointer">Shop</li>
                </ul>
            </div>

            <div className="text-xs tracking-wider">
                <h2 className="mb-4 font-bold text-sm">HELP LINKS</h2>
                <ul className="list-none text-[#c4c4c4]">
                    <li className="pt-3 hover:text-white cursor-pointer">Tracking</li>
                    <li className="pt-3 hover:text-white cursor-pointer">Order Status</li>
                    <li className="pt-3 hover:text-white cursor-pointer">Delivery</li>
                    <li className="pt-3 hover:text-white cursor-pointer">FAQ</li>
                </ul>
            </div>

            <div className="text-xs tracking-wider">
                <h2 className="mb-4 font-bold text-sm">USEFUL LINKS</h2>
                <ul className="list-none text-[#c4c4c4]">
                    <li className="pt-3 hover:text-white cursor-pointer">Special Offers</li>
                    <li className="pt-3 hover:text-white cursor-pointer">Gift Cards</li>
                    <li className="pt-3 hover:text-white cursor-pointer">Advertising</li>
                    <li className="pt-3 hover:text-white cursor-pointer">Terms of Use</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
