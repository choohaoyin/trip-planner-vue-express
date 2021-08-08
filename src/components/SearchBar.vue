<template>
  <div
    class="
      flex
      group
      border-b
      focus-within:border-black
      w-full
      my-2
      py-2
      duration-100
    "
  >
    <input
      v-model="query"
      @keyup.enter="find"
      class="w-full outline-none text-gray-500 focus:text-gray-900 duration-100"
      type="text"
      placeholder="Type location here..."
    />
    <span
      class="
        material-icons
        cursor-pointer
        text-gray-400
        hover:text-gray-900
        duration-100
        transform
        scale-125
        select-none
      "
      v-on:click="find"
    >
      search
    </span>
  </div>
</template>


<script>
export default {
  name: "SearchBar",
  data() {
    return {
      query: null,
    };
  },
  methods: {
    find: function () {
        console.log(this.query);
        this.$root.search_loading = true;
      fetch(`http://localhost:8081/search?name=${this.query}`)
        .then((r) => r.json())
        .then((res) => {
          console.log(res);
          this.$root.search_loading = false;
          this.$root.search_result = res.result;
        });
    },
  },
};
</script>