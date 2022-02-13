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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"main_hero","items":[],"primary":{"title":[{"type":"heading1","text":"Incubate integrated communities","spans":[]}],"subHeading":[{"type":"heading2","text":"Evolve mission-critical communities","spans":[]}],"description":[{"type":"paragraph","text":"Id sunt esse culpa culpa sunt proident. Laborum tempor do id laboris ipsum enim Lorem duis exercitation consequat labore ut officia ullamco. Do est aliqua veniam elit non occaecat eu nulla ipsum Lorem qui.","spans":[]}],"cta":"utilize plug-and-play deliverables","ctaLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
