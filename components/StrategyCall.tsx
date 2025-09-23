import React, { useState } from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import Booking from './Booking';

const Hero: React.FC = () => {
  const YOUTUBE_VIDEO_ID = 'XKT2yk6uHFo';
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612550856788-b76251b3e346?q=80&w=1600&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-brand-dark bg-opacity-80"></div>
        <Container className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif leading-tight mb-4">
            One Lawsuit. One Verdict. <br className="hidden md:block"/> A Lifetime of Savings — <span className="text-brand-gold">Gone.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
            60% of physicians are sued in their career. Malpractice insurance caps at $1–5M. Nuclear verdicts are topping $50M. Guess who covers the difference? You.
          </p>
          
        </Container>
      </section>

      <section className="bg-brand-dark pb-20 -mt-1">
        <Container>
            <div className="max-w-xs mx-auto bg-slate-900 p-2 rounded-xl shadow-2xl border border-gray-700/50">
                <div className="relative overflow-hidden rounded-lg" style={{ paddingTop: '177.77%' /* 9:16 Aspect Ratio */ }}>
                    {playVideo ? (
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&autoplay=1`}
                            title="Why Surgeons Need Asset Protection"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <button
                            onClick={() => setPlayVideo(true)}
                            className="absolute top-0 left-0 w-full h-full bg-cover bg-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg"
                            style={{ backgroundImage: `url(https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg)` }}
                            aria-label="Play video on asset protection for surgeons"
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center rounded-lg">
                                <div className="bg-brand-gold/80 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-brand-dark ml-1" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                    )}
                </div>
            </div>
        </Container>
      </section>

      <section className="py-20 bg-slate-900">
        <Container>
            <div className="max-w-4xl mx-auto">
                <h2 id="booking" className="text-4xl font-bold font-serif text-center mb-8 text-white scroll-mt-20">
                    Book Your <span className="text-brand-gold">Strategic Call</span>
                </h2>
                 <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto text-center mb-8">
                    Schedule your complimentary, confidential asset protection strategy call below.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <Button href="#booking" className="transform scale-110">
                        Book Your Free Strategy Call
                    </Button>
                    <Button href="#booking" variant="secondary">
                        Schedule Your Confidential Call
                    </Button>
                    <Button href="#booking">
                        Book a Free Call
                    </Button>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <Button href="#booking" className="transform scale-110">
                        Book Your Free Strategy Call
                    </Button>
                    <Button href="#booking" variant="secondary">
                        Schedule Your Confidential Call
                    </Button>
                    <Button href="#booking">
                        Book a Free Call
                    </Button>
                </div>
                <div id="calendar-section" className="h-[620px] rounded-lg overflow-hidden shadow-2xl border border-gray-700/50">
                    <Booking />
                </div>
            </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;