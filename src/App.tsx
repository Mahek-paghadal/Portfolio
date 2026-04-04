import './App.css'

import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import RecentWorks from './components/RecentWorks';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);
  return (
    <div className="relative min-h-[100svh] overflow-x-hidden bg-[#1f252d] text-slate-200">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
            <div className="absolute -left-40 top-[-200px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,196,200,0.12),transparent_70%)]" />
          </div>
          <div className="relative z-10 pt-[90px] max-[900px]:pt-[32px]">
            <Navbar />
            <Hero />
            <TechStack />
            <RecentWorks />
            <ContactSection />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App