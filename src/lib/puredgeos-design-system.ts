// PuredgeOS 2.0: God-tier Design System
// This transforms our farm companion from poor to Apple-tier clarity fused with Pixar-grade immersion

export const PuredgeOSDesignSystem = {
  // 🎨 Color Palette - Apple-tier sophistication
  colors: {
    // Primary brand colors
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49'
    },
    
    // Secondary accent colors
    secondary: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
      950: '#4a044e'
    },
    
    // Success colors
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16'
    },
    
    // Warning colors
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03'
    },
    
    // Error colors
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a'
    },
    
    // Neutral colors
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a'
    },
    
    // Semantic colors
    semantic: {
      text: {
        primary: '#171717',
        secondary: '#525252',
        tertiary: '#737373',
        inverse: '#ffffff'
      },
      background: {
        primary: '#ffffff',
        secondary: '#fafafa',
        tertiary: '#f5f5f5',
        inverse: '#171717'
      },
      border: {
        primary: '#e5e5e5',
        secondary: '#d4d4d4',
        focus: '#0ea5e9'
      }
    }
  },

  // 📝 Typography - Apple-tier readability
  typography: {
    fontFamily: {
      primary: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      secondary: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace'
    },
    
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
      '7xl': '4.5rem',   // 72px
      '8xl': '6rem',     // 96px
      '9xl': '8rem'      // 128px
    },
    
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    },
    
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    }
  },

  // 📏 Spacing - Fitts' Law compliance
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    7: '1.75rem',   // 28px
    8: '2rem',      // 32px
    9: '2.25rem',   // 36px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    14: '3.5rem',   // 56px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    28: '7rem',     // 112px
    32: '8rem',     // 128px
    36: '9rem',     // 144px
    40: '10rem',    // 160px
    44: '11rem',    // 176px
    48: '12rem',    // 192px
    52: '13rem',    // 208px
    56: '14rem',    // 224px
    60: '15rem',    // 240px
    64: '16rem',    // 256px
    72: '18rem',    // 288px
    80: '20rem',    // 320px
    96: '24rem'     // 384px
  },

  // 🎭 Motion - Pixar-grade animations
  motion: {
    duration: {
      instant: '0ms',
      fast: '100ms',
      base: '200ms',
      slow: '300ms',
      slower: '500ms',
      slowest: '700ms'
    },
    
    easing: {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      elastic: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)'
    },
    
    // Predefined animations
    animations: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
        duration: '200ms',
        easing: 'ease-out'
      },
      fadeInUp: {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        duration: '300ms',
        easing: 'ease-out'
      },
      fadeInDown: {
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        duration: '300ms',
        easing: 'ease-out'
      },
      scaleIn: {
        from: { opacity: 0, transform: 'scale(0.9)' },
        to: { opacity: 1, transform: 'scale(1)' },
        duration: '200ms',
        easing: 'spring'
      },
      slideInLeft: {
        from: { opacity: 0, transform: 'translateX(-20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        duration: '300ms',
        easing: 'ease-out'
      },
      slideInRight: {
        from: { opacity: 0, transform: 'translateX(20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        duration: '300ms',
        easing: 'ease-out'
      },
      bounce: {
        from: { transform: 'scale(1)' },
        to: { transform: 'scale(1.05)' },
        duration: '150ms',
        easing: 'bounce'
      },
      pulse: {
        from: { transform: 'scale(1)' },
        to: { transform: 'scale(1.05)' },
        duration: '1000ms',
        easing: 'ease-in-out',
        iterationCount: 'infinite',
        direction: 'alternate'
      }
    }
  },

  // 🎨 Shadows - Apple-tier depth
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    glow: '0 0 20px rgba(14, 165, 233, 0.3)',
    glowStrong: '0 0 30px rgba(14, 165, 233, 0.5)'
  },

  // 🔲 Border Radius - Apple-tier smoothness
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px'
  },

  // 🎯 Interactive Elements - Fitts' Law compliance
  interactive: {
    // Minimum touch target size (48px = 3rem)
    minTouchTarget: '3rem',
    
    // Focus states
    focusRing: {
      width: '2px',
      color: '#0ea5e9',
      offset: '2px'
    },
    
    // Hover states
    hover: {
      scale: '1.02',
      transition: 'all 200ms ease-out'
    },
    
    // Active states
    active: {
      scale: '0.98',
      transition: 'all 100ms ease-out'
    }
  },

  // 🎨 Gradients - Premium visual appeal
  gradients: {
    primary: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
    secondary: 'linear-gradient(135deg, #d946ef 0%, #c026d3 100%)',
    success: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    warning: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    error: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    neutral: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
    glassDark: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)'
  },

  // 🎭 Glass Morphism - Modern UI trend
  glass: {
    light: {
      background: 'rgba(255, 255, 255, 0.25)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
    },
    dark: {
      background: 'rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
    }
  },

  // 📱 Breakpoints - Responsive design
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // 🎨 Component Styles - Pre-built God-tier components
  components: {
    button: {
      primary: {
        background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
        color: '#ffffff',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        fontWeight: '600',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 200ms ease-out',
        boxShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.3)',
        minHeight: '3rem',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 15px -3px rgba(14, 165, 233, 0.4)'
        },
        '&:active': {
          transform: 'translateY(0)',
          boxShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.3)'
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '0 0 0 3px rgba(14, 165, 233, 0.3)'
        }
      },
      secondary: {
        background: 'transparent',
        color: '#0ea5e9',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        fontWeight: '600',
        border: '2px solid #0ea5e9',
        cursor: 'pointer',
        transition: 'all 200ms ease-out',
        minHeight: '3rem',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        '&:hover': {
          background: '#0ea5e9',
          color: '#ffffff',
          transform: 'translateY(-2px)'
        },
        '&:active': {
          transform: 'translateY(0)'
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '0 0 0 3px rgba(14, 165, 233, 0.3)'
        }
      }
    },
    
    card: {
      base: {
        background: '#ffffff',
        borderRadius: '1rem',
        padding: '1.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e5e5e5',
        transition: 'all 200ms ease-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }
      },
      glass: {
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(10px)',
        borderRadius: '1rem',
        padding: '1.5rem',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        transition: 'all 200ms ease-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.45)'
        }
      }
    },
    
    input: {
      base: {
        background: '#ffffff',
        border: '2px solid #e5e5e5',
        borderRadius: '0.5rem',
        padding: '0.75rem 1rem',
        fontSize: '1rem',
        transition: 'all 200ms ease-out',
        minHeight: '3rem',
        '&:focus': {
          outline: 'none',
          borderColor: '#0ea5e9',
          boxShadow: '0 0 0 3px rgba(14, 165, 233, 0.1)'
        },
        '&:hover': {
          borderColor: '#d4d4d4'
        }
      }
    }
  }
};

