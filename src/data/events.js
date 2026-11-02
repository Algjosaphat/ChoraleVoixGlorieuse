// Ajoutez ici vos événements. Le hero choisit automatiquement :
//  1. un événement en cours (LIVE),
//  2. sinon le prochain événement à venir,
//  3. sinon il affiche le contenu d'accueil de la chorale.
// Indiquez l'heure avec le fuseau du Bénin (+01:00) pour que tout le monde voie la bonne heure.
export const events = [
  {
    id: 'dieu-de-louange-acte-2',
    title: 'Dieu de louange : Acte 2',
    description:
      "Après le succès du premier acte, la Chorale Voix Glorieuse vous invite à un nouveau temps fort de louange et d'adoration, au cœur du Temple Béthanie.",
    start: '2026-04-25T15:00:00+01:00',
    durationHours: 6,
    place: 'Temple Béthanie',
    entry: 'Ouverte à tous',
  },
]

export const rehearsals = [
  { day: 'Mercredi', time: '20h' },
  { day: 'Vendredi', time: '20h' },
  { day: 'Dimanche', time: 'après le culte' },
]

export function getEventState(now = new Date()) {
  const list = events
    .map((e) => {
      const start = new Date(e.start)
      const end = new Date(start.getTime() + e.durationHours * 3600 * 1000)
      return { ...e, startDate: start, endDate: end }
    })
    .sort((a, b) => a.startDate - b.startDate)

  const live = list.find((e) => now >= e.startDate && now < e.endDate)
  if (live) return { status: 'LIVE', event: live }

  const upcoming = list.find((e) => e.startDate > now)
  if (upcoming) return { status: 'UPCOMING', event: upcoming }

  const past = [...list].reverse().find((e) => e.endDate <= now)
  return { status: 'IDLE', event: null, lastEvent: past || null }
}

const dateFmt = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Africa/Porto-Novo',
})
const timeFmt = new Intl.DateTimeFormat('fr-FR', {
  hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Porto-Novo',
})

export function formatDate(d) {
  const s = dateFmt.format(d)
  return s.charAt(0).toUpperCase() + s.slice(1)
}
export function formatTime(d) {
  return timeFmt.format(d).replace(':', 'h')
}
