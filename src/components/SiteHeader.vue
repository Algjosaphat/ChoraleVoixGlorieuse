<script setup>
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme.js'

const { theme, toggle } = useTheme()
const open = ref(false)

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#evenement', label: 'Événement' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#rejoindre', label: 'Rejoindre' },
  { href: '#contact', label: 'Contact' },
]

function close() {
  open.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-cream-page/80 dark:bg-night/75 border-b border-black/5 dark:border-white/10 transition-colors">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#accueil" class="flex items-center gap-3 text-ink dark:text-cream">
        <span
          class="inline-flex items-center justify-center w-11 h-11 rounded-full font-display font-bold text-[1.05rem] tracking-wider"
          style="background: radial-gradient(circle at 30% 30%, #f1c86a, #9b7524); color:#1a1024; box-shadow: 0 6px 18px rgba(212,168,75,.35)"
        >
          V<span class="text-[#2a1c08]">G</span>
        </span>
        <span class="flex flex-col leading-tight">
          <span class="font-display tracking-[2px] text-[1.05rem]">Voix Glorieuse</span>
          <span class="text-[0.7rem] tracking-[3px] uppercase text-muted mt-0.5">Temple Béthanie</span>
        </span>
      </a>

      <div class="flex items-center gap-4">
        <nav aria-label="Navigation principale" class="hidden md:flex gap-7">
          <a
            v-for="l in links"
            :key="l.href"
            :href="l.href"
            class="text-sm font-medium text-ink-dim dark:text-cream-dim hover:text-ink dark:hover:text-cream relative group py-1.5"
          >
            {{ l.label }}
            <span class="absolute left-0 right-0 bottom-0 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </a>
        </nav>

        <button
          type="button"
          class="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-ink dark:text-cream hover:text-gold-bright hover:border-gold transition"
          :aria-label="theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'"
          :aria-pressed="theme === 'dark'"
          @click="toggle"
        >
          <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>

        <button
          class="md:hidden w-11 h-11 rounded-[10px] border border-black/10 dark:border-white/10 flex flex-col items-center justify-center gap-1.5 text-ink dark:text-cream"
          :aria-expanded="open"
          aria-label="Ouvrir le menu"
          @click="open = !open"
        >
          <span class="block w-5 h-0.5 bg-current"></span>
          <span class="block w-5 h-0.5 bg-current"></span>
          <span class="block w-5 h-0.5 bg-current"></span>
        </button>
      </div>
    </div>

    <div v-if="open" class="md:hidden border-t border-black/5 dark:border-white/10 bg-cream-page/95 dark:bg-night/95">
      <nav class="px-6 py-4 flex flex-col gap-3">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="text-ink-dim dark:text-cream-dim hover:text-ink dark:hover:text-cream"
          @click="close"
        >
          {{ l.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
