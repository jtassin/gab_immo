# 📊 Google Analytics 4 - Guide de Tracking

## 🎯 Vue d'ensemble

Ce site utilise Google Analytics 4 (GA4) pour tracker les interactions utilisateur et mesurer les performances. Le système est intégré via `@next/third-parties/google` et utilise des composants personnalisés pour automatiser le tracking.

## 🚀 Configuration

### ID de suivi
- **GA4 ID** : `G-BYEZFSGM8G`
- **Intégration** : Via `@next/third-parties/google` dans `layout.tsx`

### Composants de tracking
- **Hook principal** : `useGoogleAnalytics()` dans `src/hooks/useGoogleAnalytics.ts`
- **Composants trackés** : `GA4Tracker`, `TrackedButton`, `TrackedLink` dans `src/components/GA4Tracker.tsx`

## 📈 Événements trackés automatiquement

### 1. Vues de page
- **Déclencheur** : Chargement de la page
- **Données** : Titre, URL, chemin
- **Fonction** : `trackPageView()`

### 2. Scroll des sections
- **Déclencheur** : Visibilité des sections (50% visible)
- **Données** : ID de la section
- **Fonction** : `trackSectionScroll()`
- **Sections trackées** : `#accueil`, `#agent`, `#chiffres`, `#quartiers`, `#avis`, `#contact`

## 🎯 Événements trackés manuellement

### 1. Clics sur les CTA (Call-to-Action)
```tsx
<TrackedButton 
  onClick={handleClick}
  ctaName="Estimation Gratuite"
  location="Hero"
>
  Estimation Gratuite
</TrackedButton>
```

**Événement GA4** :
- **Action** : `cta_click`
- **Catégorie** : `engagement`
- **Label** : `Estimation Gratuite_Hero`

### 2. Interactions avec les quartiers
```tsx
<div onMouseEnter={() => trackNeighborhoodView('Vaise')}>
  {/* Contenu du quartier */}
</div>
```

**Événements GA4** :
- **Action** : `neighborhood_view`
- **Catégorie** : `content`
- **Label** : Nom du quartier (ex: `Vaise`, `Valmy`, etc.)

### 3. Ouverture/Fermeture des modales
```tsx
// Ouverture
onClick={() => trackModal('contact', 'open')}

// Fermeture
onClick={() => trackModal('contact', 'close')}
```

**Événements GA4** :
- **Action** : `modal_open` / `modal_close`
- **Catégorie** : `engagement`
- **Label** : Type de modale (ex: `contact`)

### 4. Clics sur les réseaux sociaux
```tsx
<a onClick={() => trackSocialMedia('linkedin', 'click')}>
  {/* Logo LinkedIn */}
</a>
```

**Événements GA4** :
- **Action** : `social_click`
- **Catégorie** : `engagement`
- **Label** : Plateforme (ex: `linkedin`, `facebook`)

### 5. Interactions avec les avis
```tsx
<div onMouseEnter={() => trackReview('view', avis.id)}>
  {/* Avis client */}
</div>
```

**Événements GA4** :
- **Action** : `review_view`
- **Catégorie** : `content`
- **Label** : ID de l'avis ou `all_reviews`

### 6. Navigation interne
```tsx
<TrackedLink href="#quartiers">
  Quartiers
</TrackedLink>
```

**Événements GA4** :
- **Action** : `internal_link_click`
- **Catégorie** : `navigation`
- **Label** : URL de destination (ex: `#quartiers`)

## 🔧 Utilisation avancée

### Hook personnalisé
```tsx
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

export default function MonComposant() {
  const { trackEvent, trackCTA } = useGoogleAnalytics();
  
  const handleCustomAction = () => {
    trackEvent({
      action: 'custom_action',
      category: 'custom_category',
      label: 'custom_label',
      value: 100
    });
  };
  
  return (
    <button onClick={handleCustomAction}>
      Action personnalisée
    </button>
  );
}
```

