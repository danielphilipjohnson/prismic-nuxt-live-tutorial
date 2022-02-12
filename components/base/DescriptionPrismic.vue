<template>
  <div :class="containerClasses" class="mx-auto ">
    <prismic-rich-text class="text-xl font-light leading-9 prose" :field="description" />
    <button class="p-4 text-white bg-purple-500 rounded">{{ buttonText }}</button>
  </div>
</template>
<script>
export default {
    props: {
    description: {
      type: Array,
    },
    buttonText: {
        type: String
    },
    containerClasses : {
      type: String
    }
  },
}
</script>

<style>
.prose p {
    margin-bottom: 1.25rem;
}
</style>