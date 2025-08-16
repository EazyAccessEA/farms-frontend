/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🚀 SILICON VALLEY S-TIER+ COLOR SYSTEM
      colors: {
        // 🎯 PRIMARY PALETTE - Premium tech blue for trust and innovation
        primary: {
          50: '#F0F9FF',   // Pure sky whisper
          100: '#E0F2FE',  // Gentle morning light
          200: '#BAE6FD',  // Soft cloud reflection
          300: '#7DD3FC',  // Clear summer sky
          400: '#38BDF8',  // Vibrant ocean blue
          500: '#0EA5E9',  // Premium tech blue (main brand)
          600: '#0284C7',  // Deep trust blue
          700: '#0369A1',  // Professional depth
          800: '#075985',  // Enterprise confidence
          900: '#0C4A6E',  // Authority and power
        },

        // 🌱 SECONDARY PALETTE - Growth and sustainability
        secondary: {
          50: '#F0FDF4',   // Fresh spring morning
          100: '#DCFCE7',  // Gentle growth light
          200: '#BBF7D0',  // Soft leaf whisper
          300: '#86EFAC',  // Vibrant new growth
          400: '#4ADE80',  // Healthy plant green
          500: '#22C55E',  // Premium growth green
          600: '#16A34A',  // Mature success green
          700: '#15803D',  // Deep forest wisdom
          800: '#166534',  // Sustainable future
          900: '#14532D',  // Nature's authority
        },

        // 🔥 ACCENT PALETTE - Energy and passion
        accent: {
          50: '#FFF7ED',   // Warm sunset glow
          100: '#FFEDD5',  // Gentle fire light
          200: '#FED7AA',  // Soft flame whisper
          300: '#FDBA74',  // Vibrant energy
          400: '#FB923C',  // Dynamic passion
          500: '#F97316',  // Premium innovation orange
          600: '#EA580C',  // Bold action orange
          700: '#C2410C',  // Deep determination
          800: '#9A3412',  // Strong commitment
          900: '#7C2D12',  // Unwavering focus
        },

        // 🎨 NEUTRAL PALETTE - Premium sophistication
        neutral: {
          50: '#FAFAFA',   // Pure luxury white
          100: '#F5F5F5',  // Soft premium gray
          200: '#E5E5E5',  // Gentle elegance
          300: '#D4D4D4',  // Refined subtlety
          400: '#A3A3A3',  // Sophisticated medium
          500: '#737373',  // Premium neutral
          600: '#525252',  // Deep sophistication
          700: '#404040',  // Rich depth
          800: '#262626',  // Premium dark
          900: '#171717',  // Pure authority
          950: '#0A0A0A',  // Ultimate luxury
        },

        // 🌟 SUCCESS PALETTE - Achievement and trust
        success: {
          50: '#F0FDF4',   // Success whisper
          100: '#DCFCE7',  // Gentle achievement
          200: '#BBF7D0',  // Soft victory
          300: '#86EFAC',  // Clear success
          400: '#4ADE80',  // Vibrant achievement
          500: '#22C55E',  // Premium success green
          600: '#16A34A',  // Deep trust
          700: '#15803D',  // Mature success
          800: '#166534',  // Sustainable achievement
          900: '#14532D',  // Authority success
        },

        // ⚠️ WARNING PALETTE - Attention and guidance
        warning: {
          50: '#FFFBEB',   // Gentle attention
          100: '#FEF3C7',  // Soft warning
          200: '#FDE68A',  // Clear notice
          300: '#FCD34D',  // Vibrant alert
          400: '#FBBF24',  // Dynamic warning
          500: '#F59E0B',  // Premium warning amber
          600: '#D97706',  // Deep attention
          700: '#B45309',  // Strong warning
          800: '#92400E',  // Important notice
          900: '#78350F',  // Critical attention
        },

        // ❌ ERROR PALETTE - Guidance without anxiety
        error: {
          50: '#FEF2F2',   // Gentle error
          100: '#FEE2E2',  // Soft correction
          200: '#FECACA',  // Clear guidance
          300: '#FCA5A5',  // Vibrant alert
          400: '#F87171',  // Dynamic error
          500: '#EF4444',  // Premium error red
          600: '#DC2626',  // Deep correction
          700: '#B91C1C',  // Strong error
          800: '#991B1B',  // Important correction
          900: '#7F1D1D',  // Critical error
        },

        // 💡 INFO PALETTE - Clarity and guidance
        info: {
          50: '#EFF6FF',   // Gentle information
          100: '#DBEAFE',  // Soft guidance
          200: '#BFDBFE',  // Clear info
          300: '#93C5FD',  // Vibrant knowledge
          400: '#60A5FA',  // Dynamic information
          500: '#3B82F6',  // Premium info blue
          600: '#2563EB',  // Deep guidance
          700: '#1D4ED8',  // Strong information
          800: '#1E40AF',  // Important guidance
          900: '#1E3A8A',  // Critical information
        },

        // 🌙 DARK MODE PALETTE - Premium dark experience
        dark: {
          50: '#0A0A0A',   // Pure dark luxury
          100: '#171717',  // Deep premium dark
          200: '#262626',  // Rich dark depth
          300: '#404040',  // Sophisticated dark
          400: '#525252',  // Medium dark
          500: '#737373',  // Premium dark neutral
          600: '#A3A3A3',  // Light dark text
          700: '#D4D4D4',  // Bright dark text
          800: '#E5E5E5',  // Pure dark text
          900: '#F5F5F5',  // Ultimate dark contrast
        },

        // 🎭 EMOTIONAL TRIGGERS - Color psychology mapping
        emotion: {
          trust: '#0EA5E9',      // Premium tech blue
          growth: '#22C55E',     // Premium growth green
          innovation: '#F97316', // Premium innovation orange
          luxury: '#171717',     // Deep premium dark
          success: '#22C55E',    // Premium success green
          warning: '#F59E0B',    // Premium warning amber
          error: '#EF4444',      // Premium error red
          info: '#3B82F6',       // Premium info blue
          calm: '#F0F9FF',       // Pure sky whisper
          energy: '#F97316',     // Premium innovation orange
        },

        // 🎨 SEMANTIC MAPPING - Context-aware colors
        semantic: {
          text: {
            primary: '#171717',    // Deep premium dark
            secondary: '#525252',  // Sophisticated medium
            tertiary: '#A3A3A3',  // Refined subtlety
            inverse: '#FAFAFA',   // Pure luxury white
            disabled: '#D4D4D4',  // Gentle elegance
          },
          background: {
            primary: '#FFFFFF',   // Pure luxury white
            secondary: '#FAFAFA', // Soft premium gray
            tertiary: '#F5F5F5', // Gentle elegance
            inverse: '#171717',   // Deep premium dark
            overlay: 'rgba(23, 23, 23, 0.8)', // Premium dark overlay
          },
          border: {
            primary: '#E5E5E5',   // Gentle elegance
            secondary: '#D4D4D4', // Refined subtlety
            focus: '#0EA5E9',     // Premium tech blue
            error: '#EF4444',     // Premium error red
            success: '#22C55E',   // Premium success green
          },
          interactive: {
            hover: '#F0F9FF',     // Pure sky whisper
            active: '#E0F2FE',    // Gentle morning light
            focus: '#BAE6FD',     // Soft cloud reflection
            disabled: '#F5F5F5',  // Soft premium gray
          },
        },

        // 🎪 ELITE SILICON VALLEY BRAND IDENTITY
        // Obsidian Graphite - Primary brand color (intelligent, technical, quietly dominant)
        obsidian: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#80868B',
          700: '#5F6368',
          800: '#3C4043',
          900: '#1E1F23',  // Primary brand color
          950: '#0F1012',
        },
        
        // Serum Teal - Accent color (advanced medical-grade precision and innovation)
        teal: {
          50: '#E6FFFD',
          100: '#B3FFF8',
          200: '#80FFF3',
          300: '#4DFFEE',
          400: '#1AFFE9',
          500: '#00E6D1',
          600: '#00C2B2',  // Primary accent color
          700: '#009E93',
          800: '#007A74',
          900: '#005655',
          950: '#003736',
        },
        
        // Sandstone Fog - Secondary color (warm greige for grounding)
        fog: {
          50: '#FDFCFB',
          100: '#FAF9F7',
          200: '#F5F3F0',
          300: '#EFEDE9',
          400: '#E9E7E3',
          500: '#E4E2DD',  // Primary secondary color
          600: '#D8D6D1',
          700: '#C5C3BE',
          800: '#B2B0AB',
          900: '#9F9D98',
          950: '#8C8A85',
        },
        
        // Solar Lime - Highlight color (energetic but not aggressive)
        lime: {
          50: '#F7FFE6',
          100: '#EDFFCC',
          200: '#E3FFB3',
          300: '#D9FF99',
          400: '#CFFF80',
          500: '#D4FF4F',  // Primary highlight color
          600: '#B8E645',
          700: '#9CCC3B',
          800: '#80B231',
          900: '#649827',
          950: '#487E1D',
        },
        
        // Midnight Navy - Overlay color (depth and sophistication)
        midnight: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#1A365D',
          950: '#121D2B',  // Primary overlay color
        },

        // 🌟 LEGACY PuredgeOS Aesthetic System compatibility
        sky: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        growth: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        passion: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        earth: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
      },

      // 🎨 ELITE SILICON VALLEY TYPOGRAPHY SYSTEM
      fontFamily: {
        // Inter - Body text (highly legible, subtle personality, trusted by Google, Linear, Vercel)
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        
        // Satoshi - Headlines (ultra-clean neo-grotesk with modern proportions, Stripe × Apple vibes)
        display: ['Satoshi', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        
        // Elite monospace for code and technical elements
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
        
        // Brand-specific font families
        headline: ['Satoshi', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        brand: ['Satoshi', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },

      // 📏 PREMIUM SPACING SYSTEM
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
        '4xl': '8rem',
        '5xl': '12rem',
      },

      // 🎯 PREMIUM ELEVATION SYSTEM
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'strong': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'intense': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'extreme': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'premium': '0 0 0 1px rgba(14, 165, 233, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
        'glow-strong': '0 0 40px rgba(14, 165, 233, 0.5)',
      },

      // 🌟 PREMIUM BLUR SYSTEM
      backdropBlur: {
        'soft': '4px',
        'medium': '8px',
        'strong': '12px',
        'intense': '16px',
      },

      // 🎭 PREMIUM ANIMATION SYSTEM
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'breathe': 'breathe 15s ease-in-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'grow': 'grow 0.6s ease-out',
        'magnetic': 'magnetic 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },

      // 🎬 PREMIUM KEYFRAMES
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' },
        },
        grow: {
          '0%': { transform: 'scale(0.8) translateY(20px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
        magnetic: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--magnetic-x), var(--magnetic-y))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },

      // 🎨 ELITE SILICON VALLEY GRADIENT SYSTEM
      backgroundImage: {
        // Premium gradients
        'gradient-primary': 'linear-gradient(135deg, #0EA5E9 0%, #22C55E 100%)',
        'gradient-innovation': 'linear-gradient(135deg, #F97316 0%, #0EA5E9 100%)',
        'gradient-trust': 'linear-gradient(135deg, #22C55E 0%, #3B82F6 100%)',
        'gradient-luxury': 'linear-gradient(135deg, #171717 0%, #0EA5E9 100%)',
        'gradient-success': 'linear-gradient(135deg, #22C55E 0%, #F97316 100%)',
        'gradient-shimmer': 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.3) 50%, transparent 75%)',
        
        // Elite Silicon Valley brand gradients
        'gradient-obsidian': 'linear-gradient(135deg, #1E1F23 0%, #3C4043 100%)',
        'gradient-teal': 'linear-gradient(135deg, #00C2B2 0%, #00E6D1 100%)',
        'gradient-fog': 'linear-gradient(135deg, #E4E2DD 0%, #F5F3F0 100%)',
        'gradient-lime': 'linear-gradient(135deg, #D4FF4F 0%, #B8E645 100%)',
        'gradient-midnight': 'linear-gradient(135deg, #121D2B 0%, #243B53 100%)',
        
        // Elite brand combinations
        'gradient-elite-primary': 'linear-gradient(135deg, #1E1F23 0%, #00C2B2 100%)',
        'gradient-elite-accent': 'linear-gradient(135deg, #00C2B2 0%, #D4FF4F 100%)',
        'gradient-elite-sophisticated': 'linear-gradient(135deg, #121D2B 0%, #1E1F23 100%)',
        'gradient-elite-innovation': 'linear-gradient(135deg, #D4FF4F 0%, #00C2B2 100%)',
        'gradient-elite-trust': 'linear-gradient(135deg, #E4E2DD 0%, #1E1F23 100%)',
      },

      // 🎯 PREMIUM BORDER RADIUS SYSTEM
      borderRadius: {
        'xs': '0.25rem',
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },

      // 🌟 PREMIUM TRANSITION SYSTEM
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
        'slower': '700ms',
        'slowest': '1000ms',
      },

      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'gentle': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
