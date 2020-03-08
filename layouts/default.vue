<template>
  <div class="light-version">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>


<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      title: "Arifa - Vue Nuxt IT Startup Template",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Arifa - Vue Nuxt IT Startup Template"
        }
      ]
    };
  },
  mounted() {
    // :: PreventDefault a Click
    $("a[href='#']").on("click", function($) {
      $.preventDefault();
    });
  }
};
</script>

<style>
</style>