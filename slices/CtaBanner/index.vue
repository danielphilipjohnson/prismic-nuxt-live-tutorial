<template>
  <section class="cta-banner">
    <prismic-rich-text
      :field="slice.primary.title"
      class="mb-4 text-xl font-bold text-center md:text-3xl"
    />
    <button-link
      :buttonLink="slice.primary.buttonLink"
      :buttonText="slice.primary.buttonText"
      buttonClasses="mx-auto"
    />
  </section>
</template>

<script>
import ButtonLink from "~/components/base/ButtonLink.vue";

export default {
  name: "CtaBanner",
  components: {
    ButtonLink,
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.cta-banner {
  @apply bg-gray-300 rounded-xl max-w-4xl my-4 py-16 container mx-auto;
}
</style>