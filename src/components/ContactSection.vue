<script setup>
const cards = [
  { title: 'Temple Béthanie', body: 'Lieu de nos répétitions et de nos célébrations.' },
  { title: 'Écrivez-nous', html: '<a class="text-gold-bright hover:text-gold" href="mailto:contact@voixglorieuse.org">contact@voixglorieuse.org</a>' },
  { title: 'Horaires de répétition', body: 'Samedi après-midi, au Temple Béthanie.' },
]
</script>

<template>
  <section id="contact" class="py-20 md:py-24 bg-night-soft">
    <div class="max-w-5xl mx-auto px-6">
      <p class="text-center font-display text-[0.78rem] tracking-[4px] uppercase text-gold mb-4">
        Contact
      </p>
      <h2 class="text-center font-display font-semibold text-3xl md:text-4xl mb-10 tracking-wide">
        Restons en lien
      </h2>
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="c in cards"
          :key="c.title"
          class="bg-white/[0.04] border border-white/10 rounded-[10px] p-6 text-center"
        >
          <h3 class="font-display text-gold-bright tracking-wide mb-2 text-[1.05rem]">{{ c.title }}</h3>
          <p v-if="c.body" class="text-cream-dim">{{ c.body }}</p>
          <p v-else class="text-cream-dim" v-html="c.html"></p>
        </div>
      </div>
    </div>
  </section>
</template>
