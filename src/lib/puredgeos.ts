// PuredgeOS Design Token System
// God-tier design constitution for the Farm Companion ecosystem

export const PuredgeOS = {
  // Typography System
  typography: {
    fontFamily: {
      primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem'  // 60px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800'
    },
    lineHeight: {
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    }
  },

  // Color System - Semantic and Accessible
  colors: {
    // Primary Brand Colors
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
    
    // Success Colors
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
    
    // Warning Colors
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
    
    // Error Colors
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
    
    // Neutral Colors
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    },
    
    // Semantic Colors
    semantic: {
      text: {
        primary: '#0f172a',
        secondary: '#475569',
        tertiary: '#64748b',
        inverse: '#ffffff'
      },
      background: {
        primary: '#ffffff',
        secondary: '#f8fafc',
        tertiary: '#f1f5f9',
        inverse: '#0f172a'
      },
      border: {
        light: '#e2e8f0',
        medium: '#cbd5e1',
        dark: '#94a3b8'
      }
    }
  },

  // Spacing System
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    '1.5': '0.375rem', // 6px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
    40: '10rem',    // 160px
    48: '12rem',    // 192px
    56: '14rem',    // 224px
    64: '16rem'     // 256px
  },

  // Border Radius System
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

  // Shadow System
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none'
  },

  // Motion System
  motion: {
    duration: {
      fast: '150ms',
      base: '200ms',
      slow: '300ms',
      slower: '500ms'
    },
    easing: {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      // Custom easing curves
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    },
    // Animation presets
    animations: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
        duration: '200ms',
        easing: 'ease-out'
      },
      slideUp: {
        from: { transform: 'translateY(10px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
        duration: '300ms',
        easing: 'ease-out'
      },
      scaleIn: {
        from: { transform: 'scale(0.95)', opacity: 0 },
        to: { transform: 'scale(1)', opacity: 1 },
        duration: '200ms',
        easing: 'ease-out'
      },
      bounce: {
        from: { transform: 'scale(1)' },
        to: { transform: 'scale(1.05)' },
        duration: '150ms',
        easing: 'bounce'
      }
    }
  },

  // Elevation System
  elevation: {
    0: '0',
    1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    3: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    4: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    5: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },

  // Glassmorphism System
  glassmorphism: {
    light: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      shadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
    },
    dark: {
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
    }
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Z-Index System
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  }
};

// PuredgeOS Utility Functions
export const PuredgeOSUtils = {
  // Get responsive value
  responsive: (values: Record<string, string>) => {
    return Object.entries(values).map(([breakpoint, value]) => {
      if (breakpoint === 'base') return value;
      return `@media (min-width: ${PuredgeOS.breakpoints[breakpoint as keyof typeof PuredgeOS.breakpoints]}) { ${value} }`;
    }).join(' ');
  },

  // Create glassmorphism styles
  glass: (variant: 'light' | 'dark' = 'light') => {
    return PuredgeOS.glassmorphism[variant];
  },

  // Create animation styles
  animate: (animation: keyof typeof PuredgeOS.motion.animations) => {
    const anim = PuredgeOS.motion.animations[animation];
    return {
      animation: `${animation} ${anim.duration} ${anim.easing}`,
      '@keyframes': {
        [animation]: {
          from: anim.from,
          to: anim.to
        }
      }
    };
  },

  // Create elevation styles
  elevate: (level: keyof typeof PuredgeOS.elevation) => {
    return {
      boxShadow: PuredgeOS.elevation[level]
    };
  }
};

// PuredgeOS Component Styles
export const PuredgeOSComponents = {
  // Button styles
  button: {
    base: {
      fontFamily: PuredgeOS.typography.fontFamily.primary,
      fontWeight: PuredgeOS.typography.fontWeight.medium,
      fontSize: PuredgeOS.typography.fontSize.base,
      lineHeight: PuredgeOS.typography.lineHeight.normal,
      borderRadius: PuredgeOS.borderRadius.lg,
      padding: `${PuredgeOS.spacing[3]} ${PuredgeOS.spacing[6]}`,
      transition: `all ${PuredgeOS.motion.duration.base} ${PuredgeOS.motion.easing.smooth}`,
      cursor: 'pointer',
      border: 'none',
      outline: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: PuredgeOS.spacing[2]
    },
    primary: {
      backgroundColor: PuredgeOS.colors.primary[600],
      color: PuredgeOS.colors.semantic.text.inverse,
      '&:hover': {
        backgroundColor: PuredgeOS.colors.primary[700],
        transform: 'translateY(-1px)',
        boxShadow: PuredgeOS.shadows.lg
      },
      '&:active': {
        transform: 'translateY(0)',
        boxShadow: PuredgeOS.shadows.md
      }
    },
    secondary: {
      backgroundColor: PuredgeOS.colors.semantic.background.secondary,
      color: PuredgeOS.colors.semantic.text.primary,
      border: `1px solid ${PuredgeOS.colors.semantic.border.medium}`,
      '&:hover': {
        backgroundColor: PuredgeOS.colors.semantic.background.tertiary,
        borderColor: PuredgeOS.colors.semantic.border.dark
      }
    }
  },

  // Card styles
  card: {
    base: {
      backgroundColor: PuredgeOS.colors.semantic.background.primary,
      borderRadius: PuredgeOS.borderRadius.xl,
      boxShadow: PuredgeOS.shadows.md,
      border: `1px solid ${PuredgeOS.colors.semantic.border.light}`,
      overflow: 'hidden',
      transition: `all ${PuredgeOS.motion.duration.base} ${PuredgeOS.motion.easing.smooth}`
    },
    glass: {
      ...PuredgeOSUtils.glass('light'),
      borderRadius: PuredgeOS.borderRadius.xl
    }
  },

  // Input styles
  input: {
    base: {
      fontFamily: PuredgeOS.typography.fontFamily.primary,
      fontSize: PuredgeOS.typography.fontSize.base,
      lineHeight: PuredgeOS.typography.lineHeight.normal,
      padding: `${PuredgeOS.spacing[3]} ${PuredgeOS.spacing[4]}`,
      borderRadius: PuredgeOS.borderRadius.lg,
      border: `1px solid ${PuredgeOS.colors.semantic.border.medium}`,
      backgroundColor: PuredgeOS.colors.semantic.background.primary,
      color: PuredgeOS.colors.semantic.text.primary,
      transition: `all ${PuredgeOS.motion.duration.base} ${PuredgeOS.motion.easing.smooth}`,
      outline: 'none',
      '&:focus': {
        borderColor: PuredgeOS.colors.primary[500],
        boxShadow: `0 0 0 3px ${PuredgeOS.colors.primary[100]}`
      },
      '&:hover': {
        borderColor: PuredgeOS.colors.semantic.border.dark
      }
    }
  }
};

export default PuredgeOS;
