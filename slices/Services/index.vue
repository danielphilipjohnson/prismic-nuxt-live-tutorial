<template>
  <section class="service-block">
    <header-description-prismic
      :title="slice.primary.title"
      containerClasses="text-4xl font-bold leading-9"
      :description="slice.primary.description"
      descriptionClasses="text-2xl font-light leading-8"
    />

    <Icons :items="slice.items" />
  </section>
</template>

<script>
import HeaderDescriptionPrismic from "~/components/base/HeaderDescriptionPrismic.vue";

import Icons from "~/components/base/Icons.vue";
export default {
  components: {
    Icons,
    HeaderDescriptionPrismic,
  },
  name: "Services",
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
.service-block {
  @apply max-w-7xl mx-auto container;
}
</style>