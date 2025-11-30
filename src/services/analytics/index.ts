import { AnalyticsProvider } from './types';
import { GoogleAnalyticsProvider } from './GoogleAnalyticsProvider';
import { AmplitudeProvider } from './AmplitudeProvider';
import { MultiProvider } from './MultiProvider';

// Factory pour créer le provider d'analytics
export const createAnalyticsProvider = (): AnalyticsProvider => {
  const providers: AnalyticsProvider[] = [];

  // Google Analytics 4
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-BYEZFSGM8G';
  providers.push(new GoogleAnalyticsProvider(gaId));

  // Amplitude
  const amplitudeApiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY || 'f4fe0394260842bec6c53020713fbc40';
  providers.push(new AmplitudeProvider(amplitudeApiKey));

  // Retourner un MultiProvider qui envoie les événements à tous les providers
  return new MultiProvider(providers);
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

