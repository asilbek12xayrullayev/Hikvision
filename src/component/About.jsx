import React, { useState } from "react";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://www.shutterstock.com/shutterstock/photos/1813877150/display_1500/stock-photo-manchester-united-kingdom-th-sept-cctv-ball-dome-camera-on-a-post-1813877150.jpg", // Bu yerga rasmlaringiz yo‘lini qo'shing
    "https://www.shutterstock.com/shutterstock/photos/1538332502/display_1500/stock-photo-kyiv-ukraine-october-hikvision-thermal-camera-in-the-shop-1538332502.jpg",
    "https://www.shutterstock.com/shutterstock/photos/1538332499/display_1500/stock-photo-kyiv-ukraine-october-hikvision-thermal-camera-in-the-shop-1538332499.jpg",
    "https://www.shutterstock.com/shutterstock/photos/2445730585/display_1500/stock-photo-lviv-ukraine-april-hikvision-video-surveillance-cameras-on-pole-2445730585.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Camera ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Ваш номер телефона (например: +998901234567)"
            className="w-full p-3 mb-4 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-200">
            Присоединяйтесь сейчас
          </button>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-w-3xl rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 text-black"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
