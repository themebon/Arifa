<template>
  <div>
    <PageTitle title="Blog Detail" />
    <BlogSingle />
  </div>
</template>

<script>
  import PageTitle from "~/components/PageTitle.vue";
  import BlogSingle from "~/components/BlogSingle.vue";
  export default {
    components: {
      PageTitle,
      BlogSingle
    },
    head(){
      return {
        title: "Arifa | Blog Detail"
      }
    }
  }
</script>

<style scoped>

</style>
