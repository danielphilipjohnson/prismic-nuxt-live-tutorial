<template>
  <header class="max-w-2xl pt-8 mx-auto">
    <prismic-rich-text
      :field="title"
      class="mb-4 text-xl font-bold text-center text-purple-500 lg:text-2xl "
    />
    <prismic-rich-text
      :field="description"
      class="text-2xl font-light text-center md:text-3xl mb-14"
    />
  </header>
</template>
<script>
export default {
    props: {
        title: {
            type: Array
        },
        description: {
            type: Array
        }
    }
}
</script>