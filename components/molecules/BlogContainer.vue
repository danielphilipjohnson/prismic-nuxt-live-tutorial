<template>
  <div class="grid mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
    <div class="mx-4 mb-8 rounded shadow-lg" v-for="blog in blogs" :key="blog.id">
      <blog-card
        
        :imageUrl="blog.data.featuredImage.url"
        :title="blog.data.title"
        :lastPublicationDate="blog.data.author.last_publication_date"
        :tags="blog.data.tags"
        :slug ="blog.uid"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from "~/components/base/BlogCard.vue";
export default {
    components: {
        BlogCard
    },
  props: {
    blogs: {
      type: Array,
    },
  },
};
</script>