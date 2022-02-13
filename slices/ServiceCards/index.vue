<template>
  <section class="container py-4 mx-auto max-w-7xl">
    <header-description-prismic
      :title="slice.primary.title"
      containerClasses="text-4xl font-bold leading-9"
      :description="slice.primary.description"
      descriptionClasses="text-xl font-light leading-8"
    />

    <div class="card-container">
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
        <Card :backgroundColor="item.bgColor">
          <template #icon>
            <prismic-image :field="item.icon" />
          </template>

          <template #default>
            <h3 class="mb-5 text-3xl">{{ item.serviceTitle }}</h3>
            <div class="mb-4 text-xl text-center">
              {{ item.serviceDescription }}
            </div>
          </template>

          <template #link>
            <prismic-link :field="item.callToActionLink">
              {{ item.callToActionText }}
            </prismic-link>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderDescriptionPrismic from "~/components/base/HeaderDescriptionPrismic.vue";
import Card from "~/components/base/Card.vue";
export default {
  name: "ServiceCards",
  components: {
    HeaderDescriptionPrismic,
    Card,
  },
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

<style scoped>
.card-container {
  @apply container grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 py-16 max-w-7xl;
}

</style>