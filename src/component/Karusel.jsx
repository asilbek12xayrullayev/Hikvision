import React from 'react';
import image1 from "../assats/photo_2024-11-17_12-44-48.jpg"
import image2 from "../assats/photo_2024-11-17_12-47-27.jpg"
import image3 from "../assats/photo_2024-11-17_12-48-33.jpg"

const CameraDetails = () => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-center text-xl font-bold mb-6 animate-fadeIn">
        Подробная информация о камере
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:rotate-3 transition-transform duration-500">
            {/* Rasm to‘liq ko‘rinadi */}
            <img
              src={image1}
              alt="Camera 1"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:rotate-3 transition-transform duration-500">
            {/* Rasm to‘liq ko‘rinadi */}
            <img
              src={image2}
              alt="Camera 2"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {/* Image 3 */}
        <div className="flex flex-col items-center">
          <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:rotate-3 transition-transform duration-500">
            {/* Rasm to‘liq ko‘rinadi */}
            <img
              src={image3}
              alt="Camera 3"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Text descriptions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-gray-700 font-medium">
        <div className="hover:text-blue-500 transition-colors duration-200 animate-fadeIn">
          Работы по укладке домофона
        </div>
        <div className="hover:text-blue-500 transition-colors duration-200 animate-fadeIn">
          Выполняется установка камеры
        </div>
        <div className="hover:text-blue-500 transition-colors duration-200 animate-fadeIn">
          Выполняется установка камеры
        </div>
      </div>
    </div>
  );
};

export default CameraDetails;
