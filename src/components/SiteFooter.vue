<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10 py-8" style="background:#0b0714">
    <div class="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
      <p class="m-0">© {{ year }} Chorale Voix Glorieuse · Temple Béthanie</p>
      <p class="m-0 italic text-cream-dim">« Que tout ce qui respire loue l'Éternel ! » — Psaume 150:6</p>
    </div>
  </footer>
</template>
