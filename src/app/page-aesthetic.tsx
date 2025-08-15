'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PuredgeOSAestheticSystem, createAestheticStyles, aestheticKeyframes } from '@/lib/puredgeos-aesthetic-system';

// Create aesthetic styles
const styles = createAestheticStyles(PuredgeOSAestheticSystem);

// Enhanced Hero Component with Aesthetic Excellence
const AestheticHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          ${PuredgeOSAestheticSystem.colors.sky[50]} 0%, 
          ${PuredgeOSAestheticSystem.colors.growth[50]} 50%, 
          ${PuredgeOSAestheticSystem.colors.passion[50]} 100%)`,
        padding: `${PuredgeOSAestheticSystem.spacing['5xl']} ${PuredgeOSAestheticSystem.spacing.xl}`,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${PuredgeOSAestheticSystem.colors.sky[200]}, transparent)`,
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, ${PuredgeOSAestheticSystem.colors.growth[200]}, transparent)`,
            animation: 'float 25s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, ${PuredgeOSAestheticSystem.colors.passion[200]}, transparent)`,
            animation: 'breathe 15s ease-in-out infinite',
          }}
        />
      </div>

      {/* Floating Nature Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animation: `float ${15 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {Object.values(PuredgeOSAestheticSystem.metaphors.elements)[i % 6]}
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Main Headline with Gradient Text */}
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

          {/* Subtitle with Personality */}
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

          {/* CTA Buttons with Emotional Impact */}
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

          {/* Trust Indicators with Personality */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-80">
            {[
              { icon: '✨', text: 'Fresh Daily' },
              { icon: '💝', text: 'Local Love' },
              { icon: '🌍', text: 'Eco-Friendly' },
              { icon: '💪', text: 'Community Strong' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-lg"
                style={{
                  color: PuredgeOSAestheticSystem.colors.earth[600],
                  fontWeight: PuredgeOSAestheticSystem.typography.primary.weights.medium,
                }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Feature Cards with Aesthetic Excellence
const AestheticFeatureCards: React.FC = () => {
  const features = [
    {
      icon: '🌿',
      title: 'Taste the Difference',
      description: 'Fresh-picked produce that actually tastes like it should. No more bland supermarket vegetables.',
      gradient: [PuredgeOSAestheticSystem.colors.growth[400], PuredgeOSAestheticSystem.colors.growth[600]],
      emotion: 'joy'
    },
    {
      icon: '⚡',
      title: 'Same-Day Freshness',
      description: 'From farm to your door in hours, not days. Your produce is harvested the same day you order.',
      gradient: [PuredgeOSAestheticSystem.colors.sky[400], PuredgeOSAestheticSystem.colors.sky[600]],
      emotion: 'hope'
    },
    {
      icon: '👨‍🌾',
      title: 'Know Your Farmer',
      description: 'Meet the people growing your food. Every farmer is verified and personally known to us.',
      gradient: [PuredgeOSAestheticSystem.colors.earth[400], PuredgeOSAestheticSystem.colors.earth[600]],
      emotion: 'love'
    },
    {
      icon: '💰',
      title: 'Better Prices',
      description: 'Cut out the middleman. You pay the farmer directly, so you get better quality for less money.',
      gradient: [PuredgeOSAestheticSystem.colors.passion[400], PuredgeOSAestheticSystem.colors.passion[600]],
      emotion: 'strength'
    },
    {
      icon: '🤝',
      title: 'Support Local',
      description: 'Keep your money in your community. Every purchase directly supports local farmers and families.',
      gradient: [PuredgeOSAestheticSystem.colors.growth[500], PuredgeOSAestheticSystem.colors.growth[700]],
      emotion: 'peace'
    },
    {
      icon: '🌱',
      title: 'Eco-Friendly',
      description: 'Reduce food miles and packaging waste. Local delivery means a smaller carbon footprint.',
      gradient: [PuredgeOSAestheticSystem.colors.sky[500], PuredgeOSAestheticSystem.colors.sky[700]],
      emotion: 'wisdom'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="mb-6 font-bold"
            style={{
              fontSize: PuredgeOSAestheticSystem.typography.primary.sizes['5xl'],
              fontWeight: PuredgeOSAestheticSystem.typography.display.weights.bold,
              color: PuredgeOSAestheticSystem.colors.earth[900],
            }}
          >
            Why <span style={{
              background: `linear-gradient(135deg, 
                ${PuredgeOSAestheticSystem.colors.growth[600]} 0%, 
                ${PuredgeOSAestheticSystem.colors.sky[600]} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Farm Companion</span>?
          </h2>
          <p 
            className="max-w-3xl mx-auto"
            style={{
              fontSize: PuredgeOSAestheticSystem.typography.primary.sizes.xl,
              color: PuredgeOSAestheticSystem.colors.earth[600],
              lineHeight: PuredgeOSAestheticSystem.typography.primary.lineHeights.relaxed,
            }}
          >
            We&apos;re not just connecting you to farms—we&apos;re bringing the farm to your table
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{
                background: 'white',
                boxShadow: PuredgeOSAestheticSystem.hierarchy.elevation.gentle,
                border: `1px solid ${PuredgeOSAestheticSystem.colors.earth[100]}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = PuredgeOSAestheticSystem.hierarchy.elevation.powerful;
                e.currentTarget.style.borderColor = PuredgeOSAestheticSystem.colors.growth[200];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = PuredgeOSAestheticSystem.hierarchy.elevation.gentle;
                e.currentTarget.style.borderColor = PuredgeOSAestheticSystem.colors.earth[100];
              }}
            >
              {/* Icon with Gradient Background */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, ${feature.gradient[0]}, ${feature.gradient[1]})`,
                }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 
                className="text-2xl font-bold mb-4"
                style={{
                  color: PuredgeOSAestheticSystem.colors.earth[900],
                  fontWeight: PuredgeOSAestheticSystem.typography.primary.weights.bold,
                }}
              >
                {feature.title}
              </h3>
              <p 
                style={{
                  color: PuredgeOSAestheticSystem.colors.earth[600],
                  lineHeight: PuredgeOSAestheticSystem.typography.primary.lineHeights.normal,
                }}
              >
                {feature.description}
              </p>

              {/* Emotion Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-2xl">
                  {PuredgeOSAestheticSystem.metaphors.emotions[feature.emotion as keyof typeof PuredgeOSAestheticSystem.metaphors.emotions]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced CTA Section with Aesthetic Excellence
const AestheticCTA: React.FC = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          ${PuredgeOSAestheticSystem.colors.sky[600]} 0%, 
          ${PuredgeOSAestheticSystem.colors.growth[600]} 50%,
          ${PuredgeOSAestheticSystem.colors.passion[600]} 100%)`,
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at 30% 70%, white 0%, transparent 50%),
                         radial-gradient(circle at 70% 30%, white 0%, transparent 50%)`,
            animation: 'float 30s ease-in-out infinite',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          style={{
            fontWeight: PuredgeOSAestheticSystem.typography.display.weights.bold,
          }}
        >
          Ready to Taste the Difference?
        </h2>
        <p 
          className="text-xl mb-8"
          style={{
            color: PuredgeOSAestheticSystem.colors.sky[100],
            lineHeight: PuredgeOSAestheticSystem.typography.primary.lineHeights.relaxed,
          }}
        >
          Join thousands of customers who&apos;ve discovered the joy of farm-fresh produce delivered to their door.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/map">
            <button
              className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'white',
                color: PuredgeOSAestheticSystem.colors.sky[600],
                fontWeight: PuredgeOSAestheticSystem.typography.primary.weights.semibold,
                boxShadow: PuredgeOSAestheticSystem.hierarchy.elevation.soft,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = PuredgeOSAestheticSystem.hierarchy.elevation.strong;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = PuredgeOSAestheticSystem.hierarchy.elevation.soft;
              }}
            >
              <span className="flex items-center gap-2">
                Start Shopping
                <span className="text-2xl">🛒</span>
              </span>
            </button>
          </Link>
          
          <Link href="/admin">
            <button
              className="px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 border-2 hover:scale-105"
              style={{
                background: 'transparent',
                color: 'white',
                borderColor: 'white',
                fontWeight: PuredgeOSAestheticSystem.typography.primary.weights.medium,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = PuredgeOSAestheticSystem.colors.sky[600];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              <span className="flex items-center gap-2">
                Become a Farmer
                <span className="text-2xl">👨‍🌾</span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Main Aesthetic Homepage Component
export default function AestheticHomepage() {
  return (
    <div className="min-h-screen">
      {/* Add CSS for animations */}
      <style jsx global>{`
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
      `}</style>

      <AestheticHero />
      <AestheticFeatureCards />
      <AestheticCTA />
    </div>
  );
}
