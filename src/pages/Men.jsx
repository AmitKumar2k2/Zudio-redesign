import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Men = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const shirts = [
        { id: 'm-shirt-1', img: '/mens/shirt/0b248e8cc06d9b4b04b352331bd72fc8.jpg', name: 'CASUAL SHIRT', price: '499' },
        { id: 'm-shirt-2', img: '/mens/shirt/2bd8b8c4dc8de4f4a0cb02f484991af9.jpg', name: 'FORMAL SHIRT', price: '599' },
        { id: 'm-shirt-3', img: '/mens/shirt/3249cce20448094645bb90f8212d34d8.jpg', name: 'CHECKERED', price: '450' },
        { id: 'm-shirt-4', img: '/mens/shirt/4ff967a83e89011d3bbca75c242aed38.jpg', name: 'STRIPED', price: '499' },
        { id: 'm-shirt-5', img: '/mens/shirt/513a8929e1db83d31d6e6b1c239d1aa0.jpg', name: 'SUMMER SHIRT', price: '399' },
        { id: 'm-shirt-6', img: '/mens/shirt/6bcd2f5290ab264a7059539f1b177dff.jpg', name: 'CLASSIC FIT', price: '550' },
        { id: 'm-shirt-7', img: '/mens/shirt/73eb4eb334c0ab02af5868ea88afec10.jpg', name: 'SLIM FIT', price: '499' },
        { id: 'm-shirt-8', img: '/mens/shirt/rayul-_M6gy9oHgII-unsplash.jpg', name: 'DENIM SHIRT', price: '699' },
        { id: 'm-shirt-9', img: '/mens/shirt/171eaaa1b375a1f29555b3bfa1d1bf3f.jpg', name: 'LINEN SHIRT', price: '599' },
        { id: 'm-shirt-10', img: '/mens/shirt/3d16371992ae909a4c14a14762cf7a41.jpg', name: 'COTTON CASUAL', price: '499' },
        { id: 'm-shirt-11', img: '/mens/shirt/7640b3effa3dcf68545b96c695d3bb16.jpg', name: 'PRINTED SHIRT', price: '550' },
        { id: 'm-shirt-12', img: '/mens/shirt/9d978914a59fab01f569207e79cac2c8.jpg', name: 'SOLID GREEN', price: '450' },
        { id: 'm-shirt-13', img: '/mens/shirt/f0c8879d261692444f00e8279d194091.jpg', name: 'BLUE CLASSIC', price: '499' },
        { id: 'm-shirt-14', img: '/mens/shirt/f323bc4827cb82f5a564fc27cb2994b7.jpg', name: 'WHITE FORMAL', price: '599' },
    ];

    const jeans = [
        { id: 'm-jeans-1', img: '/mens/jeans/1.jpg', name: 'CLASSIC BLUE', price: '799' },
        { id: 'm-jeans-2', img: '/mens/jeans/22c85181c47c95840fee6a707f53e7c7.jpg', name: 'RIPPED JEANS', price: '899' },
        { id: 'm-jeans-3', img: '/mens/jeans/45cc0a2ef6b88f3d4cbc618edc946b8e.jpg', name: 'SKINNY FIT', price: '750' },
        { id: 'm-jeans-4', img: '/mens/jeans/81ae510e1963d300dd5299ea95b0c741.jpg', name: 'BLACK DENIM', price: '899' },
        { id: 'm-jeans-5', img: '/mens/jeans/896823eb089919b9901a952e3fa330c6.jpg', name: 'GREY WASH', price: '850' },
        { id: 'm-jeans-6', img: '/mens/jeans/a75d300cc7cd5b77fd840df9f46db6ff.jpg', name: 'STRAIGHT LEG', price: '799' },
        { id: 'm-jeans-7', img: '/mens/jeans/cfdae06593ec48dad91084bd733379cf.jpg', name: 'BOOTCUT', price: '899' },
        { id: 'm-jeans-8', img: '/mens/jeans/33bdc22842d5a2a56a4c1c1af96e8c0b.jpg', name: 'FADED BLUE', price: '950' },
        { id: 'm-jeans-9', img: '/mens/jeans/cd9924238fef2cc359b3e8f762e7e707.jpg', name: 'DARK WASH', price: '899' },
        { id: 'm-jeans-10', img: '/mens/jeans/e6fe63d58cd1ba31c8bb00bf6327b212.jpg', name: 'SLIM BLACK', price: '799' },
    ];

    const suits = [
        { id: 'm-suit-1', img: '/mens/suits/02c7db34b21b710e4b652e5f88b9963c.jpg', name: 'NAVY SUIT', price: '2999' },
        { id: 'm-suit-2', img: '/mens/suits/2263ea1f7d5e142968b5396bf8ff0b01.jpg', name: 'GREY BLAZER', price: '1999' },
        { id: 'm-suit-3', img: '/mens/suits/36cf3bc6c50bc1f874b2eaf62c3b3a7a.jpg', name: 'BLACK TUX', price: '3999' },
        { id: 'm-suit-4', img: '/mens/suits/7e0af6d0b77fc53e8bea2e353eb94f7d.jpg', name: 'BEIGE SUIT', price: '2499' },
        { id: 'm-suit-5', img: '/mens/suits/89130d56d2224f82fc808a461500d22b.jpg', name: 'CHECKERED SUIT', price: '2799' },
        { id: 'm-suit-6', img: '/mens/suits/9eff1f7b49fcf3e6ca2d89205c22f872.jpg', name: 'WEDDING SUIT', price: '3499' },
        { id: 'm-suit-7', img: '/mens/suits/bdaaba7aebd1f83f8639ea010ae5ee45.jpg', name: 'FORMAL VEST', price: '1499' },
        { id: 'm-suit-8', img: '/mens/suits/e4555240208c2df92fc75e0e83112c2c.jpg', name: 'CLASSIC SUIT', price: '2999' },
        { id: 'm-suit-9', img: '/mens/suits/5fc84c973e78b7cac3f8dc8f72944ac8.jpg', name: 'MODERN FIT', price: '2599' },
        { id: 'm-suit-10', img: '/mens/suits/cc08ebcb391d9ea8a351209368a8cceb.jpg', name: 'BLUE BLAZER', price: '1899' },
        { id: 'm-suit-11', img: '/mens/suits/eb24a002d0e204f78ec7038b01f43e56.jpg', name: 'CHARCOAL SUIT', price: '3199' },
    ];

    return (
        <div className="bg-white">
            <Navbar />

            {/* HER HERO VIDEO SECTION */}
            <div className="relative h-[85vh] w-full overflow-hidden bg-gray-900">
                {/* Desktop Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/mens/desktop.mp4" type="video/mp4" />
                </video>

                {/* Mobile Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover block md:hidden"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/mens/mobile.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-end text-center text-white p-4 pb-12 md:pb-20 bg-gradient-to-t from-black/40 to-transparent">
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] mb-3 uppercase drop-shadow-md">Purple Label & Polo Ralph Lauren</p>
                    <h1 className="text-3xl md:text-5xl font-serif mb-6 tracking-wide drop-shadow-lg">FALL 2026 PRESENTATION</h1>
                    <button className="border border-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-2 text-[10px] md:text-xs tracking-widest uppercase backdrop-blur-sm">
                        Explore Collection
                    </button>
                </div>
            </div>

            {/* SHOP BY CATEGORY */}
            <div className="py-16 md:py-24 px-4 max-w-[1400px] mx-auto">
                <h2 className="text-2xl font-serif text-[var(--rich-black)] mb-12 border-b border-gray-200 pb-4">Shop by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group relative h-[400px] md:h-[600px] overflow-hidden cursor-pointer">
                        <img src={suits[0].img} alt="Suits" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-3xl font-serif mb-2">Suits & Tailoring</h3>
                            <p className="text-sm tracking-widest uppercase border-b border-white table">Shop Now</p>
                        </div>
                    </div>
                    <div className="group relative h-[400px] md:h-[600px] overflow-hidden cursor-pointer">
                        <img src={shirts[0].img} alt="Shirts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-3xl font-serif mb-2">Casual Shirts</h3>
                            <p className="text-sm tracking-widest uppercase border-b border-white table">Shop Now</p>
                        </div>
                    </div>
                    <div className="group relative h-[400px] md:h-[600px] overflow-hidden cursor-pointer">
                        <img src={jeans[1].img} alt="Denim" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-3xl font-serif mb-2">Denim & Jeans</h3>
                            <p className="text-sm tracking-widest uppercase border-b border-white table">Shop Now</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* HERITAGE ICONS - FULL WIDTH FEATURE */}
            <div className="bg-[#f4f4f4] py-20 px-4 mb-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <img src={shirts[5].img} alt="Heritage Icons" className="w-full h-auto shadow-xl" />
                    </div>
                    <div className="order-1 md:order-2 text-center md:text-left">
                        <h4 className="text-sm font-bold tracking-[0.2em] text-gray-500 mb-4 uppercase">The New Standard</h4>
                        <h2 className="text-4xl md:text-5xl font-serif text-[var(--rich-black)] mb-6">Heritage Icons</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
                            Timeless pieces redefined for the modern wardrobe. Experience the perfect blend of tradition and contemporary style with our latest collection.
                        </p>
                        <button className="bg-[var(--rich-black)] text-white px-10 py-3 text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
                            View Collection
                        </button>
                    </div>
                </div>
            </div>


            {/* MEN'S SHIRTS COLLECTION */}
            <div className="max-w-[1400px] mx-auto px-4 mb-24">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-2xl md:text-3xl font-serif text-[var(--rich-black)]">Seasonal Shirts</h2>
                    <a href="#" className="text-sm font-medium underline underline-offset-4 decoration-1">View All</a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
                    {shirts.slice(0, 8).map((item, index) => (
                        <div key={`shirt-featured-${index}`} className="group">
                            <ProductCard {...item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* BANNER WITH CONTENT */}
            <div className="relative h-[60vh] md:h-[70vh] w-full mb-24 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${suits[2].img})` }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">Valentine's Day</h2>
                    <p className="text-lg max-w-2xl mb-8 font-light">Find the perfect gift for him. Explore our curated selection of luxury suits and accessories.</p>
                    <button className="bg-white text-black px-8 py-3 text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors">
                        Gift Guide
                    </button>
                </div>
            </div>

            {/* SUITS & FORMAL WEAR */}
            <div className="max-w-[1400px] mx-auto px-4 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-[var(--rich-black)] mb-4">Suits & Tailoring</h2>
                    <p className="text-gray-500 max-w-xl mx-auto">Impececcable craftsmanship for life's most important moments.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
                    {suits.slice(0, 8).map((item, index) => (
                        <ProductCard key={`suit-featured-${index}`} {...item} />
                    ))}
                </div>
            </div>

            {/* MORE TO EXPLORE */}
            <div className="bg-white border-t border-gray-100 py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-serif mb-12">More to Explore</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="relative h-80 group cursor-pointer overflow-hidden">
                            <img src={jeans[5].img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="New Arrivals" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <h3 className="text-white text-2xl font-serif">New Arrivals</h3>
                            </div>
                        </div>
                        <div className="relative h-80 group cursor-pointer overflow-hidden">
                            <img src={shirts[7].img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Best Sellers" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <h3 className="text-white text-2xl font-serif">Best Sellers</h3>
                            </div>
                        </div>
                        <div className="relative h-80 group cursor-pointer overflow-hidden">
                            <img src={suits[4].img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="The Candy Store" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <h3 className="text-white text-2xl font-serif">The Wedding Shop</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Men;

