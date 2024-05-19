<template>
  <base-card>
    <base-button @click="setSelectTab('StoredResources')" :mode="storedResButtonMode">Stored resources</base-button>
    <base-button @click="setSelectTab('AddResources')" :mode="addResButtonMode">Add resource</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>
<script>
import StoredResources from "@/components/learning-resources/StoredResources.vue";
import AddResources from "@/components/learning-resources/AddResources.vue";

export default {
  components: {StoredResources, AddResources},
  data() {
    return {
      selectedTab: 'StoredResources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official guide to Vue.js.',
          link: 'https://vuejs.org/v2/guide/',
        },
        {
          id: 'vue-cli',
          title: 'Vue CLI',
          description: 'Standard Tooling for Vue.js Development.',
          link: 'https://cli.vuejs.org/',
        },
        {
          id: 'vuex',
          title: 'Vuex',
          description: 'Centralized State Management for Vue.js.',
          link: 'https://vuex.vuejs.org/',
        },
        {
          id: 'vue-router',
          title: 'Vue Router',
          description: 'The official router for Vue.js.',
          link: 'https://router.vuejs.org/',
        }, ],
    };
  },
  provide() {
    return {
      storedResources: this.storedResources,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'StoredResources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'AddResources' ? null : 'flat';
    },
  },
  methods: {
    setSelectTab(tab) {
      this.selectedTab = tab;
    }
  }
}
</script>