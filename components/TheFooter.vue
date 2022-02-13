<template>
  <footer class="bg-purple-300 ">
    <div class="container grid gap-6 px-12 py-32 mx-auto lg:grid-cols-4">
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
        <h2 class="mb-4 text-2xl font-bold">Company Name</h2>
        <img class="object-cover w-16 h-16" :src="logo.url" :alt="logo.alt" />
        <h3 class="py-4 text-2xl font-semibold">Follow Us</h3>
        <social-icons :socialLinks="socials" socialListClasses="flex" />
      </div>
    </div>

    <div>
      <external-link
        :menu="bottomLinks"
        menu-classes="flex items-center justify-center py-8 bg-gray-300"
        menu-list-classes="px-4 font-semibold"
      />
    </div>
  </footer>
</template>
<script>
import ExternalLink from "~/components/base/ExternalLink.vue";
import SocialIcons from "~/components/base/SocialIcons.vue";

export default {
  components: {
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
      socials,
    };
  },
  setup() {},
};
</script>