<template>
  <section class="">
    <header-description-prismic
      :title="slice.primary.title"
      :description="slice.primary.description"
    />
   
    <Icons :items="slice.items" />
  </section>
</template>

<script>
import HeaderPrismic from "~/components/base/HeaderDescriptionPrismic.vue";

import Icons from "~/components/base/Icons.vue";
export default {
  components: {
    Icons,
    HeaderPrismic
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
