import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Women = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const blazers = [
        { id: 'w-blazer-1', img: '/women/blazers/1.jpg', name: 'CLASSIC BLAZER', price: '899' },
        { id: 'w-blazer-2', img: '/women/blazers/2.jpg', name: 'FORMAL COAT', price: '1299' },
        { id: 'w-blazer-3', img: '/women/blazers/3.jpg', name: 'PINK BLAZER', price: '999' },
        { id: 'w-blazer-4', img: '/women/blazers/4.webp', name: 'CROPPED BLAZER', price: '850' },
        { id: 'w-blazer-5', img: '/women/blazers/5.jpg', name: 'OFFICE WEAR', price: '1100' },
        { id: 'w-blazer-6', img: '/women/blazers/6.jpg', name: 'GREY COAT', price: '950' },
        { id: 'w-blazer-7', img: '/women/blazers/7.jpg', name: 'CASUAL BLAZER', price: '799' },
        { id: 'w-blazer-8', img: '/women/blazers/8.jpg', name: 'PREMIUM COAT', price: '1399' },
        { id: 'w-blazer-9', img: '/women/blazers/9.jpg', name: 'ELEGANT BLAZER', price: '1099' },
        { id: 'w-blazer-10', img: '/women/blazers/10.jpg', name: 'CHECKERED COAT', price: '1199' },
    ];

    const tops = [
        { id: 'w-top-1', img: '/women/crop_tops/1.jpg', name: 'FLORAL TOP', price: '399' },
        { id: 'w-top-2', img: '/women/crop_tops/2.jpg', name: 'SUMMER CROP', price: '299' },
        { id: 'w-top-3', img: '/women/crop_tops/3.jpg', name: 'PARTY WEAR', price: '450' },
        { id: 'w-top-4', img: '/women/crop_tops/4.jpg', name: 'CASUAL TEE', price: '250' },
        { id: 'w-top-5', img: '/women/crop_tops/5.jpg', name: 'WHITE CROP', price: '350' },
        { id: 'w-top-6', img: '/women/crop_tops/6.jpg', name: 'BLUE TOP', price: '399' },
        { id: 'w-top-7', img: '/women/crop_tops/7.jpg', name: 'DESIGNER TOP', price: '599' },
        { id: 'w-top-8', img: '/women/crop_tops/8.jpg', name: 'RED CROP', price: '399' },
        { id: 'w-top-9', img: '/women/crop_tops/9.jpg', name: 'MODERN TEE', price: '299' },
        { id: 'w-top-10', img: '/women/crop_tops/10.jpg', name: 'STYLISH TOP', price: '499' },
    ];

    const sweaters = [
        { id: 'w-sweater-1', img: '/women/sweaters/1.jpg', name: 'WINTER WOOL', price: '899' },
        { id: 'w-sweater-2', img: '/women/sweaters/2.jpg', name: 'BEIGE SWEATER', price: '799' },
        { id: 'w-sweater-3', img: '/women/sweaters/3.jpg', name: 'TURTLENECK', price: '699' },
        { id: 'w-sweater-4', img: '/women/sweaters/4.jpg', name: 'KNITWEAR', price: '999' },
        { id: 'w-sweater-5', img: '/women/sweaters/5.jpg', name: 'CASUAL KNIT', price: '750' },
        { id: 'w-sweater-6', img: '/women/sweaters/6.jpg', name: 'CARDIGAN', price: '850' },
        { id: 'w-sweater-7', img: '/women/sweaters/7.jpg', name: 'WARM PULLOVER', price: '950' },
        { id: 'w-sweater-8', img: '/women/sweaters/8.jpg', name: 'LONG SLEEVE', price: '699' },
        { id: 'w-sweater-9', img: '/women/sweaters/9.jpg', name: 'COZY KNIT', price: '799' },
        { id: 'w-sweater-10', img: '/women/sweaters/10.jpg', name: 'WINTER CHIC', price: '899' },
    ];

    return (
        <div className="bg-white">
            <Navbar />

            {/* HERO VIDEO SECTION */}
            <div className="relative h-[85vh] w-full overflow-hidden bg-gray-900">
                {/* Desktop Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/women/desktop.mp4" type="video/mp4" />
                </video>

                {/* Mobile Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover block md:hidden"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/women/mobile.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-end text-center text-white p-4 pb-12 md:pb-20 bg-gradient-to-t from-black/40 to-transparent">
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] mb-3 uppercase drop-shadow-md">Ralph Lauren Collection</p>
                    <h1 className="text-3xl md:text-5xl font-serif mb-6 tracking-wide drop-shadow-lg">PRE-SPRING 2026</h1>
                    <button className="border border-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-2 text-[10px] md:text-xs tracking-widest uppercase backdrop-blur-sm">
                        Explore Collection
                    </button>
                </div>
            </div>

            {/* SHOP BY CATEGORY */}
            <div className="py-16 md:py-24 px-4 max-w-[1400px] mx-auto">
                <h2 className="text-2xl font-serif text-[var(--rich-black)] mb-12 border-b border-gray-200 pb-4">Women's Shop by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group relative h-[400px] md:h-[600px] overflow-hidden cursor-pointer">
                        <img src={blazers[0].img} alt="Blazers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-3xl font-serif mb-2">Blazers & Coats</h3>
                            <p className="text-sm tracking-widest uppercase border-b border-white table">Shop Now</p>
                        </div>
                    </div>
                    <div className="group relative h-[400px] md:h-[600px] overflow-hidden cursor-pointer">
                        <img src={tops[4].img} alt="Tops" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-3xl font-serif mb-2">Tops & Tees</h3>
                            <p className="text-sm tracking-widest uppercase border-b border-white table">Shop Now</p>
                        </div>
                    </div>
                    <div className="group relative h-[400px] md:h-[600px] overflow-hidden cursor-pointer">
                        <img src={sweaters[5].img} alt="Sweaters" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-3xl font-serif mb-2">Knits & Sweaters</h3>
                            <p className="text-sm tracking-widest uppercase border-b border-white table">Shop Now</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURED: THE POLO BEAR (or Equivalent Feature) */}
            <div className="bg-[#f4f4f4] py-20 px-4 mb-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <img src="/women/pexels-rocky-phase-17062651.jpg" alt="Featured Campaign" className="w-full h-auto shadow-xl" />
                    </div>
                    <div className="order-1 md:order-2 text-center md:text-left">
                        <h4 className="text-sm font-bold tracking-[0.2em] text-gray-500 mb-4 uppercase">The Season's Best</h4>
                        <h2 className="text-4xl md:text-5xl font-serif text-[var(--rich-black)] mb-6">Modern Elegance</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
                            Discover the new collection defined by effortless silhouettes and luxurious fabrics. Designed for the modern woman who values style and comfort.
                        </p>
                        <button className="bg-[var(--rich-black)] text-white px-10 py-3 text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
                            View Campaign
                        </button>
                    </div>
                </div>
            </div>


            {/* BLAZERS COLLECTION */}
            <div className="max-w-[1400px] mx-auto px-4 mb-24">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-2xl md:text-3xl font-serif text-[var(--rich-black)]">Tailored Blazers</h2>
                    <a href="#" className="text-sm font-medium underline underline-offset-4 decoration-1">View All</a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
                    {blazers.slice(0, 8).map((item, index) => (
                        <div key={`blazer-featured-${index}`} className="group">
                            <ProductCard {...item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* BANNER WITH CONTENT */}
            <div className="relative h-[60vh] md:h-[70vh] w-full mb-24 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(/women/woman-with-eco-bag-with-fruit-country-side.jpg)` }}>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">Summer Refresh</h2>
                    <p className="text-lg max-w-2xl mb-8 font-light">Lightweight layers and breezy styles for the upcoming season.</p>
                    <button className="bg-white text-black px-8 py-3 text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors">
                        Explore Now
                    </button>
                </div>
            </div>

            {/* TOPS COLLECTION */}
            <div className="max-w-[1400px] mx-auto px-4 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-[var(--rich-black)] mb-4">Trending Tops</h2>
                    <p className="text-gray-500 max-w-xl mx-auto">From casual tees to elegant blouses, find your perfect match.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
                    {tops.slice(0, 8).map((item, index) => (
                        <ProductCard key={`top-featured-${index}`} {...item} />
                    ))}
                </div>
            </div>

            {/* MORE TO EXPLORE */}
            <div className="bg-white border-t border-gray-100 py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-serif mb-12">More to Explore</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="relative h-80 group cursor-pointer overflow-hidden">
                            <img src="/women/pexels-oleskandra-biliak-19673473.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="New Arrivals" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <h3 className="text-white text-2xl font-serif">New Arrivals</h3>
                            </div>
                        </div>
                        <div className="relative h-80 group cursor-pointer overflow-hidden">
                            <img src="/women/pexels-amir-graphy-14542436 (1).jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Best Sellers" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <h3 className="text-white text-2xl font-serif">Best Sellers</h3>
                            </div>
                        </div>
                        <div className="relative h-80 group cursor-pointer overflow-hidden">
                            <img src="/women/pexels-vitaly-gorbachev-11191761.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Accessories" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <h3 className="text-white text-2xl font-serif">Accessories</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Women;
