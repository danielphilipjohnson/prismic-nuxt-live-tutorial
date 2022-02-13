<template>
  <div class="container mx-auto mb-8 max-w-7xl">
    <ButtonLink
      :buttonText="slice.primary.callToActionText"
      :buttonLink="slice.primary.callToActionLink"
      buttonClasses=""
    />
  </div>
</template>

<script>
import ButtonLink from "~/components/base/ButtonLink.vue";
export default {
  components: {
    ButtonLink,
  },
  name: "ButtonBlock",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
};
</script>
