import React, { useEffect, useState } from 'react';
import { FaUsers, FaStar } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

const WhyChooseUs = () => {
  const [userCount, setUserCount] = useState(0);
  const targetCount = 569566;

  useEffect(() => {
    let currentCount = 0;
    const increment = Math.ceil(targetCount / 100);

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        currentCount = targetCount;
        clearInterval(interval);
      }
      setUserCount(currentCount);
    }, 50);

    return () => clearInterval(interval);
  }, [targetCount]);

  return (
    <section className="text-center py-10 font-FontThai px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-10 text-white">ทำไมคุณต้องเลือกเรา</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center bg-white bg-opacity-70 rounded-lg p-6 shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="bg-blue-100 rounded-full p-4 mb-4">
            <FaUsers className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-bold">ผู้ใช้งาน</h3>
          <p className="text-gray-900">ผู้ใช้งานเว็บมีมากถึง {userCount.toLocaleString()} คน</p>
        </div>
        <div className="flex flex-col items-center bg-white bg-opacity-70 rounded-lg p-6 shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="bg-blue-100 rounded-full p-4 mb-4">
            <AiFillSafetyCertificate className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-bold">รับประกัน</h3>
          <p className="text-gray-900">ประกันใจดี เริ่มต้น ... วัน!!</p>
        </div>
        <div className="flex flex-col items-center bg-white bg-opacity-70 rounded-lg p-6 shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="bg-blue-100 rounded-full p-4 mb-4">
            <FaStar className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-bold">บริการหลังการขาย</h3>
          <p className="text-gray-900">ช่องเวลา.....</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
