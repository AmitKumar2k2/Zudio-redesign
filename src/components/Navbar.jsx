import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const { totalItems } = useCart();

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="bg-[var(--rich-black)] w-full min-h-[3rem] flex justify-around items-center text-white font-['futura-m'] p-6 overflow-x-hidden text-sm sticky top-0 z-50">
            {/* Logo */}
            <div className="w-28 relative z-50">
                <Link to="/">
                    <img src="/img/logo_300x300.png" alt="Logo" className="w-full" />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex">
                <ul className="flex list-none gap-4 text-xs lg:text-sm">
                    <Link to="/men" className="p-2 hover:text-[#c4c4c4] transition-colors"><li className="bg-transparent">MEN</li></Link>
                    <Link to="/women" className="p-2 hover:text-[#c4c4c4] transition-colors"><li className="bg-transparent">WOMEN</li></Link>
                    <a href="#" className="p-2 hover:text-[#c4c4c4] transition-colors"><li className="bg-transparent">KIDS</li></a>
                    <a href="#" className="p-2 hover:text-[#c4c4c4] transition-colors"><li className="bg-transparent">BEAUTY</li></a>
                    <a href="#" className="p-2 hover:text-[#c4c4c4] transition-colors"><li className="bg-transparent">FOOTWEAR</li></a>
                    <a href="#" className="p-2 hover:text-[#c4c4c4] transition-colors"><li className="bg-transparent">CONTACT</li></a>
                </ul>
            </div>

            {/* Search Bar (Desktop) */}
            <div className="hidden md:flex flex items-center border border-[#c4c4c4] rounded-2xl w-80 px-2 py-1">
                <div className="p-2 text-white">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input
                    type="text"
                    placeholder="search for more product"
                    className="bg-transparent outline-none border-none text-white text-xs w-full p-2 placeholder-gray-400"
                />
            </div>

            {/* Icons & Hamburger */}
            <div className="flex items-center gap-4 text-lg relative z-50">
                <a href="#" className="text-white pl-4"><i className="fa-solid fa-user"></i></a>
                <Link to="/cart" className="text-white pl-4 relative">
                    <i className="fa-solid fa-cart-plus"></i>
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                            {totalItems}
                        </span>
                    )}
                </Link>
                <div onClick={handleNav} className="cursor-pointer md:hidden pl-4 text-white">
                    {nav ? <i className="fa-solid fa-xmark text-2xl"></i> : <i className="fa-solid fa-bars text-2xl"></i>}
                </div>
            </div>

            {/* Mobile Menu (Side Drawer) */}
            <div className={nav ? 'fixed left-0 top-0 w-full h-full bg-black/80 z-40 transition-opacity duration-300 md:hidden' : 'fixed left-[-100%] top-0 w-full h-full bg-black/80 z-40 transition-opacity duration-300 md:hidden'} onClick={handleNav}></div>

            <div className={nav ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] h-full bg-[var(--rich-black)] z-50 transition-transform duration-500 ease-in-out px-4 py-8 shadow-2xl flex flex-col md:hidden' : 'fixed right-[-100%] top-0 w-[75%] h-full bg-[var(--rich-black)] z-50 transition-transform duration-500 ease-in-out px-4 py-8 flex flex-col md:hidden'}>

                <div className="w-full flex justify-end mb-8">
                    {/* Close button handled by the toggle in the top right icon header, but adding one here for UX inside the drawer if needed, though usually standard is top right of screen. 
                         Since the xmark is already visible in the static header because z-50 is on the icons div, we don't strictly need another inside, but let's keep the layout clean.
                     */}
                </div>

                <ul className="flex flex-col gap-6 text-white text-lg font-['futura-m'] mt-10 pl-6">
                    <Link to="/men" onClick={handleNav} className="border-b border-[#333] pb-4 hover:text-[#edb730] transition-colors"><li>MEN</li></Link>
                    <Link to="/women" onClick={handleNav} className="border-b border-[#333] pb-4 hover:text-[#edb730] transition-colors"><li>WOMEN</li></Link>
                    <a href="#" onClick={handleNav} className="border-b border-[#333] pb-4 hover:text-[#edb730] transition-colors"><li>KIDS</li></a>
                    <a href="#" onClick={handleNav} className="border-b border-[#333] pb-4 hover:text-[#edb730] transition-colors"><li>BEAUTY</li></a>
                    <a href="#" onClick={handleNav} className="border-b border-[#333] pb-4 hover:text-[#edb730] transition-colors"><li>FOOTWEAR</li></a>
                    <a href="#" onClick={handleNav} className="border-b border-[#333] pb-4 hover:text-[#edb730] transition-colors"><li>CONTACT</li></a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
