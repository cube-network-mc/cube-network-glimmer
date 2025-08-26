
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle opacity-20';
      particle.innerHTML = ['⚔️', '💎', '🧱', '⛏️'][Math.floor(Math.random() * 4)];
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.fontSize = '20px';
      
      particlesRef.current.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 6000);
    };

    const interval = setInterval(createParticle, 2000);
    return () => clearInterval(interval);
  }, []);

  const copyServerIP = () => {
    navigator.clipboard.writeText('play.cubenetwork.fun');
    toast.success('Server IP copied to clipboard!');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg">
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 text-center container-custom">
        {/* Custom 3D Cube Logo */}
        <div className="flex justify-center mb-8">
          <div className="perspective-1000 w-40 h-40">
            <div className="cube-container w-full h-full relative transform-gpu animate-cube-spin">
              {/* Front face */}
              <div className="cube-face front absolute w-full h-full bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center border-2 border-neon-blue/30">
                <span className="font-pixel text-4xl text-white drop-shadow-lg">C</span>
              </div>
              {/* Back face */}
              <div className="cube-face back absolute w-full h-full bg-gradient-to-br from-neon-purple to-neon-green rounded-lg flex items-center justify-center border-2 border-neon-purple/30">
                <span className="font-pixel text-4xl text-white drop-shadow-lg">N</span>
              </div>
              {/* Right face */}
              <div className="cube-face right absolute w-full h-full bg-gradient-to-br from-neon-green to-neon-gold rounded-lg flex items-center justify-center border-2 border-neon-green/30">
                <span className="font-pixel text-4xl text-white drop-shadow-lg">U</span>
              </div>
              {/* Left face */}
              <div className="cube-face left absolute w-full h-full bg-gradient-to-br from-neon-gold to-neon-blue rounded-lg flex items-center justify-center border-2 border-neon-gold/30">
                <span className="font-pixel text-4xl text-white drop-shadow-lg">B</span>
              </div>
              {/* Top face */}
              <div className="cube-face top absolute w-full h-full bg-gradient-to-br from-neon-blue/80 to-neon-purple/80 rounded-lg flex items-center justify-center border-2 border-neon-blue/40">
                <span className="font-pixel text-3xl text-white drop-shadow-lg">⬢</span>
              </div>
              {/* Bottom face */}
              <div className="cube-face bottom absolute w-full h-full bg-gradient-to-br from-neon-purple/60 to-neon-green/60 rounded-lg flex items-center justify-center border-2 border-neon-purple/40">
                <span className="font-pixel text-3xl text-white drop-shadow-lg">E</span>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-pixel text-6xl md:text-8xl font-bold mb-4 text-neon animate-slide-up">
          CUBE NETWORK
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up delay-200 font-mono">
          Your Next-Level Minecraft Adventure Awaits!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
          <div className="flex items-center gap-2 bg-card rounded-lg p-4 border border-border">
            <span className="text-sm text-muted-foreground">Server IP:</span>
            <code className="font-mono text-neon-blue font-bold">play.cubenetwork.fun</code>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={copyServerIP}
              className="hover:bg-primary/10"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          
          <Button 
            className="btn-neon-green"
            onClick={() => window.open('https://discord.gg/cubenetwork', '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Join Discord
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
