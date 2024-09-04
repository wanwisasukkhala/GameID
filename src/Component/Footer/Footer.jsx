import React from "react";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-gradient-to-r from-red-950 to-blue-950 text-white p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Jiew Jxewws</p>
            </aside>
        </footer>
    );
};

export default Footer;
