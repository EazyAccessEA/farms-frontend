'use client';

import { useEffect, useState } from "react";
import { PuredgeOS, PuredgeOSComponents } from '@/lib/puredgeos';
import { puredgeTelemetry } from '@/lib/puredge-telemetry';
import Link from 'next/link';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Hero Section - PuredgeOS 2.0: Blink Test > 0.8 */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            {/* Main Heading */}
            <h1 
              className={`text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 mb-8 animate-heroEntrance`}
              style={{ opacity: isLoaded ? 1 : 0 }}
            >
              Farm Companion
            </h1>
            
            {/* Subtitle */}
            <p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
              style={{ 
                opacity: isLoaded ? 1 : 0,
                animationDelay: '0.2s'
              }}
            >
              Discover verified farm shops near you. Fresh, local produce directly from farmers, 
              with <span className="text-gradient-primary font-semibold">real-time availability</span> and 
              <span className="text-gradient-secondary font-semibold"> seamless ordering</span>.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scaleIn"
              style={{ 
                opacity: isLoaded ? 1 : 0,
                animationDelay: '0.4s'
              }}
            >
              <Link 
                href="/map" 
                className="btn btn-primary text-lg px-8 py-4 hover-glow group"
              >
                <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Explore Farm Shops
              </Link>
              
              <Link 
                href="/admin" 
                className="btn btn-secondary text-lg px-8 py-4"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
                Admin Dashboard
              </Link>
            </div>

            {/* Stats Section */}
            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fadeInUp"
              style={{ 
                opacity: isLoaded ? 1 : 0,
                animationDelay: '0.6s'
              }}
            >
              <div className="card card-glass text-center">
                <div className="text-4xl font-bold text-gradient-primary mb-2">
                  {farms.length}+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Verified Farm Shops
                </div>
              </div>
              
              <div className="card card-glass text-center">
                <div className="text-4xl font-bold text-gradient-secondary mb-2">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Real-time Updates
                </div>
              </div>
              
              <div className="card card-glass text-center">
                <div className="text-4xl font-bold text-gradient-success mb-2">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Local & Fresh
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="main-content" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose <span className="text-gradient-primary">Farm Companion</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of local food shopping with our cutting-edge platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card hover-lift group">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Verified Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every farm shop is personally verified for quality, freshness, and authenticity.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card hover-lift group">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Real-time Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get instant updates on product availability, prices, and special offers.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card hover-lift group">
              <div className="w-16 h-16 bg-gradient-success rounded-2xl flex items-center justify-center mb-6 group-hover:animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Local Discovery
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find hidden gems in your area with our intelligent location-based recommendations.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card hover-lift group">
              <div className="w-16 h-16 bg-gradient-warning rounded-2xl flex items-center justify-center mb-6 group-hover:animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Fair Pricing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transparent pricing with no hidden fees. Support local farmers directly.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="card hover-lift group">
              <div className="w-16 h-16 bg-gradient-error rounded-2xl flex items-center justify-center mb-6 group-hover:animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Community Driven
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built by farmers, for farmers. Join our growing community of local producers.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="card hover-lift group">
              <div className="w-16 h-16 bg-gradient-neutral rounded-2xl flex items-center justify-center mb-6 group-hover:animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Analytics & Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Powerful analytics help farmers optimize their offerings and reach more customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Farms Section */}
      {farms.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Recently Added <span className="text-gradient-primary">Farm Shops</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Discover the latest additions to our verified network
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {farms.slice(0, 6).map((farm, index) => (
                <div 
                  key={farm.id} 
                  className="card hover-lift group animate-fadeInUp"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    opacity: isLoaded ? 1 : 0
                  }}
                >
                  <div className="relative mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Verified
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gradient-primary transition-all">
                    {farm.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {farm.address}, {farm.postcode}
                  </p>
                  
                  {farm.produce_tags && farm.produce_tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {farm.produce_tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <Link 
                    href={`/map?farm=${farm.id}`}
                    className="btn btn-primary w-full justify-center"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/map" 
                className="btn btn-secondary text-lg px-8 py-4"
              >
                View All Farm Shops
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Discover Local Farm Shops?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of customers who are already enjoying fresh, local produce from verified farm shops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/map" 
              className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Start Exploring
            </Link>
            <Link 
              href="/admin" 
              className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
            >
              Join as Farmer
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
                Connecting local farmers with customers for a sustainable food future.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/map" className="hover:text-white transition-colors">Farm Map</Link></li>
                <li><Link href="/admin" className="hover:text-white transition-colors">Admin Dashboard</Link></li>
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
            <p>&copy; 2024 Farm Companion. Built with ❤️ for local farmers and communities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
