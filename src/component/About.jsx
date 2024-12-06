import React, { useState } from "react";

const SurveillancePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Modalni ochish
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Modalni yopish
  const closeModal = () => {
    setSelectedImage(null);
  };

  const images = [
    "https://www.shutterstock.com/shutterstock/photos/1538332502/display_1500/stock-photo-kyiv-ukraine-october-hikvision-thermal-camera-in-the-shop-1538332502.jpg", // Rasm 1 URL
    "https://www.shutterstock.com/shutterstock/photos/1813877150/display_1500/stock-photo-manchester-united-kingdom-th-sept-cctv-ball-dome-camera-on-a-post-1813877150.jpg", // Rasm 2 URL
    "https://www.shutterstock.com/shutterstock/photos/1694383729/display_1500/stock-photo-vilnius-lithuania-march-hikvision-video-surveillance-cameras-hikvision-is-a-chinese-1694383729.jpg", // Rasm 3 URL
    "https://www.shutterstock.com/shutterstock/photos/1349944628/display_1500/stock-photo-milan-italy-august-hikvision-video-surveillance-cameras-on-pole-the-brand-is-1349944628.jpg", // Rasm 4 URL
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4 flex justify-center items-center">
      {/* Chap tomonda rasmlar */}
      <div className="grid grid-cols-2 gap-6 w-1/2">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => openModal(image)}
          >
            <img
              src={image}
              alt={`Camera ${index + 1}`}
              className="rounded-lg shadow-lg w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* O'ng tomonda forma */}
      <div className="flex flex-col items-start w-1/2 pl-10">
        <input
          type="text"
          placeholder="Ваш номер телефона (например: +998901234567)"
          className="p-3 w-full max-w-md rounded-lg shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300">
          Присоединяйтесь сейчас
        </button>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen rounded-lg shadow-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveillancePage;
