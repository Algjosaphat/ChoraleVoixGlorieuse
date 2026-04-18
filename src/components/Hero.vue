<script setup>
import Countdown from './Countdown.vue'

const eventDate = new Date('2026-04-25T15:00:00')
</script>

<template>
  <section id="accueil" class="relative overflow-hidden bg-hero py-20 sm:py-24 md:py-28">
    <div class="relative max-w-6xl mx-auto px-6 text-center">
      <p class="font-display text-[0.78rem] tracking-[4px] uppercase text-gold mb-4">
        Chorale Voix Glorieuse · Temple Béthanie
      </p>
      <h1 class="font-display font-medium leading-[1.12] tracking-wide text-4xl sm:text-5xl md:text-6xl mb-5">
        <span class="block">Élever la voix,</span>
        <span class="block text-gradient-gold">glorifier le Seigneur.</span>
      </h1>
      <p class="text-cream-dim max-w-xl mx-auto mb-10 text-[1.05rem]">
        Prochainement, un moment de louange exceptionnel au Temple Béthanie.
      </p>

      <article
        class="text-center max-w-2xl mx-auto rounded-[18px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm px-6 sm:px-8 py-9"
        style="background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))"
      >
        <div class="mb-7">
          <span class="inline-block px-3.5 py-1.5 rounded-full bg-gold/10 text-gold-bright border border-gold/30 text-[0.72rem] font-semibold tracking-[2px] uppercase mb-4">
            Événement à venir
          </span>
          <h2 class="font-display font-bold text-2xl sm:text-3xl md:text-[2.4rem] mb-3">
            Dieu de louange — Acte 2
          </h2>
          <p class="text-cream-dim flex flex-wrap justify-center gap-2.5">
            <span>Samedi 25 avril 2026</span>
            <span class="text-gold" aria-hidden="true">·</span>
            <span>15h00</span>
            <span class="text-gold" aria-hidden="true">·</span>
            <span>Temple Béthanie</span>
          </p>
        </div>

        <Countdown :target="eventDate" />

        <div class="mt-6 flex flex-wrap gap-3 justify-center">
          <a
            class="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-[0.95rem] tracking-wide transition hover:-translate-y-0.5"
            href="#evenement"
          >
            En savoir plus
          </a>
          <a
            class="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-[0.95rem] tracking-wide border border-white/10 text-cream hover:border-gold hover:text-gold-bright transition"
            href="#contact"
          >
            Nous contacter
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
