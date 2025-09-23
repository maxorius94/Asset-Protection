import React from 'react';
import Container from './ui/Container';

const Solution: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-white">Why Surgeons Trust Switzerland + Cook Islands</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">The dual-location strategy that creates an impenetrable fortress around your assets.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <img src="https://images.unsplash.com/photo-1592698765727-387c9464cd7f?q=80&w=3588&auto=format&fit=crop" alt="A dramatic, cliff-lined tropical coastline representing the remote security of the Cook Islands." className="rounded-lg shadow-lg object-cover w-full h-64"/>
            <div>
              <h3 className="text-3xl font-bold font-serif text-brand-gold mb-3">Cook Islands: The Last Line of Defense</h3>
              <p className="text-gray-300 leading-relaxed">
                The world’s strongest trust law. A 1–2 year statute of limitations. Burden of proof so high U.S. creditors almost never succeed. If your assets are in a Cook Islands Trust, even a nuclear verdict can’t touch them.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <img src="https://images.unsplash.com/photo-1677783970382-c435e2b4a904?q=80&w=1287&auto=format&fit=crop" alt="Zurich's financial district skyline representing Swiss credibility" className="rounded-lg shadow-lg object-cover w-full h-64"/>
            <div>
              <h3 className="text-3xl font-bold font-serif text-brand-gold mb-3">Swiss Precision & Credibility</h3>
              <p className="text-gray-300 leading-relaxed">
                From Zurich we combine regulatory trust, discreet banking, and global expertise. This isn’t theory. It’s how physicians with everything to lose finally sleep at night.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Solution;