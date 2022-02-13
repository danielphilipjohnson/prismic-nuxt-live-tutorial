<template>
  <section class="container py-4 mx-auto font-light prose max-w-7xl md:prose-xl">
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <prismic-rich-text :field="item.content" />
    </div>
  </section>
</template>

<script>
export default {
  name: "BlockText",
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
