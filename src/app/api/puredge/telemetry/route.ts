import { NextRequest, NextResponse } from 'next/server';

// PuredgeOS 2.0: Privacy-Safe Telemetry Endpoint
// GDPR/UK GDPR compliant with data minimization and retention controls

interface TelemetryEvent {
  event: string;
  timestamp: number;
  session_id: string;
  route: string;
  props: Record<string, unknown>;
  privacy_level: 'pseudonymous' | 'anonymous';
}

// In-memory storage for demo (in production, use proper database with TTL)
const telemetryStore: TelemetryEvent[] = [];
const MAX_EVENTS = 1000; // Retention limit
const RETENTION_DAYS = 30;

export async function POST(request: NextRequest) {
  try {
    // PuredgeOS 2.0: Privacy Controls
    const privacyLevel = request.headers.get('X-Puredge-Privacy-Level');
    // const userAgent = request.headers.get('user-agent'); // Unused for now
    const doNotTrack = request.headers.get('dnt');

    // Respect Do Not Track
    if (doNotTrack === '1') {
      return NextResponse.json({ status: 'privacy_respected' }, { status: 200 });
    }

    // Validate privacy level
    if (privacyLevel !== 'pseudonymous' && privacyLevel !== 'anonymous') {
      return NextResponse.json({ error: 'invalid_privacy_level' }, { status: 400 });
    }

    const event: TelemetryEvent = await request.json();

    // PuredgeOS 2.0: Data Validation and Sanitization
    if (!isValidTelemetryEvent(event)) {
      return NextResponse.json({ error: 'invalid_event_format' }, { status: 400 });
    }

    // PuredgeOS 2.0: Data Minimization
    const sanitizedEvent = sanitizeEvent(event, privacyLevel);

    // PuredgeOS 2.0: Retention Control
    cleanupOldEvents();

    // PuredgeOS 2.0: Storage Limit Enforcement
    if (telemetryStore.length >= MAX_EVENTS) {
      telemetryStore.shift(); // Remove oldest event
    }

    // Store event
    telemetryStore.push(sanitizedEvent);

    // PuredgeOS 2.0: Real-time Quality Gates
    const qualityCheck = await checkQualityGates(sanitizedEvent);
    if (!qualityCheck.passed) {
      console.warn('PuredgeOS 2.0: Quality gate failed:', qualityCheck.reasons);
    }

    return NextResponse.json({ 
      status: 'success',
      quality_check: qualityCheck,
      events_stored: telemetryStore.length
    });

  } catch (error) {
    console.error('PuredgeOS telemetry error:', error);
    return NextResponse.json({ error: 'internal_error' }, { status: 500 });
  }
}

// PuredgeOS 2.0: Data Validation
function isValidTelemetryEvent(event: unknown): event is TelemetryEvent {
  return (
    event !== null &&
    typeof event === 'object' &&
    'event' in event &&
    typeof (event as TelemetryEvent).event === 'string' &&
    'timestamp' in event &&
    typeof (event as TelemetryEvent).timestamp === 'number' &&
    'session_id' in event &&
    typeof (event as TelemetryEvent).session_id === 'string' &&
    'route' in event &&
    typeof (event as TelemetryEvent).route === 'string' &&
    'props' in event &&
    typeof (event as TelemetryEvent).props === 'object' &&
    'privacy_level' in event &&
    ((event as TelemetryEvent).privacy_level === 'pseudonymous' || (event as TelemetryEvent).privacy_level === 'anonymous')
  );
}

// PuredgeOS 2.0: Data Sanitization
function sanitizeEvent(event: TelemetryEvent, privacyLevel: string): TelemetryEvent {
  const sanitized = { ...event };

  // Remove potentially identifying information
  delete sanitized.props.user_id;
  delete sanitized.props.email;
  delete sanitized.props.name;
  delete sanitized.props.ip_address;
  delete sanitized.props.device_id;
  delete sanitized.props.fingerprint;

  // Anonymize session ID if needed
  if (privacyLevel === 'anonymous') {
    sanitized.session_id = `anon_${event.session_id.substring(0, 8)}`;
  }

  // Round sensitive metrics
  if (typeof sanitized.props.glanceability_ms === 'number') {
    sanitized.props.glanceability_ms = Math.round(sanitized.props.glanceability_ms / 100) * 100;
  }

  if (typeof sanitized.props.lcp_ms === 'number') {
    sanitized.props.lcp_ms = Math.round(sanitized.props.lcp_ms / 100) * 100;
  }

  return sanitized;
}

// PuredgeOS 2.0: Retention Control
function cleanupOldEvents() {
  const cutoffTime = Date.now() - (RETENTION_DAYS * 24 * 60 * 60 * 1000);
  const initialLength = telemetryStore.length;
  
  // Remove events older than retention period
  for (let i = telemetryStore.length - 1; i >= 0; i--) {
    if (telemetryStore[i].timestamp < cutoffTime) {
      telemetryStore.splice(i, 1);
    }
  }

  if (initialLength !== telemetryStore.length) {
    console.log(`PuredgeOS 2.0: Cleaned up ${initialLength - telemetryStore.length} old events`);
  }
}

