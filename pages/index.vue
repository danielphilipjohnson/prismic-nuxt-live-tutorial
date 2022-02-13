<template>
  <main>
    <slice-zone type="page" uid="home" />

    <blog-container :blogs="blogs" />
      
  </main>
</template>

<script>
import SliceZone from "vue-slicezone";
import usePrismicGetPostType from "~/composables/usePrismicGetPostType";
import BlogContainer from "~/components/molecules/BlogContainer.vue";
// import {
//  createSEOMeta
// } from '@/utils/createSEOMeta'

export default {
  components: {
    SliceZone,
    BlogContainer
  },
  async asyncData({ $prismic, params, error }) {
    const homePage = (await $prismic.api.getByUID("page", "home")).data;

    const blogs = await usePrismicGetPostType({
      typeName: "blog",
      $prismic,
    });

    if (homePage) {
      return { homePage, blogs };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  //  head() {
  //   return {
  //     meta: [
  //       ...createSEOMeta({
  //         seoTitle: this.homePage.seoTitle,
  //         seoType: this.homePage.seoType,
  //         seoSiteName: this.homePage.seoSiteName,
  //         seoDescription: this.homePage.seoDescription,
  //         seoImage: "",
  //         seoUrl: `https://baseurl.com${this.$route.path}`,
  //         seoTwitterHandle: this.homePage.seoTwitterHandle,
  //         seoTwitterCardStyle: this.homePage.seoTwitterCardStyle,
  //       })
  //     ],
  //     link: [
  //       {
  //         hid: 'canonical',
  //         rel: 'canonical',
  //         href: `https://baseurl.com${this.$route.path}`
  //       }
  //     ]
  //   }
  // }
};
</script>
