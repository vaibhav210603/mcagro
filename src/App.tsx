import { useEffect } from 'react';
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
import { OurTeam } from './pages/company/OurTeam';
import { BoardCommittees } from './pages/company/BoardCommittees';
import { Auditors } from './pages/company/Auditors';
import { OurFarms } from './pages/company/OurFarms';
import { EssentialOils } from './pages/offering/EssentialOils';
import { Tea } from './pages/offering/Tea';
import { Seeds } from './pages/offering/Seeds';
import { Fertilizers } from './pages/offering/Fertilizers';
import { Others } from './pages/offering/Others';
import { Lemongrass } from './pages/offering/Lemongrass';
import { FarmerEducation } from './pages/FarmerEducation';
import { MrcMall } from './pages/MrcMall'; // New Import

import { ChatWidget } from './components/ui/ChatWidget';

// ScrollToTop component to handle route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

import { useLoading } from './context/LoadingContext';

// ... imports

function App() {
  const { isLoading } = useLoading();

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

    return () => {
      lenis.destroy();
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
              <Route path="/company/team" element={<OurTeam />} />
              <Route path="/company/board" element={<BoardCommittees />} />
              <Route path="/company/auditors" element={<Auditors />} />
              <Route path="/company/farms" element={<OurFarms />} />
              <Route path="/offering/essential-oils" element={<EssentialOils />} />
              <Route path="/offering/tea" element={<Tea />} />
              <Route path="/offering/seeds" element={<Seeds />} />
              <Route path="/offering/fertilizers" element={<Fertilizers />} />
              <Route path="/offering/others" element={<Others />} />
              <Route path="/offering/lemongrass" element={<Lemongrass />} />
              <Route path="/farmer-education" element={<FarmerEducation />} />
              <Route path="/mrc-mall" element={<MrcMall />} /> {/* New Route */}

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

