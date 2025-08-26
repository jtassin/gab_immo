"use client";

import { useEffect, useRef } from 'react';
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

interface GA4TrackerProps {
  children: React.ReactNode;
}

// Composant pour tracker automatiquement les interactions
export const GA4Tracker: React.FC<GA4TrackerProps> = ({ children }) => {
  const { trackPageView, trackSectionScroll } = useGoogleAnalytics();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Tracker la vue de page initiale
    trackPageView({
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
              trackSectionScroll(sectionId);
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
  }, [trackPageView, trackSectionScroll]);

  return <>{children}</>;
};

// Composant pour tracker les clics sur les liens internes
export const TrackedLink: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ href, children, className, onClick }) => {
  const { trackEvent } = useGoogleAnalytics();

  const handleClick = () => {
    // Tracker le clic sur le lien
    trackEvent({
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
  const { trackCTA } = useGoogleAnalytics();

  const handleClick = () => {
    // Tracker le clic sur le CTA
    trackCTA(ctaName, location);

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
  const { trackNeighborhood } = useGoogleAnalytics();

  const trackNeighborhoodView = (neighborhood: string) => {
    trackNeighborhood(neighborhood, 'view');
  };

  const trackNeighborhoodClick = (neighborhood: string) => {
    trackNeighborhood(neighborhood, 'click');
  };

  return {
    trackNeighborhoodView,
    trackNeighborhoodClick,
  };
};
