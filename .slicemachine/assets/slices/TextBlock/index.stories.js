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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_block","items":[],"primary":{"title":[{"type":"heading2","text":"Scale end-to-end users","spans":[]}],"subHeading":[{"type":"heading3","text":"Innovate ubiquitous paradigms","spans":[]}],"description":[{"type":"paragraph","text":"Ut nostrud nostrud minim ipsum ea labore aliqua voluptate. Ipsum pariatur minim ad sunt adipisicing qui qui sint enim esse laborum et do ipsum. Qui aute adipisicing elit quis labore veniam non quis magna in cillum laborum.","spans":[]}],"buttonText":"aggregate compelling convergence"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'