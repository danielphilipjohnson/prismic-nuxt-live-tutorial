import MyComponent from '../../../../slices/MySlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MySlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"my_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Brand next-generation technologies","spans":[]}],"description":[{"type":"paragraph","text":"Laborum elit qui adipisicing duis adipisicing aliqua sunt sunt mollit dolore ut occaecat ut nulla. Voluptate aliqua mollit fugiat proident veniam. Nulla cupidatat mollit eu amet in excepteur excepteur minim tempor proident excepteur pariatur.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
