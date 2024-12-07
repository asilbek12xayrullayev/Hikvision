import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          {/* Logo va Ta'rif */}
          <div>
            <h3 className="text-lg font-bold mb-2">Оставайтесьздоровыми</h3>
            <p className="text-sm mb-4">
              Вы можете связаться с нами и получить консультацию. У нас вы можете получить подробную информацию о камере и техническую информацию.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {/* Social Media Ikonkalari */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href="https://www.instagram.com/hayrullobobonazarov?igsh=MW5mOWE5b3U4NGJ2Mg=="
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
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-bold mb-2">Продукт</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all hover:translate-x-1"
                >
                  О продукте Hikvision
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all hover:translate-x-1"
                >
                  Добавка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all hover:translate-x-1"
                >
                  Гарантия на продукт
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-bold mb-2">О нашем продукте</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all hover:translate-x-1"
                >
                  Ремонт в случае поломки товара
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all hover:translate-x-1"
                >
                  Вы можете доверять нашему продукту
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all hover:translate-x-1"
                >
                  Срок и варианты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-2">Контакт</h4>
            <ul className="space-y-2 text-sm">
              <li>@Hikvision123</li>
              <li>+998-(33)-367-86-86</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-6">
          © 2014 год текущий.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
