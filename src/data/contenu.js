import { reactive } from 'vue'

// Les contenus du site se gèrent depuis l'appli Voix Glorieuse (menu « Dashboard site »).
// Le site affiche tout de suite la dernière version connue (gardée sur l'appareil,
// sinon les valeurs ci-dessous), puis la remplace par celle de l'API : le serveur
// gratuit peut mettre jusqu'à une minute à se réveiller.
export const API_BASE = (import.meta.env.VITE_API_URL || 'https://voix-glorieuse-api.onrender.com/api').replace(/\/+$/, '')
const CLE_CACHE = 'vg-site-contenu'

const PHOTOS_GALERIE = [
  '16.13.46', '16.13.46 (1)', '16.13.47', '16.13.47 (1)', '16.13.47 (2)', '16.13.47 (3)',
  '16.13.48', '16.13.48 (1)', '16.13.48 (2)', '16.13.48 (3)', '16.13.48 (4)',
  '16.13.49', '16.13.49 (1)', '16.13.49 (2)', '16.13.49 (3)',
  '16.13.50', '16.13.50 (1)', '16.13.50 (2)', '16.13.50 (3)', '16.13.50 (4)',
  '16.13.51', '16.13.51 (1)', '16.13.51 (2)',
].map(h => ({ src: `/photo chorale/WhatsApp Image 2026-11-02 at ${h}.jpeg`, legende: '' }))

const DEFAUT = {
  accueil: {
    sousTitre: 'Chorale du Temple Béthanie',
    citation: "Que tout ce qui respire loue l'Éternel !",
    reference: 'Psaume 150:6',
    logo: '/leaders/Logo.jpeg',
  },
  repetitions: [
    { jour: 'Mercredi', heure: '20h' },
    { jour: 'Vendredi', heure: '20h' },
    { jour: 'Dimanche', heure: 'après le culte' },
  ],
  // debut : heure du Bénin (UTC+1), « AAAA-MM-JJTHH:MM »
  evenements: [
    {
      id: 'dieu-de-louange-acte-2',
      titre: 'Dieu de louange : Acte 2',
      description: "Après le succès du premier acte, la Chorale Voix Glorieuse vous invite à un nouveau temps fort de louange et d'adoration, au cœur du Temple Béthanie.",
      debut: '2026-04-25T15:00',
      dureeHeures: 6,
      lieu: 'Temple Béthanie',
      entree: 'Ouverte à tous',
    },
  ],
  aPropos: {
    titre: 'Une voix, une communauté, une louange',
    paragraphes: [
      "La Chorale Voix Glorieuse rassemble des voix du Temple Béthanie unies par une même passion : chanter la grandeur de Dieu. Chaque répétition, chaque concert, chaque culte est pour nous l'occasion de porter un message d'espérance et d'adoration.",
      "Par notre voix, nous souhaitons édifier l'Église, toucher les cœurs et faire résonner la louange au-delà des murs du temple.",
    ],
    piliers: [
      { titre: 'Louange', texte: 'Adorer Dieu par le chant.' },
      { titre: 'Communion', texte: 'Grandir ensemble dans la foi.' },
      { titre: 'Excellence', texte: 'Servir avec cœur et rigueur.' },
    ],
  },
  galerie: {
    titre: 'Retour en images',
    texte: 'Quelques instantanés de nos répétitions, cultes et concerts au Temple Béthanie.',
    photos: PHOTOS_GALERIE,
  },
  responsables: {
    titre: 'Ceux qui guident la chorale',
    texte: 'Au service de la louange, une équipe dévouée veille sur la vie et la musique de Voix Glorieuse.',
    liste: [
      { role: 'Directeur de la Chorale', nom: 'DASSI David', photo: '/leaders/DC.png', mission: 'Porte la vision spirituelle de la chorale et coordonne son rayonnement au sein du Temple Béthanie.' },
      { role: 'Maître de chœur', nom: 'VITOU André', photo: '/leaders/maitre-choeur.jpeg', mission: "Dirige les répétitions, forme les voix et veille à l'excellence musicale de chaque prestation." },
      { role: 'Organiste de la Chorale', nom: 'ODOH Kofi (MisterKof)', photo: '/leaders/MisterKof.jpeg', mission: 'Accompagne la chorale au piano et soutient la ferveur de nos temps de louange.' },
    ],
  },
  contact: {
    lieu: 'Temple Béthanie',
    lieuTexte: 'Lieu de nos répétitions et de nos célébrations.',
    email: 'gloriousvoicechoir@gmail.com',
    telephone: '',
    horaires: 'Mercredi soir 20h, Vendredi soir 20h, et Dimanche après notre culte au Temple Béthanie.',
  },
  reseaux: {
    whatsapp: 'https://whatsapp.com/channel/0029Vaa0MLj9MF9324u5Kc0s',
    youtube: 'https://youtube.com/@choralevoixglorieuse',
    facebook: 'https://www.facebook.com/share/19kg7GxnwU/',
    tiktok: 'https://www.tiktok.com/@choralevoixglorieuse70',
  },
}

function lireCache() {
  try {
    const c = JSON.parse(localStorage.getItem(CLE_CACHE) || 'null')
    return c && typeof c === 'object' ? c : {}
  } catch (_) {
    return {}
  }
}

export const contenu = reactive({ ...DEFAUT, ...lireCache() })

export async function chargerContenu() {
  const controleur = new AbortController()
  const minuterie = setTimeout(() => controleur.abort(), 70000)
  try {
    const res = await fetch(`${API_BASE}/site`, { signal: controleur.signal })
    if (!res.ok) return
    const { contenu: recu } = await res.json()
    if (!recu || typeof recu !== 'object') return
    Object.assign(contenu, recu)
    try { localStorage.setItem(CLE_CACHE, JSON.stringify(recu)) } catch (_) {}
  } catch (_) {
    // hors ligne ou serveur injoignable : le contenu déjà affiché reste
  } finally {
    clearTimeout(minuterie)
  }
}

// Fichier du site (« /leaders/x.jpg ») ou lien complet (photo envoyée depuis l'appli).
export function urlImage(src) {
  if (!src) return ''
  return /^https?:\/\//i.test(src) ? src : encodeURI(src)
}
