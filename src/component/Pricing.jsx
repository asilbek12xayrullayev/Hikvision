import React from "react";

const ProductCard = ({ title, price, features, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-32 h-32 object-contain mb-4 animate-fade-in"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="text-sm text-gray-600 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-green-500">✔</span> {feature}
          </li>
        ))}
      </ul>
      <div className="text-xl font-bold text-blue-700 mb-4">{price} сум</div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
        Корзина
      </button>
    </div>
  );
};

const App = () => {
  const products = [
    {
      title: "DS-2CD1083G0-IUF Kamera",
      price: "1,300,500",
      features: [
        "Есть гарантия 1 год",
        "Есть установка",
        "Замена камеры",
        "Также есть самовывоз",
      ],
      image: "https://sts-hik.uz/media/products/imgs/1083_kamera.jpg",
    },
    {
      title: "DS-2CD1043G0-I Kamera",
      price: "596,700",
      features: [
        "Есть гарантия 1 год",
        "Есть установка",
        "Замена камеры",
        "Также есть самовывоз",
      ],
      image: "https://sts-hik.uz/media/products/imgs/IP_%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D0%B0Hikvision_DS-2CD1043G0-I.jpg",
    },
    {
      title: "DS-KV6113-PE1 Домофон",
      price: "993,000",
      features: [
        "Есть гарантия 1 год",
        "Есть установка",
        "Замена домофона",
        "Также есть самовывоз",
      ],
      image: "https://vidcom.uz/components/com_jshopping/files/img_products/DS-KV6103-PE1.jpg",
    },
    {
      title: "Комплект DS-KIS602 Домофон",
      price: "2,417,900",
      features: [
        "Есть гарантия 1 год",
        "Есть установка",
        "Замена домофона",
        "Также есть самовывоз",
      ],
      image: "https://vidcom.uz/components/com_jshopping/files/img_products/kis602.jpg",
    },
  ];

  return (
    <div className="bg-blue-900 text-white min-h-screen p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-300 animate-fade-in">Наш магазин</p>
        <h1 className="text-2xl font-bold animate-slide-in">
          Информация о камере и домофоне
        </h1>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default App;
