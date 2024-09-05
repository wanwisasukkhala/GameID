import React from "react";
import './BannerCss.css'
import { LiaUserPlusSolid } from "react-icons/lia";

const Banner = () => {
      // ฟังก์ชันเปิดปิดฟอร์มสมัครสมาชิก
  const toggleSignup = () => setIsSignupOpen(!isSignupOpen);
    return (
        <div className="w-full h-[325px] rounded-lg shadow-lg shadow-slate-600 overflow-hidden relative mt-[64px]"> {/* Adjust the margin-top value */}
            <img
                src="/Img/Banner/banner.png"
                alt="Banner"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 font-FontThai text-center px-4">
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 animate-fade-in">
                    GameID ขายไอดีเกมต่าง ๆ ราคาถูก
                </h1>
                <p className="text-lg md:text-xl text-white mb-4 animate-fade-in delay-1s">
                    ร้าน ขาย เกม ราคาถูก GTA V, RD2, Far Cry 6 และอื่นๆอีกมากมาย
                </p>
                <p className="text-md md:text-lg text-white mb-6 animate-fade-in delay-2s">
                   ตัวอย่าง ...
                </p>
                <button
                     onClick={toggleSignup}
                    className="btn bg-white text-purple-900 font-semibold shadow-lg py-2 px-4 rounded-lg animate-bounce hover:bg-gray-300 hover:text-purple-900"
                ><LiaUserPlusSolid className="h-6 w-6" /> {/* Adjust the size here */}
                    มีสมาชิกหรือยังน้าาาา
                </button>
            </div>
        </div>
    );
};

export default Banner;
