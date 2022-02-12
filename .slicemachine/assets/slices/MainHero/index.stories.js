import MyComponent from '../../../../slices/MainHero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MainHero'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"main_hero","items":[],"primary":{"title":[{"type":"heading1","text":"Reinvent clicks-and-mortar applications","spans":[]}],"subHeading":[{"type":"heading2","text":"Orchestrate B2B schemas","spans":[]}],"description":[{"type":"paragraph","text":"In commodo occaecat consequat ipsum nisi irure velit velit ut ex culpa excepteur consectetur quis sunt. Ex consectetur proident sint pariatur sit adipisicing minim tempor pariatur. Ullamco culpa amet incididunt aliqua.","spans":[]}],"cta":"whiteboard world-class paradigms","ctaLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
