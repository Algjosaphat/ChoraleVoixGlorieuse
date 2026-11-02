# ChoraleVoixGlorieuse

Site vitrine de la Chorale **Voix Glorieuse** du Temple Béthanie.

Stack : Vue 3 + Vite + Tailwind CSS.

## Développement

```bash
npm install
npm run dev       # serveur de dev (http://localhost:5173)
npm run build     # build production
npm run preview   # prévisualise le build
```

## Gérer les événements

Les événements se modifient dans `src/data/events.js`. Le hero choisit tout seul :
un événement en cours, sinon le prochain à venir, sinon le contenu d'accueil de la chorale.

## Réseaux sociaux

Les liens et icônes sont dans `src/data/socials.js`.
