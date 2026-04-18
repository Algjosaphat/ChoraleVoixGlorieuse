<script setup>
import { reactive } from 'vue'

const items = reactive([
  { src: '/gallery/photo-1.jpg', alt: 'Concert de louange', failed: false, span: 'md:row-span-2' },
  { src: '/gallery/photo-2.jpg', alt: 'Répétition au temple', failed: false, span: '' },
  { src: '/gallery/photo-3.jpg', alt: 'Moment d\'adoration', failed: false, span: '' },
  { src: '/gallery/photo-4.jpg', alt: 'Culte du dimanche', failed: false, span: 'md:col-span-2' },
  { src: '/gallery/photo-5.jpg', alt: 'Rassemblement', failed: false, span: '' },
  { src: '/gallery/photo-6.jpg', alt: 'Chorale en action', failed: false, span: '' },
])
</script>

<template>
  <section id="galerie" class="py-20 md:py-24 bg-cream-page dark:bg-night transition-colors">
    <div class="max-w-6xl mx-auto px-6">
      <p class="text-center font-display text-[0.78rem] tracking-[4px] uppercase text-gold-deep dark:text-gold mb-4">
        Galerie
      </p>
      <h2 class="text-center font-display font-semibold text-3xl md:text-4xl mb-4 tracking-wide text-ink dark:text-cream">
        Retour en images
      </h2>
      <p class="text-center text-ink-dim dark:text-cream-dim max-w-2xl mx-auto mb-10 text-[1.05rem]">
        Quelques instantanés de nos répétitions, cultes et concerts au Temple Béthanie.
      </p>

      <div class="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-3">
        <figure
          v-for="(item, i) in items"
          :key="i"
          :class="['relative overflow-hidden rounded-[14px] border border-black/10 dark:border-white/10 group', item.span]"
        >
          <img
            v-if="!item.failed"
            :src="item.src"
            :alt="item.alt"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
            @error="item.failed = true"
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

      <p class="text-center text-muted text-xs mt-6">
        Déposez vos photos dans <code class="text-gold-deep dark:text-gold-bright">public/gallery/</code> (photo-1.jpg à photo-6.jpg) pour les afficher ici.
      </p>
    </div>
  </section>
</template>
