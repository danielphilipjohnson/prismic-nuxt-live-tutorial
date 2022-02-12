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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_block","items":[],"primary":{"title":[{"type":"heading2","text":"Whiteboard world-class eyeballs","spans":[]}],"subHeading":[{"type":"heading3","text":"Empower compelling architectures","spans":[]}],"description":[{"type":"paragraph","text":"Amet sunt eiusmod ad elit commodo tempor fugiat. Velit nisi dolore labore.","spans":[]}],"buttonText":"disintermediate granular action-items","buttonLink":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
