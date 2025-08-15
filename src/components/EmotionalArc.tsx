// PuredgeOS V1: Emotional Arc Component
// Intentional emotional journey from entry to conversion

'use client';

import React, { useState, useEffect, useRef } from 'react';

// 🎭 Emotional Journey Stages
export type EmotionalStage = 
  | 'intrigue'      // Entry - Create curiosity
  | 'discovery'     // Exploration - Build interest
  | 'connection'    // Engagement - Create emotional bond
  | 'confidence'    // Trust - Build confidence
  | 'satisfaction'  // Action - Deliver satisfaction

// 🎨 Emotional Arc Context
interface EmotionalArcContext {
  currentStage: EmotionalStage;
  progress: number;
  isTransitioning: boolean;
  userEngagement: number;
  emotionalMomentum: number;
}

// 🎯 Emotional Arc Provider
export const EmotionalArcProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [arcState, setArcState] = useState<EmotionalArcContext>({
    currentStage: 'intrigue',
    progress: 0,
    isTransitioning: false,
    userEngagement: 0,
    emotionalMomentum: 0
  });

  const updateStage = (newStage: EmotionalStage) => {
    setArcState(prev => ({
      ...prev,
      isTransitioning: true,
      currentStage: newStage
    }));

    // Complete transition after animation
    setTimeout(() => {
      setArcState(prev => ({
        ...prev,
        isTransitioning: false
      }));
    }, 1000);
  };

  const updateProgress = (progress: number) => {
    setArcState(prev => ({
      ...prev,
      progress: Math.max(0, Math.min(100, progress))
    }));
  };

  const updateEngagement = (engagement: number) => {
    setArcState(prev => ({
      ...prev,
      userEngagement: Math.max(0, Math.min(100, engagement))
    }));
  };

  return (
    <EmotionalArcContext.Provider value={{
      ...arcState,
      updateStage,
      updateProgress,
      updateEngagement
    }}>
      {children}
    </EmotionalArcContext.Provider>
  );
};

// 🎭 Emotional Arc Context
const EmotionalArcContext = React.createContext<EmotionalArcContext & {
  updateStage: (stage: EmotionalStage) => void;
  updateProgress: (progress: number) => void;
  updateEngagement: (engagement: number) => void;
}>({
  currentStage: 'intrigue',
  progress: 0,
  isTransitioning: false,
  userEngagement: 0,
  emotionalMomentum: 0,
  updateStage: () => {},
  updateProgress: () => {},
  updateEngagement: () => {}
});

export const useEmotionalArc = () => React.useContext(EmotionalArcContext);

