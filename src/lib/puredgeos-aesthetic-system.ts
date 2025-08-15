// PuredgeOS Aesthetic Excellence System
// Transforms functional design into emotionally resonant beauty

export interface AestheticPalette {
  // Emotional Color Story
  colors: {
    // Primary Emotional Journey
    passion: {
      50: '#fef2f2',   // Gentle warmth
      100: '#fee2e2',  // Soft comfort
      200: '#fecaca',  // Tender care
      300: '#fca5a5',  // Warm embrace
      400: '#f87171',  // Vibrant energy
      500: '#ef4444',  // Bold passion
      600: '#dc2626',  // Deep commitment
      700: '#b91c1c',  // Strong foundation
      800: '#991b1b',  // Enduring strength
      900: '#7f1d1d',  // Timeless wisdom
    };
    
    // Growth & Abundance
    growth: {
      50: '#f0fdf4',   // Fresh beginnings
      100: '#dcfce7',  // Gentle growth
      200: '#bbf7d0',  // Natural vitality
      300: '#86efac',  // Flourishing life
      400: '#4ade80',  // Vibrant health
      500: '#22c55e',  // Abundant harvest
      600: '#16a34a',  // Deep roots
      700: '#15803d',  // Strong foundation
      800: '#166534',  // Enduring growth
      900: '#14532d',  // Timeless wisdom
    };
    
    // Earth & Connection
    earth: {
      50: '#fafaf9',   // Pure foundation
      100: '#f5f5f4',  // Gentle grounding
      200: '#e7e5e4',  // Natural texture
      300: '#d6d3d1',  // Warm embrace
      400: '#a8a29e',  // Rich soil
      500: '#78716c',  // Deep earth
      600: '#57534e',  // Strong roots
      700: '#44403c',  // Enduring foundation
      800: '#292524',  // Timeless wisdom
      900: '#1c1917',  // Ancient knowledge
    };
    
    // Sky & Possibility
    sky: {
      50: '#eff6ff',   // Infinite possibility
      100: '#dbeafe',  // Gentle hope
      200: '#bfdbfe',  // Soft dreams
      300: '#93c5fd',  // Clear vision
      400: '#60a5fa',  // Bright future
      500: '#3b82f6',  // Bold ambition
      600: '#2563eb',  // Deep wisdom
      700: '#1d4ed8',  // Strong purpose
      800: '#1e40af',  // Enduring truth
      900: '#1e3a8a',  // Timeless knowledge
    };
  };
  
  // Typography Personality
  typography: {
    // Primary Font: Inter with personality
    primary: {
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      weights: {
        light: 300,      // Gentle whispers
        regular: 400,    // Clear conversation
        medium: 500,     // Confident voice
        semibold: 600,   // Strong emphasis
        bold: 700,       // Bold statements
        extrabold: 800,  // Powerful impact
      },
      sizes: {
        xs: '0.75rem',    // Whispered secrets
        sm: '0.875rem',   // Gentle guidance
        base: '1rem',     // Clear conversation
        lg: '1.125rem',   // Confident voice
        xl: '1.25rem',    // Strong emphasis
        '2xl': '1.5rem',  // Bold statements
        '3xl': '1.875rem', // Powerful impact
        '4xl': '2.25rem',  // Heroic presence
        '5xl': '3rem',     // Monumental scale
        '6xl': '3.75rem',  // Epic grandeur
        '7xl': '4.5rem',   // Legendary impact
      },
      lineHeights: {
        tight: 1.1,       // Intimate connection
        snug: 1.25,       // Close relationship
        normal: 1.5,      // Natural flow
        relaxed: 1.75,    // Comfortable breathing
        loose: 2,         // Generous space
      }
    },
    
    // Display Font: For hero moments
    display: {
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      weights: {
        light: 200,       // Ethereal presence
        regular: 300,     // Gentle authority
        medium: 400,      // Confident leadership
        semibold: 500,    // Strong presence
        bold: 600,        // Powerful impact
      }
    }
  };
  
