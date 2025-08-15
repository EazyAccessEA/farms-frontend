// PuredgeOS V1: Enhanced Farm Card Component
// Unique card interactions that feel inevitable - Apple-level signature moments

'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// 🎭 3D Card Flip Animation Component
const FlipCard: React.FC<{
  front: React.ReactNode;
  back: React.ReactNode;
  isFlipped: boolean;
  onFlip: () => void;
  className?: string;
}> = ({ front, back, isFlipped, onFlip, className = '' }) => {
  return (
    <div 
      className={`relative w-full h-full perspective-1000 ${className}`}
      onClick={onFlip}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 ease-out transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          {front}
        </div>
        
        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          {back}
        </div>
      </div>
    </div>
  );
};

// 🎨 Magnetic Hover Effect Hook
const useMagneticHover = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) * 0.1;
    const y = (e.clientY - centerY) * 0.1;
    
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setPosition({ x: 0, y: 0 });
  };

  return {
    ref,
    position,
    isHovering,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    }
  };
};

// 🌱 Enhanced Farm Card Component
export const EnhancedFarmCard: React.FC<{
  farm: {
    id: string;
    name: string;
    address: string;
    postcode: string;
    lat: number;
    lng: number;
    verified_photo_url?: string;
    produce_tags?: string[];
  };
  index: number;
  className?: string;
}> = ({ farm, index, className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const magneticRef = useMagneticHover();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Front Side Content
  const FrontContent = (
    <div className="card h-full cursor-pointer group">
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <div className="w-full h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center relative">
          <svg className="w-16 h-16 text-white/80 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${30 + (i * 10)}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + i}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Verified Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse">
            Verified
          </span>
        </div>

        {/* Flip Indicator */}
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to explore
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gradient-primary transition-all duration-300">
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
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm transition-all duration-300 hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <div className="mt-auto">
        <button className="btn btn-primary w-full justify-center group-hover:animate-pulse">
          View Fresh Produce
        </button>
      </div>
    </div>
  );

  // Back Side Content
  const BackContent = (
    <div className="card h-full cursor-pointer bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
      <div className="text-center h-full flex flex-col justify-center">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Farm Details
        </h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Location:</span>
            <span className="font-medium">{farm.postcode}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Status:</span>
            <span className="text-green-600 font-medium">Active</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Products:</span>
            <span className="font-medium">{farm.produce_tags?.length || 0} types</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <Link 
            href={`/map?farm=${farm.id}`}
            className="btn btn-primary w-full justify-center"
          >
            View on Map
          </Link>
          <button 
            onClick={handleFlip}
            className="btn btn-secondary w-full justify-center"
          >
            Back to Overview
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      ref={magneticRef.ref}
      className={`transition-all duration-300 ease-out ${
        isLoaded ? 'opacity-100 translateY(0)' : 'opacity-0 translateY(20px)'
      } ${className}`}
      style={{
        transform: magneticRef.isHovering 
          ? `translate(${magneticRef.position.x}px, ${magneticRef.position.y}px) rotateX(${magneticRef.position.y * 0.1}deg) rotateY(${magneticRef.position.x * 0.1}deg)`
          : 'translate(0, 0) rotateX(0deg) rotateY(0deg)',
        transition: magneticRef.isHovering ? 'none' : 'all 0.3s ease-out'
      }}
      {...magneticRef.handlers}
    >
      <FlipCard
        front={FrontContent}
        back={BackContent}
        isFlipped={isFlipped}
        onFlip={handleFlip}
        className="h-full"
      />
    </div>
  );
};

// 🎨 Farm Card Grid with Staggered Animation
export const EnhancedFarmCardGrid: React.FC<{
  farms: Array<{
    id: string;
    name: string;
    address: string;
    postcode: string;
    lat: number;
    lng: number;
    verified_photo_url?: string;
    produce_tags?: string[];
  }>;
  className?: string;
}> = ({ farms, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {farms.map((farm, index) => (
        <EnhancedFarmCard
          key={farm.id}
          farm={farm}
          index={index}
        />
      ))}
    </div>
  );
};

// 🎭 Loading Skeleton for Enhanced Cards
export const EnhancedFarmCardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`card animate-pulse ${className}`}>
      <div className="skeleton h-48 w-full rounded-xl mb-4"></div>
      <div className="skeleton h-6 w-3/4 mb-2 rounded"></div>
      <div className="skeleton h-4 w-1/2 mb-4 rounded"></div>
      <div className="flex gap-2 mb-4">
        <div className="skeleton h-6 w-16 rounded-full"></div>
        <div className="skeleton h-6 w-20 rounded-full"></div>
        <div className="skeleton h-6 w-14 rounded-full"></div>
      </div>
      <div className="skeleton h-10 w-full rounded-lg"></div>
    </div>
  );
};

// 🎨 Farm Card with Hover Reveal
export const HoverRevealFarmCard: React.FC<{
  farm: {
    id: string;
    name: string;
    address: string;
    postcode: string;
    lat: number;
    lng: number;
    verified_photo_url?: string;
    produce_tags?: string[];
  };
  className?: string;
}> = ({ farm, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const magneticRef = useMagneticHover();

  return (
    <div 
      ref={magneticRef.ref}
      className={`card relative overflow-hidden group ${className}`}
      {...magneticRef.handlers}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: magneticRef.isHovering 
          ? `translate(${magneticRef.position.x * 0.5}px, ${magneticRef.position.y * 0.5}px)`
          : 'translate(0, 0)',
        transition: magneticRef.isHovering ? 'none' : 'all 0.3s ease-out'
      }}
    >
      {/* Background Image/Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="relative mb-4">
          <div className="w-full h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
            <svg className="w-16 h-16 text-white/80 transition-transform duration-500 group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          
          {/* Verified Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              Verified
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gradient-primary transition-all duration-300">
          {farm.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {farm.address}, {farm.postcode}
        </p>
        
        {/* Hover Reveal Content */}
        <div className={`overflow-hidden transition-all duration-500 ease-out ${
          isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
        }`}>
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
          
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Fresh produce available daily • Same-day delivery • Direct from farm
          </div>
        </div>
        
        <Link 
          href={`/map?farm=${farm.id}`}
          className="btn btn-primary w-full justify-center group-hover:animate-pulse"
        >
          View Fresh Produce
        </Link>
      </div>
      
      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
    </div>
  );
};

export default {
  EnhancedFarmCard,
  EnhancedFarmCardGrid,
  EnhancedFarmCardSkeleton,
  HoverRevealFarmCard
};
