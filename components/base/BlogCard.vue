<template>
  <div>

    <img class="object-cover object-top w-full h-56" :src="imageUrl" alt="" />
   <a
      :href="'blogs/' + slug"
    >
    <h2 class="py-8 text-3xl font-bold leading-8 text-center">
      {{ title }}
    </h2>
    </a>
    <p class="mb-10 font-light text-center text-gray-800">
      {{ lastPublicationDate }}
    </p>

    <template v-for="tag in tags">
      <div class="flex justify-center w-full" :key="tag.id">
        <a
          class="flex w-full px-4 py-2 mb-8 bg-gray-200 rounded-full max-w-max"
          :href="'blogs/' + tag.name.slug"
        >
          {{ tag.name.slug }}
        </a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
    },
    title: {
      type: String,
    },
    lastPublicationDate: {
      type: String,
    },
    tags: {
      type: Array,
    },
    slug:{
      type: String,
    }
  },
};
</script>