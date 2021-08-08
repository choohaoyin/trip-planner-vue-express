<template>
  <div class="result mt-2 h-3/4 overflow-scroll">
    <div v-if="$root.search_loading">
      <div class="h-6 w-4/5 mt-1 bg-gray-500 rounded-full animate-pulse"></div>
      <div class="h-6 w-2/5 mt-1 bg-gray-500 rounded-full animate-pulse"></div>
      <div class="h-6 w-3/6 mt-1 bg-gray-500 rounded-full animate-pulse"></div>
    </div>
    <table class="table-fixed w-full" v-if="$root.search_result != null">
      <tbody>
        <tr v-if="$root.search_result.length == 0">
          <td>No relevant location.</td>
        </tr>
        <tr
          v-for="(location, index) in $root.search_result"
          class="m-8 text-lg"
          v-bind:id="index"
          :key="index"
        >
          <td class="flex py-2">
            <div class="grid-rows-2 w-5/6">
              <div>
                {{ location.name }}
                <span
                  v-if="
                    $root.locations.start !== null
                      ? $root.locations.start.place_id == location.place_id
                      : false
                  "
                  class="
                    bg-indigo-500
                    text-white text-sm
                    p-1
                    rounded
                    whitespace-nowrap
                  "
                >
                  Start location
                </span>
                <span
                  v-if="
                    $root.locations.end !== null
                      ? $root.locations.end.place_id == location.place_id
                      : false
                  "
                  class="
                    bg-indigo-500
                    text-white text-sm
                    p-1
                    rounded
                    inline-block
                    whitespace-nowrap
                  "
                >
                  End location
                </span>
              </div>
              <DetailButton big />
            </div>
            <div @click="add" class="text-right w-1/6">
              <span
                class="
                  material-icons
                  p-1
                  bg-black
                  text-white
                  cursor-pointer
                  rounded-full
                  opacity-50
                  hover:opacity-100
                  duration-100
                "
                :class="
                  ($root.locations.start !== null
                    ? $root.locations.start.place_id == location.place_id
                    : false) ||
                  ($root.locations.end !== null
                    ? $root.locations.end.place_id == location.place_id
                    : false)
                    ? 'bg-purple-500'
                    : validateLocation(location.place_id)
                    ? 'bg-green-500'
                    : 'bg-black'
                "
                >{{
                  ($root.locations.start !== null
                    ? $root.locations.start.place_id == location.place_id
                    : false) ||
                  ($root.locations.end !== null
                    ? $root.locations.end.place_id == location.place_id
                    : false)
                    ? "flag"
                    : validateLocation(location.place_id)
                    ? "done"
                    : icon
                }}</span
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DetailButton from "./DetailButton.vue";

export default {
  name: "SearchResult",
  components: {
    DetailButton,
  },
  props: {
    icon: String,
  },
  methods: {
    add: function (event) {
      let target_id = event.target.closest("tr").id;
      console.log(target_id);
      this.$parent.add(target_id);
    },
    validateLocation: function (place_id) {
      return this.$root.locations.list
        .concat(this.$root.locations.start, this.$root.locations.end)
        .filter((i) => i != undefined)
        .map((j) => j.place_id)
        .includes(place_id);
    },
  },
};
</script>
