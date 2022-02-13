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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"main_hero","items":[],"primary":{"title":[{"type":"heading1","text":"Unleash end-to-end solutions","spans":[]}],"subHeading":[{"type":"heading2","text":"Drive revolutionary models","spans":[]}],"description":[{"type":"paragraph","text":"Dolore id laborum sit ea deserunt. Voluptate ex eiusmod amet non aliqua fugiat quis eu commodo dolore quis aliquip ipsum ipsum sint.","spans":[]}],"cta":"architect end-to-end convergence","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
