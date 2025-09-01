# Règles Analytics - Tracking Obligatoire

## 🚨 RÈGLE CRITIQUE : TOUJOURS TRACKER LES INTERACTIONS

### 1. Éléments à tracker OBLIGATOIREMENT :
- ✅ **Tous les liens externes** (onClick avec trackSocialMedia)
- ✅ **Tous les boutons CTA** (TrackedButton ou onClick)
- ✅ **Toutes les interactions utilisateur** (clics, survols, modals)
- ✅ **Tous les éléments interactifs** (cartes, images cliquables, etc.)

### 2. PROCÉDURE OBLIGATOIRE :
**AVANT d'ajouter du tracking, TOUJOURS proposer les valeurs à l'utilisateur :**

```
Je propose de tracker [ÉLÉMENT] avec :
- Action: '[valeur]'
- Category: '[valeur]' 
- Label: '[valeur]'

Êtes-vous d'accord avec ces valeurs ?
```

### 3. Fonctions de tracking disponibles :
- `trackSocialMedia(platform, action)` → pour liens externes
- `trackCTA(ctaName, location)` → pour boutons CTA
- `trackModal(modalType, action)` → pour modals
- `trackNeighborhood(neighborhood, action)` → pour quartiers
- `trackReview(action, reviewId)` → pour avis
- `trackEvent(event)` → pour événements personnalisés

### 4. Exemples de valeurs :
**Liens externes :**
- Action: `social_click`
- Category: `engagement`
- Label: `[nom-du-site]` (ex: `cesar-brutus-website`)

**Boutons CTA :**
- Action: `cta_click`
- Category: `engagement`
- Label: `[nom-bouton]_[localisation]`

**Modals :**
- Action: `modal_open` / `modal_close`
- Category: `engagement`
- Label: `[type-modal]`

### 5. JAMAIS oublier le tracking - c'est critique pour l'analytics !

---
*Règles mises à jour le : $(date)*
