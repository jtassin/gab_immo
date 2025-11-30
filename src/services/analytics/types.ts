// Types pour les événements analytics
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface PageView {
  page_title: string;
  page_location: string;
  page_path: string;
}

// Interface pour les providers d'analytics
export interface AnalyticsProvider {
  trackEvent(event: AnalyticsEvent): void;
  trackPageView(pageView: PageView): void;
  trackCTA(ctaName: string, location: string): void;
  trackNeighborhood(neighborhood: string, action: 'view' | 'click'): void;
  trackModal(modalType: string, action: 'open' | 'close'): void;
  trackSocialMedia(platform: string, action: 'click'): void;
  trackReview(action: 'view' | 'click', reviewId?: number): void;
  trackSectionScroll(sectionName: string): void;
}

