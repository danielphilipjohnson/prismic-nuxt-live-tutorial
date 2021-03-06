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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"services","items":[{"icons":"loading","title":"enhance turn-key bandwidth","text":[{"type":"paragraph","text":"Anim enim cupidatat voluptate Lorem nostrud ad commodo nulla excepteur.","spans":[]}],"iconColor":"green"},{"icons":"loading","title":"orchestrate value-added schemas","text":[{"type":"paragraph","text":"Eiusmod laboris ullamco occaecat ad proident ea veniam tempor pariatur sit sint deserunt. Duis commodo deserunt eu.","spans":[]}],"iconColor":"red"},{"icons":"loading","title":"recontextualize ubiquitous relationships","text":[{"type":"paragraph","text":"Aliqua elit mollit sunt nostrud proident nisi qui adipisicing occaecat magna proident minim fugiat aute.","spans":[]}],"iconColor":"blue"},{"icons":"loading","title":"redefine 24/7 synergies","text":[{"type":"paragraph","text":"Dolore nisi minim non tempor consectetur nisi dolore incididunt.","spans":[]}],"iconColor":"purple"}],"primary":{"title":[{"type":"heading2","text":"Benchmark rich infomediaries","spans":[]}],"description":[{"type":"paragraph","text":"Ea culpa consectetur magna nisi ea excepteur Lorem deserunt ea nulla tempor ad. In sint in ipsum sint id enim officia.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
