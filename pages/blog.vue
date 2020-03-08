<template>
  <div>
    <PageTitle title="Blog" />
    <Blog />
  </div>
</template>

<script>
  import PageTitle from "~/components/PageTitle.vue";
  import Blog from "~/components/Blog.vue";
  export default {
    components: {
      PageTitle,
      Blog
    },
    head(){
      return {
        title: "Arifa | Blog"
      }
    }
  }
</script>

<style scoped>

</style>
