import React, { useState } from 'react';
import Container from './ui/Container';
import Booking from './Booking';

const Hero: React.FC = () => {
  return (
    <>
    <section className="bg-brand-dark pb-20">
      <Container>
        <div id="calendar-section" className="h-[620px] rounded-lg overflow-hidden shadow-2xl border border-gray-700/50">
          <Booking />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
}
  )
}