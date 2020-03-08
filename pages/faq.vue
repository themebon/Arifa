<template>
  <div>
    <PageTitle title="FAQ" />
    <Faq />
    <Video />
  </div>
</template>

<script>
    import PageTitle from "~/components/PageTitle.vue";
    import Faq from "~/components/Faq.vue";
    import Video from "~/components/Video.vue";
    export default {
      components: {
        PageTitle,
        Faq,
        Video
      },
      head(){
        return {
          title: "Arifa | Faq"
        }
      }
    }
</script>

<style scoped>

</style>
