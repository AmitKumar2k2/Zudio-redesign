import React from 'react';

const Trends = () => {
    const trends = [
        { img: '/mens/shirt/0b248e8cc06d9b4b04b352331bd72fc8.jpg', name: 'Casual Shirt', price: '299.00' },
        { img: '/mens/jeans/22c85181c47c95840fee6a707f53e7c7.jpg', name: 'Ripped Jeans', price: '699.00' },
        { img: '/mens/shirt/3249cce20448094645bb90f8212d34d8.jpg', name: 'Checkered Shirt', price: '499.00' },
        { img: '/mens/suits/02c7db34b21b710e4b652e5f88b9963c.jpg', name: 'Navy Suit', price: '799.00' },
        { img: '/mens/shirt/513a8929e1db83d31d6e6b1c239d1aa0.jpg', name: 'Summer Shirt', price: '299.00' },
        { img: '/mens/shirt/6bcd2f5290ab264a7059539f1b177dff.jpg', name: 'Classic Fit', price: '299.00' },
        { img: '/mens/suits/7e0af6d0b77fc53e8bea2e353eb94f7d.jpg', name: 'Beige Suit', price: '899.00' },
        { img: '/mens/jeans/81ae510e1963d300dd5299ea95b0c741.jpg', name: 'Black Denim', price: '299.00' },
    ];

    return (
        <section className="w-full">
            <div className="w-full text-center p-8 text-[1.3rem] font-bold">
                <h2>Today Trends</h2>
            </div>

            <div className="w-full grid grid-cols-2 justify-items-center gap-4 md:flex md:justify-evenly md:items-center md:flex-wrap">
                {trends.map((item, index) => (
                    <div key={index} className="flex flex-col items-center p-2 md:p-4">
                        <div className="border-2 border-[#c4c4c4] h-[8rem] w-[8rem] rounded-full flex justify-center items-center">
                            <img src={item.img} alt={item.name} className="h-[7rem] w-[7rem] rounded-full object-cover" />
                        </div>
                        <div className="text-center p-4">
                            <p className="text-[#100f0f] text-sm">{item.name}</p>
                            <p className="text-[1rem] font-bold">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Trends;
