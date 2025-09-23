
import React from 'react';
import Container from './ui/Container';

const PainIcon: React.FC<{icon: string}> = ({ icon }) => (
    <div className="text-brand-gold text-4xl mb-4">{icon}</div>
)

interface PainPointCardProps {
    icon: string;
    title: string;
    description: string;
}
const PainPointCard: React.FC<PainPointCardProps> = ({icon, title, description}) => (
    <div className="bg-slate-800 p-8 rounded-lg border border-gray-700/50 transform transition-transform hover:-translate-y-2">
        <PainIcon icon={icon}/>
        <h3 className="text-2xl font-bold font-serif mb-3 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
)

const PainPoints: React.FC = () => {
  const points = [
    { 
      icon: '⚖️', 
      title: 'Nuclear Verdicts', 
      description: 'Average top malpractice awards have nearly doubled since 2022 — $56M and climbing. Insurance policies don’t cover it.' 
    },
    { 
      icon: '📄', 
      title: '$100K Premiums, Still Exposed', 
      description: 'You already pay six-figure premiums. Yet your home, savings, and kids’ inheritance remain targets.' 
    },
    { 
      icon: '🌙', 
      title: 'Sleepless Nights', 
      description: 'Doctors confess to lying awake imagining losing everything. Anxiety isn’t irrational — it’s the price of practicing without protection.' 
    },
    { 
      icon: '⏳', 
      title: 'Too Late Once Sued', 
      description: 'Asset protection must be in place before litigation starts. Wait, and it’s gone.' 
    },
  ];

  return (
    <section className="py-20 bg-brand-dark">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif text-white">The Pain Surgeons Live With</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            {points.map((point) => (
                <PainPointCard key={point.title} {...point} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default PainPoints;
