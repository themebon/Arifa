<template>
  <div>
    <PageTitle title="Services" />
    <Services />
    <Features />
  </div>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import Services from "~/components/Services.vue";
import Features from "~/components/Features.vue";
export default {
  components: {
    PageTitle,
    Services,
    Features
  },
  head(){
    return {
      title: "Arifa | Our Services"
    }
  }
};
</script>

<style scoped>
.about-us-area {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
