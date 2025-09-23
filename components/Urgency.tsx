
import React from 'react';
import Container from './ui/Container';

interface UrgencyCardProps {
    title: string;
    description: string;
}
const UrgencyCard: React.FC<UrgencyCardProps> = ({ title, description }) => (
    <div className="border-l-4 border-brand-gold pl-6 py-4 bg-slate-800/50">
        <h3 className="text-2xl font-bold font-serif text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
)

const Urgency: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif text-white">Timing Is Everything</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
            <UrgencyCard 
                title="Every day in practice = one patient away from a lawsuit."
                description="Once litigation begins, asset transfers can be voided as “fraudulent conveyance.” Protection must be preemptive."
            />
            <UrgencyCard 
                title="2026 estate tax cliff looms."
                description="Exemptions drop from $13.6M to $6M. Families face 40% estate tax exposure on unprotected assets."
            />
            <UrgencyCard 
                title="Waiting costs millions. Acting now costs nothing."
                description="Your initial strategy call is complimentary. The cost of inaction, however, could be everything you've worked for."
            />
        </div>
      </Container>
    </section>
  );
};

export default Urgency;
