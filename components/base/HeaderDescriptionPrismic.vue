<template>
  <header :class="containerClasses + ' pt-8 mx-auto'">
    <prismic-rich-text
      :field="title"
      class="mb-4 text-xl font-bold text-center text-purple-500 lg:text-2xl "
    />
    <prismic-rich-text
      :field="description"
      :class="descriptionClasses + ' text-2xl text-center md:text-3xl mb-14'"
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
        },
        containerClasses:{
          type: String
        },
        descriptionClasses:{
          type: String
        }
    }
}
</script>