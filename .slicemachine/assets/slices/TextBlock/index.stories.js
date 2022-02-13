import MyComponent from '../../../../slices/TextBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextBlock'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_block","items":[],"primary":{"title":[{"type":"heading2","text":"Reintermediate plug-and-play synergies","spans":[]}],"subHeading":[{"type":"heading3","text":"Incubate enterprise web-readiness","spans":[]}],"description":[{"type":"paragraph","text":"Veniam consequat ad sit consequat.","spans":[]}],"buttonText":"harness cross-platform blockchains","buttonLink":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
