<template>
  <header class="flex items-center justify-between px-4 bg-purple-500">
    <div class="w-16 h-16 p-2">
      <img :src="logo.url" alt="logo.alt" />
    </div>
   
    <external-link
      :menu="menuLinks"
      menu-classes="flex"
      menu-list-classes="p-2 text-white"
    />
    <button class="px-4 py-2 text-pink-700 bg-white">
       {{ buttonText }}
    </button>
  </header>
</template>

<script>
import ExternalLink from "~/components/base/ExternalLink.vue";
export default {
  name: "header-prismic",
  components: {
    ExternalLink,
  },

  data() {
    
    const { logo, menuLinks, buttonText } = this.$store.state.nav.menu;

    return { logo, menuLinks, buttonText };
  },
};
</script>