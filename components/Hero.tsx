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
  )
}