"use client";

import { useEffect, useRef } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';

interface GA4TrackerProps {
  children: React.ReactNode;
}

// Composant pour tracker automatiquement les interactions
export const GA4Tracker: React.FC<GA4TrackerProps> = ({ children }) => {
  const analytics = useAnalytics();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Tracker la vue de page initiale
    analytics.trackPageView({
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });

    // Observer les sections pour tracker le scroll
    const sections = document.querySelectorAll('section[id], div[id]');
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
              analytics.trackSectionScroll(sectionId);
            }
          }
        });
      },
      {
        threshold: 0.5, // Déclenche quand 50% de la section est visible
        rootMargin: '-10% 0px -10% 0px', // Déclenche un peu avant
      }
    );

    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [analytics]);

  return <>{children}</>;
};

// Composant pour tracker les clics sur les liens internes
export const TrackedLink: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ href, children, className, onClick }) => {
  const analytics = useAnalytics();

  const handleClick = () => {
    // Tracker le clic sur le lien
    analytics.trackEvent({
      action: 'internal_link_click',
      category: 'navigation',
      label: href,
    });

    // Appeler le onClick personnalisé s'il existe
    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

// Composant pour tracker les boutons CTA
export const TrackedButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ctaName: string;
  location: string;
}> = ({ children, onClick, className, ctaName, location }) => {
  const analytics = useAnalytics();

  const handleClick = () => {
    // Tracker le clic sur le CTA
    analytics.trackCTA(ctaName, location);

    // Appeler le onClick personnalisé s'il existe
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

// Hook pour tracker les interactions avec les quartiers
export const useNeighborhoodTracking = () => {
  const analytics = useAnalytics();

  const trackNeighborhoodView = (neighborhood: string) => {
    analytics.trackNeighborhood(neighborhood, 'view');
  };

  const trackNeighborhoodClick = (neighborhood: string) => {
    analytics.trackNeighborhood(neighborhood, 'click');
  };

  return {
    trackNeighborhoodView,
    trackNeighborhoodClick,
  };
};
