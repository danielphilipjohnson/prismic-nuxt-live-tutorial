import MyComponent from '../../../../slices/TextWithImageBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextWithImageBlock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_with_image_block","items":[],"primary":{"title":[{"type":"heading1","text":"Enable mission-critical architectures","spans":[]}],"subHeading":[{"type":"paragraph","text":"Dolor laborum proident proident dolore minim laborum laborum laboris.","spans":[]}],"description":[{"type":"paragraph","text":"Occaecat in fugiat id adipisicing ex culpa id amet nostrud. Ad dolor minim cupidatat eiusmod.","spans":[]}],"buttonText":"engineer best-of-breed communities","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"},"imageRight":true,"buttonLink":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
