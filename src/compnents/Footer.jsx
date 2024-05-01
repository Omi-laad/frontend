// Footer.jsx

import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AboutUs from '../pages/fpage/AboutUs';
import ContactUs from '../pages/fpage/ContactUs';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling behavior if supported by the browser
    });
};

  return (
    <footer className="bg-orange-500 py-2 md:py-4 px-4 text-white overflow-y-auto bottom-0 left-0 w-full z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link to="AboutUs" onClick={scrollToTop} className="hover:text-gray-200">About Us</Link>
            <Link to="ContactUs" onClick={scrollToTop} className="hover:text-gray-200">Contact Us</Link>
            <Link to="Privacypolicy" onClick={scrollToTop} className="hover:text-gray-200">Privacy Policy</Link>
            <div className="flex items-center space-x-2">
              <span>Follow Us:</span>
              <a href="https://twitter.com/NyaySaarthi74" className="social-icon" target="_blank">
                <FaTwitter className="text-white hover:text-gray-200" />
              </a>
              <a href="https://www.instagram.com/nyaysaarthi?igsh=cWoyeGp4cXR4cWN1" className="social-icon" target="_blank">
                <FaInstagram className="text-white hover:text-gray-200" />
              </a>
            </div>
          </div>
          <div className="text-xs md:text-sm whitespace-normal">&copy; {new Date().getFullYear()} NyaySarthi. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
	