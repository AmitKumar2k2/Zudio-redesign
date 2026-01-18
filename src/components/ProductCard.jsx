import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ img, name, price, id }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ id, name, price, img });
    };

    return (
        <div className="w-64 flex flex-col items-center group relative overflow-hidden transition-all hover:shadow-lg rounded-lg">
            <img src={img} alt={name} className="w-full h-80 object-cover" />
            <div className="bg-[#010b14] text-white p-3 w-full flex flex-col gap-2 relative z-10">
                <div className="flex justify-between items-center px-1">
                    <p className="text-xs tracking-widest uppercase">{name}</p>
                    <p className="text-lg font-bold">{price}</p>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-[#edb730] text-black font-semibold py-2 rounded hover:bg-[darkorange] transition-colors mt-1 opacity-100 transform translate-y-0 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
