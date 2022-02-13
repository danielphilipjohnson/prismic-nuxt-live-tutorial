<template>
  <section class="py-4 section">
    <prismic-image class="object-cover object-top w-full h-64 rounded-lg" :field="slice.primary.image" />
  </section>
</template>

<script>
export default {
  name: "ImageBlock",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

