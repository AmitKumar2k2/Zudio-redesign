import React from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Men = () => {
    const shirts = [
        { id: 'm-shirt-1', img: '/mens/shirt/0b248e8cc06d9b4b04b352331bd72fc8.jpg', name: 'CASUAL SHIRT', price: '$499' },
        { id: 'm-shirt-2', img: '/mens/shirt/2bd8b8c4dc8de4f4a0cb02f484991af9.jpg', name: 'FORMAL SHIRT', price: '$599' },
        { id: 'm-shirt-3', img: '/mens/shirt/3249cce20448094645bb90f8212d34d8.jpg', name: 'CHECKERED', price: '$450' },
        { id: 'm-shirt-4', img: '/mens/shirt/4ff967a83e89011d3bbca75c242aed38.jpg', name: 'STRIPED', price: '$499' },
        { id: 'm-shirt-5', img: '/mens/shirt/513a8929e1db83d31d6e6b1c239d1aa0.jpg', name: 'SUMMER SHIRT', price: '$399' },
        { id: 'm-shirt-6', img: '/mens/shirt/6bcd2f5290ab264a7059539f1b177dff.jpg', name: 'CLASSIC FIT', price: '$550' },
        { id: 'm-shirt-7', img: '/mens/shirt/73eb4eb334c0ab02af5868ea88afec10.jpg', name: 'SLIM FIT', price: '$499' },
        { id: 'm-shirt-8', img: '/mens/shirt/rayul-_M6gy9oHgII-unsplash.jpg', name: 'DENIM SHIRT', price: '$699' },
    ];

    const jeans = [
        { id: 'm-jeans-1', img: '/mens/jeans/1.jpg', name: 'CLASSIC BLUE', price: '$799' },
        { id: 'm-jeans-2', img: '/mens/jeans/22c85181c47c95840fee6a707f53e7c7.jpg', name: 'RIPPED JEANS', price: '$899' },
        { id: 'm-jeans-3', img: '/mens/jeans/45cc0a2ef6b88f3d4cbc618edc946b8e.jpg', name: 'SKINNY FIT', price: '$750' },
        { id: 'm-jeans-4', img: '/mens/jeans/81ae510e1963d300dd5299ea95b0c741.jpg', name: 'BLACK DENIM', price: '$899' },
        { id: 'm-jeans-5', img: '/mens/jeans/896823eb089919b9901a952e3fa330c6.jpg', name: 'GREY WASH', price: '$850' },
        { id: 'm-jeans-6', img: '/mens/jeans/a75d300cc7cd5b77fd840df9f46db6ff.jpg', name: 'STRAIGHT LEG', price: '$799' },
        { id: 'm-jeans-7', img: '/mens/jeans/cfdae06593ec48dad91084bd733379cf.jpg', name: 'BOOTCUT', price: '$899' },
    ];

    const suits = [
        { id: 'm-suit-1', img: '/mens/suits/02c7db34b21b710e4b652e5f88b9963c.jpg', name: 'NAVY SUIT', price: '$2999' },
        { id: 'm-suit-2', img: '/mens/suits/2263ea1f7d5e142968b5396bf8ff0b01.jpg', name: 'GREY BLAZER', price: '$1999' },
        { id: 'm-suit-3', img: '/mens/suits/36cf3bc6c50bc1f874b2eaf62c3b3a7a.jpg', name: 'BLACK TUX', price: '$3999' },
        { id: 'm-suit-4', img: '/mens/suits/7e0af6d0b77fc53e8bea2e353eb94f7d.jpg', name: 'BEIGE SUIT', price: '$2499' },
        { id: 'm-suit-5', img: '/mens/suits/89130d56d2224f82fc808a461500d22b.jpg', name: 'CHECKERED SUIT', price: '$2799' },
        { id: 'm-suit-6', img: '/mens/suits/9eff1f7b49fcf3e6ca2d89205c22f872.jpg', name: 'WEDDING SUIT', price: '$3499' },
        { id: 'm-suit-7', img: '/mens/suits/bdaaba7aebd1f83f8639ea010ae5ee45.jpg', name: 'FORMAL VEST', price: '$1499' },
        { id: 'm-suit-8', img: '/mens/suits/e4555240208c2df92fc75e0e83112c2c.jpg', name: 'CLASSIC SUIT', price: '$2999' },
    ];

    return (
        <>
            <Navbar />
            <div className="pt-8 pb-16 px-4 bg-gray-50">
                <h1 className="text-3xl md:text-5xl font-black text-center mb-10 md:mb-16 font-['futura-h'] tracking-wider">MEN'S COLLECTION</h1>

                {/* Shirts Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-10 text-[var(--rich-black)] uppercase tracking-wide">Shirts</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {shirts.map((item, index) => (
                            <ProductCard key={`shirt-${index}`} {...item} />
                        ))}
                    </div>
                </div>

                {/* Jeans Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-10 text-[var(--rich-black)] uppercase tracking-wide">Jeans</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {jeans.map((item, index) => (
                            <ProductCard key={`jeans-${index}`} {...item} />
                        ))}
                    </div>
                </div>

                {/* Suits Section */}
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-center mb-10 text-[var(--rich-black)] uppercase tracking-wide">Suits & Blazers</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {suits.map((item, index) => (
                            <ProductCard key={`suits-${index}`} {...item} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Men;
