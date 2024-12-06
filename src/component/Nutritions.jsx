import React from 'react';

const BestStore = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 p-8 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Rasm qismi */}
      <div className="relative w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
        <div className="group">
          <img
            src="https://thumbs.dreamstime.com/z/hikvision-exposition-stand-hangzhou-digital-technology-co-ltd-chinese-manufacturerof-video-surveillance-product-astana-170908473.jpg?ct=jpeg" // Rasm yo'lini shu yerga yozing
            alt="Camera Boxes"
            className="w-full h-auto rounded-lg transform group-hover:scale-105 group-hover:translate-y-2 transition-transform duration-700 ease-out"
          />
        </div>
      </div>

      {/* Matn qismi */}
      <div className="text-center lg:text-left w-full lg:w-1/2 animate-slideIn">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Лучший магазин
        </h1>
        <p className="text-gray-600 mb-6">
          В нашем магазине много информации о камерах и домофонах.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 hover:animate-shake transition-transform duration-300">
          Присоединяйтесь сейчас
        </button>
      </div>
    </div>
  );
};

export default BestStore;
