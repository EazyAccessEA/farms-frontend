'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { PuredgeOSAestheticSystem } from '@/lib/puredgeos-aesthetic-system';
import { puredgeTelemetry } from '@/lib/puredge-telemetry';

// PuredgeOS V1: 5-Stage Emotional Arc
type EmotionalStage = 'intrigue' | 'discovery' | 'connection' | 'confidence' | 'satisfaction';

interface HeroProps {
  onStageComplete?: (stage: EmotionalStage) => void;
  onSignatureMoment?: (moment: string) => void;
}

// Cinematic Hero Component with PuredgeOS V1 Emotional Arc
export const PuredgeOSHero: React.FC<HeroProps> = ({ 
  onStageComplete, 
  onSignatureMoment 
}) => {
  const [currentStage, setCurrentStage] = useState<EmotionalStage>('intrigue');
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  // PuredgeOS V1: Stage progression with signature moments
  useEffect(() => {
    if (!isVisible) return;

    const stageProgression = async () => {
      setIsAnimating(true);

      // Stage 1: Intrigue (0-1000ms)
      setCurrentStage('intrigue');
      onStageComplete?.('intrigue');
      puredgeTelemetry.recordImmersionMetric('hero_engagement', {
        stage: 'intrigue',
        timestamp: Date.now()
      });
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Stage 2: Discovery (1000-2500ms)
      setCurrentStage('discovery');
      onStageComplete?.('discovery');
      puredgeTelemetry.recordImmersionMetric('hero_engagement', {
        stage: 'discovery',
        timestamp: Date.now()
      });
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Stage 3: Connection (2500-4000ms)
      setCurrentStage('connection');
      onStageComplete?.('connection');
      puredgeTelemetry.recordImmersionMetric('hero_engagement', {
        stage: 'connection',
        timestamp: Date.now()
      });
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Stage 4: Confidence (4000-5500ms)
      setCurrentStage('confidence');
      onStageComplete?.('confidence');
      puredgeTelemetry.recordImmersionMetric('hero_engagement', {
        stage: 'confidence',
        timestamp: Date.now()
      });
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Stage 5: Satisfaction (5500ms+)
      setCurrentStage('satisfaction');
      onStageComplete?.('satisfaction');
      onSignatureMoment?.('hero_complete');
      puredgeTelemetry.recordImmersionMetric('hero_engagement', {
        stage: 'satisfaction',
        timestamp: Date.now()
      });
      puredgeTelemetry.recordImmersionMetric('signature_moment_engagement', {
        moment: 'hero_cinematic_complete',
        timestamp: Date.now()
      });

      setIsAnimating(false);
    };

    stageProgression();
  }, [isVisible, onStageComplete, onSignatureMoment]);

  // PuredgeOS V1: Trigger entrance on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      onSignatureMoment?.('hero_entrance');
      puredgeTelemetry.recordImmersionMetric('signature_moment_engagement', {
        moment: 'hero_entrance',
        timestamp: Date.now()
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [onSignatureMoment]);

  // PuredgeOS V1: Magnetic cursor effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!floatingElementsRef.current) return;

    const rect = floatingElementsRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const elements = floatingElementsRef.current.children;
    Array.from(elements).forEach((element, index) => {
      const el = element as HTMLElement;
      const speed = 0.02 + (index * 0.005);
      const xOffset = (x - rect.width / 2) * speed;
      const yOffset = (y - rect.height / 2) * speed;

      el.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
  };

  // PuredgeOS V1: CTA interaction tracking
  const handleCTAClick = (buttonType: string) => {
    puredgeTelemetry.recordImmersionMetric('cta_click', {
      button: buttonType,
      stage: currentStage,
      timestamp: Date.now()
    });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          ${PuredgeOSAestheticSystem.colors.sky[50]} 0%, 
          ${PuredgeOSAestheticSystem.colors.growth[50]} 50%, 
          ${PuredgeOSAestheticSystem.colors.passion[50]} 100%)`,
        padding: `${PuredgeOSAestheticSystem.spacing['5xl']} ${PuredgeOSAestheticSystem.spacing.xl}`,
      }}
      onMouseMove={handleMouseMove}
    >
      {/* PuredgeOS V1: Cinematic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stage 1: Intrigue - Subtle floating elements */}
        <div 
          className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 transition-all duration-1000 ${
            currentStage === 'intrigue' ? 'scale-100 opacity-20' : 'scale-0 opacity-0'
          }`}
          style={{
            background: `radial-gradient(circle, ${PuredgeOSAestheticSystem.colors.sky[200]}, transparent)`,
            animation: currentStage === 'intrigue' ? 'float 20s ease-in-out infinite' : 'none',
          }}
        />
        
        {/* Stage 2: Discovery - Growing elements */}
        <div 
          className={`absolute top-3/4 right-1/4 w-96 h-96 rounded-full opacity-15 transition-all duration-1000 ${
            currentStage === 'discovery' ? 'scale-100 opacity-15' : 'scale-0 opacity-0'
          }`}
          style={{
            background: `radial-gradient(circle, ${PuredgeOSAestheticSystem.colors.growth[200]}, transparent)`,
            animation: currentStage === 'discovery' ? 'float 25s ease-in-out infinite reverse' : 'none',
          }}
        />
        
        {/* Stage 3: Connection - Converging elements */}
        <div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 transition-all duration-1000 ${
            currentStage === 'connection' ? 'scale-100 opacity-10' : 'scale-0 opacity-0'
          }`}
          style={{
            background: `radial-gradient(circle, ${PuredgeOSAestheticSystem.colors.passion[200]}, transparent)`,
            animation: currentStage === 'connection' ? 'breathe 15s ease-in-out infinite' : 'none',
          }}
        />
      </div>

      {/* PuredgeOS V1: Floating Nature Elements with Magnetic Effect */}
      <div 
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-4xl opacity-20 transition-all duration-1000 ${
              currentStage === 'intrigue' ? 'opacity-20' : 'opacity-0'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animation: currentStage === 'intrigue' ? `float ${15 + i * 2}s ease-in-out infinite` : 'none',
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {Object.values(PuredgeOSAestheticSystem.metaphors.elements)[i % 6]}
          </div>
        ))}
      </div>

      {/* PuredgeOS V1: Hero Content with Stage-Based Reveals */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Stage 1: Intrigue - Floating elements only */}
        <div 
          className={`transition-all duration-1000 ${
            currentStage === 'intrigue' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Empty space for intrigue - elements float in background */}
        </div>

        {/* Stage 2: Discovery - Main headline reveals */}
        <div 
          className={`transition-all duration-1000 ${
            currentStage === 'discovery' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 
            className="mb-8 font-extrabold leading-tight"
            style={{
              fontSize: PuredgeOSAestheticSystem.typography.primary.sizes['7xl'],
              fontWeight: PuredgeOSAestheticSystem.typography.display.weights.bold,
              lineHeight: PuredgeOSAestheticSystem.typography.primary.lineHeights.tight,
              background: `linear-gradient(135deg, 
                ${PuredgeOSAestheticSystem.colors.earth[900]} 0%, 
                ${PuredgeOSAestheticSystem.colors.sky[700]} 50%,
                ${PuredgeOSAestheticSystem.colors.growth[700]} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Fresh Food,{' '}
            <span className="block">Fresh Life</span>
          </h1>
        </div>

        {/* Stage 3: Connection - Subtitle and CTAs emerge */}
        <div 
          className={`transition-all duration-1000 ${
            currentStage === 'connection' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p 
            className="mb-12 max-w-3xl mx-auto"
            style={{
              fontSize: PuredgeOSAestheticSystem.typography.primary.sizes.xl,
              fontWeight: PuredgeOSAestheticSystem.typography.primary.weights.medium,
              lineHeight: PuredgeOSAestheticSystem.typography.primary.lineHeights.relaxed,
              color: PuredgeOSAestheticSystem.colors.earth[600],
            }}
          >
            Connect with local farms and discover nature&apos;s finest offerings. 
            Every bite tells a story of care, quality, and community.
          </p>

          {/* PuredgeOS V1: Magnetic CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/map">
              <button
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, 
                    ${PuredgeOSAestheticSystem.colors.passion[500]} 0%, 
                    ${PuredgeOSAestheticSystem.colors.passion[600]} 100%)`,
                  color: 'white',
                  boxShadow: PuredgeOSAestheticSystem.hierarchy.elevation.soft,
                }}
                onClick={() => handleCTAClick('start_exploring')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, 
                    ${PuredgeOSAestheticSystem.colors.passion[600]} 0%, 
                    ${PuredgeOSAestheticSystem.colors.passion[700]} 100%)`;
                  e.currentTarget.style.boxShadow = PuredgeOSAestheticSystem.hierarchy.elevation.strong;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, 
                    ${PuredgeOSAestheticSystem.colors.passion[500]} 0%, 
                    ${PuredgeOSAestheticSystem.colors.passion[600]} 100%)`;
                  e.currentTarget.style.boxShadow = PuredgeOSAestheticSystem.hierarchy.elevation.soft;
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Exploring
                  <span className="text-2xl">🌿</span>
                </span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, white, transparent)`,
                  }}
                />
              </button>
            </Link>

            <Link href="/admin">
              <button
                className="px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 border-2 hover:scale-105"
                style={{
                  background: 'transparent',
                  color: PuredgeOSAestheticSystem.colors.earth[700],
                  borderColor: PuredgeOSAestheticSystem.colors.earth[300],
                  fontWeight: PuredgeOSAestheticSystem.typography.primary.weights.medium,
                }}
                onClick={() => handleCTAClick('become_farmer')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = PuredgeOSAestheticSystem.colors.growth[400];
                  e.currentTarget.style.color = PuredgeOSAestheticSystem.colors.growth[700];
                  e.currentTarget.style.background = PuredgeOSAestheticSystem.colors.growth[50];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = PuredgeOSAestheticSystem.colors.earth[300];
                  e.currentTarget.style.color = PuredgeOSAestheticSystem.colors.earth[700];
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <span className="flex items-center gap-2">
                  Become a Farmer
                  <span className="text-2xl">🌱</span>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Stage 4: Confidence - Trust indicators animate */}
        <div 
          className={`transition-all duration-1000 ${
            currentStage === 'confidence' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-80">
            {[
              { icon: '✨', text: 'Fresh Daily' },
              { icon: '💝', text: 'Local Love' },
              { icon: '🌍', text: 'Eco-Friendly' },
              { icon: '💪', text: 'Community Strong' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-lg animate-pulse"
                style={{
                  color: PuredgeOSAestheticSystem.colors.earth[600],
                  fontWeight: PuredgeOSAestheticSystem.typography.primary.weights.medium,
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stage 5: Satisfaction - Celebration micro-interaction */}
        <div 
          className={`transition-all duration-1000 ${
            currentStage === 'satisfaction' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
              <span className="text-2xl animate-bounce">🎉</span>
              <span 
                className="text-sm font-medium"
                style={{
                  color: PuredgeOSAestheticSystem.colors.earth[700],
                }}
              >
                Ready to discover amazing farms!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* PuredgeOS V1: Signature Moment Indicators */}
      {isAnimating && (
        <div className="absolute top-4 right-4 text-xs opacity-50">
          <div 
            className="px-2 py-1 rounded bg-black/20 text-white"
            style={{
              fontFamily: PuredgeOSAestheticSystem.typography.primary.fontFamily,
            }}
          >
            Stage: {currentStage}
          </div>
        </div>
      )}
    </section>
  );
};

// PuredgeOS V1: Enhanced CSS for cinematic animations
export const PuredgeOSHeroStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  
  @keyframes breathe {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @keyframes sparkle {
    0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
    50% { opacity: 1; transform: scale(1) rotate(180deg); }
  }
  
  @keyframes grow {
    0% { transform: scale(0.8) translateY(20px); opacity: 0; }
    100% { transform: scale(1) translateY(0); opacity: 1; }
  }
  
  @keyframes magnetic {
    0% { transform: translate(0, 0); }
    100% { transform: translate(var(--magnetic-x), var(--magnetic-y)); }
  }
`;

export default PuredgeOSHero;
