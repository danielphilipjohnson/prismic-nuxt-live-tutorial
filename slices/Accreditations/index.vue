<template>
  <section class="accreditation-block">
    <header-description-prismic
      :title="slice.primary.title"
      titleClasses="text-4xl font-bold leading-9"
      :description="slice.primary.subHeading"
      subHeadingClasses="text-2xl font-bold leading-8"
    />
    <div class="image-block">
      <template class="" v-for="(item, i) in slice.items">
        <prismic-image :field="item.logo" :key="`slice-item-${i}`" />
      </template>
    </div>
  </section>
</template>

<script>
import HeaderDescriptionPrismic from "~/components/base/HeaderDescriptionPrismic.vue";

export default {
  name: "Accreditations",
  components: {
    HeaderDescriptionPrismic,
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
.accreditation-block {
  @apply bg-gray-200 py-20;
}
.image-block {
  @apply grid grid-cols-4 max-w-7xl mx-auto;
}
</style>