<template>
  <div :class="containerClasses" class="mx-auto prose">
    <prismic-rich-text class="text-xl font-light leading-9 " :field="description" />
    <button-link :buttonLink="buttonLink" buttonText="buttonText"/> 

  </div>

</template>
<script>
import ButtonLink from './ButtonLink.vue'
export default {
  components: { ButtonLink },
    props: {
    description: {
      type: Array,
    },
    buttonText: {
        type: String
    },
    containerClasses : {
      type: String
    },
    buttonLink: {
      type: Array,
    }
  },
}
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