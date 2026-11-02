<script setup>
import { computed, reactive, ref } from 'vue'
import { contenu, urlImage } from '../data/contenu.js'

const spanPattern = ['md:row-span-2', '', '', 'md:col-span-2', '', '']

// Images qui n'ont pas pu être chargées (remplacées par un motif)
const failed = reactive({})

const items = computed(() =>
  (contenu.galerie.photos || []).map((p, i) => ({
    src: urlImage(p.src),
    alt: p.legende || `Chorale Voix Glorieuse — photo ${i + 1}`,
    span: spanPattern[i % spanPattern.length],
  })),
)

const INITIAL_COUNT = 6
const showAll = ref(false)
const visibleItems = computed(() => (showAll.value ? items.value : items.value.slice(0, INITIAL_COUNT)))
const hiddenCount = computed(() => items.value.length - INITIAL_COUNT)

function toggleShowAll() {
  showAll.value = !showAll.value
  if (!showAll.value) {
    document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section v-if="items.length" id="galerie" class="py-20 md:py-24 bg-cream-page dark:bg-night transition-colors">
    <div class="max-w-6xl mx-auto px-6">
      <p class="text-center font-display text-[0.78rem] tracking-[4px] uppercase text-gold-deep dark:text-gold mb-4">
        Galerie
      </p>
      <h2 class="text-center font-display font-semibold text-3xl md:text-4xl mb-4 tracking-wide text-ink dark:text-cream">
        {{ contenu.galerie.titre }}
      </h2>
      <p class="text-center text-ink-dim dark:text-cream-dim max-w-2xl mx-auto mb-10 text-[1.05rem]">
        {{ contenu.galerie.texte }}
      </p>

      <div class="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] grid-flow-dense gap-3">
        <figure
          v-for="(item, i) in visibleItems"
          :key="item.src + i"
          :class="['relative overflow-hidden rounded-[14px] border border-black/10 dark:border-white/10 group', item.span]"
        >
          <img
            v-if="!failed[item.src]"
            :src="item.src"
            :alt="item.alt"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
            @error="failed[item.src] = true"
          />
          <div
            v-else
            class="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gold-deep dark:text-gold-bright"
            style="background: radial-gradient(ellipse at 30% 20%, rgba(212,168,75,0.25), transparent 60%), linear-gradient(135deg, rgba(155,117,36,0.15), rgba(120,70,200,0.12))"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 opacity-70">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
            <span class="font-display tracking-[2px] uppercase text-[0.7rem] opacity-80 text-center px-3">
              {{ item.alt }}
            </span>
          </div>

          <figcaption class="absolute inset-x-0 bottom-0 px-4 py-3 text-cream text-sm opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            {{ item.alt }}
          </figcaption>
        </figure>
      </div>

      <div v-if="hiddenCount > 0" class="flex justify-center mt-8">
        <button
          type="button"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-[0.95rem] tracking-wide border border-black/15 dark:border-white/15 text-ink dark:text-cream hover:border-gold hover:text-[#6f510f] dark:hover:text-gold-bright transition"
          :aria-expanded="showAll"
          @click="toggleShowAll"
        >
          {{ showAll ? 'Voir moins' : `Voir plus (${hiddenCount} photos)` }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="['w-4 h-4 transition-transform', showAll && 'rotate-180']" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>

      <!-- <p class="text-center text-muted text-xs mt-6">
        Déposez vos photos dans <code class="text-gold-deep dark:text-gold-bright">public/gallery/</code> (photo-1.jpg à photo-6.jpg) pour les afficher ici.
      </p> -->
    </div>
  </section>
</template>
