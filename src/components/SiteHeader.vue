<script setup>
import { ref } from 'vue'

const open = ref(false)
const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#evenement', label: 'Événement' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#rejoindre', label: 'Nous rejoindre' },
  { href: '#contact', label: 'Contact' },
]

function close() {
  open.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-night/75 border-b border-white/10">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#accueil" class="flex items-center gap-3 text-cream">
        <span
          class="inline-flex items-center justify-center w-11 h-11 rounded-full font-display font-bold text-[1.05rem] tracking-wider"
          style="background: radial-gradient(circle at 30% 30%, var(--color-gold-bright), var(--color-gold-deep)); color:#1a1024; box-shadow: 0 6px 18px rgba(212,168,75,.35)"
        >
          V<span class="text-[#2a1c08]">G</span>
        </span>
        <span class="flex flex-col leading-tight">
          <span class="font-display tracking-[2px] text-[1.05rem]">Voix Glorieuse</span>
          <span class="text-[0.7rem] tracking-[3px] uppercase text-muted mt-0.5">Temple Béthanie</span>
        </span>
      </a>

      <nav aria-label="Navigation principale" class="hidden md:flex gap-7">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="text-sm font-medium text-cream-dim hover:text-cream relative group py-1.5"
        >
          {{ l.label }}
          <span class="absolute left-0 right-0 bottom-0 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </a>
      </nav>

      <button
        class="md:hidden w-11 h-11 rounded-[10px] border border-white/10 flex flex-col items-center justify-center gap-1.5"
        :aria-expanded="open"
        aria-label="Ouvrir le menu"
        @click="open = !open"
      >
        <span class="block w-5 h-0.5 bg-cream"></span>
        <span class="block w-5 h-0.5 bg-cream"></span>
        <span class="block w-5 h-0.5 bg-cream"></span>
      </button>
    </div>

    <div v-if="open" class="md:hidden border-t border-white/10 bg-night/95">
      <nav class="px-6 py-4 flex flex-col gap-3">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="text-cream-dim hover:text-cream"
          @click="close"
        >
          {{ l.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