### Événements personnalisés
```tsx
const { trackEvent } = useGoogleAnalytics();

trackEvent({
  action: 'form_submit',
  category: 'conversion',
  label: 'contact_form',
  value: 1
});
```

## 📊 Structure des données GA4

### Événements standards
- **event_name** : Nom de l'événement (ex: `cta_click`)
- **event_category** : Catégorie de l'événement
- **event_label** : Label spécifique
- **value** : Valeur numérique (optionnelle)

### Paramètres personnalisés
- **location** : Emplacement dans l'interface
- **cta_name** : Nom du bouton CTA
- **neighborhood** : Nom du quartier
- **modal_type** : Type de modale
- **platform** : Plateforme sociale
- **review_id** : Identifiant de l'avis

## 🎨 Personnalisation

### Ajouter un nouveau type d'événement
1. **Modifier le hook** `useGoogleAnalytics.ts`
2. **Ajouter la fonction** de tracking
3. **Utiliser dans les composants**

### Exemple d'ajout
```tsx
// Dans useGoogleAnalytics.ts
const trackFormInteraction = (formType: string, action: 'start' | 'complete' | 'error') => {
  trackEvent({
    action: `form_${action}`,
    category: 'conversion',
    label: formType,
  });
};

// Dans le composant
const { trackFormInteraction } = useGoogleAnalytics();
trackFormInteraction('contact', 'start');
```

## 📱 Responsive et mobile

### Menu mobile
- **Tracking** : Identique au menu desktop
- **Composants** : `TrackedLink` avec `onClick` pour fermeture
- **Événements** : Navigation interne trackée

### Interactions tactiles
- **onMouseEnter** : Remplacé par `onTouchStart` sur mobile
- **Événements** : Identiques aux événements desktop

## 🔍 Debug et test

### Console de développement
- **Logs** : Tous les événements sont loggés dans la console
- **Format** : `GA4 Event tracked: {action, category, label, value}`

### Google Analytics
- **Real-time** : Vérifier les événements en temps réel
- **DebugView** : Mode debug pour le développement
- **Reports** : Rapports d'événements personnalisés

### Test des événements
1. **Ouvrir la console** du navigateur
2. **Interagir** avec les éléments trackés
3. **Vérifier** les logs GA4
4. **Confirmer** dans GA4 Real-time

## 📋 Checklist d'implémentation

### ✅ Éléments trackés
- [ ] Vues de page
- [ ] Scroll des sections
- [ ] Clics sur les CTA
- [ ] Interactions avec les quartiers
- [ ] Ouverture/fermeture des modales
- [ ] Clics sur les réseaux sociaux
- [ ] Interactions avec les avis
- [ ] Navigation interne

### ✅ Composants utilisés
- [ ] `GA4Tracker` (wrapper principal)
- [ ] `TrackedButton` (boutons CTA)
- [ ] `TrackedLink` (liens de navigation)
- [ ] Hooks de tracking (quartiers, avis, etc.)

### ✅ Configuration
- [ ] ID GA4 correct
- [ ] Composants importés
- [ ] Hooks initialisés
- [ ] Événements testés

## 🚨 Dépannage

### Problèmes courants
1. **Événements non visibles** : Vérifier la console et GA4 Real-time
2. **Erreurs de hook** : S'assurer que les hooks sont appelés au niveau racine
3. **Tracking manquant** : Vérifier l'import des composants
4. **GA4 non initialisé** : Vérifier l'ID et l'intégration

### Solutions
- **Console** : Vérifier les erreurs JavaScript
- **Network** : Vérifier les appels GA4
- **GA4** : Vérifier la configuration et les filtres
- **Cache** : Vider le cache du navigateur

## 📚 Ressources

- **Documentation GA4** : [developers.google.com/analytics](https://developers.google.com/analytics)
- **Next.js Third Parties** : [nextjs.org/docs](https://nextjs.org/docs)
- **React Hooks** : [react.dev/reference/react](https://react.dev/reference/react)
