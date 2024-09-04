import React from 'react';

const BanFoot = () => {
  return (
    <section className="text-center py-10 bg-white bg-opacity-50 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl font-bold font-FontThai mb-4">ระบบเติมเงินอัตโนมัติ</h2>
      <p className="text-gray-900 font-FontThai mb-10">รองรับการเติมเงินหลากหลายช่องทาง สะดวก รวดเร็ว ปลอดภัย ตลอด 24 ชั่วโมง</p>
      
      <div className="flex flex-wrap justify-center items-center gap-6">
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img 
            src="/src/Img/truemoney.png" 
            alt="True Money" 
            className="w-80 h-40 mb-4 transform transition duration-300 ease-in-out hover:scale-110" 
          />
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img 
            src="/src/Img/TMW.png" 
            alt="True Money Wallet Gift" 
            className="w-80 h-40 mb-4 transform transition duration-300 ease-in-out hover:scale-110" 
          />
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img 
            src="/src/Img/PP.png" 
            alt="PromptPay" 
            className="w-80 h-40 mb-4 transform transition duration-300 ease-in-out hover:scale-110" 
          />
        </div>
      </div>
    </section>
  );
};

export default BanFoot;
