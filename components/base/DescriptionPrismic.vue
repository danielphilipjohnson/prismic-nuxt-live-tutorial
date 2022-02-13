<template>
  <div :class="containerClasses" class="mx-auto">
    <prismic-rich-text
      class="mb-8 text-xl font-light leading-9"
      :field="description"
    />
    <template v-if="buttonText">
      <button-link :buttonLink="buttonLink" :buttonText="buttonText" />
    </template>
  </div>
</template>
<script>
import ButtonLink from "./ButtonLink.vue";
export default {
  components: { ButtonLink },
  props: {
    description: {
      type: Array,
    },
    buttonText: {
      type: String,
    },
    containerClasses: {
      type: String,
    },
    buttonLink: {
      type: Object,
    },
  },
};
</script>

<style>
.prose p {
  margin-bottom: 2.25rem;
}
.prose a {
  @apply text-xs md:text-base block max-w-max;
  margin-bottom: 2.5rem;
  word-break: break-word;
}
</style>