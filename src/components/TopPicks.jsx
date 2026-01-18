import React from 'react';

const TopPicks = () => {
    const products = [
        { img: '/mens/shirt/rayul-_M6gy9oHgII-unsplash.jpg', name: 'DENIM SHIRT', price: '$400' },
        { img: '/women/woman-with-eco-bag-with-fruit-country-side.jpg', name: 'SHINY', price: '$200' },
        { img: '/women/pexels-oleskandra-biliak-19673473.jpg', name: 'BLAZERS', price: '$899' },
        { img: '/women/pexels-vitaly-gorbachev-11191761.jpg', name: 'CROP TOPS', price: '$399' },
        { img: '/women/woman-with-eco-bag-with-fruit-country-side.jpg', name: 'SNEAKER', price: '400' },
        { img: '/women/pexels-amir-graphy-14542436 (1).jpg', name: 'SWEATERS', price: '$799' },
        { img: '/women/pexels-mochi-mochi-17839392.jpg', name: 'JEANS', price: '$999' },
        { img: '/women/pexels-rocky-phase-17062651.jpg', name: 'SHIRT', price: '$211' },
    ];

    return (
        <section className="w-full">
            <div className="w-full text-center p-8 text-[1.3rem] font-bold">
                <h2>Top Picks</h2>
            </div>

            <div className="w-full flex justify-center items-center flex-wrap gap-3 px-4">
                {products.map((item, index) => (
                    <div key={index} className="w-36 md:w-48 lg:w-36">
                        <img src={item.img} alt={item.name} className="w-full h-48 md:h-64 object-cover" />
                        <div className="bg-[#010b14] text-white p-2 w-full -mt-1 relative z-10">
                            <p className="text-xs tracking-widest">{item.name}</p>
                            <p className="text-right text-lg md:text-xl font-bold">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopPicks;
