<template>
  <slice-zone type="page" uid="home" />
</template>

<script>
import SliceZone from 'vue-slicezone'

import {
 createSEOMeta 
} from '@/utils/createSEOMeta'

export default {
  components: {
    SliceZone
  },
  async asyncData({ $prismic, params, error }) {
    const homePage = (await $prismic.api.getByUID('page','home')).data

    if (homePage) {

      return { homePage }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
   head() {
    return {
      meta: [
        ...createSEOMeta({
          seoTitle: this.homePage.seoTitle,
          seoType: this.homePage.seoType,
          seoSiteName: this.homePage.seoSiteName,
          seoDescription: this.homePage.seoDescription,
          seoImage: "",
          seoUrl: `https://baseurl.com${this.$route.path}`,
          seoTwitterHandle: this.homePage.seoTwitterHandle,
          seoTwitterCardStyle: this.homePage.seoTwitterCardStyle,
        })
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://baseurl.com${this.$route.path}`
        }
      ]
    }
  }
}
</script>
