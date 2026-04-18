<script setup>
import SiteHeader from './components/SiteHeader.vue'
import Hero from './components/Hero.vue'
import EventSection from './components/EventSection.vue'
import AboutSection from './components/AboutSection.vue'
import GallerySection from './components/GallerySection.vue'
import JoinSection from './components/JoinSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <Hero />
    <EventSection />
    <AboutSection />
    <GallerySection />
    <JoinSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
