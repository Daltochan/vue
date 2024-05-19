<template>
  <ul>
    <learning-resources
        v-for="res in storedResources"
        :key="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link">
    </learning-resources>
  </ul>
</template>
<script>

import LearningResources from "@/components/learning-resources/LearningResources.vue";

export default {
  components: {LearningResources},
  props: ['storedResources'],
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>