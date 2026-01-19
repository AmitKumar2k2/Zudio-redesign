import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
    const navigate = useNavigate();

    const gstRate = 0.18;
    const deliveryCharges = totalPrice > 500 ? 0 : 50; // Free delivery above 500
    const gstAmount = totalPrice * gstRate;
    const grandTotal = totalPrice + gstAmount + deliveryCharges;

    if (cartItems.length === 0) {
        return (
            <>
                <Navbar />
                <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                    <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
                    <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
                    >
                        Continue Shopping
                    </button>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="max-w-[90%] mx-auto py-12">
                {/* Header */}
                <div className="flex items-baseline gap-4 mb-12">
                    <h1 className="text-xl font-bold tracking-widest font-['futura-h']">SHOPPING BAG [{cartItems.length}]</h1>
                    <span className="text-gray-400 text-sm tracking-wide cursor-pointer hover:text-black">FAVOURITES</span>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-12 mb-24">
                    {cartItems.map((item) => (
                        <div key={item.id || item.name} className="flex flex-col group relative">


                            <div className="w-full aspect-[3/4] bg-gray-100 mb-4 overflow-hidden relative">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                {/* Quantity Controls Overlay (optional, or keep simple) */}
                                <div className="absolute bottom-4 right-4 flex items-center bg-white/80 px-2 py-1 rounded-sm gap-3 text-xs">
                                    <button
                                        className="hover:font-bold"
                                        onClick={() => updateQuantity(item.id || item.name, item.quantity - 1)}
                                    >-</button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="hover:font-bold"
                                        onClick={() => updateQuantity(item.id || item.name, item.quantity + 1)}
                                    >+</button>
                                </div>
                            </div>

                            <div className="text-xs space-y-1 tracking-wide">
                                <div className="flex justify-between items-start">
                                    <h3 className="uppercase text-[#333] font-normal truncate pr-4">{item.name}</h3>
                                </div>
                                {/* Placeholder for size/color if not available */}
                                <p className="text-gray-500">L | NAVY BLUE</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-[#333] font-normal">₹ {item.price}</p>
                                    <button
                                        onClick={() => removeFromCart(item.id || item.name)}
                                        className="text-gray-400 hover:text-black transition-colors"
                                        aria-label="Remove"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2-2v2"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer / Summary Section */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-end gap-8 text-xs tracking-wide">

                    <div className="md:w-1/3 text-gray-500 space-y-4">
                        <p>By continuing, I declare that I have read and accept the Purchase Conditions and understand Privacy and Cookie Policy</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full md:w-auto">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <span>IS YOUR ORDER A GIFT?</span>
                            <span className="underline">ADD</span>
                        </div>

                        <div className="text-right space-y-1">
                            <div className="flex gap-8 justify-end text-sm font-bold">
                                <span>TOTAL</span>
                                <span>₹ {grandTotal.toFixed(2)}</span>
                            </div>
                            <p className="text-gray-500">Including GST</p>
                            <p className="text-gray-500">* excl Shipping cost</p>
                        </div>

                        <button className="bg-black text-white px-12 py-3 text-sm font-bold tracking-widest hover:bg-gray-800 transition-colors uppercase w-full md:w-auto">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
