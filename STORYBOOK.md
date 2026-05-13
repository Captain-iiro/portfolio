# Storybook - Portfolio Captain-iiro

## 🚀 Démarrage Rapide

### Installation et Lancement

```bash
# Installer les dépendances
npm install

# Lancer Storybook en mode développement
npm run storybook

# Build de Storybook pour la production
npm run build-storybook
```

## 📚 Structure des Stories

### Composants Documentés

#### Navigation

- **Navbar** : Barre de navigation responsive avec menu hamburger
  - `Default` : Navigation standard
  - `MenuOpen` : Menu mobile ouvert
  - `OnAboutPage` : Navigation sur la page About

#### Sections Principales

- **Hero** : Section d'accueil avec présentation

  - `Default` : Section complète
  - `TextFocus` : Focus sur le contenu textuel
  - `IllustrationFocus` : Focus sur l'illustration

- **Projects** : Section des projets

  - `Default` : Projets standard
  - `EmptyProjects` : État sans projets
  - `TitleFocus` : Focus sur le titre

- **Skills** : Section des compétences

  - `Default` : Toutes les compétences
  - `FewSkills` : Compétences réduites
  - `SkillsFocus` : Focus sur les badges

- **Contact** : Section de contact

  - `Default` : Contact complet
  - `TitleFocus` : Focus sur le titre
  - `ButtonFocus` : Focus sur le bouton

- **Footer** : Pied de page
  - `Default` : Footer complet
  - `LogoFocus` : Focus sur le logo
  - `SocialLinksFocus` : Focus sur les liens sociaux

#### Pages Complètes

- **HomePage** : Page d'accueil complète
- **AboutPage** : Page About

#### États et Interactions

- **States** : États différents (loading, error, empty)
- **Interactive** : Tests automatisés et interactions

## 🛠️ Fonctionnalités Avancées

### Viewports Responsive

- **Mobile** : 375px (iPhone SE)
- **Tablet** : 768px (iPad)
- **Desktop** : 1200px (Desktop standard)

### Backgrounds

- **Light** : Fond clair (par défaut)
- **Dark** : Fond sombre

### Tests Automatisés

- Tests d'interactions utilisateur
- Vérification d'accessibilité
- Tests cross-browser

### Addons Disponibles

- **A11y** : Tests d'accessibilité
- **Viewport** : Tests responsive
- **Backgrounds** : Changement de fond
- **Measure** : Mesures d'éléments
- **Outline** : Contours des éléments
- **Controls** : Contrôles interactifs

## 🎨 Personnalisation

### Thème

Le thème Storybook est configuré en mode sombre par défaut. Vous pouvez le modifier dans `.storybook/manager.js`.

### Styles Globaux

Les styles globaux sont importés automatiquement :

- `src/_reset.scss` : Reset CSS
- `src/App.scss` : Styles principaux

### Configuration

- **Main** : `.storybook/main.js` - Configuration principale
- **Preview** : `.storybook/preview.js` - Configuration d'affichage
- **Manager** : `.storybook/manager.js` - Configuration de l'interface

## 📖 Bonnes Pratiques

### Documentation

1. Chaque story doit avoir une description claire
2. Utiliser les paramètres `docs` pour la documentation
3. Documenter les props et les interactions

### Tests

1. Créer des stories interactives pour les tests
2. Utiliser les tests d'accessibilité
3. Tester sur tous les viewports

### Organisation

1. Grouper les stories par composant
2. Utiliser des noms descriptifs
3. Créer des variantes pour différents états

## 🔧 Développement

### Ajouter une Nouvelle Story

1. Créer un fichier `.stories.jsx` dans `src/stories/`
2. Importer le composant
3. Définir les stories avec différentes variantes
4. Ajouter la documentation

```jsx
import React from "react";
import MonComposant from "../components/MonComposant";

export default {
  title: "Components/MonComposant",
  component: MonComposant,
  parameters: {
    docs: {
      description: {
        component: "Description du composant",
      },
    },
  },
};

export const Default = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Description de cette story",
      },
    },
  },
};
```

### Tests Interactifs

```jsx
import { within, userEvent } from "@storybook/test";
import { expect } from "@storybook/test";

export const InteractiveTest = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
  },
};
```

## 🚀 Déploiement

### Build pour Production

```bash
npm run build-storybook
```

### Intégration Continue

Le projet inclut une configuration pour les tests automatisés avec Playwright.

## 📞 Support

Pour toute question sur Storybook dans ce projet :

- Consulter la documentation officielle de Storybook
- Vérifier les exemples dans `src/stories/`
- Tester les interactions dans l'interface Storybook
