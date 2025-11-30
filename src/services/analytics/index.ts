import { AnalyticsProvider } from './types';
import { GoogleAnalyticsProvider } from './GoogleAnalyticsProvider';

// Factory pour créer le provider d'analytics
export const createAnalyticsProvider = (): AnalyticsProvider => {
  // Pour l'instant, on utilise uniquement Google Analytics
  // Facilement extensible pour ajouter d'autres providers (Amplitude, etc.)
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-BYEZFSGM8G';
  return new GoogleAnalyticsProvider(gaId);
};

// Instance singleton du provider
let analyticsProviderInstance: AnalyticsProvider | null = null;

export const getAnalyticsProvider = (): AnalyticsProvider => {
  if (!analyticsProviderInstance) {
    analyticsProviderInstance = createAnalyticsProvider();
  }
  return analyticsProviderInstance;
};

// Export des types
export type { AnalyticsProvider, AnalyticsEvent, PageView } from './types';

