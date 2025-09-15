import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SpeedInsights } from "@vercel/speed-insights/react"; // Essa importação está correta.

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Diferenciais from './components/Diferenciais.jsx'
import About from './components/About.jsx'
import SectionCases from './components/sectionCases.jsx'
import Faq from './components/Faq.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'
import Processo from './components/Processo.jsx'

import './css/reset.css'
import './css/grid.css'
import './css/colors.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Header/>
      <Hero/>
      <About />
      <SectionCases />
      <Processo />
      <Diferenciais/>
      <Faq/>
      <Cta />
      <Footer />
      {/* O componente SpeedInsights deve ficar aqui, como você já fez. */}
      <SpeedInsights />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)