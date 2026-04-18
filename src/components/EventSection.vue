<script setup>
const infos = [
  { title: 'Date', value: 'Samedi 25 avril 2026' },
  { title: 'Heure', value: '15h00' },
  { title: 'Lieu', value: 'Temple Béthanie' },
  { title: 'Entrée', value: 'Ouverte à tous' },
]
</script>

<template>
  <section id="evenement" class="py-20 md:py-24">
    <div class="max-w-5xl mx-auto px-6">
      <p class="text-center font-display text-[0.78rem] tracking-[4px] uppercase text-gold mb-4">
        L'événement
      </p>
      <h2 class="text-center font-display font-semibold text-3xl md:text-4xl mb-4 tracking-wide">
        Dieu de louange — Acte 2
      </h2>
      <p class="text-center text-cream-dim max-w-2xl mx-auto mb-10 text-[1.05rem]">
        Après le succès du premier acte, la Chorale Voix Glorieuse vous invite à un
        nouveau temps fort de louange et d'adoration, au cœur du Temple Béthanie.
      </p>

      <div class="grid gap-4 grid-cols-2 md:grid-cols-4">
        <div
          v-for="i in infos"
          :key="i.title"
          class="bg-white/[0.04] border border-white/10 rounded-[10px] px-5 py-6 text-center"
        >
          <h3 class="font-display text-[0.85rem] tracking-[3px] uppercase text-gold mb-2">{{ i.title }}</h3>
          <p class="text-cream text-[1.02rem]">{{ i.value }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
