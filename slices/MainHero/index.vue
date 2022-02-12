<template>
  <section class="section">
     <HeaderPrismic
          :title="slice.primary.title"
          :subHeading="slice.primary.subHeading"
        />

    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.description" />
  </section>
</template>

<script>
import HeaderPrismic from "~/components/base/HeaderPrismic.vue";
export default {
  name: "MainHero",
  components: {
    HeaderPrismic
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.section {
  position: relative;
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>