// PuredgeOS 2.0: Quality Gates
async function checkQualityGates(event: TelemetryEvent) {
  const reasons: string[] = [];

  // Clarity Gates
  if (typeof event.props.glanceability_ms === 'number' && event.props.glanceability_ms > 400) {
    reasons.push('glanceability_exceeds_400ms');
  }

  if (typeof event.props.error_rate === 'number' && event.props.error_rate > 0.02) {
    reasons.push('error_rate_exceeds_2_percent');
  }

  if (typeof event.props.cognitive_load_score === 'number' && event.props.cognitive_load_score > 3.2) {
    reasons.push('cognitive_load_exceeds_threshold');
  }

  // Performance Gates
  if (typeof event.props.lcp_ms === 'number' && event.props.lcp_ms > 1800) {
    reasons.push('lcp_exceeds_1800ms');
  }

  if (typeof event.props.inp_ms === 'number' && event.props.inp_ms > 200) {
    reasons.push('inp_exceeds_200ms');
  }

  if (typeof event.props.cls_score === 'number' && event.props.cls_score > 0.1) {
    reasons.push('cls_exceeds_0_1');
  }

  // Immersion Gates
  if (typeof event.props.wow_moment_rate === 'number' && event.props.wow_moment_rate < 0.6) {
    reasons.push('wow_moment_rate_below_60_percent');
  }

  if (typeof event.props.emotional_engagement === 'number' && event.props.emotional_engagement < 0.8) {
    reasons.push('emotional_engagement_below_80_percent');
  }

  return {
    passed: reasons.length === 0,
    reasons,
    event_type: event.event,
    route: event.route
  };
}

// PuredgeOS 2.0: Analytics Endpoint (for dashboards)
export async function GET(request: NextRequest) {
  try {
    // PuredgeOS 2.0: Access Control
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
    }

    // In production, validate the token properly
    const token = authHeader.substring(7);
    if (token !== process.env.PUREDGE_API_KEY) {
      return NextResponse.json({ error: 'invalid_token' }, { status: 401 });
    }

    // PuredgeOS 2.0: Aggregated Analytics
    const analytics = generateAnalytics();

    return NextResponse.json({
      status: 'success',
      analytics,
      total_events: telemetryStore.length,
      retention_days: RETENTION_DAYS
    });

  } catch (error) {
    console.error('PuredgeOS analytics error:', error);
    return NextResponse.json({ error: 'internal_error' }, { status: 500 });
  }
}

// PuredgeOS 2.0: Analytics Generation
function generateAnalytics() {
  const now = Date.now();
  const last24Hours = now - (24 * 60 * 60 * 1000);
  const last7Days = now - (7 * 24 * 60 * 60 * 1000);

  const recentEvents = telemetryStore.filter(e => e.timestamp > last7Days);
  const todayEvents = telemetryStore.filter(e => e.timestamp > last24Hours);

  // Clarity Metrics
  const clarityEvents = recentEvents.filter(e => e.event === 'ux.clarity_sample.v1');
  const avgGlanceability = clarityEvents.length > 0 
    ? clarityEvents.reduce((sum, e) => sum + (typeof e.props.glanceability_ms === 'number' ? e.props.glanceability_ms : 0), 0) / clarityEvents.length 
    : 0;
  const avgErrorRate = clarityEvents.length > 0 
    ? clarityEvents.reduce((sum, e) => sum + (typeof e.props.error_rate === 'number' ? e.props.error_rate : 0), 0) / clarityEvents.length 
    : 0;

  // Performance Metrics
  const perfEvents = recentEvents.filter(e => e.event === 'ux.performance_sample.v1');
  const avgLCP = perfEvents.length > 0 
    ? perfEvents.reduce((sum, e) => sum + (typeof e.props.lcp_ms === 'number' ? e.props.lcp_ms : 0), 0) / perfEvents.length 
    : 0;
  const avgINP = perfEvents.length > 0 
    ? perfEvents.reduce((sum, e) => sum + (typeof e.props.inp_ms === 'number' ? e.props.inp_ms : 0), 0) / perfEvents.length 
    : 0;

  // Immersion Metrics
  const immersionEvents = recentEvents.filter(e => e.event === 'ux.immersion_sample.v1');
  const avgWowMomentRate = immersionEvents.length > 0 
    ? immersionEvents.reduce((sum, e) => sum + (typeof e.props.wow_moment_rate === 'number' ? e.props.wow_moment_rate : 0), 0) / immersionEvents.length 
    : 0;
  const avgEmotionalEngagement = immersionEvents.length > 0 
    ? immersionEvents.reduce((sum, e) => sum + (typeof e.props.emotional_engagement === 'number' ? e.props.emotional_engagement : 0), 0) / immersionEvents.length 
    : 0;

  return {
    time_periods: {
      last_24_hours: todayEvents.length,
      last_7_days: recentEvents.length,
      total_retained: telemetryStore.length
    },
    clarity_metrics: {
      avg_glanceability_ms: Math.round(avgGlanceability),
      avg_error_rate: Math.round(avgErrorRate * 100) / 100,
      events_count: clarityEvents.length
    },
    performance_metrics: {
      avg_lcp_ms: Math.round(avgLCP),
      avg_inp_ms: Math.round(avgINP),
      events_count: perfEvents.length
    },
    immersion_metrics: {
      avg_wow_moment_rate: Math.round(avgWowMomentRate * 100) / 100,
      avg_emotional_engagement: Math.round(avgEmotionalEngagement * 100) / 100,
      events_count: immersionEvents.length
    },
    quality_gates: {
      clarity_passed: avgGlanceability <= 400 && avgErrorRate <= 0.02,
      performance_passed: avgLCP <= 1800 && avgINP <= 200,
      immersion_passed: avgWowMomentRate >= 0.6 && avgEmotionalEngagement >= 0.8
    }
  };
}
