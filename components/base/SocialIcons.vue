<template>
  <ul :class="socialListClasses">
    <li v-for="social in socialLinks" :key="social.url" class="mr-2">
      <template v-if="social.socialIcon == 'instagram'">
        <a
          class="block px-3 py-3 text-white bg-purple-500 rounded-full hover:bg-purple-800"
          :href="social.link.url"
          :aria-label="social.socialIcon"
        >
          <instagram-icon />
        </a>
      </template>
      <template v-if="social.socialIcon == 'facebook'">
        <a
          class="block px-3 py-3 text-white bg-blue-700 rounded-full hover:bg-blue-900"
          :href="social.link.url"
          :aria-label="social.socialIcon"
        >
          <facebook-icon />
        </a>
      </template>
      <template v-if="social.socialIcon == 'twitter'">
        <a
          class="block px-3 py-3 text-white bg-blue-400 rounded-full hover:bg-blue-800"
          :href="social.link.url"
          :aria-label="social.socialIcon"
        >
          <twitter-icon />
        </a>
      </template>
    </li>
  </ul>
</template>

<script>
import FacebookIcon from "~/components/icons/Facebook.vue";
import InstagramIcon from "~/components/icons/Instagram.vue";
import TwitterIcon from "~/components/icons/Twitter.vue";

export default {
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
  },
  props: {
    socialListClasses: {
      type: String,
    },
    socialLinks: { type: Array, required: true },
  },
};
</script>