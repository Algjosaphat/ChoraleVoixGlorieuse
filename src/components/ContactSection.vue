<script setup>
import { computed } from 'vue'
import SocialLinks from './SocialLinks.vue'
import { contenu } from '../data/contenu.js'

const cards = computed(() => {
  const c = contenu.contact || {}
  return [
    c.lieu && { title: c.lieu, body: c.lieuTexte },
    c.email && { title: 'Écrivez-nous', href: `mailto:${c.email}`, lien: c.email },
    c.telephone && { title: 'Téléphone', href: `tel:${c.telephone.split('/')[0].replace(/\s+/g, '')}`, lien: c.telephone },
    c.horaires && { title: 'Horaires de répétition', body: c.horaires },
  ].filter(Boolean)
})
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
      <div class="grid gap-4 sm:grid-cols-2" :class="cards.length % 3 === 0 ? 'md:grid-cols-3' : cards.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-2'">
        <div
          v-for="c in cards"
          :key="c.title"
          class="bg-white/80 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-[10px] p-6 text-center"
        >
          <h3 class="font-display text-gold-deep dark:text-gold-bright tracking-wide mb-2 text-[1.05rem]">{{ c.title }}</h3>
          <p v-if="c.href" class="text-ink-dim dark:text-cream-dim break-words">
            <a class="text-gold-deep dark:text-gold-bright hover:text-gold" :href="c.href">{{ c.lien }}</a>
          </p>
          <p v-else class="text-ink-dim dark:text-cream-dim">{{ c.body }}</p>
        </div>
      </div>

      <div class="mt-10 text-center">
        <p class="font-display text-gold-deep dark:text-gold-bright tracking-wide mb-4">Retrouvez-nous sur les réseaux</p>
        <SocialLinks />
      </div>
    </div>
  </section>
</template>
