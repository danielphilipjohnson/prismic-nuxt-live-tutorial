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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_with_image_block","items":[],"primary":{"title":[{"type":"heading1","text":"Productize virtual web services","spans":[]}],"subHeading":[{"type":"paragraph","text":"Nostrud nulla sunt sint nulla magna pariatur consequat Lorem dolore ut minim ullamco non. Id eiusmod et irure non mollit voluptate.","spans":[]}],"description":[{"type":"paragraph","text":"Aliqua veniam incididunt commodo ea.","spans":[]}],"buttonText":"harness intuitive content","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"imageRight":true,"buttonLink":{"link_type":"Web","url":"https://slicemachine.dev"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
