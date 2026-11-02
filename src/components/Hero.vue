<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Countdown from './Countdown.vue'
import SocialLinks from './SocialLinks.vue'
import { getEventState, formatDate, formatTime } from '../data/events.js'
import { contenu, urlImage } from '../data/contenu.js'

const videoMp4 = '/videos/Hero.mp4'
const videoWebm = '/videos/Hero.webm'
const videoFailed = ref(false)

const now = ref(new Date())
let timer = null
onMounted(() => { timer = setInterval(() => (now.value = new Date()), 30000) })
onUnmounted(() => { if (timer) clearInterval(timer) })

const state = computed(() => getEventState(now.value))
const event = computed(() => state.value.event)
const lastEvent = computed(() => state.value.lastEvent)
</script>

<template>
  <section id="accueil" class="relative isolate overflow-hidden min-h-screen flex items-center">
    <video
      v-show="!videoFailed"
      class="absolute inset-0 w-full h-full object-cover -z-20"
      autoplay muted loop playsinline preload="auto"
      @error="videoFailed = true"
    >
      <source :src="videoMp4" type="video/mp4" />
      <source :src="videoWebm" type="video/webm" />
    </video>

    <div v-if="videoFailed" class="absolute inset-0 -z-20 bg-hero-light dark:bg-hero-dark" aria-hidden="true" />
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-b from-cream-page/85 via-cream-page/90 to-cream-page/97 dark:from-night/80 dark:via-night/88 dark:to-night/97"
      aria-hidden="true"
    />

    <div class="relative max-w-6xl mx-auto px-6 text-center py-24 w-full">

      <!-- Événement à venir -->
      <article
        v-if="state.status === 'UPCOMING'"
        class="text-center max-w-2xl mx-auto rounded-[18px] border border-black/10 dark:border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.25)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-md px-6 sm:px-8 py-9 bg-white/70 dark:bg-white/[0.04]"
      >
        <div class="mb-7">
          <span class="inline-block px-3.5 py-1.5 rounded-full bg-gold/15 text-[#6f510f] dark:text-gold-bright border border-gold/40 text-[0.72rem] font-semibold tracking-[2px] uppercase mb-4">
            Événement à venir
          </span>
          <h2 class="font-display font-bold text-2xl sm:text-3xl md:text-[2.4rem] mb-3 text-ink dark:text-cream">
            {{ event.title }}
          </h2>
          <p class="text-ink dark:text-cream flex flex-wrap justify-center gap-2.5">
            <span>{{ formatDate(event.startDate) }}</span>
            <span class="text-gold" aria-hidden="true">·</span>
            <span>{{ formatTime(event.startDate) }}</span>
            <span class="text-gold" aria-hidden="true">·</span>
            <span>{{ event.place }}</span>
          </p>
        </div>

        <Countdown :target="event.startDate" />

        <div class="mt-6 flex flex-wrap gap-3 justify-center">
          <a href="#evenement" class="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-[0.95rem] tracking-wide transition hover:-translate-y-0.5">
            En savoir plus
          </a>
          <a href="#contact" class="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-[0.95rem] tracking-wide border border-black/15 dark:border-white/15 text-ink dark:text-cream hover:border-gold hover:text-[#6f510f] dark:hover:text-gold-bright transition">
            Nous contacter
          </a>
        </div>
      </article>

      <!-- Événement en cours -->
      <article
        v-else-if="state.status === 'LIVE'"
        class="text-center max-w-2xl mx-auto rounded-[18px] border border-red-500/30 dark:border-red-400/30 shadow-[0_30px_80px_rgba(0,0,0,0.25)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-md px-6 sm:px-8 py-9 bg-white/70 dark:bg-white/[0.04]"
      >
        <div class="mb-7">
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/40 text-[0.72rem] font-semibold tracking-[2px] uppercase mb-4">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            En direct maintenant
          </span>
          <h2 class="font-display font-bold text-2xl sm:text-3xl md:text-[2.4rem] mb-3 text-ink dark:text-cream">
            {{ event.title }}
          </h2>
          <p class="text-ink dark:text-cream flex flex-wrap justify-center gap-2.5">
            <span>{{ formatDate(event.startDate) }}</span>
            <span class="text-gold" aria-hidden="true">·</span>
            <span>{{ formatTime(event.startDate) }} à {{ formatTime(event.endDate) }}</span>
            <span class="text-gold" aria-hidden="true">·</span>
            <span>{{ event.place }}</span>
          </p>
        </div>

        <p class="text-ink dark:text-cream text-[1.05rem] mb-8 max-w-lg mx-auto">
          L'événement est en cours. Rejoignez-nous dès maintenant au {{ event.place }}.
        </p>

        <div class="flex flex-wrap gap-3 justify-center">
          <a href="#evenement" class="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-[0.95rem] tracking-wide transition hover:-translate-y-0.5">
            Rejoindre l'événement
          </a>
          <a href="#contact" class="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-[0.95rem] tracking-wide border border-black/15 dark:border-white/15 text-ink dark:text-cream hover:border-gold hover:text-[#6f510f] dark:hover:text-gold-bright transition">
            Nous contacter
          </a>
        </div>
      </article>

      <!-- Aucun événement en cours ou à venir : accueil de la chorale -->
      <article v-else class="max-w-3xl mx-auto rounded-[24px] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-night/60 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.25)] px-5 sm:px-10 py-10">
        <div class="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-7">
          <span class="halo absolute -inset-4 rounded-full bg-gold/30 blur-2xl" aria-hidden="true" />
          <span class="ring absolute -inset-2 rounded-full border border-dashed border-gold/60" aria-hidden="true" />
          <img
            :src="urlImage(contenu.accueil.logo) || '/leaders/Logo.jpeg'"
            alt="Logo de la Chorale Voix Glorieuse"
            class="relative w-full h-full rounded-full object-cover border-2 border-gold shadow-[0_12px_40px_rgba(212,168,75,0.45)]"
          />
        </div>

        <p class="font-display text-[0.78rem] tracking-[5px] uppercase text-[#6f510f] dark:text-gold-bright mb-3">
          Bienvenue chez
        </p>
        <h1 class="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-wide title-gold mb-3">
          Voix Glorieuse
        </h1>
        <p v-if="contenu.accueil.sousTitre" class="font-display font-semibold tracking-[3px] uppercase text-[0.8rem] sm:text-sm text-ink dark:text-cream mb-6">
          {{ contenu.accueil.sousTitre }}
        </p>

        <div class="eq flex items-end justify-center gap-1 h-7 mb-6" aria-hidden="true">
          <span v-for="n in 9" :key="n" class="eq-bar w-1 rounded-full bg-gold" :style="{ animationDelay: `${n * 0.12}s` }" />
        </div>

        <blockquote v-if="contenu.accueil.citation" class="max-w-xl mx-auto mb-8 text-ink dark:text-cream text-lg sm:text-xl italic leading-relaxed">
          « {{ contenu.accueil.citation }} »
          <footer v-if="contenu.accueil.reference" class="not-italic text-sm text-ink-dim dark:text-cream-dim mt-2 tracking-wide">{{ contenu.accueil.reference }}</footer>
        </blockquote>

        <div class="flex flex-wrap gap-3 justify-center mb-9">
          <a href="#a-propos" class="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-[0.95rem] tracking-wide transition hover:-translate-y-0.5">
            Découvrir la chorale
          </a>
          <a href="#contact" class="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-[0.95rem] tracking-wide border border-black/15 dark:border-white/15 text-ink dark:text-cream hover:border-gold hover:text-[#6f510f] dark:hover:text-gold-bright transition bg-white/40 dark:bg-white/[0.03] backdrop-blur-sm">
            Nous rejoindre
          </a>
        </div>

        <div class="rounded-[18px] border border-black/10 dark:border-white/10 backdrop-blur-md bg-white/70 dark:bg-white/[0.04] px-5 py-6 max-w-2xl mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
          <p v-if="contenu.repetitions.length" class="font-display text-[0.72rem] tracking-[3px] uppercase text-[#6f510f] dark:text-gold-bright mb-3">
            Nos répétitions
          </p>
          <ul v-if="contenu.repetitions.length" class="grid sm:grid-cols-3 gap-3 m-0 p-0 list-none mb-5">
            <li v-for="(r, i) in contenu.repetitions" :key="i" class="rounded-[10px] border border-black/10 dark:border-white/10 py-3 px-2">
              <span class="block font-display text-ink dark:text-cream tracking-wide">{{ r.jour }}</span>
              <span class="block text-sm text-ink dark:text-cream">{{ r.heure }}</span>
            </li>
          </ul>
          <p class="text-sm text-ink dark:text-cream mb-3">Suivez-nous pour ne rien manquer de nos prochains événements</p>
          <SocialLinks />
        </div>

        <p v-if="lastEvent" class="mt-6 text-sm text-ink-dim dark:text-cream-dim">
          Merci à tous ceux qui ont vécu avec nous
          <a href="#evenement" class="text-[#6f510f] dark:text-gold-bright underline underline-offset-4 decoration-gold/50 hover:decoration-gold">{{ lastEvent.title }}</a>.
        </p>
      </article>

    </div>
  </section>
</template>

<style scoped>
.ring { animation: spin 28s linear infinite; }
.halo { animation: breathe 4s ease-in-out infinite; }
.eq-bar { height: 6px; animation: eq 1.1s ease-in-out infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes breathe { 0%, 100% { opacity: .55; transform: scale(.95); } 50% { opacity: 1; transform: scale(1.05); } }
@keyframes eq { 0%, 100% { height: 6px; } 50% { height: 26px; } }
@media (prefers-reduced-motion: reduce) {
  .ring, .halo, .eq-bar { animation: none; }
  .eq-bar { height: 14px; }
}
</style>
