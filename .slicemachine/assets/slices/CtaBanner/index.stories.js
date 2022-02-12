import MyComponent from '../../../../slices/CtaBanner';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CtaBanner'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"cta_banner","items":[],"primary":{"title":[{"type":"heading1","text":"Redefine bleeding-edge e-business","spans":[]}],"buttonLink":{"link_type":"Web","url":"http://twitter.com"},"buttonText":"morph plug-and-play ROI"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
