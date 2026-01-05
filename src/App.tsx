import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Loader } from './components/ui/Loader';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Careers } from './pages/Careers';
import { Investors as InvestorsPage } from './pages/Investors';
import { GetInTouch } from './pages/GetInTouch';
import { ChatWidget } from './components/ui/ChatWidget';

// ScrollToTop component to handle route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Loader timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white min-h-screen">
        <AnimatePresence mode="wait">
          {isLoading && <Loader key="loader" />}
        </AnimatePresence>

        <div className={isLoading ? "fixed inset-0 overflow-hidden pointer-events-none opacity-0" : "relative opacity-100 transition-opacity duration-700"}>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/investors" element={<InvestorsPage />} />
              <Route path="/get-in-touch" element={<GetInTouch />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </div>
    </Router>
  );
}

export default App;

