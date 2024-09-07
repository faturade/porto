import React, { useState } from 'react';
import { LanguageProvider } from './components/LanguageContext'; // Periksa jalur impor
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Footer from './components/Footer';

function App() {
  const [isSidebarLayout, setIsSidebarLayout] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <LanguageProvider>
      <div className="App">
        {isSidebarLayout ? (
          <Sidebar
            sidebarOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            handleFullScreen={handleFullScreen}
            handleRefresh={handleRefresh}
          />
        ) : (
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            handleFullScreen={handleFullScreen}
            handleRefresh={handleRefresh}
            toggleSidebar={toggleSidebar}
          />
        )}

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
