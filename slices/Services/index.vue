<template>
  <section class="px-8">
    <header-description-prismic
      :title="slice.primary.title"
      titleClasses="text-4xl font-bold leading-9"
      :description="slice.primary.description"
      subHeadingClasses="text-2xl font-medium leading-8"
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
    HeaderDescriptionPrismic
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
