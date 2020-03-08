<template>
  <div>
    <Hero />
    <Services />
    <AboutUs />
    <Video />
    <Features />
    <Subscribe />
    <Faq />
    <Team />
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import Services from "~/components/Services.vue";
import AboutUs from "~/components/AboutUs.vue";
import Video from "~/components/Video.vue";
import Features from "~/components/Features.vue";
import Subscribe from "~/components/Subscribe.vue";
import Faq from "~/components/Faq.vue";
import Team from "~/components/Team.vue";

export default {
  components: {
    Hero,
    Services,
    AboutUs,
    Video,
    Features,
    Subscribe,
    Faq,
    Team
  }
};
</script>

<style>
</style>
