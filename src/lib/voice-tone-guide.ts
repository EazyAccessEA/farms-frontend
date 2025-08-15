// PuredgeOS V1: Voice and Tone Guide
// Apple-level content quality standards for emotional resonance and clarity

export const VoiceAndToneGuide = {
  // 🎯 Core Voice Principles
  voice: {
    primary: "Warm, trustworthy, and passionate about fresh food",
    secondary: "Expert but approachable, like a knowledgeable friend",
    personality: "Enthusiastic about connecting people with local farmers"
  },

  // 🎨 Tone Guidelines by Context
  tone: {
    // Hero and Main CTAs - Emotional and compelling
    hero: {
      description: "Inspiring and emotionally resonant",
      examples: [
        "Fresh Food, Delivered Daily",
        "Taste the Difference",
        "Ready to Taste the Difference?",
        "Connect directly with local farmers"
      ],
      rules: [
        "Lead with emotional benefit",
        "Use active, present tense",
        "Create urgency without pressure",
        "Focus on sensory experiences"
      ]
    },

    // Feature Descriptions - Clear value with emotional hooks
    features: {
      description: "Clear benefits with emotional resonance",
      examples: [
        "Fresh-picked produce that actually tastes like it should",
        "From farm to your door in hours, not days",
        "Meet the people growing your food",
        "Cut out the middleman. You pay the farmer directly"
      ],
      rules: [
        "Start with the benefit, not the feature",
        "Use sensory language (taste, smell, feel)",
        "Connect to personal experience",
        "Avoid corporate jargon"
      ]
    },

    // Trust Building - Confident and reassuring
    trust: {
      description: "Confident and reassuring without being boastful",
      examples: [
        "Verified Farmers Only",
        "Every farmer is verified and personally known to us",
        "Keep your money in your community",
        "Reduce food miles and packaging waste"
      ],
      rules: [
        "Use specific, verifiable claims",
        "Focus on community and relationships",
        "Emphasize transparency and direct connection",
        "Avoid generic marketing language"
      ]
    },

    // CTAs - Clear action with emotional motivation
    ctas: {
      description: "Clear action with emotional motivation",
      examples: [
        "Find Farms Near You",
        "View Fresh Produce",
        "Start Shopping",
        "Become a Farmer"
      ],
      rules: [
        "Use action verbs that create movement",
        "Include emotional motivation",
        "Be specific about the outcome",
        "Avoid generic terms like 'Learn More'"
      ]
    },

    // Error Messages - Helpful and encouraging
    errors: {
      description: "Helpful and encouraging, never blaming",
      examples: [
        "We're having trouble loading the farms right now. Please try again in a moment.",
        "That farm isn't available right now, but we have many other great options nearby.",
        "Something went wrong, but we're on it. Please try again."
      ],
      rules: [
        "Acknowledge the problem",
        "Provide a solution or alternative",
        "Use warm, human language",
        "Never blame the user"
      ]
    },

    // Success Messages - Celebratory and clear
    success: {
      description: "Celebratory and clear about next steps",
      examples: [
        "Perfect! Your order is confirmed and will be delivered fresh from the farm.",
        "Welcome! You're now connected to local farmers in your area.",
        "Great choice! Your fresh produce is on its way."
      ],
      rules: [
        "Celebrate the success",
        "Be specific about what happened",
        "Provide clear next steps",
        "Use positive, energetic language"
      ]
    },

    // Loading States - Engaging and informative
    loading: {
      description: "Engaging and informative, not just waiting",
      examples: [
        "Finding the freshest farms near you...",
        "Connecting you with local farmers...",
        "Loading fresh produce options...",
        "Preparing your farm-to-table experience..."
      ],
      rules: [
        "Explain what's happening",
        "Use engaging, active language",
        "Connect to the user's goal",
        "Keep it brief but informative"
      ]
    }
  },

  // 🚫 Banned Phrases and Words
  banned: {
    phrases: [
      "Learn more",
      "Click here",
      "Discover more",
      "Explore our platform",
      "Experience the future",
      "Cutting-edge technology",
      "Revolutionary solution",
      "Best-in-class",
      "World-class",
      "Premium experience"
    ],
    words: [
      "leverage",
      "utilize",
      "optimize",
      "synergy",
      "paradigm",
      "ecosystem",
      "seamless",
      "robust",
      "scalable",
      "innovative"
    ]
  },

  // ✅ Approved Language Patterns
  approved: {
    // Emotional triggers
    emotional: [
      "taste the difference",
      "fresh from the farm",
      "know your farmer",
      "support local",
      "farm-to-table",
      "delivered daily",
      "hours of harvest",
      "direct from the source"
    ],

    // Sensory language
    sensory: [
      "fresh-picked",
      "crisp",
      "juicy",
      "ripe",
      "aromatic",
      "vibrant",
      "delicious",
      "nutritious"
    ],

    // Community language
    community: [
      "local farmers",
      "your community",
      "neighborhood farms",
      "family farms",
      "local families",
      "community support",
      "direct connection"
    ],

    // Trust language
    trust: [
      "verified",
      "personally known",
      "transparent",
      "direct payment",
      "no middlemen",
      "authentic",
      "genuine",
      "trusted"
    ]
  },

  // 📝 Microcopy Patterns
  microcopy: {
    // Button text patterns
    buttons: {
      primary: "Action + Benefit",
      secondary: "Alternative Action",
      examples: {
        primary: ["Find Farms Near You", "Start Shopping", "View Fresh Produce"],
        secondary: ["Join as Farmer", "Learn About Farming", "Contact Support"]
      }
    },

    // Form labels and placeholders
    forms: {
      labels: "Clear, specific labels",
      placeholders: "Helpful examples",
      examples: {
        labels: ["Your Location", "Delivery Address", "Phone Number"],
        placeholders: ["Enter your postcode", "123 Main Street", "07123 456789"]
      }
    },

    // Empty states
    empty: {
      pattern: "Acknowledge + Explain + Action",
      examples: [
        "No farms found nearby yet. We're working to connect with more local farmers in your area. Check back soon!",
        "No produce available right now. This farm is between harvests. Try another farm or check back later."
      ]
    },

    // Confirmation messages
    confirmation: {
      pattern: "Success + Specific Outcome + Next Step",
      examples: [
        "Order confirmed! Your fresh produce will be delivered tomorrow. We'll send you a text when it's on its way.",
        "Profile updated! Your preferences are saved and will help us find the best farms for you."
      ]
    }
  },

  // 🎯 Content Hierarchy Rules
  hierarchy: {
    // Headlines (H1, H2, H3)
    headlines: {
      h1: "Emotional benefit + Clear value",
      h2: "Specific benefit or feature",
      h3: "Detailed aspect or sub-feature"
    },

    // Body text
    body: {
      pattern: "Benefit + Explanation + Emotional connection",
      length: "2-3 sentences maximum",
      focus: "User outcome, not product features"
    },

    // CTAs
    cta: {
      pattern: "Action verb + Specific outcome + Emotional motivation",
      length: "3-5 words maximum",
      focus: "Clear action with emotional hook"
    }
  },

  // 🔄 Content Review Checklist
  reviewChecklist: [
    "Does this answer 'Why am I here?' in <2 seconds?",
    "Does it lead with emotional benefit?",
    "Is it written in human, not corporate language?",
    "Does it use sensory or emotional language?",
    "Is it specific and verifiable?",
    "Does it avoid banned phrases?",
    "Does it follow the appropriate tone for context?",
    "Does it provide clear next steps?",
    "Does it build trust and confidence?",
    "Would a 5-year-old understand the main point?"
  ]
};

// 🎨 Helper Functions
export const getToneForContext = (context: keyof typeof VoiceAndToneGuide.tone) => {
  return VoiceAndToneGuide.tone[context];
};

export const validateContent = (content: string): { isValid: boolean; issues: string[] } => {
  const issues: string[] = [];
  
  // Check for banned phrases
  VoiceAndToneGuide.banned.phrases.forEach(phrase => {
    if (content.toLowerCase().includes(phrase.toLowerCase())) {
      issues.push(`Contains banned phrase: "${phrase}"`);
    }
  });

  // Check for banned words
  VoiceAndToneGuide.banned.words.forEach(word => {
    if (content.toLowerCase().includes(word.toLowerCase())) {
      issues.push(`Contains banned word: "${word}"`);
    }
  });

  // Check length for headlines
  if (content.length > 60) {
    issues.push("Headline too long (max 60 characters)");
  }

  return {
    isValid: issues.length === 0,
    issues
  };
};

export const generateCTA = (action: string, outcome: string, emotion?: string): string => {
  const base = `${action} ${outcome}`;
  return emotion ? `${base} ${emotion}` : base;
};

export default VoiceAndToneGuide;
