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
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Shopping Cart ({cartItems.length} items)</h1>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Cart Items List */}
                    <div className="md:w-2/3 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id || item.name} className="flex flex-col sm:flex-row items-center bg-white p-4 shadow rounded-lg gap-4">
                                <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-md" />

                                <div className="flex-1 w-full sm:w-auto text-center sm:text-left">
                                    <h3 className="font-semibold text-lg">{item.name}</h3>
                                    <p className="text-gray-600">{item.price}</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                                        onClick={() => updateQuantity(item.id || item.name, item.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <span className="font-medium">{item.quantity}</span>
                                    <button
                                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                                        onClick={() => updateQuantity(item.id || item.name, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id || item.name)}
                                    className="text-red-500 hover:text-red-700 font-medium ml-2"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="md:w-1/3">
                        <div className="bg-white p-6 shadow-lg rounded-lg sticky top-24">
                            <h2 className="text-xl font-bold mb-4 border-b pb-2">Order Summary</h2>

                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">GST (18%)</span>
                                    <span className="font-medium">₹{gstAmount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Delivery Charges</span>
                                    <span className="font-medium">{deliveryCharges === 0 ? 'Free' : `₹${deliveryCharges}`}</span>
                                </div>
                            </div>

                            <div className="border-t pt-4 mb-6">
                                <div className="flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span>₹{grandTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="w-full bg-[#edb730] hover:bg-[darkorange] text-black font-bold py-3 rounded-lg transition shadow-md">
                                Pay Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
