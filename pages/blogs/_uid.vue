<template>
  <section>
    <div class="container mx-auto max-w-7xl md:max-w-3xl">
      <h2 class="py-8 text-5xl font-bold tracking-tight text-center">
        {{ document.data.title }}
      </h2>

      <p class="mb-10 font-light text-center text-gray-800">
        Published On: {{ document.last_publication_date }}
      </p>

      <template v-for="tag in document.data.tags">
        <div class="flex justify-center w-full" :key="tag.id">
          <a
            class="flex w-full px-4 py-2 mb-8 bg-gray-200 rounded-full max-w-max"
            :href="'blogs/' + tag.name.slug"
          >
            {{ tag.name.slug }}
          </a>
        </div>
      </template>

      <img
        class="object-cover object-top w-full h-56 mb-8 rounded"
        :src="document.data.featuredImage.url"
        :alt="document.data.featuredImage.alt"
      />
    </div>

    <slice-zone type="blog" :uid="$route.params.uid" />
  </section>
</template>

<script>
import SliceZone from "vue-slicezone";
export default {
  components: {
    SliceZone,
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID("blog", params.uid);

    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>