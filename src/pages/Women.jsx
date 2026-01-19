import React from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Women = () => {
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
        <>
            <Navbar />
            <div className="pt-8 pb-16 px-4 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-black text-center mb-10 md:mb-16 font-['futura-h'] tracking-wider">WOMEN'S COLLECTION</h1>

                    {/* Blazers Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-10 text-[var(--rich-black)] uppercase tracking-wide">Blazers & Coats</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 justify-items-center">
                            {blazers.map((item, index) => (
                                <ProductCard key={`blazer-${index}`} {...item} />
                            ))}
                        </div>
                    </div>

                    {/* Tops Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-10 text-[var(--rich-black)] uppercase tracking-wide">Crop Tops & Tees</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 justify-items-center">
                            {tops.map((item, index) => (
                                <ProductCard key={`top-${index}`} {...item} />
                            ))}
                        </div>
                    </div>

                    {/* Sweaters Section */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-center mb-10 text-[var(--rich-black)] uppercase tracking-wide">Sweaters & Knits</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 justify-items-center">
                            {sweaters.map((item, index) => (
                                <ProductCard key={`sweater-${index}`} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Women;
