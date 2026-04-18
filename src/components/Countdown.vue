<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  target: { type: Date, required: true },
  durationMs: { type: Number, default: 3 * 60 * 60 * 1000 },
})

const now = ref(Date.now())
let timer = null

onMounted(() => {
  timer = setInterval(() => (now.value = Date.now()), 1000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const diff = computed(() => props.target.getTime() - now.value)

const state = computed(() => {
  if (diff.value > 0) return 'pending'
  if (diff.value > -props.durationMs) return 'live'
  return 'past'
})

const pad = (n) => String(Math.max(0, n)).padStart(2, '0')

const parts = computed(() => {
  const d = Math.max(0, diff.value)
  const total = Math.floor(d / 1000)
  return {
    days: pad(Math.floor(total / 86400)),
    hours: pad(Math.floor((total % 86400) / 3600)),
    minutes: pad(Math.floor((total % 3600) / 60)),
    seconds: pad(total % 60),
  }
})

const message = computed(() => {
  if (state.value === 'live') return "L'événement est en cours — merci d'être avec nous !"
  if (state.value === 'past') return "L'événement est terminé. Merci à tous pour votre présence."
  return 'Rendez-vous le samedi 25 avril 2026 à 15h.'
})

const messageClass = computed(() =>
  state.value === 'live'
    ? 'text-gold-bright font-semibold'
    : state.value === 'past'
      ? 'text-cream-dim'
      : 'text-muted'
)

const units = computed(() => [
  { key: 'days', label: 'Jours', value: parts.value.days },
  { key: 'hours', label: 'Heures', value: parts.value.hours },
  { key: 'minutes', label: 'Minutes', value: parts.value.minutes },
  { key: 'seconds', label: 'Secondes', value: parts.value.seconds },
])
</script>

<template>
  <div>
    <div
      class="grid grid-cols-4 gap-3 sm:gap-3.5 max-w-xl mx-auto mb-6"
      role="timer"
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        v-for="u in units"
        :key="u.key"
        class="unit-glow relative bg-white/[0.03] border border-white/10 rounded-[10px] py-4 px-2 sm:py-5 flex flex-col items-center gap-1 overflow-hidden"
      >
        <span class="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-gold-bright tabular-nums tracking-wider">
          {{ u.value }}
        </span>
        <span class="text-[0.65rem] sm:text-[0.72rem] tracking-[2px] uppercase text-muted">
          {{ u.label }}
        </span>
      </div>
    </div>
    <p class="text-sm min-h-[1.3em] m-0" :class="messageClass">{{ message }}</p>
  </div>
</template>
