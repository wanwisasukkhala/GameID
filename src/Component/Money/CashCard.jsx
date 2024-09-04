import React, { useState } from 'react';
import { FaTimes, FaExclamationCircle } from 'react-icons/fa';

const CashCard = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const prices = [20, 50, 100, 300, 500, 1000];

    const products = [
        {
            id: 1,
            title: 'Garena Card',
            description: 'เลือกบัตรเงินสดที่คุณต้องการ',
            image: '/src/Img/CardMoney/4.png',
        },
        {
            id: 2,
            title: 'True Money',
            description: 'เลือกบัตรเงินสดที่คุณต้องการ',
            image: '/src/Img/CardMoney/1.png',
        },
        {
            id: 3,
            title: 'Dtac',
            description: 'เลือกบัตรเงินสดที่คุณต้องการ',
            image: '/src/Img/CardMoney/AISCard.png',
        },
        {
            id: 4,
            title: 'AIS',
            description: 'เลือกบัตรเงินสดที่คุณต้องการ',
            image: '/src/Img/CardMoney/3.png',
        },
        {
            id: 5,
            title: 'AIS',
            description: 'เลือกบัตรเงินสดที่คุณต้องการ',
            image: '/src/Img/CardMoney/3.png',
        },
        {
            id: 6,
            title: 'Truemove H',
            description: 'เลือกบัตรเงินสดที่คุณต้องการ',
            image: '/src/Img/CardMoney/1.png',
        },
        {
            id: 7,
            title: 'Myby CAT',
            description: 'เลือกบัตรเงินสดที่คุณต้องการ',
            image: '/src/Img/CardMoney/3.png',
        },
        {
            id: 8,
            title: 'Happy',
            description: 'เลือกบัตรเงินสดที่คุณต้องการ',
            image: '/src/Img/CardMoney/4.png',
        },
    ];

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
        setSelectedPrice(null);
        setQuantity(1);
    };

    const handlePriceClick = (price) => {
        setSelectedPrice(price);
    };

    const handlePurchase = () => {
        setShowConfirmModal(true);
    };

    const handleConfirmPurchase = () => {
        alert(`คุณได้สั่งซื้อบัตรราคา ${selectedPrice} จำนวน ${quantity} ใบ ยอดรวม ${selectedPrice * quantity} บาท`);
        setShowConfirmModal(false);
        closeModal();
    };

    return (
        <div className="w-full max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8 relative bg-opacity-80 bg-gray-900 rounded-lg mt-8 mb-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-FontThai font-bold text-white bg-gradient-to-r from-orange-600 to-indigo-950 rounded-lg px-4 py-2 inline-block shadow-lg">บัตรเติมเงินสด</h1>
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
                                <p className="text-sm text-gray-600">{product.description}</p>
                            </div>
                            <div className="p-4 font-FontThai">
                                <button
                                    onClick={() => handleCardClick(product)}
                                    className="btn bg-orange-600 text-white w-full"
                                >
                                    ซื้อบัตร {product.title}
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
                        
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.title}
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                        />
                        
                        <p className="text-gray-700 mb-4">{selectedProduct.description}</p>

                        <div className="grid grid-cols-4 gap-4 mb-4">
                            {prices.map((price) => (
                                <button
                                    key={price}
                                    onClick={() => handlePriceClick(price)}
                                    className={`py-2 text-xl font-bold rounded-lg shadow-md 
                                    ${selectedPrice === price ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800'}
                                    hover:bg-blue-700 hover:text-white transition`}
                                >
                                    {price}
                                </button>
                            ))}
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-lg">จำนวน</span>
                            </label>
                            <input
                                type="number"
                                className="input input-bordered w-full"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                                min="1"
                            />
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold">ยอดรวม: {selectedPrice ? selectedPrice * quantity : 0} บาท</span>
                            <button
                                onClick={handlePurchase}
                                className="btn btn-success text-white"
                                disabled={!selectedPrice}
                            >
                                ยืนยันการสั่งซื้อ
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showConfirmModal && (
               <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4 font-FontThai">
               <div className="bg-white rounded-lg p-6 w-full max-w-sm h-auto overflow-y-auto relative">
                   <FaExclamationCircle className="text-red-500 text-6xl mx-auto mb-4" />
                   <h2 className="text-2xl font-bold text-center mb-4">คุณต้องการซื้อบัตรเงินสดนี้หรือไม่?</h2>
                   <p className="text-center text-gray-700 mb-4">
                       โปรดระวัง! บัตรเงินสดไม่สามารถเปลี่ยนสินค้า หรือคืนเงินได้
                   </p>
                   <div className="flex justify-center space-x-4">
                       <button
                           className="btn bg-green-500 text-white hover:bg-green-600 flex-1 px-4 py-2 sm:px-6 sm:py-2 rounded-lg"
                           onClick={handleConfirmPurchase}
                       >
                           ซื้อ
                       </button>
                       <button
                           className="btn bg-slate-700 text-white hover:bg-red-600 flex-1 px-4 py-2 sm:px-6 sm:py-2 rounded-lg"
                           onClick={() => setShowConfirmModal(false)}
                       >
                           ยกเลิก
                       </button>
                   </div>
               </div>
           </div>
           
            )}
        </div>
    );
};

export default CashCard;
