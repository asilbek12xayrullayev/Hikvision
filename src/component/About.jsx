import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">
        Связаться с нами
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="transition-transform transform hover:scale-110">
            <img
              src="https://thumbs.dreamstime.com/z/kyiv-ukraine-october-hikvision-thermal-camera-shop-161880748.jpg?ct=jpeg"
              alt="Camera 1"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="transition-transform transform hover:scale-110">
            <img
              src="https://thumbs.dreamstime.com/z/hikvision-exposition-stand-hangzhou-digital-technology-co-ltd-chinese-manufacturerof-video-surveillance-product-astana-170908473.jpg?ct=jpeg"
              alt="Camera 2"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="transition-transform transform hover:scale-110">
            <img
              src="https://thumbs.dreamstime.com/z/milan-italy-august-hikvision-video-surveillance-cameras-pole-brand-widespread-throughout-world-143040559.jpg?ct=jpeg"
              alt="Camera 3"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="transition-transform transform hover:scale-110">
            <img
              src="https://thumbs.dreamstime.com/z/hikvision-cctv-camera-hikvision-street-cctv-camera-pole-monitoring-crime-parking-issues-196315199.jpg?ct=jpeg"
              alt="Camera 4"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Telefon raqamingiz (masalan: +998901234567)"
            className="p-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
