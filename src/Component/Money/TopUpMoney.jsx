import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UpMoney = () => {
  const [phoneCarrier, setPhoneCarrier] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleConfirm = () => {
    if (!phoneCarrier || !phoneNumber || !amount) {
      setShowWarningModal(true);
    } else {
      setShowConfirmModal(true);
    }
  };

  const closeWarningModal = () => {
    setShowWarningModal(false);
  };

  const closeConfirmModal = () => {
    setShowConfirmModal(false);
    // Process the top-up here (e.g., send data to server)
    alert("เติมเงินสำเร็จ!");
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8 bg-opacity-80 bg-gray-900 rounded-md mt-8 mb-8">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-3xl font-FontThai font-bold text-white px-4 py-2">
          เติมเงินมือถือ
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-6">
        <div className="flex flex-col items-center">
          <img
            src="/Img/TMH.png"
            alt="True Money"
            className="w-full max-w-xs h-auto transform transition duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/Img/DTAC-logo.png"
            alt="DTAC"
            className="w-full max-w-xs h-auto transform transition duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/Img/my4G.png"
            alt="My 4G"
            className="w-full max-w-xs h-auto transform transition duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>

      <div className="font-FontThai flex flex-col md:flex-row items-center justify-between gap-4 mt-6 px-4">
  <div className="w-full md:w-1/4">
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-lg text-white">เลือกค่ายมือถือ</span>
      </label>
      <select
        className="select select-bordered w-full"
        value={phoneCarrier}
        onChange={(e) => setPhoneCarrier(e.target.value)}
      >
        <option value="" disabled selected>
          เลือกค่ายมือถือ
        </option>
        <option>Dtac</option>
        <option>Truemove H</option>
        <option>Myby CAT</option>
      </select>
    </div>
  </div>

  <div className="w-full md:w-1/2">
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-lg text-white">เบอร์โทรศัพท์</span>
      </label>
      <input
        type="text"
        placeholder="NumPhone"
        className="input input-bordered w-full"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </div>
  </div>

  <div className="w-full md:w-1/4">
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-lg text-white">เลือกจำนวนเงิน</span>
      </label>
      <select
        className="select select-bordered w-full"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      >
        <option value="" disabled selected>
          เลือกจำนวนเงิน
        </option>
        <option>10</option>
        <option>20</option>
        <option>50</option>
        <option>100</option>
      </select>
    </div>
  </div>
</div>

<div className="flex justify-end px-4 mt-4">
  <button
    className="btn btn-success text-white font-FontThai"
    onClick={handleConfirm}
  >
    ยืนยันการเติมเงิน
  </button>
</div>


      {showWarningModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto overflow-y-auto relative font-FontThai">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={closeWarningModal}
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">กรุณากรอกข้อมูลให้ครบ</h2>
            <p className="text-gray-700 mb-4">
              กรุณากรอกข้อมูลทุกช่องก่อนกดปุ่มยืนยันการเติมเงิน.
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="btn bg-slate-800 text-white"
                onClick={closeWarningModal}
              >
                ปิด
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto overflow-y-auto relative font-FontThai">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setShowConfirmModal(false)}
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">ยืนยันการเติมเงิน</h2>
            <p className="text-gray-700 mb-4">
              คุณต้องการยืนยันการเติมเงินสำหรับหมายเลข{" "}
              <span className="font-bold ">{phoneNumber}</span> ของค่าย{" "}
              <span className="font-bold text-red-600">{phoneCarrier}</span> เป็นจำนวน{" "}
              <span className="font-bold text-yellow-600">{amount} บาท</span> ใช่หรือไม่?
            </p>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                className="btn bg-slate-800 text-white"
                onClick={() => setShowConfirmModal(false)}
              >
                ยกเลิก
              </button>
              <button
                className="btn btn-success text-white"
                onClick={closeConfirmModal}
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpMoney;
