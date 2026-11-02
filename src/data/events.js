import { contenu } from './contenu.js'

// Les événements se gèrent depuis l'appli (Dashboard site → Événements). Le hero choisit :
//  1. un événement en cours (LIVE),
//  2. sinon le prochain événement à venir,
//  3. sinon il affiche le contenu d'accueil de la chorale.
// Les heures sont celles du Bénin (+01:00), pour que tout le monde voie la bonne heure.
export function getEventState(now = new Date()) {
  const list = (contenu.evenements || [])
    .map((e) => {
      const start = new Date(`${e.debut}:00+01:00`)
      const end = new Date(start.getTime() + (Number(e.dureeHeures) || 0) * 3600 * 1000)
      return { ...e, title: e.titre, place: e.lieu, entry: e.entree, startDate: start, endDate: end }
    })
    .filter((e) => !Number.isNaN(e.startDate.getTime()))
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
