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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"services","items":[{"icons":"loading","title":"utilize strategic eyeballs","text":[{"type":"paragraph","text":"Velit proident non dolore anim aliqua exercitation. Consequat non aliqua ea excepteur excepteur anim.","spans":[]}],"iconColor":"green"},{"icons":"box","title":"empower turn-key users","text":[{"type":"paragraph","text":"Eiusmod magna nulla nostrud dolor aute ea quis consequat est ut consequat qui pariatur voluptate. Aute sit aute sit pariatur quis reprehenderit officia aute cillum sit aliquip adipisicing aute pariatur. Mollit ex duis incididunt.","spans":[]}],"iconColor":"purple"},{"icons":"box","title":"reintermediate rich web services","text":[{"type":"paragraph","text":"Nisi sit velit ullamco incididunt dolore est deserunt ea nostrud exercitation amet.","spans":[]}],"iconColor":"blue"},{"icons":"box","title":"architect transparent e-commerce","text":[{"type":"paragraph","text":"Non consequat aliquip magna id nisi commodo proident cupidatat dolore ullamco. Laboris voluptate duis anim Lorem non nostrud est.","spans":[]}],"iconColor":"purple"}],"primary":{"title":[{"type":"heading2","text":"Deliver global vortals","spans":[]}],"description":[{"type":"paragraph","text":"Laborum duis sit consequat cillum ut veniam velit et id amet ex. Ut nostrud velit ea culpa. Veniam id in officia consequat aute.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
