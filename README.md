# Product App — Frontend

Application Angular de gestion de produits, connectée à un backend REST Spring Boot.

## Table des matières

- [Apercu](#apercu)
- [Technologies utilisées](#technologies-utilisées)
- [Architecture du projet](#architecture-du-projet)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Lancer l'application](#lancer-lapplication)
- [Structure des fichiers](#structure-des-fichiers)
- [Fonctionnalités](#fonctionnalités)
- [API Backend](#api-backend)
- [Scripts disponibles](#scripts-disponibles)

---

## Apercu

Cette application permet de visualiser et gérer une liste de produits. Elle consomme une API REST backend pour afficher les produits dans un tableau, et permet leur suppression directement depuis l'interface.

---

## Technologies utilisées

| Technologie       | Version  | Rôle                                  |
|-------------------|----------|---------------------------------------|
| Angular           | 21.2.x   | Framework frontend                    |
| TypeScript        | ~5.9.2   | Langage de développement              |
| Bootstrap         | 5.3.x    | Styles et composants UI               |
| Bootstrap Icons   | 1.13.x   | Icônes (poubelle, cercle, etc.)       |
| RxJS              | ~7.8.0   | Gestion des flux asynchrones (HTTP)   |
| Vitest            | ^4.0.8   | Framework de tests unitaires          |
| Prettier          | ^3.8.1   | Formateur de code                     |

---

## Architecture du projet

L'application suit une architecture **standalone components** introduite avec Angular 14+ :

```
src/
└── app/
    ├── app.ts               # Composant racine (navigation)
    ├── app.html             # Template racine avec RouterOutlet
    ├── app.routes.ts        # Définition des routes
    ├── app.config.ts        # Configuration de l'application (providers)
    ├── home/
    │   ├── home.ts          # Composant page d'accueil
    │   └── home.html        # Template de la page d'accueil
    ├── products/
    │   ├── products.ts      # Composant liste de produits
    │   └── products.html    # Template tableau des produits
    └── services/
        └── product.ts       # Service HTTP pour les appels API
```

---

## Prérequis

- **Node.js** >= 18.x
- **npm** >= 11.x
- **Angular CLI** >= 21.x
- **Backend** Spring Boot démarré sur `http://localhost:8084`

---

## Installation

```bash
# Cloner le dépôt
git clone <url-du-repo>
cd product-app-frontend

# Installer les dépendances
npm install
```

---

## Lancer l'application

```bash
npm start
# ou
ng serve
```

Ouvrir le navigateur sur `http://localhost:4200`.

> Le backend doit être démarré sur `http://localhost:8084` pour que les données s'affichent correctement.

---

## Structure des fichiers

### `app.routes.ts` — Routage

```
/home      → HomeComponent
/products  → ProductsComponent
```

### `app.ts` / `app.html` — Composant racine

Contient la barre de navigation avec deux boutons (`Home`, `Products`) et le `<router-outlet>` pour afficher les vues.

### `products/products.ts` — Composant Produits

- Charge automatiquement tous les produits au démarrage (`ngOnInit`)
- Affiche les produits dans un tableau Bootstrap (ID, Nom, Prix, Sélectionné)
- Permet la suppression d'un produit avec confirmation

### `services/product.ts` — Service HTTP

Centralise les appels API vers le backend :

| Méthode            | HTTP              | Endpoint                         |
|--------------------|-------------------|----------------------------------|
| `getAllProducts()`  | `GET`             | `/products`                      |
| `deleteProduct(p)` | `DELETE`          | `/products/:id`                  |

---

## Fonctionnalités

- **Liste des produits** : affichage en tableau avec ID, nom, prix et statut de sélection
- **Suppression** : bouton par ligne avec confirmation via `confirm()` avant suppression
- **Navigation** : routing côté client entre Home et Products
- **Rafraîchissement automatique** : après une suppression, la liste se recharge

---

## API Backend

Le frontend communique avec un backend Spring Boot exposé sur :

```
http://localhost:8084
```

Endpoints utilisés :

```
GET    /products         → Récupère tous les produits
DELETE /products/{id}    → Supprime un produit par son ID
```

---

## Scripts disponibles

| Commande          | Description                                      |
|-------------------|--------------------------------------------------|
| `npm start`       | Démarre le serveur de développement (port 4200)  |
| `npm run build`   | Compile l'application pour la production         |
| `npm run watch`   | Compile en mode watch (développement)            |
| `npm test`        | Lance les tests unitaires avec Vitest            |
