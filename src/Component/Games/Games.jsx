import React, { useState } from 'react';
import { FaTimes,FaExclamationCircle } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Index/PDadviseCss.css';

const ProductGrid = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const products = [
        // List of 15 product objects
        {
            id: 1,
            title: 'Grand Theft Auto V: Premium Online Edition',
            description: '[มือ1+เล่นออนไลน์+เล่น FiveM ได้]',
            price: '฿290',
            originalPrice: '฿590',
            image: '/src/Img/ProductGame/GTA.png',
            stock: 10,
            label: 'บัญชี',
            details: 'ท่านจะได้รับสินค้าดังนี้ บัญชี (email:password)...',
            warranty: 'หากยังไม่เปลี่ยนรหัสผ่านหรืออีเมล ร้านจะรับประกันให้ 7 วัน...',
            warning: 'หากอารมณ์เสียแล้ว ไม่มีการคืนเงินทุกกรณี...',
            instructions: [
                'ดาวน์โหลดและติดตั้ง ......',
                'ใส่ บัญชี ....',
                'ติดตั้งเกม....'
            ],
        },
        // Add more product objects, up to 15 items
        {
            id: 2,
            title: 'Red Dead Redemption 2',
            description: '[เปลี่ยนรหัส + ลงมอดภาษาไทยได้]',
            price: '฿390',
            originalPrice: '฿690',
            image: '/src/Img/ProductGame/REDDEAD.png',
            stock: 5,
            label: 'CD-KEY',
            details: 'ท่านจะได้รับ CD-KEY สำหรับเกมนี้...',
            warranty: 'รับประกัน CD-KEY 7 วัน...',
            warning: 'กรุณาตรวจสอบ CD-KEY ทันทีหลังจากได้รับ...',
            instructions: [
                'ดาวน์โหลดและติดตั้ง ......',
                'ใส่ CD-KEY ....',
                'ติดตั้งเกม....'
            ],
        },
        // ...add more items here, up to 15 items
        // Examples for the remaining products
        {
            id: 3,
            title: 'Battlefield V',
            description: '[เปลี่ยนเมลได้]',
            price: '฿350',
            originalPrice: '฿700',
            image: '/src/Img/ProductGame/PV.png',
            stock: 7,
            label: 'บัญชี',
            details: 'ท่านจะได้รับ CD-KEY สำหรับเกมนี้...',
            warranty: 'รับประกัน CD-KEY 7 วัน...',
            warning: 'กรุณาตรวจสอบ CD-KEY ทันทีหลังจากได้รับ...',
            instructions: [
                'ดาวน์โหลดและติดตั้ง ......',
                'ใส่ CD-KEY ....',
                'ติดตั้งเกม....'
            ],
        },
        {
            id: 4,
            title: 'Battlefield V',
            description: '[เปลี่ยนเมลได้]',
            price: '฿350',
            originalPrice: '฿700',
            image: '/src/Img/ProductGame/PV.png',
            stock: 7,
            label: 'บัญชี',
            details: 'ท่านจะได้รับ CD-KEY สำหรับเกมนี้...',
            warranty: 'รับประกัน CD-KEY 7 วัน...',
            warning: 'กรุณาตรวจสอบ CD-KEY ทันทีหลังจากได้รับ...',
            instructions: [
                'ดาวน์โหลดและติดตั้ง ......',
                'ใส่ CD-KEY ....',
                'ติดตั้งเกม....'
            ],
        },
        {
            id: 5,
            title: 'Red Dead Redemption 2',
            description: '[เปลี่ยนรหัส + ลงมอดภาษาไทยได้]',
            price: '฿390',
            originalPrice: '฿690',
            image: '/src/Img/ProductGame/REDDEAD.png',
            stock: 5,
            label: 'CD-KEY',
            details: 'ท่านจะได้รับ CD-KEY สำหรับเกมนี้...',
            warranty: 'รับประกัน CD-KEY 7 วัน...',
            warning: 'กรุณาตรวจสอบ CD-KEY ทันทีหลังจากได้รับ...',
            instructions: [
                'ดาวน์โหลดและติดตั้ง ......',
                'ใส่ CD-KEY ....',
                'ติดตั้งเกม....'
            ],
        },
        {
            id: 6,
            title: 'Battlefield V',
            description: '[เปลี่ยนเมลได้]',
            price: '฿350',
            originalPrice: '฿700',
            image: '/src/Img/ProductGame/PV.png',
            stock: 7,
            label: 'บัญชี',
            details: 'ท่านจะได้รับ CD-KEY สำหรับเกมนี้...',
            warranty: 'รับประกัน CD-KEY 7 วัน...',
            warning: 'กรุณาตรวจสอบ CD-KEY ทันทีหลังจากได้รับ...',
            instructions: [
                'ดาวน์โหลดและติดตั้ง ......',
                'ใส่ CD-KEY ....',
                'ติดตั้งเกม....'
            ],
        },
        {
            id: 7,
            title: 'Red Dead Redemption 2',
            description: '[เปลี่ยนรหัส + ลงมอดภาษาไทยได้]',
            price: '฿390',
            originalPrice: '฿690',
            image: '/src/Img/ProductGame/REDDEAD.png',
            stock: 5,
            label: 'CD-KEY',
            details: 'ท่านจะได้รับ CD-KEY สำหรับเกมนี้...',
            warranty: 'รับประกัน CD-KEY 7 วัน...',
            warning: 'กรุณาตรวจสอบ CD-KEY ทันทีหลังจากได้รับ...',
            instructions: [
                'ดาวน์โหลดและติดตั้ง ......',
                'ใส่ CD-KEY ....',
                'ติดตั้งเกม....'
            ],
        },
        {
            id: 8,
            title: 'Grand Theft Auto V: Premium Online Edition',
            description: '[มือ1+เล่นออนไลน์+เล่น FiveM ได้]',
            price: '฿290',
            originalPrice: '฿590',
            image: '/src/Img/ProductGame/GTA.png',
            stock: 10,
            label: 'บัญชี',
            details: 'ท่านจะได้รับสินค้าดังนี้ บัญชี (email:password)...',
            warranty: 'หากยังไม่เปลี่ยนรหัสผ่านหรืออีเมล ร้านจะรับประกันให้ 7 วัน...',
            warning: 'หากอารมณ์เสียแล้ว ไม่มีการคืนเงินทุกกรณี...',
            instructions: [
                'ดาวน์โหลดและติดตั้ง ......',
                'ใส่ บัญชี ....',
                'ติดตั้งเกม....'
            ],
        },
        {
            id: 9,
            title: 'Red Dead Redemption 2',
            description: '[เปลี่ยนรหัส + ลงมอดภาษาไทยได้]',
            price: '฿390',
            originalPrice: '฿690',
            image: '/src/Img/ProductGame/REDDEAD.png',
            stock: 5,
            label: 'CD-KEY',
            details: 'ท่านจะได้รับ CD-KEY สำหรับเกมนี้...',
            warranty: 'รับประกัน CD-KEY 7 วัน...',
            warning: 'กรุณาตรวจสอบ CD-KEY ทันทีหลังจากได้รับ...',
            instructions: [
                'ดาวน์โหลดและติดตั้ง ......',
                'ใส่ CD-KEY ....',
                'ติดตั้งเกม....'
            ],
        },
        {
            id: 10,
            title: 'Red Dead Redemption 2',
            description: '[เปลี่ยนรหัส + ลงมอดภาษาไทยได้]',
            price: '฿390',
            originalPrice: '฿690',
            image: '/src/Img/ProductGame/REDDEAD.png',
            stock: 5,
            label: 'CD-KEY',
            details: 'ท่านจะได้รับ CD-KEY สำหรับเกมนี้...',
            warranty: 'รับประกัน CD-KEY 7 วัน...',
            warning: 'กรุณาตรวจสอบ CD-KEY ทันทีหลังจากได้รับ...',
            instructions: [
                'ดาวน์โหลดและติดตั้ง ......',
                'ใส่ CD-KEY ....',
                'ติดตั้งเกม....'
            ],
        },
        {
            id: 11,
            title: 'Battlefield V',
            description: '[เปลี่ยนเมลได้]',
            price: '฿350',
            originalPrice: '฿700',
            image: '/src/Img/ProductGame/PV.png',
            stock: 7,
            label: 'บัญชี',
            details: 'ท่านจะได้รับ CD-KEY สำหรับเกมนี้...',
            warranty: 'รับประกัน CD-KEY 7 วัน...',
            warning: 'กรุณาตรวจสอบ CD-KEY ทันทีหลังจากได้รับ...',
            instructions: [
                'ดาวน์โหลดและติดตั้ง ......',
                'ใส่ CD-KEY ....',
                'ติดตั้งเกม....'
            ],
        },
        {
            id: 12,
            title: 'Grand Theft Auto V: Premium Online Edition',
            description: '[มือ1+เล่นออนไลน์+เล่น FiveM ได้]',
            price: '฿290',
            originalPrice: '฿590',
            image: '/src/Img/ProductGame/GTA.png',
            stock: 10,
            label: 'บัญชี',
            details: 'ท่านจะได้รับสินค้าดังนี้ บัญชี (email:password)...',
            warranty: 'หากยังไม่เปลี่ยนรหัสผ่านหรืออีเมล ร้านจะรับประกันให้ 7 วัน...',
            warning: 'หากอารมณ์เสียแล้ว ไม่มีการคืนเงินทุกกรณี...',
            instructions: [
                'ดาวน์โหลดและติดตั้ง ......',
                'ใส่ บัญชี ....',
                'ติดตั้งเกม....'
            ],
        },
        // Continue adding products until you have 15 items
    ];

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    const handlePurchase = () => {
        // Show the custom modal here
        const modal = document.getElementById("my_modal_5");
        modal.showModal();
    };
    const handleCancel = () => {
        closeModal(); // Simply close the modal when "ยกเลิก" is clicked
      };

    

    return (
        <div className="w-full max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8 bg-opacity-80 bg-gray-900 rounded-md mt-8 mb-8">
             <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-FontThai font-bold text-white bg-gradient-to-r from-indigo-900 to-indigo-950 rounded-lg px-4 py-2 inline-block shadow-lg">สินค้าทั้งหมด</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="card shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out flex flex-col border border-gray-300 rounded-lg bg-white" onClick={() => handleCardClick(product)}>
                        <figure className="flex-grow rounded-t-lg overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="flex justify-between mt-2 px-4">
                            <span className="bg-green-600 text-white text-xs font-bold font-FontThai px-2 py-1 rounded">
                                {product.label}
                            </span>
                            <span className="bg-red-700 text-white text-xs font-bold font-FontThai px-2 py-1 rounded">
                                คงเหลือ: {product.stock}
                            </span>
                        </div>
                        <div className="card-body flex flex-col justify-between p-4 h-44">
                            <div className="mb-2 overflow-hidden">
                                <h2 className="card-title text-base font-bold font-FontEng truncate">{product.title}</h2>
                                <p className="text-sm text-gray-600 font-FontThai truncate">{product.description}</p>
                            </div>
                            <div className="card-actions flex justify-between items-center font-FontThai">
                                <div className="text-left">
                                    <span className="text-xl font-bold text-red-600">{product.price}</span>
                                    <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                                </div>
                                <button
                                    className="btn btn-warning btn-sm ml-auto"
                                    onClick={() => handleCardClick(product)}
                                >
                                    รายละเอียด
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-3xl h-auto max-h-[80vh] overflow-y-auto relative font-FontThai">
                        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900" onClick={closeModal}>
                            <FaTimes size={24} />
                        </button>
    
                        <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.title}
                            className="w-full h-64 object-cover mb-4 rounded"
                        />
                        <h3 className="text-xl font-bold text-yellow-600 mb-4">รายละเอียดหลังซื้อ</h3>
                        <p className="text-gray-700 mb-4">{selectedProduct.details}</p>
                        <h3 className="text-lg font-bold text-red-600 mb-2">เงื่อนไขการรับประกัน</h3>
                        <p className="text-gray-700 mb-4">{selectedProduct.warranty}</p>
                        <h3 className="text-lg font-bold text-red-600 mb-2">คำเตือน! (กรุณาอ่านก่อน)</h3>
                        <p className="text-gray-700 mb-4">{selectedProduct.warning}</p>
                        <h3 className="text-lg font-bold text-blue-600 mb-2">วิธีโหลดเกม</h3>
                        <ol className="list-decimal list-inside text-gray-700 mb-4">
                            {selectedProduct.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                        <div className="flex justify-end mt-4">
                        <button
                className="btn bg-slate-700 shadow-lg shadow-slate-700/50 w-40 mr-2 text-white hover:bg-red-900"
                onClick={handleCancel} >
                        ยกเลิก
                    </button>
                            <button className="btn bg-green-500 shadow-lg shadow-green-500/50 w-40 mr-2 text-white hover:bg-orange-600" onClick={handlePurchase}>
                                สั่งซื้อ
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Component */}
            <dialog id="my_modal_5" className="modal modal-middle">
      <div className="modal-box p-6 sm:p-8 rounded-lg max-w-xs sm:max-w-lg mx-auto font-FontThai">
      <FaExclamationCircle className="text-red-500 text-6xl mx-auto mb-4" />
        <h3 className="text-lg sm:text-xl font-bold">คุณต้องการซื้อสินค้าชิ้นนี้หรือไม่?</h3>
        <p className="py-4 text-sm sm:text-base">โปรดอ่านเงื่อนไขการรับประกันก่อนซื้อ</p>
        <div className="modal-action flex justify-center space-x-2 w-full">
          <form method="dialog" className="flex w-full space-x-2">
            <button className="btn bg-green-500 text-white hover:bg-green-600 flex-1 px-4 py-2 sm:px-6 sm:py-2 rounded-lg">ซื้อ</button>
            <button className="btn bg-slate-700 text-white hover:bg-red-600 flex-1 px-4 py-2 sm:px-6 sm:py-2 rounded-lg">ยกเลิก</button>
          </form>
        </div>
      </div>
    </dialog>
        </div>
    );
};

export default ProductGrid;