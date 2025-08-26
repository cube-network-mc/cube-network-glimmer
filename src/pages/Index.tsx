
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Vote from '@/components/Vote';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Vote />
        
        {/* Temporary placeholder for other sections */}
        <section id="rules" className="section-padding section-bg">
          <div className="container-custom text-center">
            <h2 className="font-pixel text-4xl text-neon mb-8">RULES</h2>
            <div className="card-glow max-w-2xl mx-auto">
              <p className="font-mono text-muted-foreground">Coming soon...</p>
            </div>
          </div>
        </section>

        <section id="store" className="section-padding section-bg">
          <div className="container-custom text-center">
            <h2 className="font-pixel text-4xl text-neon mb-8">STORE</h2>
            <div className="card-glow max-w-2xl mx-auto">
              <p className="font-mono text-muted-foreground">Coming soon...</p>
            </div>
          </div>
        </section>

        <section id="discord" className="section-padding section-bg">
          <div className="container-custom text-center">
            <h2 className="font-pixel text-4xl text-neon mb-8">DISCORD</h2>
            <div className="card-glow max-w-2xl mx-auto">
              <p className="font-mono text-muted-foreground">Coming soon...</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container-custom py-8">
          <div className="text-center">
            <p className="font-mono text-muted-foreground">
              © Cube Network – All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
