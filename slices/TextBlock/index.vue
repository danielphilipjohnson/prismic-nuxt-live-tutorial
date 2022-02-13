<template>
  <section class="py-4 text-block">
    <HeaderPrismic
      :title="slice.primary.title"
      titleClasses="text-4xl font-bold leading-9"
      :subHeading="slice.primary.subHeading"
      containerClasses=""
      subHeadingClasses="text-2xl font-medium leading-8"
    />

    <DescriptionPrismic
      :description="slice.primary.description"
      :buttonText="slice.primary.buttonText"
      :buttonLink="slice.primary.buttonLink"
      containerClasses=""
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
.text-block {
  @apply container mx-auto max-w-7xl;
}
</style>