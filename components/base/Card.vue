<template>
  <div :class="formatColorClass(backgroundColor) + ' container flex flex-col items-center h-full text-white rounded p-9 transition-colors duration-700'">
    <div class="w-16 mb-4">
      <slot name="icon"></slot>
    </div>

    <slot></slot>
    
    <div class="p-2 text-black bg-white rounded-full">
      <slot name="link"></slot>
    </div>
  </div>
</template>

<script>
import {formatColorClass} from "~/utils/colorSelect.js";

export default {
    props: {
        backgroundColor:{
            type: String
        }
    },
    methods: {
      formatColorClass
    }
}
</script>