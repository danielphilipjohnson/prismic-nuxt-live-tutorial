import MyComponent from '../../../../slices/PriceTable';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PriceTable'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"price_table","items":[{"planTitle":[{"type":"paragraph","text":"Proident laborum anim sit.","spans":[]}],"priceOption":[{"type":"paragraph","text":"Pariatur irure adipisicing proident officia adipisicing in aute velit esse Lorem irure.","spans":[]}],"features":"synergize frictionless paradigms","callToAction":{"link_type":"Web","url":"https://prismic.io"},"callToActionText":"engage bricks-and-clicks solutions"},{"planTitle":[{"type":"paragraph","text":"Reprehenderit est ea nostrud. Dolore aute in aliqua aute laboris enim proident sunt reprehenderit duis aute.","spans":[]}],"priceOption":[{"type":"paragraph","text":"Aliqua ea reprehenderit ad aliqua ex fugiat non qui magna tempor eu. Pariatur ipsum nulla ex veniam et dolore veniam sit dolor deserunt esse velit laborum laboris aliqua. Velit ipsum enim enim sit anim nostrud sunt consectetur ex enim in tempor.","spans":[]}],"features":"unleash visionary technologies","callToAction":{"link_type":"Web","url":"http://google.com"},"callToActionText":"transform seamless experiences"},{"planTitle":[{"type":"paragraph","text":"Cupidatat enim consequat nisi consequat velit aute nulla velit anim est sint sunt consectetur laborum mollit.","spans":[]}],"priceOption":[{"type":"paragraph","text":"Do voluptate culpa laboris commodo officia in eu Lorem Lorem velit commodo tempor nostrud. Voluptate enim duis cillum id eiusmod aliquip pariatur magna eu in deserunt incididunt nisi sunt sint.","spans":[]}],"features":"deliver end-to-end blockchains","callToAction":{"link_type":"Web","url":"http://google.com"},"callToActionText":"reinvent customized mindshare"}],"primary":{"title":[{"type":"paragraph","text":"Minim anim anim dolor occaecat. Excepteur commodo ad minim non laboris exercitation. Mollit proident veniam et deserunt consequat consequat incididunt sint enim.","spans":[]}],"subHeading":[{"type":"paragraph","text":"Incididunt labore ad officia.","spans":[]}],"description":[{"type":"paragraph","text":"Mollit do deserunt ad culpa sit tempor ipsum irure occaecat dolor in irure in laboris.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
