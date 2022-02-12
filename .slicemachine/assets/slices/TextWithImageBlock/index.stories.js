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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_with_image_block","items":[],"primary":{"title":[{"type":"heading1","text":"Deliver integrated relationships","spans":[]}],"subHeading":[{"type":"paragraph","text":"Pariatur magna laboris sint sit velit ullamco.","spans":[]}],"description":[{"type":"paragraph","text":"Sint commodo cupidatat enim excepteur aliquip id in amet exercitation dolore est. Excepteur magna proident in consequat cupidatat eiusmod id velit ullamco id Lorem culpa fugiat elit cillum.","spans":[]}],"buttonText":"engage web-enabled web services","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"imageRight":true},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
