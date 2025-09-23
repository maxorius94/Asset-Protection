
import React from 'react';
import Container from './ui/Container';

interface StatItemProps {
    value: string;
    label: string;
}
const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
    <div className="text-center p-6 bg-slate-800 rounded-lg border border-gray-700">
        <p className="text-5xl font-extrabold text-brand-gold font-serif">{value}</p>
        <p className="text-gray-400 mt-2">{label}</p>
    </div>
)

const WhyUs: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif text-white">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <StatItem value="15+" label="Years Cook Islands Experience" />
            <StatItem value="$2B+" label="Assets Protected" />
            <StatItem value="Zero" label="Successful Creditor Attacks" />
            <StatItem value="Exclusive" label="Swiss Banking Relationships" />
        </div>
        <p className="text-center text-xl text-gray-300 max-w-4xl mx-auto">
        Trusted by U.S. medical professionals who refuse to gamble with their life’s work.
        </p>
      </Container>
    </section>
  );
};

export default WhyUs;
