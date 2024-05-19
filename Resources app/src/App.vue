<template>
  <the-header title="Remember Me"></the-header>
  <stored-resources :stored-resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from "@/components/learning-resources/StoredResources.vue";
import TheHeader from "@/components/layouts/TheHeader.vue";


export default {
  components: {
    StoredResources,
    TheHeader,
  },
  data() {
    return {
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
        },
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>