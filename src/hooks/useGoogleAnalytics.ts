import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Types pour les événements GA4
interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface GAPageView {
  page_title: string;
  page_location: string;
  page_path: string;
}

// Hook personnalisé pour Google Analytics
export const useGoogleAnalytics = () => {
  // Initialisation de GA4
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      // GA4 est déjà initialisé via @next/third-parties
      console.log('Google Analytics 4 initialisé');
    }
  }, []);

  // Fonction pour tracker les événements
  const trackEvent = (event: GAEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
      console.log('GA4 Event tracked:', event);
    }
  };

  // Fonction pour tracker les vues de page
  const trackPageView = (pageView: GAPageView) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-BYEZFSGM8G', {
        page_title: pageView.page_title,
        page_location: pageView.page_location,
        page_path: pageView.page_path,
      });
      console.log('GA4 Page view tracked:', pageView);
    }
  };

  // Fonction pour tracker les clics sur les CTA
  const trackCTA = (ctaName: string, location: string) => {
    trackEvent({
      action: 'cta_click',
      category: 'engagement',
      label: `${ctaName}_${location}`,
    });
  };

  // Fonction pour tracker les interactions avec les quartiers
  const trackNeighborhood = (neighborhood: string, action: 'view' | 'click') => {
    trackEvent({
      action: `neighborhood_${action}`,
      category: 'content',
      label: neighborhood,
    });
  };

  // Fonction pour tracker les ouvertures de modal
  const trackModal = (modalType: string, action: 'open' | 'close') => {
    trackEvent({
      action: `modal_${action}`,
      category: 'engagement',
      label: modalType,
    });
  };

  // Fonction pour tracker les clics sur les réseaux sociaux
  const trackSocialMedia = (platform: string, action: 'click') => {
    trackEvent({
      action: `social_${action}`,
      category: 'engagement',
      label: platform,
    });
  };

  // Fonction pour tracker les interactions avec les avis
  const trackReview = (action: 'view' | 'click', reviewId?: number) => {
    trackEvent({
      action: `review_${action}`,
      category: 'content',
      label: reviewId ? `review_${reviewId}` : 'all_reviews',
    });
  };

  // Fonction pour tracker les scrolls de section
  const trackSectionScroll = (sectionName: string) => {
    trackEvent({
      action: 'section_scroll',
      category: 'engagement',
      label: sectionName,
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackCTA,
    trackNeighborhood,
    trackModal,
    trackSocialMedia,
    trackReview,
    trackSectionScroll,
  };
};
