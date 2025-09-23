import React, { useState } from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import Booking from './Booking';

const Hero: React.FC = () => {
  const YOUTUBE_VIDEO_ID = 'XKT2yk6uHFo';
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612550856788-b76251b3e346?q=80&w=1600&auto=format&fit=crop')" }}>
        <Container className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif leading-tight mb-4">
            One Lawsuit. One Verdict. <br className="hidden md:block"/> A Lifetime of Savings — <span className="text-brand-gold">Gone.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
            60% of physicians are sued in their career. Malpractice insurance caps at $1–5M. Nuclear verdicts are topping $50M. Guess who covers the difference? You.
          </p>
          
        </Container>
      </section>


      <section className="bg-brand-dark pb-20">
        <Container>
          <div id="calendar-section" className="h-[620px] rounded-lg overflow-hidden shadow-2xl border border-gray-700/50">
            <Booking />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;