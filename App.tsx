import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import WhoWeServe from './components/WhoWeServe';
import StrategyCall from './components/StrategyCall';
import Urgency from './components/Urgency';
import WhyUs from './components/WhyUs';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark font-sans text-brand-light antialiased">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <WhoWeServe />
        <StrategyCall />
        <Urgency />
        <WhyUs />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;