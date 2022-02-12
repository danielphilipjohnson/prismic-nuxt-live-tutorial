<template>
  <div>
    <header-prismic />
    <nuxt />
    
    <footer class="bg-purple-300 max-w-2xlmx-auto">
      <div class="grid grid-cols-4 gap-6 px-12 py-32">
        <div>
          <h3 class="mb-4 text-3xl font-bold">{{ menu1Heading }}</h3>
          <external-link :menu="menu1" menu-list-classes="py-2" />
        </div>
        <div>
          <h3 class="mb-4 text-3xl font-bold">{{ menu2Heading }}</h3>
          <external-link :menu="menu2" menu-list-classes="py-2" />
        </div>
        <div>
          <h3 class="mb-4 text-3xl font-bold">
            {{ menu3Heading }}
          </h3>
          <external-link :menu="menu3" menu-list-classes="py-2" />
        </div>
        <div>
          <img class="" :src="logo.url" :alt="logo.alt" />
          <h3 class="py-4 text-2xl font-semibold">Follow Us</h3>
          <social-icons :socialLinks="socials" socialListClasses="flex" />
        </div>
      </div>
    </footer>

    <div>
      <external-link
        :menu="bottomLinks"
        menu-classes="flex items-center justify-center py-8 bg-gray-300"
        menu-list-classes="px-4 font-semibold"
      />
    </div>
    
  </div>
</template>

<script>
import HeaderPrismic from "~/components/HeaderPrismic.vue";
import ExternalLink from "~/components/base/ExternalLink.vue";
import SocialIcons from "~/components/base/SocialIcons.vue";

export default {
  components: {
    HeaderPrismic,
    ExternalLink,
    SocialIcons,
  },
  data() {
    const { footer } = this.$store.state.footer;
    const {
      logo,
      menu1,
      menu1Heading,
      menu2Heading,
      menu2,
      menu3Heading,
      menu3,
      bottomLinks,
      socials,
    } = footer;

    return {
      logo,
      menu1,
      menu1Heading,
      menu2Heading,
      menu2,
      menu3Heading,
      menu3,
      bottomLinks,
      socials
    };
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