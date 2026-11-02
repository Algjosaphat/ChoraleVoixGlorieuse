<script setup>
import { liensSociaux as socials } from '../data/socials.js'

defineProps({
  // 'inline' : ronds dorés pour hero / contact / footer
  // 'bar'    : colonne fixe à droite de l'écran (petits écrans)
  variant: { type: String, default: 'inline' },
})
</script>

<template>
  <!-- Colonne fixe à droite, petits écrans uniquement -->
  <nav
    v-if="variant === 'bar'"
    aria-label="Réseaux sociaux"
    class="md:hidden fixed right-0 top-1/2 -translate-y-1/2 z-40"
    style="padding-right: env(safe-area-inset-right)"
  >
    <ul class="flex flex-col items-center gap-2 m-0 py-2.5 px-1.5 list-none rounded-l-2xl border border-r-0 border-black/10 dark:border-white/10 bg-cream-page/80 dark:bg-night/80 backdrop-blur-lg shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
      <li v-for="s in socials" :key="s.key">
        <a
          :href="s.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${s.label} de la chorale Voix Glorieuse`"
          class="w-9 h-9 rounded-full flex items-center justify-center text-white active:scale-90 transition"
          :style="{ backgroundColor: s.color }"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-[18px] h-[18px]" aria-hidden="true"><path :d="s.path" /></svg>
        </a>
      </li>
    </ul>
  </nav>

  <!-- Version en ligne -->
  <ul v-else class="flex flex-wrap items-center justify-center gap-3 m-0 p-0 list-none">
    <li v-for="s in socials" :key="s.key">
      <a
        :href="s.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${s.label} de la chorale Voix Glorieuse`"
        :title="s.label"
        class="social-dot w-11 h-11 rounded-full border border-gold/50 text-gold-deep dark:text-gold-bright flex items-center justify-center transition hover:-translate-y-0.5 hover:text-white hover:border-transparent"
        :style="{ '--brand': s.color }"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" aria-hidden="true"><path :d="s.path" /></svg>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.social-dot:hover { background-color: var(--brand); }
</style>
