<template>
  <section class="px-8">
    <HeaderPrismic
      :title="slice.primary.title"
      :subHeading="slice.primary.subHeading"
      containerClasses="max-w-2xl"
    />

    <DescriptionPrismic
      :description="slice.primary.description"
      :buttonText="slice.primary.buttonText"
      containerClasses="max-w-2xl"
    />

  
  </section>
</template>

<script>
import HeaderPrismic from "~/components/base/HeaderPrismic.vue";
import DescriptionPrismic from "~/components/base/DescriptionPrismic.vue";
export default {
  components: {
    HeaderPrismic,
    DescriptionPrismic,
  },
  name: "TextBlock",
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
</style>