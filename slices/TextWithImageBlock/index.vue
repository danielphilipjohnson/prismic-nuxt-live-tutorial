<template>
  <section class="image-block">
    <template v-if="!slice.primary.imageRight">
      <div class="image-container">
        <prismic-image class="w-64" :field="slice.primary.image" />
      </div>

      <div class="text-container">
        <HeaderPrismic
          :title="slice.primary.title"
          :subHeading="slice.primary.subHeading"
          titleClasses="text-2xl font-bold"
        />

        <DescriptionPrismic
          :description="slice.primary.description"
          :buttonText="slice.primary.buttonText"
        />
      </div>
    </template>
    <template v-else>
      <div class="text-container">
        <HeaderPrismic
          :title="slice.primary.title"
          :subHeading="slice.primary.subHeading"
          titleClasses="text-4xl font-bold leading-9"
          subHeadingClasses="text-2xl font-medium leading-8"
        />

        <DescriptionPrismic
          :description="slice.primary.description"
          :buttonText="slice.primary.buttonText"
          :buttonLink="slice.primary.buttonLink"
        />
      </div>

       <div class="image-container">
        <prismic-image class="" :field="slice.primary.image" />
      </div>
    </template>
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
  name: "TextWithImageBlock",
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
.image-block {
  @apply grid grid-cols-1 md:grid-cols-3 container mx-auto max-w-7xl py-4;
}
.image-container {
  @apply pt-8 col-span-1 h-full;
}
.image-container img {
  @apply h-full object-cover mb-2;
}
.text-container {
  @apply col-span-2 ;
}
</style>