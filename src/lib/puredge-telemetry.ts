// PuredgeOS 2.0: Operational Telemetry System
// Privacy-safe, auditable, and measurable UX tracking

export interface PuredgeTelemetryEvent {
  event: string;
  timestamp: number;
  session_id: string;
  route: string;
  props: Record<string, unknown>;
  privacy_level: 'pseudonymous' | 'anonymous';
}

export interface ClarityMetrics {
  glanceability_ms: number;
  error_rate: number;
  reading_grade_level: number;
  contrast_min: number;
  focus_order_valid: boolean;
  motion_pref_respected: boolean;
  cognitive_load_score: number;
}

export interface ImmersionMetrics {
  wow_moment_rate: number;
  emotional_engagement: number;
  conversion_lift: number;
  interaction_depth: number;
  time_on_page: number;
}

export interface PerformanceMetrics {
  lcp_ms: number;
  inp_ms: number;
  cls_score: number;
  fid_ms: number;
  bundle_size_kb: number;
}

class PuredgeTelemetry {
  private sessionId: string;
  private config: Record<string, unknown> = {};
  private events: PuredgeTelemetryEvent[] = [];
  private privacyMode: 'strict' | 'standard' | 'permissive' = 'strict';

  constructor() {
    this.sessionId = this.generatePseudonymousId();
    this.loadConfig();
    this.setupPrivacyMode();
  }

