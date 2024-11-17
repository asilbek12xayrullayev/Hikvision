import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          {/* Logo va Ta'rif */}
          <div>
            <h3 className="text-lg font-bold mb-2">StayHealthy</h3>
            <p className="text-sm mb-4">
              Online Training And Consultation About Diet And Exercise Tailored
              Based On User Needs.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {/* Social Media Ikonkalari */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 transition-transform transform hover:scale-110"
              >
                <i className="fab fa-youtube text-2xl"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-110"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://t.me/Hikvision123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-110"
              >
                <i className="fab fa-telegram text-2xl"></i>
              </a>
              <a
                href="https://t.me/Davlatxuja93"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-110"
              >
                <i className="fab fa-telegram text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-bold mb-2">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all hover:translate-x-1"
                >
                  Gym Equipment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all hover:translate-x-1"
                >
                  Supplement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all hover:translate-x-1"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-bold mb-2">Explore Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all hover:translate-x-1"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all hover:translate-x-1"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all hover:translate-x-1"
                >
                  Term and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-2">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>hi@stayhealthy.com</li>
              <li>021-123-636</li>
              <li>stayhealthy.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-6">
          © 2021 StayHealthy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
