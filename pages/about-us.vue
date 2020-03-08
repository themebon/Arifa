<template>
  <div>
    <PageTitle title="About Us" />
    <FeaturesTwo />
    <AboutUs />
    <Video />
  </div>
</template>

<script>
import FeaturesTwo from "~/components/FeaturesTwo.vue";
import PageTitle from "~/components/PageTitle.vue";
import AboutUs from "~/components/AboutUs.vue";
import Video from "~/components/Video.vue";
export default {
  components: {
    PageTitle,
    FeaturesTwo,
    AboutUs,
    Video
  },
  head(){
    return {
      title: "Arifa | About Us"
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
