<template>
  <section class="hero-block">
    <div>
      <HeaderPrismic
        :title="slice.primary.title"
        titleClasses="title mb-2"
        :subHeading="slice.primary.HeroBody"
        subHeadingClasses="text-3xl font-semibold"
      />

      <hr class="line" />

      <DescriptionPrismic
        :description="slice.primary.description"
        :buttonText="slice.primary.cta"
        :buttonLink="slice.primary.ctaLink"
        containerClasses="max-w-2xl text-xl"
      />
    </div>

    <div>
      <prismic-image class="rounded" :field="slice.primary.image" />
    </div>
  </section>
</template>

<script>
import HeaderPrismic from "~/components/base/HeaderPrismic.vue";
import DescriptionPrismic from "~/components/base/DescriptionPrismic.vue";

export default {
  name: "MainHero",
  components: {
    HeaderPrismic,
    DescriptionPrismic,
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

<style >
.hero-block {
  @apply py-16 grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-7xl;
}
.title {
  @apply text-4xl md:text-6xl font-bold;
}

.line {
  @apply border-b-2 border-purple-600 w-32 my-8;
}
</style>