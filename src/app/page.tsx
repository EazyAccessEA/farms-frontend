'use client';

import { useEffect, useState } from "react";
import { puredgeTelemetry } from '@/lib/puredge-telemetry';
import Link from 'next/link';
import { HeroAnimation, InteractiveBackground } from '@/components/HeroAnimation';
import { EnhancedFarmCardGrid } from '@/components/EnhancedFarmCard';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [farms, setFarms] = useState<Array<{
    id: string;
    name: string;
    address: string;
    postcode: string;
    lat: number;
    lng: number;
    verified_photo_url?: string;
    produce_tags?: string[];
  }>>([]);

  // PuredgeOS 2.0: Neuro-cognitive foundation - Pre-attentive processing
  useEffect(() => {
    setIsLoaded(true);
    
    // Load farm data for immediate value demonstration
    fetch("/api/farms")
      .then((r) => r.json())
      .then((data) => setFarms(data))
      .catch(() => setFarms([]));
    
    // PuredgeOS 2.0: Measure all metrics after page load
    const measureMetrics = async () => {
      try {
        const metrics = await puredgeTelemetry.measureAll('/');
        console.log('PuredgeOS 2.0 Metrics:', metrics);
      } catch (error) {
        console.warn('PuredgeOS 2.0: Failed to measure metrics:', error);
      }
    };
    
    // Measure after page is fully loaded
    setTimeout(measureMetrics, 2000);
  }, []);

  const handleAnimationComplete = () => {
    console.log('PuredgeOS V1: Hero animation completed - Signature moment achieved!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Hero Section - PuredgeOS V1: Signature Moment */}
      <InteractiveBackground className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <HeroAnimation 
            isVisible={isLoaded} 
            onAnimationComplete={handleAnimationComplete}
            className="text-center"
          />
        </div>
      </InteractiveBackground>

      {/* Features Section - PuredgeOS V1: Clear Benefits with Emotional Hooks */}
      <section id="main-content" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why <span className="text-gradient-primary">Farm Companion</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We&apos;re not just connecting you to farms—we&apos;re bringing the farm to your table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - PuredgeOS V1: Emotional Benefit First */}
            <div className="card hover-lift group">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Taste the Difference
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fresh-picked produce that actually tastes like it should. No more bland supermarket vegetables.
              </p>
            </div>

            {/* Feature 2 - PuredgeOS V1: Clear Value Proposition */}
            <div className="card hover-lift group">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Same-Day Freshness
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                From farm to your door in hours, not days. Your produce is harvested the same day you order.
              </p>
            </div>

            {/* Feature 3 - PuredgeOS V1: Trust Building */}
            <div className="card hover-lift group">
              <div className="w-16 h-16 bg-gradient-success rounded-2xl flex items-center justify-center mb-6 group-hover:animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Know Your Farmer
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Meet the people growing your food. Every farmer is verified and personally known to us.
              </p>
            </div>

            {/* Feature 4 - PuredgeOS V1: Cost Benefit */}
            <div className="card hover-lift group">
              <div className="w-16 h-16 bg-gradient-warning rounded-2xl flex items-center justify-center mb-6 group-hover:animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Better Prices
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Cut out the middleman. You pay the farmer directly, so you get better quality for less money.
              </p>
            </div>

            {/* Feature 5 - PuredgeOS V1: Community Benefit */}
            <div className="card hover-lift group">
              <div className="w-16 h-16 bg-gradient-error rounded-2xl flex items-center justify-center mb-6 group-hover:animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Support Local
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Keep your money in your community. Every purchase directly supports local farmers and families.
              </p>
            </div>

            {/* Feature 6 - PuredgeOS V1: Environmental Benefit */}
            <div className="card hover-lift group">
              <div className="w-16 h-16 bg-gradient-neutral rounded-2xl flex items-center justify-center mb-6 group-hover:animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Eco-Friendly
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reduce food miles and packaging waste. Local delivery means a smaller carbon footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Farms Section - PuredgeOS V1: Enhanced Cards with Signature Interactions */}
      {farms.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Fresh from <span className="text-gradient-primary">Local Farms</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Discover the farmers bringing fresh produce to your community
              </p>
            </div>

            {/* Enhanced Farm Cards with 3D Flip and Magnetic Hover */}
            <EnhancedFarmCardGrid farms={farms.slice(0, 6)} />

            <div className="text-center mt-12">
              <Link 
                href="/map" 
                className="btn btn-secondary text-lg px-8 py-4"
              >
                Explore All Farms
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - PuredgeOS V1: Clear Action with Urgency */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Taste the Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of customers who&apos;ve discovered the joy of farm-fresh produce delivered to their door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/map" 
              className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Start Shopping
            </Link>
            <Link 
              href="/admin" 
              className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
            >
              Become a Farmer
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                Farm Companion
              </h3>
              <p className="text-gray-400">
                Connecting you directly to local farmers for the freshest produce possible.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/map" className="hover:text-white transition-colors">Find Farms</Link></li>
                <li><Link href="/admin" className="hover:text-white transition-colors">Farmer Dashboard</Link></li>
                <li><Link href="/api" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Farm Companion. Fresh food, delivered daily.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
