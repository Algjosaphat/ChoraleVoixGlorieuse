<script setup>
import { reactive } from 'vue'

const leaders = reactive([
  {
    role: 'Directeur de la Chorale',
    name: 'DASSI David',
    image: '/leaders/DC.png',
    mission: 'Porte la vision spirituelle de la chorale et coordonne son rayonnement au sein du Temple Béthanie.',
    failed: false,
  },
  {
    role: 'Maître de la Chorale',
    name: 'VITOU André',
    image: '/leaders/Maître.jpeg',
    mission: 'Dirige les répétitions, forme les voix et veille à l\'excellence musicale de chaque prestation.',
    failed: false,
  },
  {
    role: 'Organiste de la Chorale',
    name: 'MisterKof',
    image: '/leaders/MisterKof.jpeg',
    mission: 'Accompagne la chorale à l\'orgue et soutient la ferveur de nos temps de louange.',
    failed: false,
  },
])
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
          class="bg-white/80 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-[18px] overflow-hidden flex flex-col group"
        >
          <div class="relative w-full h-56 md:h-60 overflow-hidden">
            <img
              v-if="!l.failed"
              :src="l.image"
              :alt="l.role"
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover object-[center_20%] transition duration-500 group-hover:scale-105"
              @error="l.failed = true"
            />
            <div
              v-else
              class="absolute inset-0 flex items-center justify-center text-gold-deep dark:text-gold-bright"
              style="background: radial-gradient(ellipse at 30% 20%, rgba(212,168,75,0.3), transparent 60%), linear-gradient(135deg, rgba(155,117,36,0.2), rgba(120,70,200,0.15))"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="w-16 h-16 opacity-60">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div
              class="absolute inset-x-0 bottom-0 h-1"
              style="background: linear-gradient(90deg, transparent, #d4a84b, transparent)"
            ></div>
          </div>

          <div class="p-6 text-center flex-1 flex flex-col">
            <h3 class="font-display tracking-[1px] text-[0.85rem] uppercase text-gold-deep dark:text-gold-bright mb-2">
              {{ l.role }}
            </h3>
            <p class="text-ink dark:text-cream font-semibold text-[1.05rem] mb-3">
              {{ l.name }}
            </p>
            <p class="text-ink-dim dark:text-cream-dim text-sm leading-relaxed">
              {{ l.mission }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
