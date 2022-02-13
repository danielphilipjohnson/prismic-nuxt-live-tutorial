import MyComponent from '../../../../slices/BlockText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BlockText'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"block_text","items":[{"content":[{"type":"paragraph","text":"Amet occaecat minim sit incididunt incididunt Lorem. Velit occaecat aute sunt eu amet consequat irure eiusmod fugiat exercitation sint.","spans":[]}]},{"content":[{"type":"paragraph","text":"Sunt ea nostrud aliqua occaecat.","spans":[]}]},{"content":[{"type":"paragraph","text":"Consectetur officia nisi et laborum magna ea tempor irure cupidatat laboris sint officia do esse aliquip. Mollit commodo deserunt Lorem mollit proident esse adipisicing ex aliqua in qui.","spans":[]}]},{"content":[{"type":"paragraph","text":"Aliqua dolor non dolore.","spans":[]}]},{"content":[{"type":"paragraph","text":"Proident mollit incididunt dolore cillum.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
