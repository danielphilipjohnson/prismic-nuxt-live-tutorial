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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_block","items":[],"primary":{"title":[{"type":"heading2","text":"Revolutionize killer mindshare","spans":[]}],"subHeading":[{"type":"heading3","text":"Productize leading-edge mindshare","spans":[]}],"description":[{"type":"paragraph","text":"Ad ea eu eiusmod qui. Ullamco consectetur exercitation Lorem ad nisi.","spans":[]}],"buttonText":"mesh strategic bandwidth","buttonLink":{"link_type":"Web","url":"https://slicemachine.dev"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
