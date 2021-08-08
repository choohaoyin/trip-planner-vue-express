<template>
  <div
    id="page"
    :key="page_number"
    class="
      p-5
      w-screen
      h-screen
      md:w-144
      md:h-176
      md:m-auto
      bg-white
      rounded
      shadow
      flex flex-col
    "
  >
    <div class="mb-4">
      <ListButton position="relative float-right" />
    </div>
    <div class="mt-4 px-6">
      <Title title="Where do you start your journey?" />
      <SearchBar/>
      <SearchResult icon="outlined_flag"/>
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
import ListButton from "./ListButton.vue";
import SearchBar from "./SearchBar.vue";
import SearchResult from "./SearchResult.vue"

export default {
  name: "Page",
  components: {
    Title,
    ListButton,
    SearchBar,
    SearchResult
  },
  props: {
    page_number: String,
    addon: String
  },
  methods: {
      add: function (id) {
          console.log("Parent "+id)
          this.$root.locations.start = this.$root.search_result[id];
          console.log(this.$root.locations.start)
      }
  }
};
</script>


<style>
</style>