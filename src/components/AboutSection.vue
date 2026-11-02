<script setup>
import { contenu } from '../data/contenu.js'
</script>

<template>
  <section id="a-propos" class="py-20 md:py-24 bg-cream-soft dark:bg-night-soft transition-colors">
    <div class="max-w-5xl mx-auto px-6 grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14 items-center">
      <div>
        <p class="font-display text-[0.78rem] tracking-[4px] uppercase text-gold-deep dark:text-gold mb-4">À propos</p>
        <h2 class="font-display font-semibold text-3xl md:text-4xl mb-5 tracking-wide text-ink dark:text-cream">
          {{ contenu.aPropos.titre }}
        </h2>
        <p v-for="(p, i) in contenu.aPropos.paragraphes" :key="i" class="text-ink-dim dark:text-cream-dim mb-4 last:mb-0">
          {{ p }}
        </p>
      </div>

      <ul class="grid gap-3.5 list-none m-0 p-0">
        <li
          v-for="p in contenu.aPropos.piliers"
          :key="p.titre"
          class="bg-white/80 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 border-l-[3px] border-l-gold rounded-[10px] px-5 py-4"
        >
          <strong class="font-display tracking-[2px] text-gold-deep dark:text-gold-bright block text-[0.95rem]">
            {{ p.titre }}
          </strong>
          <span class="text-ink-dim dark:text-cream-dim text-[0.95rem]">{{ p.texte }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
