<template>
  <header :class="containerClasses" class="mx-auto">
    <prismic-rich-text
      :field="title"
      :class="titleClasses"
      class="mb-4"
    />
    <prismic-rich-text
      :field="subHeading"
      :class="subHeadingClasses"
      class="mb-5"
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
    titleClasses:{
      type: String,
    },
    subHeadingClasses: {
      type: String,
    }
  },
};
</script>