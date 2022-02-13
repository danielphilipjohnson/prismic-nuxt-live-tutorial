<template>
  <prismic-link
  :class="buttonClasses"
    class="block p-4 text-white bg-purple-500 rounded max-w-max"
    :field="buttonLink"
    >{{ buttonText }}</prismic-link
  >
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
    },
    buttonLink: {
      type: Object,
    },
    buttonClasses: {
      type: String,
    },
  },
};
</script>