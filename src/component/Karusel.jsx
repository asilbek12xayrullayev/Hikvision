import React, { useState } from "react";
import camera1 from "../photo_2024-11-17_12-51-50.jpg";
import camera2 from "../photo_2024-11-17_12-47-27.jpg";
import camera3 from "../photo_2024-11-17_12-48-33.jpg";

const CameraInfo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const cameras = [
    {
      id: 1,
      title: "Camera 1",
      description: "Работы по укладке домофона",
      image: camera1,
    },
    {
      id: 2,
      title: "Camera 2",
      description: "Выполняется установка камеры",
      image: camera2,
    },
    {
      id: 3,
      title: "Camera 3",
      description: "Выполняется установка камеры",
      image: camera3,
    },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-8">Подробная информация о камере</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cameras.map((camera) => (
          <div
            key={camera.id}
            onClick={() => setSelectedImage(camera)}
            className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-2xl transition-shadow transform hover:scale-105"
          >
            <div className="flex justify-center items-center h-40 bg-gray-100 rounded">
              <img
                src={camera.image}
                alt={camera.title}
                className="h-28 object-contain"
              />
            </div>
            <h2 className="mt-6 text-xl font-semibold text-center">
              {camera.title}
            </h2>
            <p className="text-sm text-gray-500 text-center mt-2">
              {camera.description}
            </p>
          </div>
        ))}
      </div>

      {/* Modal for larger image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-lg shadow-2xl p-4 max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-600 transition"
            >
              ✕
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-md mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedImage.title}
            </h2>
            <p className="text-lg text-gray-600">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraInfo;
