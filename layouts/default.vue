<template>
  <div>
    <the-nav/>
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheNav from "~/components/TheNav.vue";
import TheFooter from "~/components/TheFooter.vue";

export default {
  components: {
    TheNav,
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