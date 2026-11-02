<script setup>
import SocialLinks from './SocialLinks.vue'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-black/10 dark:border-white/10 py-8 bg-cream-soft dark:bg-[#0b0714] transition-colors">
    <div class="max-w-6xl mx-auto px-6 flex flex-col items-center gap-5 text-sm text-muted text-center">
      <SocialLinks />
      <p class="m-0 italic text-ink-dim dark:text-cream-dim">« Que tout ce qui respire loue l'Éternel ! » (Psaume 150:6)</p>
      <p class="m-0">© {{ year }} Chorale Voix Glorieuse · Temple Béthanie</p>
    </div>
  </footer>
</template>
