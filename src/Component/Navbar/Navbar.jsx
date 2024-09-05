import React, { useState } from "react";
import "./NavCss.css";
import { LiaUserPlusSolid } from "react-icons/lia";
import { LiaCreditCardSolid } from "react-icons/lia";
import { LiaHomeSolid } from "react-icons/lia";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { LiaCcVisa } from "react-icons/lia";
import { LiaSmsSolid } from "react-icons/lia";
import { IoIosPhonePortrait } from "react-icons/io";
import { TbLogin2 } from "react-icons/tb";
import { FaExclamationCircle, FaEye, FaEyeSlash, FaBars, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // สำหรับเปิด/ปิดเมนูมือถือ
  const [isSignupOpen, setIsSignupOpen] = useState(false); // สำหรับ Modal สมัครสมาชิก
  const [isLoginOpen, setIsLoginOpen] = useState(false); // สำหรับ Modal เข้าสู่ระบบ
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // แสดง/ซ่อนรหัสผ่าน
  const [isLoggedIn, setIsLoggedIn] = useState(false); // สถานะการเข้าสู่ระบบ
  const [username, setUsername] = useState(""); // ชื่อผู้ใช้ที่เข้าสู่ระบบ
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // สำหรับเปิด/ปิด Dropdown

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const correctUsername = "ad515";
  const correctPassword = "212248";

  // ฟังก์ชันเปิด/ปิดเมนูมือถือ
  const toggleMenu = () => setIsOpen(!isOpen);

  // ฟังก์ชันเปิด/ปิดฟอร์มสมัครสมาชิก
  const toggleSignup = () => setIsSignupOpen(!isSignupOpen);

  // ฟังก์ชันเปิด/ปิดฟอร์มเข้าสู่ระบบ
  const toggleLogin = () => setIsLoginOpen(!isLoginOpen);

  // ฟังก์ชันเปิด/ปิด Dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // ฟังก์ชันแสดง/ซ่อนรหัสผ่าน
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // ฟังก์ชันสำหรับเปลี่ยนค่าในฟอร์ม
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // ฟังก์ชันเข้าสู่ระบบ
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginData.username === correctUsername && loginData.password === correctPassword) {
      setIsLoggedIn(true);
      setUsername(loginData.username); // ตั้งชื่อผู้ใช้เมื่อเข้าสู่ระบบ
      setIsLoginOpen(false); // ปิด Modal เข้าสู่ระบบ
    } else {
      setErrorMessage("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      setShowErrorModal(true);
    }
  };

  // ฟังก์ชันออกจากระบบ
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setIsDropdownOpen(false);
    window.location.reload(); // โหลดหน้าใหม่เพื่อกลับไปยังหน้าก่อนเข้าสู่ระบบ
  };

  // ฟังก์ชันปิด Modal เมื่อเกิดข้อผิดพลาด
  const closeModal = () => {
    setShowErrorModal(false);
    setIsSignupOpen(false);
    setFormData({
      firstName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // ฟังก์ชันตรวจสอบเมนูที่เปิดอยู่
  const getActiveClass = (path) => {
    return window.location.pathname === path ? "bg-white text-purple-900" : "";
  };

  return (
    <div>
      <div
        className="navbar bg-gradient-to-r from-sky-950 to-violet-950 text-white shadow-lg px-6 lg:px-8"
        style={{
          minHeight: "64px",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        <div className="navbar-start">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            <img
              src="/Img/logo.png"
              alt="Logo"
              className="h-12 lg:h-18 w-auto max-w-full object-contain"
            />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-FontThai text-lg lg:text-xl">
            <li>
              <a
                href="/"
                className={`px-3 py-2 rounded-md ${getActiveClass("/")}`}
              >
                <LiaHomeSolid className="h-6 w-6" />
                หน้าแรก
              </a>
            </li>
            <li>
              <a
                href="/Games"
                className={`px-3 py-2 rounded-md ${getActiveClass("/Games")}`}
              >
                <LiaLayerGroupSolid className="h-6 w-6" />
                เกมทั้งหมด
              </a>
            </li>
            <li>
              <a
                href="/topupphone"
                className={`px-3 py-2 rounded-md ${getActiveClass("/topupphone")}`}
              >
                <IoIosPhonePortrait className="h-6 w-6" />
                เติมเงินมือถือ
              </a>
            </li>
            <li>
              <a
                href="/cashcard"
                className={`px-3 py-2 rounded-md ${getActiveClass("/cashcard")}`}
              >
                <LiaMoneyCheckAltSolid className="h-6 w-6" />
                บัตรเติมเงินสด
              </a>
            </li>
            <li>
              <a
                href="/onlinegames"
                className={`px-3 py-2 rounded-md ${getActiveClass("/onlinegames")}`}
              >
                เติมเกมออนไลน์
              </a>
            </li>
            <li>
              <a
                href="/topup"
                className={`px-3 py-2 rounded-md ${getActiveClass("/topup")}`}
              >
                เติมเงิน
              </a>
            </li>
            <li>
              <a
                href="/articles"
                className={`px-3 py-2 rounded-md ${getActiveClass("/articles")}`}
              >
                บทความ
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end font-FontThai">
          {!isLoggedIn ? (
            <>
              {/* ปุ่มเข้าสู่ระบบและสมัครสมาชิก - ซ่อนในหน้าจอเล็ก */}
              <div className="hidden lg:flex">
                <button
                  onClick={toggleLogin}
                  className="btn btn-outline text-white border-white hover:bg-gray-300 hover:text-purple-900 shadow-lg"
                >
                  <TbLogin2 className="h-6 w-6" />
                  เข้าสู่ระบบ
                </button>
                <button
                  onClick={toggleSignup}
                  className="btn bg-white text-purple-900 ml-2 hover:bg-gray-300 hover:text-purple-900 shadow-lg"
                >
                  <LiaUserPlusSolid className="h-6 w-6" />
                  สมัครสมาชิก
                </button>
              </div>
            </>
          ) : (
            <div className="relative">
              <button
                className="flex items-center space-x-2 focus:outline-none"
                onClick={toggleDropdown}
              >
                <FaUserCircle className="h-8 w-8" />
                <span className="text-white text-lg">{username}</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    ออกจากระบบ
                  </button>
                </div>
              )}
            </div>
          )}
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-3xl ml-4"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 text-white w-full absolute top-16 left-0 z-50">
          <ul className="flex flex-col px-6 py-4 space-y-4">
            <li>
              <a
                href="/"
                className={`block py-2 px-4 rounded-md ${getActiveClass("/")}`}
              >
                หน้าแรก
              </a>
            </li>
            <li>
              <a
                href="/Games"
                className={`block py-2 px-4 rounded-md ${getActiveClass("/Games")}`}
              >
                เกมทั้งหมด
              </a>
            </li>
            <li>
              <a
                href="/topupphone"
                className={`block py-2 px-4 rounded-md ${getActiveClass("/topupphone")}`}
              >
                เติมเงินมือถือ
              </a>
            </li>
            <li>
              <a
                href="/cashcard"
                className={`block py-2 px-4 rounded-md ${getActiveClass("/cashcard")}`}
              >
                บัตรเติมเงินสด
              </a>
            </li>
            <li>
              <a
                href="/onlinegames"
                className={`block py-2 px-4 rounded-md ${getActiveClass("/onlinegames")}`}
              >
                เติมเกมออนไลน์
              </a>
            </li>
            <li>
              <a
                href="/topup"
                className={`block py-2 px-4 rounded-md ${getActiveClass("/topup")}`}
              >
                เติมเงิน
              </a>
            </li>
            <li>
              <a
                href="/articles"
                className={`block py-2 px-4 rounded-md ${getActiveClass("/articles")}`}
              >
                บทความ
              </a>
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <button
                    onClick={toggleLogin}
                    className="block py-2 px-4 rounded-md text-left"
                  >
                    เข้าสู่ระบบ
                  </button>
                </li>
                <li>
                  <button
                    onClick={toggleSignup}
                    className="block py-2 px-4 rounded-md text-left"
                  >
                    สมัครสมาชิก
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}

      {/* Login Popup */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-FontThai">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">เข้าสู่ระบบ</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">ชื่อผู้ใช้</label>
                <input
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700">รหัสผ่าน</label>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="input input-bordered w-full"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="text-right mb-4">
                <a href="#" className="text-blue-500 hover:underline">
                  ลืมรหัสผ่านหรือไม่?
                </a>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="btn bg-indigo-700 text-white hover:bg-indigo-400"
                >
                  เข้าสู่ระบบ
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={toggleLogin}
                >
                  ยกเลิก
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Signup Popup */}
      {isSignupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-FontThai">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold text-center mb-6">สมัครสมาชิก GameID</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">ชื่อ</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">อีเมล</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">รหัสผ่าน</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">ยืนยันรหัสผ่าน</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="btn bg-indigo-700 text-white hover:bg-indigo-400"
                >
                  สมัครสมาชิก
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={toggleSignup}
                >
                  ยกเลิก
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-FontThai">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaExclamationCircle className="text-red-500 text-6xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-center mb-4">เกิดข้อผิดพลาด!</h2>
            <p className="text-center mb-4">{errorMessage}</p>
            <div className="flex justify-center">
              <button
                onClick={closeModal}
                className="btn bg-slate-800 hover:bg-slate-400 text-white"
              >
                ตกลง
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
