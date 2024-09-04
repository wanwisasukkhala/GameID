import React, { useState, useEffect } from 'react';

const Article = () => {
    // ข้อมูลรีวิวผู้ใช้
    const [reviews] = useState([
        {
            id: 1,
            name: 'นัท กัญจน์',
            rating: 5,
            comment: 'บริการดีมาก เติมเงินได้รวดเร็วทันใจครับ!',
        },
        {
            id: 2,
            name: 'สร้อยฟ้า จันทร์เพ็ญ',
            rating: 4,
            comment: 'ระบบใช้งานง่าย แต่มีบางครั้งที่ต้องรอนานกว่าปกติ',
        },
        {
            id: 3,
            name: 'ชนินทร์ จิตต์มานะ',
            rating: 5,
            comment: 'แนะนำเลยครับ ซื้อไอดีเกมแล้วคุ้มค่ามาก!',
        },
        // เพิ่มรีวิวอื่น ๆ หากต้องการ
    ]);

    // State สำหรับจัดการ index ของรีวิวที่กำลังแสดง
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    // ฟังก์ชันเลื่อนรีวิวอัตโนมัติ
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) =>
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // ตั้งเวลา 3 วินาทีต่อการเลื่อนหนึ่งครั้ง

        return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูก unmount
    }, [reviews.length]);

    return (
        <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
            <div className="text-center mb-12 box-animation font-FontThai bg-opacity-80 bg-white rounded-lg w-full max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">เว็บขายไอดีเกมและระบบเติมเงิน</h1>
                <p className="text-lg text-slate-800">สำรวจโลกของการซื้อขายไอดีเกมและการเติมเงินในเกมยอดนิยม</p>
            </div>
            
            <div className=" font-FontThai w-full max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8 relative bg-opacity-80 bg-gray-900 rounded-lg mt-8 mb-8 duration-300 ease-in-out box-animation">
                {/* ส่วนของบทความ */}
                <h2 className="text-2xl font-semibold text-purple-400 mb-4">บทนำ</h2>
                <p className="text-white leading-relaxed">
                    ในยุคดิจิทัลนี้ การเล่นเกมออนไลน์กลายเป็นกิจกรรมยอดนิยม และการซื้อขายไอดีเกม รวมถึงระบบเติมเงินก็เป็นสิ่งที่มีความสำคัญมากขึ้น
                    ผู้เล่นสามารถซื้อไอดีเกมที่มีไอเท็มหรือเลเวลที่สูง และสามารถเติมเงินเพื่อซื้อไอเท็มในเกมได้อย่างง่ายดาย
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-8 mb-4">ข้อดีของการซื้อขายไอดีเกม</h2>
                <p className="text-white leading-relaxed">
                    การซื้อไอดีเกมที่มีความก้าวหน้าแล้ว ทำให้ผู้เล่นใหม่สามารถเข้าสู่เกมในระดับที่สูงขึ้นโดยไม่ต้องเสียเวลาเล่นจากระดับเริ่มต้น
                    นอกจากนี้ยังสามารถเข้าถึงไอเท็มหรือฟังก์ชันพิเศษที่อาจต้องใช้เวลาหรือเงินจำนวนมากในการปลดล็อค
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-8 mb-4">การเติมเงินในเกม</h2>
                <p className="text-white leading-relaxed">
                    ระบบเติมเงินในเกมเป็นอีกหนึ่งวิธีที่ผู้พัฒนาเกมใช้ในการสร้างรายได้ ผู้เล่นสามารถเติมเงินเพื่อซื้อไอเท็มพิเศษ
                    เพิ่มพลังให้ตัวละคร หรือปลดล็อคฟีเจอร์พิเศษที่ช่วยให้เล่นเกมได้สนุกยิ่งขึ้น
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-8 mb-4">วิธีการเติมเงินและความปลอดภัย</h2>
                <p className="text-white leading-relaxed">
                    การเติมเงินสามารถทำได้หลายวิธี เช่น การเติมผ่านบัตรเติมเงิน การโอนเงินผ่านธนาคาร หรือการใช้บัตรเครดิต
                    เพื่อความปลอดภัย ควรใช้ช่องทางการเติมเงินที่เชื่อถือได้ และหลีกเลี่ยงการให้ข้อมูลส่วนตัวแก่บุคคลที่ไม่รู้จัก
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-8 mb-4">สรุป</h2>
                <p className="text-white leading-relaxed">
                    การซื้อขายไอดีเกมและการเติมเงินในเกมเป็นเรื่องที่สะดวกสบายและสามารถเพิ่มประสบการณ์การเล่นเกมได้มากขึ้น
                    แต่อย่าลืมคำนึงถึงความปลอดภัยในการทำธุรกรรม และควรใช้บริการที่เชื่อถือได้เท่านั้น
                </p>
            </div>

            {/* ส่วนของรีวิวผู้ใช้ แยก div และมีการเลื่อน Auto */}
            <div className="mt-12 bg-gray-100 py-8 px-6 rounded-lg shadow-lg font-FontThai">
                <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">รีวิวจากผู้ใช้</h2>
                <div className="overflow-hidden">
                    {reviews.map((review, index) => (
                        <div
                            key={review.id}
                            className={`transition-opacity duration-1000 ease-in-out ${index === currentReviewIndex ? 'opacity-100' : 'opacity-0'}`}
                            style={{ position: index === currentReviewIndex ? 'relative' : 'absolute' }}
                        >
                            <div className="text-center bg-white rounded-lg p-6 shadow-md max-w-md mx-auto">
                                <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
                                <p className="text-yellow-500 mb-2">
                                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                </p>
                                <p className="text-gray-600">{review.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Article;
