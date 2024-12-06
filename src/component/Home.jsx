import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logotip */}
        <h1 className="text-xl font-bold">Hikvision</h1>

        {/* Navbar */}
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-blue-300 transition-colors">Дом</a>
          <a href="#program" className="hover:text-blue-300 transition-colors">Программа</a>
          <a href="#nutrition" className="hover:text-blue-300 transition-colors">Питание</a>
          <a href="#pricing" className="hover:text-blue-300 transition-colors">Цены</a>
        </nav>

        {/* Tugma */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition">
          Присоединяйтесь сейчас
        </button>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Matnlar qismi */}
        <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
          <p className="text-gray-300 text-sm">НАШ МАГАЗИН</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-slide-in">
            Вы можете иметь то, что вам нужно, <br />
            брать то, что вы хотите, <br />
            и воспользоваться услугой доставки.
          </h2>
          <p className="text-gray-400 mb-6">
            Best Shop имеет гарантию и установку на месте.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition animate-slide-in">
              Присоединяйтесь сейчас
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-blue-900 py-2 px-6 rounded-lg transition animate-slide-in">
              Связаться с нами
            </button>
          </div>
        </div>

        {/* Rasm qismi */}
        <div className="md:w-1/2">
          <img
            src="https://thumbs.dreamstime.com/z/hikvision-video-surveillance-company-logo-logo-hikvision-company-samsung-tablet-hangzhou-hikvision-digital-technology-co-ltd-120678005.jpg?ct=jpeg"
            alt="Hero Image"
            className="w-full h-auto rounded-lg shadow-lg animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
};

export default App;
