
import React from 'react';
import Container from './ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-gray-700/50 py-8">
      <Container className="text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Zurich Trust. All Rights Reserved.</p>
        <p className="text-sm mt-2">
            This website is for informational purposes only and does not constitute legal or financial advice.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
