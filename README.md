# Test-Arimayi Application

## Prérequis

- Node.js
- npm ou yarn
- Git

# Technologies Utilisées

- Framework Frontend: NextJS 14 (avec App Router)
- State Management: Redux
- UI Components: Ant Design
- Internationalisation: i18n pour la traduction en plusieurs langues
- IDE Recommandé: Visual Studio Code

## Installation

1. Clonez ce dépôt : `git clone <URL-de-ton-repo-Github>`
2. Installez les dépendances : `npm install` ou `yarn install`
3. Lancez l'application : `npm run dev`

L'application est lancée en local sur `http://localhost:3000`.

# Informations sur la navigation:

Sur ma Page Accueil, je vais avoir le choix de traduire ma page en anglais ou français selon mon choix. Je peux également naviguer sur 2 pages différentes:

- La page Candidat où je vais accéder au formulaire du candidat
- La page Recruteur où je vais avoir la liste de mes candidats
  - Je vais pouvoir cliquer sur le candidat de mon choix et accéder à ses informations personnelles

# Structure du projet

app/
├── candidates/
│ └── page.tsx # Formulaire pour les candidats
├── recruiters/
│ ├── page.tsx # Liste des candidats pour les recruteurs
│ └── [candidateId]/
│ └── page.tsx # Détails d'un candidat selectionné
├── layout.tsx # Layout racine avec providers Redux et i18n
└── page.tsx # Page d'accueil
