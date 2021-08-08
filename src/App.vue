<template>
  <div id="app" class="flex h-screen">
    <Page page_number="10"/>
  </div>
</template>

<script>
import Page from './components/Page.vue'

export default {
  name: 'App',
  components: {
    Page
  },
  data: () => {
      return {
          test: "lorem ipsum"
      }
  },
  methods: {
      find: (event) => {
          console.log(event);
      }
  }
}
</script>

<style>

</style>