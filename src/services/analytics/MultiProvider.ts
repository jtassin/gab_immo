import { AnalyticsProvider, AnalyticsEvent, PageView } from './types';

// Provider composite qui envoie les événements à plusieurs providers
export class MultiProvider implements AnalyticsProvider {
  private providers: AnalyticsProvider[];

  constructor(providers: AnalyticsProvider[]) {
    this.providers = providers;
  }

  trackEvent(event: AnalyticsEvent): void {
    this.providers.forEach((provider) => {
      try {
        provider.trackEvent(event);
      } catch (error) {
        console.error('Error tracking event in provider:', error);
      }
    });
  }

  trackPageView(pageView: PageView): void {
    this.providers.forEach((provider) => {
      try {
        provider.trackPageView(pageView);
      } catch (error) {
        console.error('Error tracking page view in provider:', error);
      }
    });
  }

  trackCTA(ctaName: string, location: string): void {
    this.providers.forEach((provider) => {
      try {
        provider.trackCTA(ctaName, location);
      } catch (error) {
        console.error('Error tracking CTA in provider:', error);
      }
    });
  }

  trackNeighborhood(neighborhood: string, action: 'view' | 'click'): void {
    this.providers.forEach((provider) => {
      try {
        provider.trackNeighborhood(neighborhood, action);
      } catch (error) {
        console.error('Error tracking neighborhood in provider:', error);
      }
    });
  }

  trackModal(modalType: string, action: 'open' | 'close'): void {
    this.providers.forEach((provider) => {
      try {
        provider.trackModal(modalType, action);
      } catch (error) {
        console.error('Error tracking modal in provider:', error);
      }
    });
  }

  trackSocialMedia(platform: string, action: 'click'): void {
    this.providers.forEach((provider) => {
      try {
        provider.trackSocialMedia(platform, action);
      } catch (error) {
        console.error('Error tracking social media in provider:', error);
      }
    });
  }

  trackListingsClick(location: string): void {
    this.providers.forEach((provider) => {
      try {
        provider.trackListingsClick(location);
      } catch (error) {
        console.error('Error tracking listings click in provider:', error);
      }
    });
  }

  trackReview(action: 'view' | 'click', reviewId?: number): void {
    this.providers.forEach((provider) => {
      try {
        provider.trackReview(action, reviewId);
      } catch (error) {
        console.error('Error tracking review in provider:', error);
      }
    });
  }

  trackSectionScroll(sectionName: string): void {
    this.providers.forEach((provider) => {
      try {
        provider.trackSectionScroll(sectionName);
      } catch (error) {
        console.error('Error tracking section scroll in provider:', error);
      }
    });
  }
}

