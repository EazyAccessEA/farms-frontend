// PuredgeOS V1: Signature Hero Animation Component
// Iconic interactions that users remember and share

'use client';

import React, { useEffect, useRef, useState } from 'react';

// 🎭 Particle System for Background Animation
const Particle: React.FC<{
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  delay: number;
}> = ({ x, y, size, color, speed, delay }) => {
  const [position, setPosition] = useState({ x, y });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, delay);

    const animation = setInterval(() => {
      setPosition(prev => ({
        x: prev.x + Math.sin(Date.now() * 0.001 * speed) * 0.5,
        y: prev.y - 0.5
      }));
    }, 16);

    return () => {
      clearTimeout(timer);
      clearInterval(animation);
    };
  }, [delay, speed]);

  return (
    <div
      className="absolute rounded-full animate-float"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        opacity,
        transition: 'opacity 1s ease-in-out',
        animationDelay: `${delay}ms`,
        animationDuration: `${3 + speed}s`
      }}
    />
  );
};

// 🌱 Farm Discovery Animation
const FarmDiscoveryAnimation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const steps = [
      { delay: 0, duration: 1000 },
      { delay: 1000, duration: 800 },
      { delay: 1800, duration: 600 },
      { delay: 2400, duration: 400 }
    ];

    steps.forEach((step, index) => {
      const timer = setTimeout(() => {
        setCurrentStep(index + 1);
      }, step.delay);

      return () => clearTimeout(timer);
    });
  }, [isVisible]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
    >
      {/* Background Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Particle
          key={i}
          x={Math.random() * 100}
          y={Math.random() * 100}
          size={Math.random() * 4 + 2}
          color={`hsl(${120 + Math.random() * 60}, 70%, 60%)`}
          speed={Math.random() * 2 + 1}
          delay={i * 100}
        />
      ))}

      {/* Farm Discovery Steps */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Step 1: Map Pin */}
        <div 
          className={`absolute transition-all duration-1000 ease-out ${
            currentStep >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ transform: currentStep >= 1 ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>

        {/* Step 2: Farm Icon */}
        <div 
          className={`absolute transition-all duration-800 ease-out ${
            currentStep >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ 
            transform: currentStep >= 2 ? 'translateY(0) translateX(0)' : 'translateY(20px) translateX(-20px)',
            transitionDelay: '200ms'
          }}
        >
          <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>

        {/* Step 3: Fresh Produce */}
        <div 
          className={`absolute transition-all duration-600 ease-out ${
            currentStep >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ 
            transform: currentStep >= 3 ? 'translateY(0) translateX(0)' : 'translateY(20px) translateX(20px)',
            transitionDelay: '400ms'
          }}
        >
          <div className="w-10 h-10 bg-gradient-warning rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>

        {/* Step 4: Connection Lines */}
        {currentStep >= 4 && (
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path
              d="M 50% 50% L 30% 40% M 50% 50% L 70% 40%"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        )}
      </div>

      {/* Overlay Text */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className={`transition-all duration-500 ease-out ${
          currentStep >= 4 ? 'opacity-100 translateY(0)' : 'opacity-0 translateY(10px)'
        }`}>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
            Discovering fresh farms near you...
          </p>
        </div>
      </div>
    </div>
  );
};

// 🎭 Main Hero Animation Component
export const HeroAnimation: React.FC<{
  isVisible: boolean;
  onAnimationComplete?: () => void;
  className?: string;
}> = ({ isVisible, onAnimationComplete, className = '' }) => {
  const [animationPhase, setAnimationPhase] = useState<'entrance' | 'discovery' | 'complete'>('entrance');
  const [showText, setShowText] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    // Phase 1: Entrance (0-1s)
    const entranceTimer = setTimeout(() => {
      setAnimationPhase('discovery');
    }, 1000);

    // Phase 2: Discovery (1-3s)
    const discoveryTimer = setTimeout(() => {
      setAnimationPhase('complete');
      setShowText(true);
    }, 3000);

    // Phase 3: Text and CTA (3-4s)
    const textTimer = setTimeout(() => {
      setShowCTA(true);
      onAnimationComplete?.();
    }, 4000);

    return () => {
      clearTimeout(entranceTimer);
      clearTimeout(discoveryTimer);
      clearTimeout(textTimer);
    };
  }, [isVisible, onAnimationComplete]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Gradient Animation */}
      <div 
        className={`absolute inset-0 transition-all duration-2000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `linear-gradient(135deg, 
            rgba(14, 165, 233, ${animationPhase === 'entrance' ? 0.1 : 0.2}) 0%, 
            rgba(34, 197, 94, ${animationPhase === 'discovery' ? 0.2 : 0.1}) 50%, 
            rgba(217, 70, 239, ${animationPhase === 'complete' ? 0.2 : 0.1}) 100%)`
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-2000 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 15)}%`,
              animationDelay: `${i * 200}ms`,
              animationDuration: `${3 + i}s`
            }}
          >
            <div className={`w-4 h-4 bg-white/20 rounded-full animate-float ${
              i % 2 === 0 ? 'animate-bounce' : 'animate-pulse'
            }`} />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] text-center">
        {/* Farm Discovery Animation */}
        <div className={`transition-all duration-1000 ease-out mb-8 ${
          animationPhase === 'discovery' || animationPhase === 'complete' 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-75'
        }`}>
          <FarmDiscoveryAnimation />
        </div>

        {/* Animated Text */}
        <div className={`transition-all duration-1000 ease-out ${
          showText ? 'opacity-100 translateY(0)' : 'opacity-0 translateY(20px)'
        }`}>
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 mb-4">
            Fresh Food, 
            <br />
            <span className="text-gradient-secondary">Delivered Daily</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect directly with local farmers. Get the freshest produce delivered to your door, 
            <span className="text-gradient-primary font-semibold"> within hours of harvest</span>.
          </p>
        </div>

        {/* Animated CTA */}
        <div className={`transition-all duration-1000 ease-out mt-8 ${
          showCTA ? 'opacity-100 translateY(0)' : 'opacity-0 translateY(20px)'
        }`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn btn-primary text-lg px-8 py-4 hover-glow group animate-pulse">
              <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Find Farms Near You
            </button>
            
            <button className="btn btn-secondary text-lg px-8 py-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              Join as Farmer
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
        showCTA ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// 🎨 Interactive Background Component
export const InteractiveBackground: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
          rgba(14, 165, 233, 0.1) 0%, 
          rgba(34, 197, 94, 0.05) 50%, 
          transparent 100%)`
      }}
    >
      {children}
    </div>
  );
};

export default HeroAnimation;
