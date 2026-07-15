import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import WhyExzy from './sections/WhyExzy';
import Duties from './sections/Duties';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Culture from './sections/Culture';
import Conclusion from './sections/Conclusion';

function App() {
  // Prevent right-click and dragging on all images globally
  useEffect(() => {
    const preventImageAction = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventImageAction);
    document.addEventListener('dragstart', preventImageAction);

    return () => {
      document.removeEventListener('contextmenu', preventImageAction);
      document.removeEventListener('dragstart', preventImageAction);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-dark-500">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <About />
        <WhyExzy />
        <Duties />
        <Projects />
        <Skills />
        <Culture />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
}

export default App;
