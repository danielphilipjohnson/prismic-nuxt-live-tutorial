<template>
  <section class="px-8">
    <HeaderPrismic
      :title="slice.primary.title"
      titleClasses="text-4xl font-bold leading-9"
      :subHeading="slice.primary.subHeading"
      containerClasses="max-w-2xl"
      subHeadingClasses="text-2xl font-medium leading-8"
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