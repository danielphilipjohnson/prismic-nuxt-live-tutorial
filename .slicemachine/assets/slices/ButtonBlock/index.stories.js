import MyComponent from '../../../../slices/ButtonBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ButtonBlock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"button_block","items":[],"primary":{"callToActionText":"enable revolutionary content","callToActionLink":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
