<template>
  <ul :class="menuClasses">
    <li :class="menuListClasses" v-for="item in menu" :key="item.label">
      <a :href="item.link.url">
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    menu: {
      required: true,
      type: Array,
    },
    menuClasses: {
      type: String,
    },
    menuListClasses: {
      type: String,
    },
  },
};
</script>