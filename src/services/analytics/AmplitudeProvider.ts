import * as amplitude from '@amplitude/analytics-browser';
import { AnalyticsProvider, AnalyticsEvent, PageView } from './types';

// Implémentation Amplitude
export class AmplitudeProvider implements AnalyticsProvider {
  private initialized: boolean = false;

  constructor(apiKey: string) {
    if (typeof window !== 'undefined' && !this.initialized) {
      amplitude.init(apiKey, {
        autocapture: {
          attribution: true,
          fileDownloads: true,
          formInteractions: true,
          pageViews: true,
          sessions: true,
          elementInteractions: true,
          networkTracking: true,
          webVitals: true,
          frustrationInteractions: true,
        },
        serverZone: 'EU',
      });
      this.initialized = true;
      console.log('Amplitude initialized');
    }
  }

  trackEvent(event: AnalyticsEvent): void {
    if (typeof window !== 'undefined' && this.initialized) {
      amplitude.track(event.action, {
        category: event.category,
        label: event.label,
        value: event.value,
      });
      console.log('Amplitude Event tracked:', event);
    }
  }

  trackPageView(pageView: PageView): void {
    if (typeof window !== 'undefined' && this.initialized) {
      amplitude.track('page_view', {
        page_title: pageView.page_title,
        page_location: pageView.page_location,
        page_path: pageView.page_path,
      });
      console.log('Amplitude Page view tracked:', pageView);
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

