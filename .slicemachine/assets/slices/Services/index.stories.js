import MyComponent from '../../../../slices/Services';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Services'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"services","items":[{"icons":"loading","title":"utilize compelling infomediaries","text":[{"type":"paragraph","text":"Id duis in non dolor enim dolor proident amet nisi occaecat ex nulla.","spans":[]}],"iconColor":"green"},{"icons":"search","title":"empower integrated relationships","text":[{"type":"paragraph","text":"Dolor mollit nulla irure commodo fugiat nostrud sint enim ullamco in velit velit. Laborum dolore nisi labore amet et reprehenderit et culpa deserunt esse sunt cillum culpa laboris.","spans":[]}],"iconColor":"red"},{"icons":"loading","title":"whiteboard ubiquitous technologies","text":[{"type":"paragraph","text":"Cillum eu qui aliqua sit officia nostrud incididunt ut. Ex quis adipisicing sint eu.","spans":[]}],"iconColor":"purple"},{"icons":"box","title":"innovate rich e-services","text":[{"type":"paragraph","text":"Nulla amet proident quis laboris elit qui aliquip duis labore in quis. Est Lorem aliquip velit.","spans":[]}],"iconColor":"red"}],"primary":{"title":[{"type":"heading2","text":"Harness transparent metrics","spans":[]}],"description":[{"type":"paragraph","text":"In minim ad ipsum esse. Eiusmod voluptate excepteur aliqua in pariatur.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