  // Spatial Poetry - White Space as Emotional Design
  spacing: {
    // Micro-interactions
    xs: '0.25rem',    // Whispered moments
    sm: '0.5rem',     // Gentle breaths
    md: '1rem',       // Natural rhythm
    lg: '1.5rem',     // Comfortable space
    xl: '2rem',       // Generous breathing
    '2xl': '3rem',    // Dramatic pause
    '3xl': '4rem',    // Epic space
    '4xl': '6rem',    // Monumental scale
    '5xl': '8rem',    // Legendary presence
  };
  
  // Motion Narrative - Animations that tell stories
  motion: {
    // Emotional timing curves
    easing: {
      gentle: 'cubic-bezier(0.4, 0, 0.2, 1)',      // Soft, caring
      smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Natural flow
      bouncy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Playful joy
      dramatic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Powerful impact
      ethereal: 'cubic-bezier(0.25, 0.1, 0.25, 1)', // Magical moments
    },
    
    // Storytelling durations
    duration: {
      instant: '50ms',    // Immediate response
      quick: '150ms',     // Snappy interaction
      smooth: '300ms',    // Natural flow
      gentle: '500ms',    // Caring attention
      dramatic: '750ms',  // Powerful impact
      epic: '1000ms',     // Legendary moment
    },
    
    // Narrative sequences
    sequences: {
      entrance: {
        stagger: 100,     // Characters enter one by one
        delay: 200,       // Dramatic pause
      },
      interaction: {
        hover: 200,       // Gentle response
        active: 100,      // Immediate feedback
        focus: 150,       // Clear attention
      },
      exit: {
        fade: 300,        // Graceful departure
        slide: 400,       // Smooth transition
      }
    }
  };
  
  // Visual Hierarchy Magic
  hierarchy: {
    // Elevation system with personality
    elevation: {
      ground: '0 0 0 0 rgba(0, 0, 0, 0)',           // Foundation
      whisper: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',   // Gentle presence
      soft: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',       // Soft touch
      gentle: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',  // Caring embrace
      strong: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', // Confident presence
      powerful: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', // Bold impact
      epic: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // Legendary scale
    },
    
    // Border radius with character
    radius: {
      none: '0',          // Sharp precision
      sm: '0.125rem',     // Gentle touch
      base: '0.25rem',    // Natural curve
      md: '0.375rem',     // Comfortable round
      lg: '0.5rem',       // Generous curve
      xl: '0.75rem',      // Dramatic round
      '2xl': '1rem',      // Epic curve
      '3xl': '1.5rem',    // Monumental round
      full: '9999px',     // Perfect circle
    }
  };
  
  // Visual Metaphor System
  metaphors: {
    // Nature-inspired design elements
    elements: {
      leaf: '🌿',         // Growth and vitality
      seed: '🌱',         // New beginnings
      sun: '☀️',          // Energy and warmth
      water: '💧',        // Flow and nourishment
      earth: '🌍',        // Foundation and connection
      tree: '🌳',         // Strength and growth
    },
    
    // Emotional states
    emotions: {
      joy: '✨',          // Sparkle of happiness
      peace: '🕊️',        // Gentle tranquility
      strength: '💪',     // Power and resilience
      wisdom: '🧠',       // Knowledge and insight
      love: '💝',         // Care and connection
      hope: '🌈',         // Promise and possibility
    }
  };
}

