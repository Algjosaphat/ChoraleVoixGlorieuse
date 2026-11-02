<script setup>
import { computed } from 'vue'
import { getEventState, formatDate, formatTime } from '../data/events.js'

const state = computed(() => getEventState())
const event = computed(() => state.value.event || state.value.lastEvent)
const isPast = computed(() => state.value.status === 'IDLE')

const label = computed(() => {
  if (state.value.status === 'LIVE') return 'En cours'
  if (state.value.status === 'UPCOMING') return "L'événement"
  return 'Dernier événement'
})

const infos = computed(() => {
  const e = event.value
  if (!e) return []
  return [
    { title: 'Date', value: formatDate(e.startDate) },
    { title: 'Heure', value: formatTime(e.startDate) },
    { title: 'Lieu', value: e.place },
    { title: 'Entrée', value: e.entry },
  ]
})
</script>

<template>
  <section v-if="event" id="evenement" class="py-20 md:py-24 bg-cream-page dark:bg-night transition-colors">
    <div class="max-w-5xl mx-auto px-6">
      <p class="text-center font-display text-[0.78rem] tracking-[4px] uppercase text-gold-deep dark:text-gold mb-4">
        {{ label }}
      </p>
      <h2 class="text-center font-display font-semibold text-3xl md:text-4xl mb-4 tracking-wide text-ink dark:text-cream">
        {{ event.title }}
      </h2>
      <p class="text-center text-ink-dim dark:text-cream-dim max-w-2xl mx-auto mb-10 text-[1.05rem]">
        {{ isPast ? "Merci à tous ceux qui ont participé à cette belle célébration de louange. Restez connectés pour la suite." : event.description }}
      </p>

      <div class="grid gap-4 grid-cols-2 md:grid-cols-4">
        <div
          v-for="i in infos"
          :key="i.title"
          class="bg-white/70 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-[10px] px-5 py-6 text-center"
        >
          <h3 class="font-display text-[0.85rem] tracking-[3px] uppercase text-gold-deep dark:text-gold mb-2">{{ i.title }}</h3>
          <p class="text-ink dark:text-cream text-[1.02rem]">{{ i.value }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
