import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Menu from './sections/Menu';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import OrderModal from './components/OrderModal';
import './App.css';

function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const openOrderModal = () => setIsOrderModalOpen(true);
  const closeOrderModal = () => setIsOrderModalOpen(false);

  return (
    <div className="App">
      <Navbar onOpenOrder={openOrderModal} />

      <OrderModal isOpen={isOrderModalOpen} onClose={closeOrderModal} />

      <main>
        <Hero onOpenOrder={openOrderModal} />

        <About />
        <Menu />
        <Gallery />
        <Contact />
      </main>

      <Footer onOpenOrder={openOrderModal} />
    </div>
  );
}

export default App;