// Aesthetic Excellence Functions
export const createAestheticStyles = (palette: AestheticPalette) => ({
  // Hero Section with Epic Presence
  hero: {
    background: `linear-gradient(135deg, 
      ${palette.colors.sky[50]} 0%, 
      ${palette.colors.growth[50]} 50%, 
      ${palette.colors.passion[50]} 100%)`,
    padding: `${palette.spacing['5xl']} ${palette.spacing.xl}`,
    textAlign: 'center' as const,
    position: 'relative' as const,
    overflow: 'hidden' as const,
    
    // Animated background elements
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle at 20% 80%, ${palette.colors.sky[100]} 0%, transparent 50%),
                   radial-gradient(circle at 80% 20%, ${palette.colors.growth[100]} 0%, transparent 50%)`,
      animation: 'float 20s ease-in-out infinite',
    }
  },
  
  // Card with Personality
  card: {
    background: 'white',
    borderRadius: palette.hierarchy.radius.xl,
    boxShadow: palette.hierarchy.elevation.gentle,
    padding: palette.spacing.xl,
    transition: `all ${palette.motion.duration.smooth} ${palette.motion.easing.gentle}`,
    border: `1px solid ${palette.colors.earth[100]}`,
    
    '&:hover': {
      transform: 'translateY(-4px) scale(1.02)',
      boxShadow: palette.hierarchy.elevation.powerful,
      borderColor: palette.colors.growth[200],
    }
  },
  
  // Button with Emotional Impact
  button: {
    primary: {
      background: `linear-gradient(135deg, ${palette.colors.passion[500]} 0%, ${palette.colors.passion[600]} 100%)`,
      color: 'white',
      padding: `${palette.spacing.md} ${palette.spacing.xl}`,
      borderRadius: palette.hierarchy.radius.lg,
      border: 'none',
      fontWeight: palette.typography.primary.weights.semibold,
      fontSize: palette.typography.primary.sizes.base,
      cursor: 'pointer',
      transition: `all ${palette.motion.duration.quick} ${palette.motion.easing.bouncy}`,
      boxShadow: palette.hierarchy.elevation.soft,
      
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: palette.hierarchy.elevation.strong,
        background: `linear-gradient(135deg, ${palette.colors.passion[600]} 0%, ${palette.colors.passion[700]} 100%)`,
      },
      
      '&:active': {
        transform: 'translateY(0)',
        transition: `all ${palette.motion.duration.instant} ${palette.motion.easing.gentle}`,
      }
    },
    
    secondary: {
      background: 'transparent',
      color: palette.colors.earth[700],
      padding: `${palette.spacing.md} ${palette.spacing.xl}`,
      borderRadius: palette.hierarchy.radius.lg,
      border: `2px solid ${palette.colors.earth[300]}`,
      fontWeight: palette.typography.primary.weights.medium,
      fontSize: palette.typography.primary.sizes.base,
      cursor: 'pointer',
      transition: `all ${palette.motion.duration.smooth} ${palette.motion.easing.gentle}`,
      
      '&:hover': {
        borderColor: palette.colors.growth[400],
        color: palette.colors.growth[700],
        background: palette.colors.growth[50],
        transform: 'translateY(-1px)',
      }
    }
  },
  
  // Typography with Personality
  text: {
    hero: {
      fontSize: palette.typography.primary.sizes['7xl'],
      fontWeight: palette.typography.display.weights.bold,
      lineHeight: palette.typography.primary.lineHeights.tight,
      background: `linear-gradient(135deg, ${palette.colors.earth[900]} 0%, ${palette.colors.sky[700]} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: palette.spacing.xl,
    },
    
    subtitle: {
      fontSize: palette.typography.primary.sizes.xl,
      fontWeight: palette.typography.primary.weights.medium,
      lineHeight: palette.typography.primary.lineHeights.relaxed,
      color: palette.colors.earth[600],
      marginBottom: palette.spacing['2xl'],
    },
    
    body: {
      fontSize: palette.typography.primary.sizes.base,
      fontWeight: palette.typography.primary.weights.regular,
      lineHeight: palette.typography.primary.lineHeights.normal,
      color: palette.colors.earth[700],
    }
  }
});

