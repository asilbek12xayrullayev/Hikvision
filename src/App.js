import React from 'react';
import Home from './component/Home';
import Karusel from './component/Karusel';
import Nutritions from './component/Nutritions';
import Pricing from './component/Pricing';
import About from './component/About';
import Footer from './component/Footer';

const App = () => {
  return (
    <div>
      <Home/>
      <Karusel/>
      <Nutritions/>
      <Pricing/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
