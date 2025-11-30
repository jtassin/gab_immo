import { useEffect } from 'react';
import { getAnalyticsProvider } from '../services/analytics';
import type { AnalyticsProvider } from '../services/analytics/types';

// Hook abstrait pour utiliser l'analytics
export const useAnalytics = (): AnalyticsProvider => {
  const provider = getAnalyticsProvider();

  useEffect(() => {
    // Initialisation si nécessaire
    if (typeof window !== 'undefined') {
      console.log('Analytics provider initialized');
    }
  }, []);

  return provider;
};

