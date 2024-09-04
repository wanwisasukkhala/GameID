import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const OnlineTopup = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPoints, setSelectedPoints] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const pointsOptions = [
        { points: 540, price: 138 },
        { points: 1130, price: 288 },
        { points: 1945, price: 488 },
        { points: 3930, price: 988 },
        { points: 5550, price: 1388 },
        { points: 11500, price: 2688 },
    ];

    const products = [
        {
            id: 1,
            title: 'APEX Legends Mobile',
            image: '/src/Img/OnlineTopUp/Apex.png',
        },
        {
            id: 2,
            title: 'FreeFire',
            image: '/src/Img/OnlineTopUp/FiFa.png',
        },
        {
            id: 3,
            title: 'Garena',
            image: '/src/Img/OnlineTopUp/Garina.png',
        },
        {
            id: 4,
            title: 'ROV Mobile',
            image: '/src/Img/OnlineTopUp/Rov.png',
        },
        {
            id: 5,
            title: 'FreeFire',
            image: '/src/Img/OnlineTopUp/FiFa.png',
        },
        {
            id: 6,
            title: 'ROV Mobile',
            image: '/src/Img/OnlineTopUp/Rov.png',
        },
        {
            id: 7,
            title: 'APEX Legends Mobile',
            image: '/src/Img/OnlineTopUp/Apex.png',
        },
        {
            id: 8,
            title: 'Garena',
            image: '/src/Img/OnlineTopUp/Garina.png',
        },
    ];

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
        setSelectedPoints(null);
        setSelectedPrice(0);
    };

    const handlePointsClick = (points, price) => {
        setSelectedPoints(points);
        setSelectedPrice(price);
    };

    const handlePurchase = () => {
        alert(`คุณได้เลือกเติม ${selectedPoints} พ้อย สำหรับ ${selectedProduct.title} ยอดเงินที่ต้องชำระคือ ${selectedPrice} บาท`);
        closeModal();
    };

    return (
        <div className="w-full max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8 relative bg-opacity-80 bg-gray-900 rounded-lg mt-8 mb-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-FontThai font-bold text-white bg-gradient-to-r from-orange-600 to-indigo-950 rounded-lg px-4 py-2 inline-block shadow-lg">เติมเกมส์ออนไลน์</h1>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="px-2">
                        <div
                            className="card shadow-xl font-FontThai hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out h-full flex flex-col border border-gray-300 rounded-lg bg-white"
                            onClick={() => handleCardClick(product)}
                        >
                            <figure className="flex-grow rounded-t-lg overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-cover"
                                />
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-lg font-bold">{product.title}</h2>
                            </div>
                            <div className="p-4 font-FontThai">
                                <button
                                    className="btn bg-slate-800 text-white w-full"
                                >
                                    เติมเกมส์นี้
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4 font-FontThai">
                    <div className="bg-white rounded-lg p-6 w-full max-w-sm h-auto relative">
                        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900" onClick={closeModal}>
                            <FaTimes size={24} />
                        </button>

                        <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
                        <label className="text-xs font-FontThai text-red-500">* โปรดระวัง ! บัตรเงินสดไม่สามารถเปลี่ยนสินค้าหรือคืนเงินได้</label>
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.title}
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                        />

                        <div className="mb-4">
                            <div className="mb-2">
                                <span className="text-lg font-bold text-red-500 mr-2">1</span>
                                <label className="text-lg font-bold">กรอก Roit ID#Tag</label>
                            </div>
                            <input
                                type="text"
                                placeholder="ใส่ Roit ID#Tag ของคุณ"
                                className="input input-bordered w-full"
                            />
                        </div>
                        
                        <div className="mb-4">
                            <div className="mb-2">
                                <span className="text-lg font-bold text-red-500 mr-2">2</span>
                                <label className="text-lg font-bold">เลือกจำนวนที่ต้องการเติม</label>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {pointsOptions.map(({ points, price }) => (
                                    <button
                                        key={points}
                                        onClick={() => handlePointsClick(points, price)}
                                        className={`py-2 text-xl font-bold rounded-lg shadow-md ${
                                            selectedPoints === points ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800'
                                        } hover:bg-blue-700 hover:text-white transition`}
                                    >
                                        {points} พ้อย
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="mb-2">
                                <span className="text-lg font-bold text-red-500 mr-2">3</span>
                                <label className="text-lg font-bold">ยอดเงินที่ต้องชำระ:</label>
                            </div>
                            <input
                                type="text"
                                value={selectedPrice ? `${selectedPrice} บาท` : '0 บาท'}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <button
                            onClick={handlePurchase}
                            className="btn bg-green-500 text-white w-full py-2 font-bold rounded-lg hover:bg-green-600"
                            disabled={!selectedPoints}
                        >
                            ยืนยันการสั่งซื้อ
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OnlineTopup;
