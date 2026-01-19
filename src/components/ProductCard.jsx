import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ img, name, price, id }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ id, name, price, img });
    };

    return (
        <div className="w-full relative group cursor-pointer">
            <div className="relative overflow-hidden w-full">
                <img src={img} alt={name} className="w-full h-auto aspect-[3/4] object-cover" />
                <button
                    onClick={handleAddToCart}
                    className="absolute bottom-2 left-2 bg-white text-black w-8 h-8 flex items-center justify-center rounded-sm hover:bg-black hover:text-white transition-all duration-300 active:scale-75 z-10"
                    aria-label="Add to cart"
                >
                    <span className="text-xl font-light leading-none">+</span>
                </button>
            </div>
            <div className="mt-3 text-left w-full pl-1">
                <div className="flex justify-between items-start">
                    <p className="text-sm text-[#333] tracking-wide font-normal uppercase truncate pr-2">{name}</p>
                    {/* Placeholder for color square or other icons if needed */}
                    <div className="w-3 h-3 bg-black mt-1 shrink-0"></div>
                </div>
                <p className="text-sm text-[#333] mt-1">{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
