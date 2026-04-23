<script setup>
const cards = [
  { title: 'Temple Béthanie', body: 'Lieu de nos répétitions et de nos célébrations.' },
  { title: 'Écrivez-nous', html: '<a class="text-gold-deep dark:text-gold-bright hover:text-gold" href="mailto:gloriousvoicechoir@gmail.com">gloriousvoicechoir@gmail.com</a>' },
  // {title: 'Tél', body:'0197084092 / 0197984922 / 0197385883'},
  { title: 'Horaires de répétition', body: 'Mercredi soir 20h, Vendredi soir 20h, et Dimanche après notre culte au Temple Béthanie.' },
]
</script>

<template>
  <section id="contact" class="py-20 md:py-24 bg-cream-soft dark:bg-night-soft transition-colors">
    <div class="max-w-5xl mx-auto px-6">
      <p class="text-center font-display text-[0.78rem] tracking-[4px] uppercase text-gold-deep dark:text-gold mb-4">
        Contact
      </p>
      <h2 class="text-center font-display font-semibold text-3xl md:text-4xl mb-10 tracking-wide text-ink dark:text-cream">
        Restons en lien
      </h2>
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="c in cards"
          :key="c.title"
          class="bg-white/80 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-[10px] p-6 text-center"
        >
          <h3 class="font-display text-gold-deep dark:text-gold-bright tracking-wide mb-2 text-[1.05rem]">{{ c.title }}</h3>
          <p v-if="c.body" class="text-ink-dim dark:text-cream-dim">{{ c.body }}</p>
          <p v-else class="text-ink-dim dark:text-cream-dim" v-html="c.html"></p>
        </div>
      </div>
    </div>
  </section>
</template>