// 🌟 Entry Experience Component (Intrigue & Discovery)
export const EntryExperience: React.FC<{
  onStageComplete: () => void;
  className?: string;
}> = ({ onStageComplete, className = '' }) => {
  const { updateStage, updateProgress } = useEmotionalArc();
  const [isVisible, setIsVisible] = useState(false);
  const [showDiscovery, setShowDiscovery] = useState(false);

  useEffect(() => {
    // Stage 1: Intrigue
    const intrigueTimer = setTimeout(() => {
      setIsVisible(true);
      updateProgress(20);
    }, 500);

    // Stage 2: Discovery
    const discoveryTimer = setTimeout(() => {
      setShowDiscovery(true);
      updateProgress(40);
      updateStage('discovery');
    }, 3000);

    // Stage 3: Complete Entry
    const completeTimer = setTimeout(() => {
      updateProgress(60);
      onStageComplete();
    }, 5000);

    return () => {
      clearTimeout(intrigueTimer);
      clearTimeout(discoveryTimer);
      clearTimeout(completeTimer);
    };
  }, [updateStage, updateProgress, onStageComplete]);

  return (
    <div className={`entry-experience ${className}`}>
      {/* Intrigue Phase */}
      <div className={`intrigue-phase ${isVisible ? 'visible' : ''}`}>
        <div className="mystery-elements">
          <div className="floating-element" style={{ animationDelay: '0s' }}>
            <div className="element-icon">🌱</div>
          </div>
          <div className="floating-element" style={{ animationDelay: '0.5s' }}>
            <div className="element-icon">🍎</div>
          </div>
          <div className="floating-element" style={{ animationDelay: '1s' }}>
            <div className="element-icon">🚚</div>
          </div>
        </div>
        
        <div className="intrigue-text">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Something Fresh is Coming...
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover what makes our experience different
          </p>
        </div>
      </div>

      {/* Discovery Phase */}
      <div className={`discovery-phase ${showDiscovery ? 'visible' : ''}`}>
        <div className="discovery-reveal">
          <div className="reveal-card">
            <div className="card-icon">🏡</div>
            <h3 className="card-title">Local Farms</h3>
            <p className="card-description">Connect directly with farmers in your area</p>
          </div>
          
          <div className="reveal-card">
            <div className="card-icon">⚡</div>
            <h3 className="card-title">Same-Day Fresh</h3>
            <p className="card-description">From farm to your door in hours</p>
          </div>
          
          <div className="reveal-card">
            <div className="card-icon">❤️</div>
            <h3 className="card-title">Community First</h3>
            <p className="card-description">Support local families and businesses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔍 Exploration Phase Component (Curiosity & Engagement)
export const ExplorationPhase: React.FC<{
  farms: Array<any>;
  onFarmSelect: (farm: any) => void;
  onStageComplete: () => void;
  className?: string;
}> = ({ farms, onFarmSelect, onStageComplete, className = '' }) => {
  const { updateStage, updateProgress, updateEngagement } = useEmotionalArc();
  const [exploredFarms, setExploredFarms] = useState<Set<string>>(new Set());
  const [currentFocus, setCurrentFocus] = useState<string | null>(null);

  useEffect(() => {
    updateStage('connection');
    updateProgress(70);
  }, [updateStage, updateProgress]);

  const handleFarmExplore = (farmId: string) => {
    const newExplored = new Set(exploredFarms);
    newExplored.add(farmId);
    setExploredFarms(newExplored);
    
    // Update engagement based on exploration
    const engagement = (newExplored.size / farms.length) * 100;
    updateEngagement(engagement);
    
    // Progress to next stage if enough exploration
    if (engagement >= 60) {
      updateProgress(85);
      onStageComplete();
    }
  };

  const handleFarmFocus = (farmId: string) => {
    setCurrentFocus(farmId);
    onFarmSelect(farms.find(f => f.id === farmId));
  };

  return (
    <div className={`exploration-phase ${className}`}>
      <div className="exploration-header">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Explore Your Local Farms
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Click on farms to discover fresh produce and meet your local farmers
        </p>
        
        {/* Progress Indicator */}
        <div className="exploration-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(exploredFarms.size / farms.length) * 100}%` }}
            />
          </div>
          <span className="progress-text">
            {exploredFarms.size} of {farms.length} farms explored
          </span>
        </div>
      </div>

      <div className="farms-grid">
        {farms.map((farm, index) => (
          <div
            key={farm.id}
            className={`farm-exploration-card ${
              exploredFarms.has(farm.id) ? 'explored' : ''
            } ${currentFocus === farm.id ? 'focused' : ''}`}
            onClick={() => handleFarmExplore(farm.id)}
            onMouseEnter={() => handleFarmFocus(farm.id)}
          >
            <div className="farm-preview">
              <div className="farm-icon">🏡</div>
              <h3 className="farm-name">{farm.name}</h3>
              <p className="farm-location">{farm.postcode}</p>
            </div>
            
            {exploredFarms.has(farm.id) && (
              <div className="exploration-details">
                <div className="detail-item">
                  <span className="detail-label">Products:</span>
                  <span className="detail-value">
                    {farm.produce_tags?.length || 0} types
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value status-active">Active</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// 🤝 Selection Phase Component (Confidence & Trust)
export const SelectionPhase: React.FC<{
  selectedFarm: any;
  onConfirm: () => void;
  onBack: () => void;
  className?: string;
}> = ({ selectedFarm, onConfirm, onBack, className = '' }) => {
  const { updateStage, updateProgress } = useEmotionalArc();
  const [confidenceLevel, setConfidenceLevel] = useState(0);
  const [showTrustSignals, setShowTrustSignals] = useState(false);

  useEffect(() => {
    updateStage('confidence');
    updateProgress(90);
    
    // Build confidence over time
    const confidenceTimer = setTimeout(() => {
      setConfidenceLevel(50);
      setShowTrustSignals(true);
    }, 1000);

    const confidenceTimer2 = setTimeout(() => {
      setConfidenceLevel(100);
    }, 3000);

    return () => {
      clearTimeout(confidenceTimer);
      clearTimeout(confidenceTimer2);
    };
  }, [updateStage, updateProgress]);

  return (
    <div className={`selection-phase ${className}`}>
      <div className="selection-header">
        <button onClick={onBack} className="back-button">
          ← Back to Exploration
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Connect with {selectedFarm?.name}?
        </h2>
      </div>

      <div className="farm-selection-card">
        <div className="farm-info">
          <div className="farm-avatar">🏡</div>
          <div className="farm-details">
            <h3 className="farm-name">{selectedFarm?.name}</h3>
            <p className="farm-address">{selectedFarm?.address}, {selectedFarm?.postcode}</p>
          </div>
        </div>

        {/* Trust Signals */}
        {showTrustSignals && (
          <div className="trust-signals">
            <div className="trust-signal">
              <div className="signal-icon">✅</div>
              <div className="signal-text">
                <h4>Verified Farmer</h4>
                <p>Personally known and verified by our team</p>
              </div>
            </div>
            
            <div className="trust-signal">
              <div className="signal-icon">🌱</div>
              <div className="signal-text">
                <h4>Fresh Daily</h4>
                <p>Produce harvested the same day you order</p>
              </div>
            </div>
            
            <div className="trust-signal">
              <div className="signal-icon">💚</div>
              <div className="signal-text">
                <h4>Community Supported</h4>
                <p>Direct support for local families</p>
              </div>
            </div>
          </div>
        )}

        {/* Confidence Meter */}
        <div className="confidence-meter">
          <div className="meter-label">Your Confidence Level</div>
          <div className="meter-bar">
            <div 
              className="meter-fill"
              style={{ width: `${confidenceLevel}%` }}
            />
          </div>
          <div className="meter-text">
            {confidenceLevel < 50 && "Getting to know this farm..."}
            {confidenceLevel >= 50 && confidenceLevel < 100 && "Building trust..."}
            {confidenceLevel >= 100 && "Ready to connect! 🎉"}
          </div>
        </div>

        <button 
          onClick={onConfirm}
          disabled={confidenceLevel < 100}
          className={`confirm-button ${confidenceLevel >= 100 ? 'ready' : 'disabled'}`}
        >
          {confidenceLevel >= 100 ? 'Connect with Farm' : 'Building Trust...'}
        </button>
      </div>
    </div>
  );
};

// 🎉 Action Phase Component (Satisfaction & Completion)
export const ActionPhase: React.FC<{
  selectedFarm: any;
  onComplete: () => void;
  className?: string;
}> = ({ selectedFarm, onComplete, className = '' }) => {
  const { updateStage, updateProgress } = useEmotionalArc();
  const [satisfactionLevel, setSatisfactionLevel] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    updateStage('satisfaction');
    updateProgress(100);
    
    // Build satisfaction
    const satisfactionTimer = setTimeout(() => {
      setSatisfactionLevel(50);
    }, 1000);

    const celebrationTimer = setTimeout(() => {
      setSatisfactionLevel(100);
      setShowCelebration(true);
    }, 2000);

    return () => {
      clearTimeout(satisfactionTimer);
      clearTimeout(celebrationTimer);
    };
  }, [updateStage, updateProgress]);

  return (
    <div className={`action-phase ${className}`}>
      {showCelebration && (
        <div className="celebration-overlay">
          <div className="celebration-elements">
            <div className="celebration-element">🎉</div>
            <div className="celebration-element">🌱</div>
            <div className="celebration-element">🍎</div>
            <div className="celebration-element">💚</div>
          </div>
        </div>
      )}

      <div className="completion-card">
        <div className="completion-icon">✅</div>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to the Farm Family!
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          You're now connected with {selectedFarm?.name}. Get ready for the freshest produce delivered to your door.
        </p>

        <div className="next-steps">
          <h3 className="text-lg font-semibold mb-3">What's Next?</h3>
          <div className="step-list">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Browse Fresh Produce</h4>
                <p>See what's available from your local farm</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Place Your Order</h4>
                <p>Select your favorite fresh items</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Same-Day Delivery</h4>
                <p>Fresh from farm to your door</p>
              </div>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button onClick={onComplete} className="btn btn-primary">
            Start Shopping
          </button>
          
          <button className="btn btn-secondary">
            Share with Friends
          </button>
        </div>
      </div>
    </div>
  );
};

// 🎭 Main Emotional Arc Controller
export const EmotionalArcController: React.FC<{
  farms: Array<any>;
  onComplete: () => void;
  className?: string;
}> = ({ farms, onComplete, className = '' }) => {
  const [currentPhase, setCurrentPhase] = useState<'entry' | 'exploration' | 'selection' | 'action'>('entry');
  const [selectedFarm, setSelectedFarm] = useState<any>(null);

  const handleEntryComplete = () => {
    setCurrentPhase('exploration');
  };

  const handleExplorationComplete = () => {
    setCurrentPhase('selection');
  };

  const handleSelectionComplete = () => {
    setCurrentPhase('action');
  };

  const handleActionComplete = () => {
    onComplete();
  };

  return (
    <EmotionalArcProvider>
      <div className={`emotional-arc-controller ${className}`}>
        {currentPhase === 'entry' && (
          <EntryExperience onStageComplete={handleEntryComplete} />
        )}
        
        {currentPhase === 'exploration' && (
          <ExplorationPhase
            farms={farms}
            onFarmSelect={setSelectedFarm}
            onStageComplete={handleExplorationComplete}
          />
        )}
        
        {currentPhase === 'selection' && selectedFarm && (
          <SelectionPhase
            selectedFarm={selectedFarm}
            onConfirm={handleSelectionComplete}
            onBack={() => setCurrentPhase('exploration')}
          />
        )}
        
        {currentPhase === 'action' && selectedFarm && (
          <ActionPhase
            selectedFarm={selectedFarm}
            onComplete={handleActionComplete}
          />
        )}
      </div>
    </EmotionalArcProvider>
  );
};

export default {
  EmotionalArcProvider,
  useEmotionalArc,
  EntryExperience,
  ExplorationPhase,
  SelectionPhase,
  ActionPhase,
  EmotionalArcController
};
