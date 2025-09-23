import React from 'react';
import Container from './ui/Container';

const WhoWeServe: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop" alt="A medical professional analyzing data on a tablet, representing the high-stakes nature of their work." className="rounded-lg shadow-xl"/>
            </div>
            <div className="md:w-1/2">
                <h2 className="text-4xl font-bold font-serif text-white mb-4">Medical Professionals We Serve</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                From OB/GYNs in Florida to surgeons in California, high-risk physicians rely on us to safeguard their families and their futures. We provide the peace of mind that allows you to focus on what you do best—without fearing the worst.
                </p>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default WhoWeServe;