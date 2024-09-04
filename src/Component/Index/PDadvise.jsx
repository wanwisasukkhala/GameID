import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight, FaTimes,FaExclamationCircle } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PDadviseCss.css';
import { useNavigate } from 'react-router-dom'; // นำเข้าฟังก์ชัน useNavigate

const PDadvise = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // ใช้ useNavigate เพื่อเปลี่ยนหน้า
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            title: 'Grand Theft Auto V: Premium Online Edition ',
            description: '[มือ1+เล่นออนไลน์+เล่น FiveM ได้]',
            price: '฿290',
            originalPrice: '฿590',
            image: '/src/Img/ProductGame/GTAF.png',
            stock: 10,
            label: 'บัญชี',
            details: 'ท่านจะได้รับสินค้าดังนี้ บัญชี (email:password)...',
            warranty: 'หากยังไม่เปลี่ยนรหัสผ่านหรืออีเมล ร้านจะรับประกันให้ 7 วัน...',
            warning: 'หากอารมณ์เสียแล้ว ไม่มีการคืนเงินทุกกรณี...',
            reviews: [
                { username: 'Prant', rating: 5, comment: 'ได้รับสินค้าแล้วครับ...', date: '2 ปีที่แล้ว' },
                { username: 'NOBI', rating: 5, comment: 'ชอบสินค้านี้เพราะราคาถูก...', date: '2 ปีที่แล้ว' }
            ]
        },
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
            reviews: [
                { username: 'Prant', rating: 5, comment: 'ได้รับสินค้าแล้วครับ...', date: '2 ปีที่แล้ว' },
                { username: 'NOBI', rating: 5, comment: 'ชอบสินค้านี้เพราะราคาถูก...', date: '2 ปีที่แล้ว' }
            ]
        },
        {
            id: 3,
            title: 'Battlefield V',
            description: ' [เปลี่ยนเมลได้]',
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
            reviews: [
                { username: 'Prant', rating: 5, comment: 'ได้รับสินค้าแล้วครับ...', date: '2 ปีที่แล้ว' },
                { username: 'NOBI', rating: 5, comment: 'ชอบสินค้านี้เพราะราคาถูก...', date: '2 ปีที่แล้ว' }
            ]
        },
        {
            id: 4,
            title: 'Far Cry 6',
            description: '[เปลี่ยนเมล]',
            price: '฿400',
            originalPrice: '฿800',
            image: '/src/Img/ProductGame/FC.png',
            stock: 12,
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
            id: 5,
            title: 'GRAND THEFT AUTO V',
            description: ' [เปลี่ยนรหัส + เล่น FiveM]',
            price: '฿300',
            originalPrice: '฿600',
            image: '/src/Img/ProductGame/GTAF.png',
            stock: 15,
            label: 'บัญชี',
            details: 'ท่านจะได้รับ CD-KEY สำหรับเกมนี้...',
            warranty: 'รับประกัน CD-KEY 7 วัน...',
            warning: 'กรุณาตรวจสอบ CD-KEY ทันทีหลังจากได้รับ...',
            instructions: [
                'ดาวน์โหลดและติดตั้ง ......',
                'ใส่ บัญชี ....',
                'ติดตั้งเกม....'
            ]
        },
    ];

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <FaChevronRight
                className={className}
                style={{ ...style, display: 'block', color: 'white', right: '-25px', zIndex: 2 }}
                onClick={onClick}
            />
        );
    };

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <FaChevronLeft
                className={className}
                style={{ ...style, display: 'block', color: 'white', left: '-25px', zIndex: 2 }}
                onClick={onClick}
            />
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

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

    const handleMoreClick = () => {
        navigate('/games'); // เปลี่ยนหน้าไปยังเส้นทาง /games
    };

    return (
        <div className="w-full max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-FontThai font-bold text-white bg-gradient-to-r from-indigo-900 to-indigo-950 rounded-lg px-4 py-2 inline-block shadow-lg">สินค้าแนะนำ</h1>
                <button 
                    className="btn btn-white bg-white text-indigo-900 border border-gray-300 shadow-lg rounded-xl font-FontThai hover:bg-gray-100"
                    onClick={handleMoreClick}
                >
                    เพิ่มเติม
                </button>
            </div>
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="px-2">
                        <div
                            className="card shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out h-full flex flex-col border border-gray-300 rounded-lg bg-white"
                            onClick={() => handleCardClick(product)}
                        >
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
                            <div className="card-body flex flex-col justify-between p-4 h-36">
                                <div className="mb-4">
                                    <h2 className="card-title text-base font-bold font-FontEng">{product.title}</h2>
                                    <p className="text-sm text-gray-600 font-FontThai">{product.description}</p>
                                </div>
                                <div className="card-actions flex justify-between items-center font-FontThai">
                                    <div className="text-left">
                                        <span className="text-xl font-bold text-red-600">{product.price}</span>
                                        <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                                    </div>
                                    <button
                                        className="btn btn-warning btn-sm"
                                        onClick={() => handleCardClick(product)}
                                    >
                                        รายละเอียด
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
    
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
                        <h3 className="text-xl font-bold text-sky-950 mb-4">รายละเอียดหลังซื้อ</h3>
                        <p className="text-gray-700 mb-4">{selectedProduct.details}</p>
                        <h3 className="text-lg font-bold text-red-600 mb-2">เงื่อนไขการรับประกัน</h3>
                        <p className="text-gray-700 mb-4">{selectedProduct.warranty}</p>
                        <h3 className="text-lg font-bold text-red-600 mb-2">คำเตือน! (กรุณาอ่านก่อน)</h3>
                        <p className="text-gray-700 mb-4">{selectedProduct.warning}</p>
                        <h3 className="text-lg font-bold text-orange-600 mb-2">วิธีโหลดเกม</h3>
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

export default PDadvise;
