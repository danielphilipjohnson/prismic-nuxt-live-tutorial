<template>
  <div>
    <header-prismic />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import HeaderPrismic from "~/components/HeaderPrismic.vue";
import TheFooter from "~/components/TheFooter.vue";

export default {
  components: {
    HeaderPrismic,
    TheFooter
  },
  data() {
   
  },
  head() {
    return {
      title: "Prismic Nuxt.js",
    };
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch("nav/fetchMenu", $prismic);
    await store.dispatch("footer/fetchFooter", $prismic);
  },
};
</script>