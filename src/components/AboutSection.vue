<script setup>
const pillars = [
  { title: 'Louange', text: 'Adorer Dieu par le chant.' },
  { title: 'Communion', text: 'Grandir ensemble dans la foi.' },
  { title: 'Excellence', text: 'Servir avec cœur et rigueur.' },
]
</script>

<template>
  <section id="a-propos" class="py-20 md:py-24 bg-cream-soft dark:bg-night-soft transition-colors">
    <div class="max-w-5xl mx-auto px-6 grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14 items-center">
      <div>
        <p class="font-display text-[0.78rem] tracking-[4px] uppercase text-gold-deep dark:text-gold mb-4">À propos</p>
        <h2 class="font-display font-semibold text-3xl md:text-4xl mb-5 tracking-wide text-ink dark:text-cream">
          Une voix, une communauté, une louange
        </h2>
        <p class="text-ink-dim dark:text-cream-dim mb-4">
          La Chorale <strong class="text-ink dark:text-cream">Voix Glorieuse</strong> rassemble des voix du
          Temple Béthanie unies par une même passion : chanter la grandeur de Dieu.
          Chaque répétition, chaque concert, chaque culte est pour nous l'occasion
          de porter un message d'espérance et d'adoration.
        </p>
        <p class="text-ink-dim dark:text-cream-dim">
          Par notre voix, nous souhaitons édifier l'Église, toucher les cœurs et
          faire résonner la louange au-delà des murs du temple.
        </p>
      </div>

      <ul class="grid gap-3.5 list-none m-0 p-0">
        <li
          v-for="p in pillars"
          :key="p.title"
          class="bg-white/80 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 border-l-[3px] border-l-gold rounded-[10px] px-5 py-4"
        >
          <strong class="font-display tracking-[2px] text-gold-deep dark:text-gold-bright block text-[0.95rem]">
            {{ p.title }}
          </strong>
          <span class="text-ink-dim dark:text-cream-dim text-[0.95rem]">{{ p.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
