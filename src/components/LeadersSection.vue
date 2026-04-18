<script setup>
const leaders = [
  {
    role: 'Directeur de la Chorale',
    name: 'Nom à préciser',
    initials: 'DC',
    mission: 'Porte la vision spirituelle de la chorale et coordonne son rayonnement au sein du Temple Béthanie.',
  },
  {
    role: 'Maître de la Chorale',
    name: 'Nom à préciser',
    initials: 'MC',
    mission: 'Dirige les répétitions, forme les voix et veille à l\'excellence musicale de chaque prestation.',
  },
  {
    role: 'Organiste de la Chorale',
    name: 'Nom à préciser',
    initials: 'OC',
    mission: 'Accompagne la chorale à l\'orgue et soutient la ferveur de nos temps de louange.',
  },
]
</script>

<template>
  <section id="responsables" class="py-20 md:py-24 bg-cream-page dark:bg-night transition-colors">
    <div class="max-w-6xl mx-auto px-6">
      <p class="text-center font-display text-[0.78rem] tracking-[4px] uppercase text-gold-deep dark:text-gold mb-4">
        Responsables
      </p>
      <h2 class="text-center font-display font-semibold text-3xl md:text-4xl mb-4 tracking-wide text-ink dark:text-cream">
        Ceux qui guident la chorale
      </h2>
      <p class="text-center text-ink-dim dark:text-cream-dim max-w-2xl mx-auto mb-12 text-[1.05rem]">
        Au service de la louange, une équipe dévouée veille sur la vie et la musique de Voix Glorieuse.
      </p>

      <div class="grid gap-6 md:grid-cols-3">
        <article
          v-for="l in leaders"
          :key="l.role"
          class="relative bg-white/80 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-[18px] p-7 text-center overflow-hidden group"
        >
          <div
            class="absolute inset-x-0 top-0 h-1"
            style="background: linear-gradient(90deg, transparent, #d4a84b, transparent)"
          ></div>

          <div
            class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center font-display font-bold text-[1.4rem] tracking-wider"
            style="background: radial-gradient(circle at 30% 30%, #f1c86a, #9b7524); color:#1a1024; box-shadow: 0 10px 24px rgba(212,168,75,.28)"
          >
            {{ l.initials }}
          </div>

          <h3 class="font-display tracking-[1px] text-[0.9rem] uppercase text-gold-deep dark:text-gold-bright mb-2">
            {{ l.role }}
          </h3>
          <p class="text-ink dark:text-cream font-semibold text-[1.05rem] mb-3">
            {{ l.name }}
          </p>
          <p class="text-ink-dim dark:text-cream-dim text-sm leading-relaxed">
            {{ l.mission }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
