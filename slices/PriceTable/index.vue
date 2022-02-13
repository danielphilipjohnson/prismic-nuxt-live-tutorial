<template>
  <section class="section">
    <HeaderPrismic
        :title="slice.primary.title"
        titleClasses="title mb-2"
        :subHeading="slice.primary.subHeading"
        subHeadingClasses="text-3xl font-semibold"
      />
    <prismic-rich-text :field="slice.primary.title" />

    <prismic-rich-text :field="slice.primary.description" />
    
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <prismic-rich-text :field="item.planTitle" />
      <prismic-rich-text :field="item.priceOption" />
      <span>{{ item.features }}</span>
      <prismic-link :field="item.callToAction">{{
        item.callToActionText
      }}</prismic-link>
    </div>
  </section>
</template>

<script>
import HeaderPrismic from "~/components/base/HeaderPrismic.vue";

export default {
  name: "PriceTable",
  components: {
    HeaderPrismic
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
.section {
  position: relative;
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>