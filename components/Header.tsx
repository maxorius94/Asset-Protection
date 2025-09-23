import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 py-4 border-b border-gray-700/50">
      <Container className="flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-white">
          Zurich Trust
        </div>
        <div className="hidden md:block">
            <Button href="#booking" className="px-6 py-2 text-base">
              Book a Free Call
            </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;