// Animation Keyframes for Storytelling
export const aestheticKeyframes = {
  float: {
    '0%, 100%': {
      transform: 'translateY(0px) rotate(0deg)',
    },
    '50%': {
      transform: 'translateY(-20px) rotate(180deg)',
    }
  },
  
  sparkle: {
    '0%, 100%': {
      opacity: 0,
      transform: 'scale(0) rotate(0deg)',
    },
    '50%': {
      opacity: 1,
      transform: 'scale(1) rotate(180deg)',
    }
  },
  
  grow: {
    '0%': {
      transform: 'scale(0.8) translateY(20px)',
      opacity: 0,
    },
    '100%': {
      transform: 'scale(1) translateY(0)',
      opacity: 1,
    }
  },
  
  breathe: {
    '0%, 100%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.05)',
    }
  }
};

// Aesthetic Excellence Utilities
export const aestheticUtils = {
  // Create emotional gradients
  createGradient: (colors: string[], direction: string = '135deg') => 
    `linear-gradient(${direction}, ${colors.join(', ')})`,
  
  // Add personality to shadows
  createShadow: (color: string, intensity: number = 0.1) => 
    `0 10px 25px -5px ${color}${Math.round(intensity * 255).toString(16).padStart(2, '0')}`,
  
  // Generate responsive spacing
  responsiveSpacing: (base: string, multiplier: number = 1) => 
    `calc(${base} * ${multiplier})`,
  
  // Create animated backgrounds
  createAnimatedBackground: (colors: string[]) => ({
    background: `linear-gradient(-45deg, ${colors.join(', ')})`,
    backgroundSize: '400% 400%',
    animation: 'gradientShift 15s ease infinite',
  })
};

// Export the complete aesthetic system
export const PuredgeOSAestheticSystem: AestheticPalette = {
  colors: {
    passion: {
      50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5',
      400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c',
      800: '#991b1b', 900: '#7f1d1d'
    },
    growth: {
      50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac',
      400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d',
      800: '#166534', 900: '#14532d'
    },
    earth: {
      50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1',
      400: '#a8a29e', 500: '#78716c', 600: '#57534e', 700: '#44403c',
      800: '#292524', 900: '#1c1917'
    },
    sky: {
      50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
      400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
      800: '#1e40af', 900: '#1e3a8a'
    }
  },
  typography: {
    primary: {
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800 },
      sizes: {
        xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem',
        '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem', '5xl': '3rem',
        '6xl': '3.75rem', '7xl': '4.5rem'
      },
      lineHeights: { tight: 1.1, snug: 1.25, normal: 1.5, relaxed: 1.75, loose: 2 }
    },
    display: {
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      weights: { light: 200, regular: 300, medium: 400, semibold: 500, bold: 600 }
    }
  },
  spacing: {
    xs: '0.25rem', sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2rem',
    '2xl': '3rem', '3xl': '4rem', '4xl': '6rem', '5xl': '8rem'
  },
  motion: {
    easing: {
      gentle: 'cubic-bezier(0.4, 0, 0.2, 1)',
      smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      bouncy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      dramatic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      ethereal: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
    },
    duration: {
      instant: '50ms', quick: '150ms', smooth: '300ms', gentle: '500ms',
      dramatic: '750ms', epic: '1000ms'
    },
    sequences: {
      entrance: { stagger: 100, delay: 200 },
      interaction: { hover: 200, active: 100, focus: 150 },
      exit: { fade: 300, slide: 400 }
    }
  },
  hierarchy: {
    elevation: {
      ground: '0 0 0 0 rgba(0, 0, 0, 0)',
      whisper: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      soft: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      gentle: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      strong: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      powerful: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      epic: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    radius: {
      none: '0', sm: '0.125rem', base: '0.25rem', md: '0.375rem',
      lg: '0.5rem', xl: '0.75rem', '2xl': '1rem', '3xl': '1.5rem', full: '9999px'
    }
  },
  metaphors: {
    elements: {
      leaf: '🌿', seed: '🌱', sun: '☀️', water: '💧', earth: '🌍', tree: '🌳'
    },
    emotions: {
      joy: '✨', peace: '🕊️', strength: '💪', wisdom: '🧠', love: '💝', hope: '🌈'
    }
  }
};

export default PuredgeOSAestheticSystem;