// 🎨 CSS-in-JS helper functions
export const createStyles = (styles: Record<string, unknown>) => {
  return styles;
};

// 🎭 Animation keyframes
export const keyframes = {
  fadeIn: {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
  },
  fadeInUp: {
    '0%': { opacity: 0, transform: 'translateY(20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
  },
  fadeInDown: {
    '0%': { opacity: 0, transform: 'translateY(-20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
  },
  scaleIn: {
    '0%': { opacity: 0, transform: 'scale(0.9)' },
    '100%': { opacity: 1, transform: 'scale(1)' }
  },
  slideInLeft: {
    '0%': { opacity: 0, transform: 'translateX(-20px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' }
  },
  slideInRight: {
    '0%': { opacity: 0, transform: 'translateX(20px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' }
  },
  bounce: {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' }
  },
  pulse: {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' }
  },
  shimmer: {
    '0%': { backgroundPosition: '-200px 0' },
    '100%': { backgroundPosition: 'calc(200px + 100%) 0' }
  },
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' }
  }
};

// 🎨 Utility functions
export const getGradient = (type: keyof typeof PuredgeOSDesignSystem.gradients) => {
  return PuredgeOSDesignSystem.gradients[type];
};

export const getShadow = (type: keyof typeof PuredgeOSDesignSystem.shadows) => {
  return PuredgeOSDesignSystem.shadows[type];
};

export const getAnimation = (type: keyof typeof PuredgeOSDesignSystem.motion.animations) => {
  return PuredgeOSDesignSystem.motion.animations[type];
};

// 🎨 Theme-aware color getter
export const getColor = (path: string) => {
  const keys = path.split('.');
  let value: unknown = PuredgeOSDesignSystem.colors;
  
  for (const key of keys) {
    value = (value as Record<string, unknown>)[key];
    if (value === undefined) {
      console.warn(`Color not found: ${path}`);
      return '#000000';
    }
  }
  
  return value as string;
};

// 🎨 Responsive helper
export const responsive = {
  xs: '@media (min-width: 320px)',
  sm: '@media (min-width: 640px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 1024px)',
  xl: '@media (min-width: 1280px)',
  '2xl': '@media (min-width: 1536px)'
};

export default PuredgeOSDesignSystem;
