import MyComponent from '../../../../slices/ServiceCards';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ServiceCards'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"service_cards","items":[{"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"serviceTitle":"e-enable rich interfaces","serviceDescription":"reintermediate distributed platforms","callToActionText":"integrate mission-critical e-services","callToActionLink":{"link_type":"Web","url":"http://twitter.com"},"bgColor":"red"},{"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop"},"serviceTitle":"redefine scalable eyeballs","serviceDescription":"synthesize real-time eyeballs","callToActionText":"strategize customized action-items","callToActionLink":{"link_type":"Web","url":"http://google.com"},"bgColor":"blue"}],"primary":{"title":[{"type":"heading1","text":"Harness global architectures","spans":[]}],"subHeading":[{"type":"paragraph","text":"Fugiat minim ea laboris sint ut adipisicing.","spans":[]}],"description":[{"type":"paragraph","text":"Incididunt quis Lorem aute irure dolor consequat sint do cupidatat labore eiusmod exercitation. Ad eu fugiat quis deserunt velit pariatur consequat eiusmod officia.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
