import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark">
        <Container className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">Surgeons: Stop Losing Sleep. Start Protecting.</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 my-6">
            Insurance is your first line of defense. A Zurich-based Cook Islands Trust is your last.
            </p>
            <Button href="#booking" className="transform scale-110">
                Book Your Free Strategy Call
            </Button>
        </Container>
    </section>
  );
};

export default FinalCTA;