  private generatePseudonymousId(): string {
    // Privacy-safe session ID generation
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2);
    return btoa(`${timestamp}-${random}`).replace(/[^a-zA-Z0-9]/g, '');
  }

  private async loadConfig() {
    try {
      const response = await fetch('/puredge.config.json');
      this.config = await response.json();
    } catch {
      // Fallback to default config
      this.config = {
        telemetry: { enabled: false },
        privacy_mode: 'strict'
      };
    }
  }

  private setupPrivacyMode() {
    // Check for privacy preferences (only on client side)
    if (typeof window !== 'undefined') {
      const privacyPref = localStorage.getItem('puredge:privacy-mode');
      if (privacyPref) {
        this.privacyMode = privacyPref as 'strict' | 'standard' | 'permissive';
      }

      // Respect Do Not Track
      if (navigator.doNotTrack === '1') {
        this.privacyMode = 'strict';
      }
    }
  }

  // PuredgeOS 2.0: Clarity Quantification Engine
  async measureClarity(route: string): Promise<ClarityMetrics> {
    const startTime = performance.now();
    
    // Measure glanceability (time to first meaningful interaction)
    const glanceabilityMs = await this.measureGlanceability();
    
    // Measure cognitive load through interaction complexity
    const cognitiveLoadScore = this.calculateCognitiveLoad();
    
    // Measure accessibility compliance
    const contrastMin = this.measureContrastRatio();
    const focusOrderValid = this.validateFocusOrder();
    const motionPrefRespected = this.checkMotionPreferences();

    // Calculate reading grade level
    const readingGradeLevel = this.calculateReadingLevel();

    // Measure error rate
    const errorRate = this.calculateErrorRate();

    const metrics: ClarityMetrics = {
      glanceability_ms: glanceabilityMs,
      error_rate: errorRate,
      reading_grade_level: readingGradeLevel,
      contrast_min: contrastMin,
      focus_order_valid: focusOrderValid,
      motion_pref_respected: motionPrefRespected,
      cognitive_load_score: cognitiveLoadScore
    };

    // Send telemetry if enabled and privacy allows
    if ((this.config.telemetry as Record<string, unknown>)?.enabled && this.privacyMode !== 'strict') {
      this.sendTelemetry('ux.clarity_sample.v1', {
        route,
        ...metrics,
        measurement_time_ms: performance.now() - startTime
      });
    }

    return metrics;
  }

  // PuredgeOS 2.0: Immersion Calibration Matrix
  async measureImmersion(route: string): Promise<ImmersionMetrics> {
    const startTime = performance.now();

    // Measure wow moment rate through interaction patterns
    const wowMomentRate = this.calculateWowMomentRate();
    
    // Measure emotional engagement through interaction depth
    const emotionalEngagement = this.calculateEmotionalEngagement();
    
    // Measure conversion lift (placeholder for A/B testing)
    const conversionLift = this.calculateConversionLift();
    
    // Measure interaction depth
    const interactionDepth = this.calculateInteractionDepth();
    
    // Measure time on page
    const timeOnPage = this.calculateTimeOnPage();

    const metrics: ImmersionMetrics = {
      wow_moment_rate: wowMomentRate,
      emotional_engagement: emotionalEngagement,
      conversion_lift: conversionLift,
      interaction_depth: interactionDepth,
      time_on_page: timeOnPage
    };

    // Send telemetry if enabled and privacy allows
    if ((this.config.telemetry as Record<string, unknown>)?.enabled && this.privacyMode !== 'strict') {
      this.sendTelemetry('ux.immersion_sample.v1', {
        route,
        ...metrics,
        measurement_time_ms: performance.now() - startTime
      });
    }

    return metrics;
  }

  // PuredgeOS 2.0: Performance Benchmarking
  async measurePerformance(): Promise<PerformanceMetrics> {
    const startTime = performance.now();

    // Get Core Web Vitals
    const lcpMs = await this.measureLCP();
    const inpMs = await this.measureINP();
    const clsScore = await this.measureCLS();
    const fidMs = await this.measureFID();

    // Measure bundle size
    const bundleSizeKb = this.measureBundleSize();

    const metrics: PerformanceMetrics = {
      lcp_ms: lcpMs,
      inp_ms: inpMs,
      cls_score: clsScore,
      fid_ms: fidMs,
      bundle_size_kb: bundleSizeKb
    };

    // Send telemetry if enabled
    if ((this.config.telemetry as Record<string, unknown>)?.enabled) {
      this.sendTelemetry('ux.performance_sample.v1', {
        ...metrics,
        measurement_time_ms: performance.now() - startTime
      });
    }

    return metrics;
  }

  // PuredgeOS 2.0: Operational Measurement Methods
  private async measureGlanceability(): Promise<number> {
    return new Promise((resolve) => {
      const startTime = performance.now();
      
      // Listen for first meaningful interaction
      const handleInteraction = () => {
        const glanceabilityMs = performance.now() - startTime;
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
        resolve(glanceabilityMs);
      };

      document.addEventListener('click', handleInteraction, { once: true });
      document.addEventListener('keydown', handleInteraction, { once: true });

      // Timeout after 10 seconds
      setTimeout(() => resolve(10000), 10000);
    });
  }

  private calculateCognitiveLoad(): number {
    // Calculate cognitive load based on UI complexity
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea').length;
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6').length;
    const visualElements = document.querySelectorAll('img, svg, div[style*="background"]').length;
    
    // Normalize scores
    const elementComplexity = Math.min(interactiveElements / 10, 1);
    const textComplexity = Math.min(textElements / 20, 1);
    const visualComplexity = Math.min(visualElements / 15, 1);
    
    return (elementComplexity + textComplexity + visualComplexity) / 3;
  }

  private measureContrastRatio(): number {
    // Simplified contrast measurement
    // In production, use a proper contrast measurement library
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
    let totalContrast = 0;
    let validElements = 0;

    textElements.forEach((element) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      // Simplified contrast calculation (in production, use proper color contrast library)
      if (color && backgroundColor) {
        totalContrast += 4.5; // Placeholder
        validElements++;
      }
    });

    return validElements > 0 ? totalContrast / validElements : 4.5;
  }

  private validateFocusOrder(): boolean {
    // Check if focus order is logical
    const focusableElements = document.querySelectorAll(
      'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    // Simple validation: check if focusable elements exist and are accessible
    return focusableElements.length > 0;
  }

  private checkMotionPreferences(): boolean {
    // Check if motion preferences are respected
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasAnimations = document.querySelectorAll('[style*="animation"], [style*="transition"]').length > 0;
    
    return !prefersReducedMotion || !hasAnimations;
  }

  private calculateReadingLevel(): number {
    // Simplified reading level calculation
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    let totalWords = 0;
    let totalSentences = 0;

    textElements.forEach((element) => {
      const text = element.textContent || '';
      const words = text.split(/\s+/).length;
      const sentences = text.split(/[.!?]+/).length;
      
      totalWords += words;
      totalSentences += sentences;
    });

    // Simplified Flesch-Kincaid calculation
    return totalSentences > 0 ? (0.39 * (totalWords / totalSentences)) + (11.8 * 0) - 15.59 : 7.0;
  }

  private calculateErrorRate(): number {
    // Track JavaScript errors
    let errorCount = 0;
    const originalError = window.onerror;
    
    window.onerror = (message, source, lineno, colno, error) => {
      errorCount++;
      if (originalError) {
        originalError(message, source, lineno, colno, error);
      }
    };

    // Return error rate (simplified)
    return Math.min(errorCount / 100, 1);
  }

  private calculateWowMomentRate(): number {
    // Measure wow moments through interaction patterns
    const interactions = this.events.filter(e => e.event.includes('interaction')).length;
    const wowInteractions = this.events.filter(e => e.event.includes('wow')).length;
    
    return interactions > 0 ? wowInteractions / interactions : 0.5;
  }

  private calculateEmotionalEngagement(): number {
    // Measure emotional engagement through interaction depth
    const pageViews = this.events.filter(e => e.event === 'page_view').length;
    const interactions = this.events.filter(e => e.event.includes('interaction')).length;
    
    return pageViews > 0 ? Math.min(interactions / pageViews, 1) : 0.5;
  }

  private calculateConversionLift(): number {
    // Placeholder for A/B testing conversion measurement
    return 0.15; // 15% lift placeholder
  }

  private calculateInteractionDepth(): number {
    // Measure how deep users go into the interface
    const uniqueInteractions = new Set(
      this.events
        .filter(e => e.event.includes('interaction'))
        .map(e => e.props?.element_type || 'unknown')
    ).size;
    
    return Math.min(uniqueInteractions / 10, 1);
  }

  private calculateTimeOnPage(): number {
    // Calculate time spent on current page
    const pageStart = this.events.find(e => e.event === 'page_view')?.timestamp || Date.now();
    return (Date.now() - pageStart) / 1000;
  }

  private async measureLCP(): Promise<number> {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          resolve(lcpEntry.startTime);
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } else {
        resolve(1800); // Fallback
      }
    });
  }

  private async measureINP(): Promise<number> {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const inpEntry = entries[entries.length - 1] as PerformanceEntry & { processingStart: number; startTime: number };
          resolve(inpEntry.processingStart - inpEntry.startTime);
        });
        observer.observe({ entryTypes: ['interaction'] });
      } else {
        resolve(200); // Fallback
      }
    });
  }

  private async measureCLS(): Promise<number> {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as PerformanceEntry & { hadRecentInput: boolean }).hadRecentInput) {
              clsValue += (entry as PerformanceEntry & { value: number }).value;
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
        resolve(clsValue);
      } else {
        resolve(0.1); // Fallback
      }
    });
  }

  private async measureFID(): Promise<number> {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries[entries.length - 1] as PerformanceEntry & { processingStart: number; startTime: number };
          resolve(fidEntry.processingStart - fidEntry.startTime);
        });
        observer.observe({ entryTypes: ['first-input'] });
      } else {
        resolve(100); // Fallback
      }
    });
  }

  private measureBundleSize(): number {
    // Estimate bundle size (in production, use webpack bundle analyzer)
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    
    scripts.forEach((script) => {
      const src = script.getAttribute('src');
      if (src && src.includes('_next')) {
        totalSize += 50; // Estimate 50KB per script
      }
    });
    
    return totalSize;
  }

  // PuredgeOS 2.0: Privacy-Safe Telemetry Sending
  private async sendTelemetry(eventName: string, props: Record<string, unknown>) {
    if (!(this.config.telemetry as Record<string, unknown>)?.enabled || this.privacyMode === 'strict') {
      return;
    }

    const event: PuredgeTelemetryEvent = {
      event: eventName,
      timestamp: Date.now(),
      session_id: this.sessionId,
      route: window.location.pathname,
      props: this.sanitizeProps(props),
      privacy_level: this.privacyMode === 'permissive' ? 'pseudonymous' : 'anonymous'
    };

    this.events.push(event);

    // Send to endpoint with privacy controls
    try {
      await fetch((this.config.telemetry as Record<string, unknown>)?.endpoint as string || '/api/puredge/telemetry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Puredge-Privacy-Level': event.privacy_level
        },
        body: JSON.stringify(event)
      });
    } catch (error) {
      // Fail silently in production
      console.warn('PuredgeOS telemetry failed to send:', error);
    }
  }

  private sanitizeProps(props: Record<string, unknown>): Record<string, unknown> {
    // Remove any potentially identifying information
    const sanitized = { ...props };
    
    // Remove any props that might contain PII
    delete sanitized.user_id;
    delete sanitized.email;
    delete sanitized.name;
    delete sanitized.ip_address;
    
    return sanitized;
  }

  // PuredgeOS 2.0: Public API
  public async measureAll(route: string) {
    const [clarity, immersion, performance] = await Promise.all([
      this.measureClarity(route),
      this.measureImmersion(route),
      this.measurePerformance()
    ]);

    return { clarity, immersion, performance };
  }

  public setPrivacyMode(mode: 'strict' | 'standard' | 'permissive') {
    this.privacyMode = mode;
    if (typeof window !== 'undefined') {
      localStorage.setItem('puredge:privacy-mode', mode);
    }
  }

  public getPrivacyMode() {
    return this.privacyMode;
  }

  public getEvents() {
    return this.events;
  }
}

// Export singleton instance
export const puredgeTelemetry = new PuredgeTelemetry();
