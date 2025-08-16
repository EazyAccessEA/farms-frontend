'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { EliteSiliconValleyColors, EliteBrandUtils } from '@/lib/silicon-valley-colors';
import { puredgeTelemetry } from '@/lib/puredge-telemetry';

// Enhanced Hero Component with Aesthetic Excellence
const AestheticHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Record hero engagement for telemetry
    puredgeTelemetry.recordImmersionMetric('hero_engagement', {
      timestamp: Date.now(),
      interaction_type: 'view'
    });
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-elite-sophisticated"
      style={{
        padding: '6rem 2rem',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${EliteSiliconValleyColors.teal[200]}, transparent)`,
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, ${EliteSiliconValleyColors.lime[200]}, transparent)`,
            animation: 'float 25s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, ${EliteSiliconValleyColors.fog[200]}, transparent)`,
            animation: 'breathe 15s ease-in-out infinite',
          }}
        />
      </div>

      {/* Floating Elite Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {['🌿', '🌱', '🌾', '🍃', '🌺', '🌻'].map((element, i) => (
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
            {element}
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Elite Silicon Valley Headline */}
          <h1 
            className="mb-8 font-headline text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white"
            style={{
              background: `linear-gradient(135deg, 
                ${EliteSiliconValleyColors.obsidian[50]} 0%, 
                ${EliteSiliconValleyColors.teal[400]} 50%,
                ${EliteSiliconValleyColors.lime[400]} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Fresh Food,{' '}
            <span className="block">Fresh Life</span>
          </h1>

          {/* Elite Silicon Valley Subtitle */}
          <p 
            className="mb-12 max-w-3xl mx-auto font-body text-xl md:text-2xl text-fog-200 leading-relaxed"
          >
            Connect with local farms and discover nature&apos;s finest offerings. 
            Every bite tells a story of care, quality, and community.
          </p>

          {/* CTA Buttons with Emotional Impact */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/map">
              <button
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-headline font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-gradient-elite-accent text-obsidian-900 shadow-soft hover:shadow-medium"
                onClick={() => {
                  puredgeTelemetry.recordImmersionMetric('cta_click', {
                    button: 'start_exploring',
                    timestamp: Date.now()
                  });
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
                className="px-8 py-4 rounded-xl font-body font-medium text-lg transition-all duration-300 border-2 border-teal-600 text-teal-600 hover:scale-105 hover:bg-teal-50 hover:border-teal-700 hover:text-teal-700"
                onClick={() => {
                  puredgeTelemetry.recordImmersionMetric('cta_click', {
                    button: 'become_farmer',
                    timestamp: Date.now()
                  });
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
                className="flex items-center gap-2 text-lg font-body text-obsidian-600"
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
      gradient: [EliteSiliconValleyColors.teal[400], EliteSiliconValleyColors.teal[600]],
      emotion: 'joy'
    },
    {
      icon: '⚡',
      title: 'Same-Day Freshness',
      description: 'From farm to your door in hours, not days. Your produce is harvested the same day you order.',
      gradient: [EliteSiliconValleyColors.lime[400], EliteSiliconValleyColors.lime[600]],
      emotion: 'hope'
    },
    {
      icon: '👨‍🌾',
      title: 'Know Your Farmer',
      description: 'Meet the people growing your food. Every farmer is verified and personally known to us.',
      gradient: [EliteSiliconValleyColors.obsidian[400], EliteSiliconValleyColors.obsidian[600]],
      emotion: 'love'
    },
    {
      icon: '💰',
      title: 'Better Prices',
      description: 'Cut out the middleman. You pay the farmer directly, so you get better quality for less money.',
      gradient: [EliteSiliconValleyColors.lime[400], EliteSiliconValleyColors.lime[600]],
      emotion: 'strength'
    },
    {
      icon: '🤝',
      title: 'Support Local',
      description: 'Keep your money in your community. Every purchase directly supports local farmers and families.',
      gradient: [EliteSiliconValleyColors.teal[500], EliteSiliconValleyColors.teal[700]],
      emotion: 'peace'
    },
    {
      icon: '🌱',
      title: 'Eco-Friendly',
      description: 'Reduce food miles and packaging waste. Local delivery means a smaller carbon footprint.',
      gradient: [EliteSiliconValleyColors.fog[500], EliteSiliconValleyColors.fog[700]],
      emotion: 'wisdom'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="mb-6 font-headline text-4xl md:text-5xl font-bold text-obsidian-900"
          >
            Why <span className="bg-gradient-elite-primary bg-clip-text text-transparent">Farm Companion</span>?
          </h2>
          <p 
            className="max-w-3xl mx-auto font-body text-xl text-obsidian-600 leading-relaxed"
          >
            We&apos;re not just connecting you to farms—we&apos;re bringing the farm to your table
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white border border-fog-200 shadow-soft hover:shadow-medium hover:border-teal-200"
              onMouseEnter={() => {
                puredgeTelemetry.recordImmersionMetric('feature_card_hover', {
                  feature: feature.title,
                  emotion: feature.emotion,
                  timestamp: Date.now()
                });
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
                className="text-2xl font-headline font-bold mb-4 text-obsidian-900"
              >
                {feature.title}
              </h3>
              <p 
                className="font-body text-obsidian-600 leading-relaxed"
              >
                {feature.description}
              </p>

              {/* Emotion Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-2xl">
                  {feature.emotion === 'joy' ? '😊' : 
                   feature.emotion === 'hope' ? '✨' : 
                   feature.emotion === 'love' ? '❤️' : 
                   feature.emotion === 'strength' ? '💪' : 
                   feature.emotion === 'peace' ? '🕊️' : 
                   feature.emotion === 'wisdom' ? '🧠' : '🌟'}
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
      className="py-20 relative overflow-hidden bg-gradient-elite-innovation"
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
          className="text-4xl md:text-5xl font-headline font-bold text-white mb-6"
        >
          Ready to Taste the Difference?
        </h2>
        <p 
          className="text-xl mb-8 font-body text-fog-100 leading-relaxed"
        >
          Join thousands of customers who&apos;ve discovered the joy of farm-fresh produce delivered to their door.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/map">
            <button
              className="px-8 py-4 rounded-xl font-headline font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-white text-teal-600 shadow-soft hover:shadow-medium"
              onClick={() => {
                puredgeTelemetry.recordImmersionMetric('cta_click', {
                  button: 'start_shopping',
                  timestamp: Date.now()
                });
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
              className="px-8 py-4 rounded-xl font-body font-medium text-lg transition-all duration-300 border-2 border-white text-white hover:scale-105 hover:bg-white hover:text-obsidian-900"
              onClick={() => {
                puredgeTelemetry.recordImmersionMetric('cta_click', {
                  button: 'become_farmer_cta',
                  timestamp: Date.now()
                });
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#00C2B2'; // Serum Teal
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

// Main Homepage Component with Aesthetic Excellence
export default function Home() {
  useEffect(() => {
    // Initialize PuredgeOS telemetry
    puredgeTelemetry.initialize();
    
    // Record page view
    puredgeTelemetry.recordClarityMetric('page_view', {
      route: '/',
      timestamp: Date.now()
    });
  }, []);

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
