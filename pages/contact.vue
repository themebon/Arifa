<template>
  <div>
    <PageTitle title="Contact Us" />
    <Contact />
  </div>
</template>

<script>
  import PageTitle from "~/components/PageTitle.vue";
  import Contact from "~/components/Contact.vue";
    export default {
      components: {
        PageTitle,
        Contact
      },
      head(){
        return {
          title: "Arifa | Contact Us"
        }
      }
    }
</script>

<style scoped>

</style>
