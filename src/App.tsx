import React, { useState, useEffect } from 'react';
import { PhotoProvider } from './context/PhotoContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Ventures } from './components/Ventures';
import { Impact } from './components/Impact';
import { Recognition } from './components/Recognition';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PhotoManagerModal } from './components/PhotoManagerModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <PhotoProvider>
      <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950 transition-colors duration-300">
        
        {/* Navigation Header */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Journey />
          <Ventures />
          <Impact />
          <Recognition />
          <Gallery />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Photo Manager Modal for configuring/uploading photos */}
        <PhotoManagerModal />

      </div>
    </PhotoProvider>
  );
}
