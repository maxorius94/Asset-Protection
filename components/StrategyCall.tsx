import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
)

interface ListItemProps {
    children: React.ReactNode;
}
const ListItem: React.FC<ListItemProps> = ({ children }) => (
    <li className="flex items-start">
        <CheckIcon className="h-6 w-6 text-brand-gold mr-3 mt-1 flex-shrink-0" />
        <span className="text-lg text-gray-300">{children}</span>
    </li>
)

const StrategyCall: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <Container className="text-center">
        <h2 className="text-4xl font-bold font-serif text-white mb-4">Your Free Asset Protection Strategy Call Includes:</h2>
        <div className="max-w-3xl mx-auto mt-10 text-left">
            <ul className="space-y-6">
                <ListItem>
                    <strong>Confidential Risk Assessment</strong> — We review your malpractice exposure, net worth, and state laws.
                </ListItem>
                <ListItem>
                    <strong>Custom Roadmap</strong> — How a Cook Islands Trust shields your home, savings, and practice equity.
                </ListItem>
                <ListItem>
                    <strong>Swiss Banking Access</strong> — Private banking solutions most U.S. advisors can’t provide.
                </ListItem>
                <ListItem>
                    <strong>Timeline to Protection</strong> — Step-by-step, usually 30–45 days start to finish.
                </ListItem>
            </ul>
        </div>
        <p className="mt-10 text-lg font-semibold text-gray-300">
            Completely free. Zero obligation. Swiss-level confidentiality.
        </p>
        <div className="mt-10">
            <Button href="#booking">Schedule Your Confidential Call</Button>
        </div>
      </Container>
    </section>
  );
};

export default StrategyCall;