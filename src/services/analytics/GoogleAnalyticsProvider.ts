import { AnalyticsProvider, AnalyticsEvent, PageView } from './types';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Implémentation Google Analytics 4
export class GoogleAnalyticsProvider implements AnalyticsProvider {
  private readonly gaId: string;

  constructor(gaId: string) {
    this.gaId = gaId;
  }

  trackEvent(event: AnalyticsEvent): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
      console.log('GA4 Event tracked:', event);
    }
  }

  trackPageView(pageView: PageView): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', this.gaId, {
        page_title: pageView.page_title,
        page_location: pageView.page_location,
        page_path: pageView.page_path,
      });
      console.log('GA4 Page view tracked:', pageView);
    }
  }

  trackCTA(ctaName: string, location: string): void {
    this.trackEvent({
      action: 'cta_click',
      category: 'engagement',
      label: `${ctaName}_${location}`,
    });
  }

  trackNeighborhood(neighborhood: string, action: 'view' | 'click'): void {
    this.trackEvent({
      action: `neighborhood_${action}`,
      category: 'content',
      label: neighborhood,
    });
  }

  trackModal(modalType: string, action: 'open' | 'close'): void {
    this.trackEvent({
      action: `modal_${action}`,
      category: 'engagement',
      label: modalType,
    });
  }

  trackSocialMedia(platform: string, action: 'click'): void {
    this.trackEvent({
      action: `social_${action}`,
      category: 'engagement',
      label: platform,
    });
  }

  trackReview(action: 'view' | 'click', reviewId?: number): void {
    this.trackEvent({
      action: `review_${action}`,
      category: 'content',
      label: reviewId ? `review_${reviewId}` : 'all_reviews',
    });
  }

  trackSectionScroll(sectionName: string): void {
    this.trackEvent({
      action: 'section_scroll',
      category: 'engagement',
      label: sectionName,
    });
  }
}

