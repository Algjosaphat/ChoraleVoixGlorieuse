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

## Gérer les contenus

Textes, événements, répétitions, photos de la galerie, responsables, contact et
liens des réseaux se modifient dans l'appli Voix Glorieuse, menu **Dashboard site**
(accès « Site web officiel », donné par le super admin). Le site les lit sur
l'API (`GET /api/site`) à chaque visite ; les valeurs de `src/data/contenu.js`
servent seulement tant que rien n'a été enregistré ou si l'API est injoignable.

Adresse de l'API : variable `VITE_API_URL` (voir `.env.example`), par défaut
`https://voix-glorieuse-api.onrender.com/api`.

Le hero choisit tout seul : un événement en cours, sinon le prochain à venir,
sinon le contenu d'accueil de la chorale. Les icônes des réseaux sont dans
`src/data/socials.js`.
