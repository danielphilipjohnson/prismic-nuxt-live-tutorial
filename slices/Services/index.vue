<template>
  <section class="grid lg:grid-cols-4">
    <HeaderPrismic
      :title="slice.primary.title"
      :description="slice.primary.description"
    />
   
    <Icons :items="slice.items" />
  </section>
</template>

<script>
import HeaderPrismic from "~/components/base/HeaderPrismic.vue";

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
