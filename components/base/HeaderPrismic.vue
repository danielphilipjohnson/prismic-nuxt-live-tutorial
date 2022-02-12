<template>
  <header :class="containerClasses" class="pt-8 mx-auto">
    <prismic-rich-text
      :field="title"
      class="mb-4 text-4xl font-bold leading-9"
    />
    <prismic-rich-text
      :field="subHeading"
      class="mb-5 text-2xl font-medium leading-8"
    />
  </header>
</template>
<script>
export default {
  props: {
    title: {
      type: Array,
    },
    subHeading: {
      type: Array,
    },
    containerClasses: {
      type: String,
    },
  },
};
</script>