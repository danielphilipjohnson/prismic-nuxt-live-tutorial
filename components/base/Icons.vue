
  <template>
  <div class="max-w-2xl mx-auto">
    <div class="flex flex-col items-center mb-16 md:flex-row lg:items-start items-ends" v-for="(item, i) in items" :key="`slice-item-${i}`">
      <div>
        <template v-if="item.icons == 'award'">
          <div :class="formatColorClass(item.iconColor) + ' bg-purple-500 flex items-center justify-center rounded-full mr-4 text-white w-16 h-16'">
            <AwardIcon /> 
          </div>
        </template>
        <template v-if="item.icons == 'box'">
          <div :class="formatColorClass(item.iconColor) + ' bg-purple-500 flex items-center justify-center rounded-full mr-4 text-white w-16 h-16'">
            <BoxIcon  />
          </div>
        </template>
        <template v-if="item.icons == 'loading'">
          <div :class="formatColorClass(item.iconColor) + ' bg-purple-500 flex items-center justify-center rounded-full mr-4 text-white w-16 h-16'">
            <LoadingIcon />
          </div>
        </template>
        <template v-if="item.icons == 'search'">
          <div :class="formatColorClass(item.iconColor) + ' bg-purple-500 flex items-center justify-center rounded-full mr-4 text-white w-16 h-16'">
            <SearchIcon />
          </div>
        </template>
      </div>

      <div class="pt-4 text-center md:text-left">
        <h3 class="mb-4 text-2xl leading-7 capitalize">{{ item.title }}</h3>
        <prismic-rich-text class="text-gray-800" :field="item.text" />
      </div>
    </div>
  </div>
</template>


<script>
import AwardIcon from "~/components/icons/Award.vue";
import BoxIcon from "~/components/icons/Box.vue";
import LoadingIcon from "~/components/icons/Loading.vue";
import SearchIcon from "~/components/icons/Search.vue";

export default {
  components: {
    AwardIcon,
    BoxIcon,
    LoadingIcon,
    SearchIcon,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatColorClass: function (color) {
      switch (color) {
        case "blue":
          return "bg-blue-500";
        case "purple":
          return "bg-purple-500";
        case "green":
          return "bg-green-500";
        case "red":
          return "bg-red-500";
        default:
          return "bg-blue-500";
      }
    },
  },
};
</script>